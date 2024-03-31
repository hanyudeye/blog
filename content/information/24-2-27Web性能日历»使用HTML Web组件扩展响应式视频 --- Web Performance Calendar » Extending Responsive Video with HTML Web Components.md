---
layout: default
toc: false
title: 使用HTML Web组件扩展响应式视频 
date:  2024-02-27T18:57:35+08:00
categories: ['']
---


Responsive HTML video is a web standard again, and with recent patches to Firefox ([_oh hey!_](https://phabricator.services.mozilla.com/D189416)) and Chrome that match Safari’s preexisting support, it now works across all modern browsers! That means you can use media queries for delivering your videos and potentially save your users some precious bytes.  
响应式HTML视频再次成为网络标准，最近Firefox的补丁（哦，嘿！）和Chrome，符合Safari的预先存在的支持，它现在工作在所有现代浏览器！这意味着您可以使用媒体查询来交付视频，并可能为用户节省保存一些宝贵的字节。

As I’ve noted in [prior](https://scottjehl.com/posts/using-responsive-video/) [articles](https://scottjehl.com/posts/responsive-video/), this is great news for web performance fans, as video is by far the heaviest type of media used on websites (the median weight of just the video files on pages that use video [is **almost 5 megabytes per page** on mobile devices](https://httparchive.org/reports/page-weight#bytesVideo)), and that weight has a huge impact on performance, users’ data costs, sites’ hosting costs, and overall energy usage. Using an HTML video element to display a static video file is one of the most common and portable ways to drop a video into a webpage today, so it’s great we now have options to do it more responsibly.  
正如我在之前的文章中所指出的，这对Web性能粉丝来说是个好消息，因为视频是目前为止网站上使用的最重的媒体类型（仅使用视频的页面上的视频文件的平均重量在移动的设备上几乎是每页5 MB），并且该重量对性能，用户的数据成本，网站的托管成本和整体能源使用有巨大的影响。使用HTML视频元素来显示静态视频文件是当今将视频放入网页的最常见和最便携的方法之一，所以我们现在可以更负责任地选择这样做。

If you haven’t yet caught up on how responsive video works, I’d recommend reading [How to Use Responsive Video (…and Audio!)](https://scottjehl.com/posts/using-responsive-video/) first as a primer, because it’s loaded with examples of how to use it and also when to consider alternatives, like HTTP Live Streaming.  
如果你还没有了解响应式视频是如何工作的，我建议你阅读如何使用响应式视频（.和音频！）首先作为入门，因为它加载了如何使用它的示例，以及何时考虑替代方案，如HTTP Live Streaming。

## What You’ll Learn Today…  
今天你会学到什么…

In this post, I’m going to talk briefly about responsive video, but most of the post will be about using HTML web components to extend native video behavior in very helpful ways. But even if you’re not particularly interested in video development, stick around as I’ll demonstrate how to build an HTML Web Component to progressively enhance anything you need.  
在这篇文章中，我将简要地讨论响应式视频，但大部分内容都是关于使用HTML Web组件以非常有用的方式扩展原生视频行为。但是，即使您对视频开发不是特别感兴趣，也可以继续阅读，因为我将演示如何构建HTML Web组件来逐步增强您所需要的任何内容。

## How Responsive Video Works (_…and doesn’t_)  
响应式视频如何工作（......和不工作）

To start, let’s recap what responsive video _is_. I’ll start with some example HTML and then explain what we’re looking at…  
首先，让我们回顾一下什么是响应式视频。我将从一些示例HTML开始，然后解释我们正在看的内容。

```
<span>&lt;video&gt;</span><span>
  </span><span>&lt;source</span><span> </span><span>src</span><span>=</span><span>"/sandbox/video-media/small.mp4"</span><span> </span><span>media</span><span>=</span><span>"(max-width: 599px)"</span><span>&gt;</span><span>
  </span><span>&lt;source</span><span> </span><span>src</span><span>=</span><span>"/sandbox/video-media/large.mp4"</span><span>&gt;</span><span>
</span><span>&lt;/video&gt;</span>
```

That’s a basic responsive video element. It’s responsive because one of the `source` elements has a `media` attribute on it that includes a media query, making its source selection conditional to the browser’s viewport size. If you’ve used the `picture` element before, that `media` attribute is going to look familiar, because `picture` **was actually designed** based on how this works in HTML `video` (_back when responsive video was supported the first time around, which is a long story_).  
这是一个基本的响应式视频元素。它是响应式的，因为其中一个 `source` 元素上有一个包含媒体查询的 `media` 属性，使其源选择取决于浏览器的视口大小。如果你以前使用过 `picture` 元素，那么 `media` 属性看起来会很熟悉，因为 `picture` 实际上是基于HTML `video` 中的工作原理设计的（回到第一次支持响应式视频的时候，这是一个很长的故事）。

Here’s that `video` element live in the page. The latest versions of common browsers will see a video that says “small video source” at small viewport sizes and a video that says “large video source” at wider viewport sizes. Unsupporting, older browsers will simply select the first source suitable they find (small.mp4 in this case) because those browsers ignore the media attribute and pick the first source that matches, ignoring any that come after it.  
这是页面中的 `video` 元素。最新版本的普通浏览器将看到一个视频，说“小视频源”在小视口大小和一个视频，说“大视频源”在更宽的视口大小。不支持，旧的浏览器将简单地选择他们找到的第一个合适的源（在这种情况下是small.mp4），因为这些浏览器忽略了媒体属性，并选择匹配的第一个源，忽略它之后的任何源。

So that’s the basics of how a responsive video element works.  
这就是响应式视频元素的基本工作原理。

### How It Doesn’t Work  
如何不工作

One thing that folks (me included!) tend to find surprising about responsive video is that unlike other “responsive” features in web design–CSS Media Queries or the `picture` element for example–responsive video sources are only assessed once, when the video (and typically the entire page) first loads.  
有一件事是人们（包括我在内！）关于响应式视频，一个令人惊讶的发现是，与网页设计中的其他“响应式”功能（例如CSS媒体播放器或 `picture` 元素）不同，响应式视频源仅在视频（通常是整个页面）首次加载时评估一次。

That means that while you’ll still enjoy the performance benefits of an appropriately selected source at page load, it won’t be reassessed _after_ page load when media conditions change (when, for example, when the user resizes their browser window). It’s entirely possible that could change one day, but there are a number of reasons this behavior was not included in the initial implementation, such as complications involved in syncing up the timecode after a source is swapped, as well as the reasonable goal of matching the behavior of the existing implementation in Safari.  
这意味着，虽然您仍然可以在页面加载时享受适当选择的源的性能优势，但在页面加载后，当媒体条件发生变化时（例如，当用户调整浏览器窗口大小时），它不会重新评估。这完全有可能在某一天发生变化，但是有很多原因导致这种行为没有包括在最初的实现中，例如在交换源代码后同步时间码所涉及的复杂性，以及匹配Safari中现有实现的行为的合理目标。

Regardless of all that, folks are right to find this part of the feature a little… unexpected.  
不管这一切，人们是正确的发现这一部分的功能有点.意外。

Which got me thinking, what would it take to make that behavior work on top of what we already have in browsers today?  
这让我想到，在我们今天已经拥有的浏览器之上，需要什么才能让这种行为发挥作用？

Let’s find out. 让我们来看看。

## Extending Video with an HTML Web Component  
使用HTML Web组件扩展视频

Web Components are having a moment right now, and particularly, “HTML Web Components”, which is a term being used to describe web components that add behavior to regular old HTML by wrapping it in a custom element and applying a little JavaScript to enhance that markup further.  
Web组件现在有一个时刻，特别是“HTML Web组件”，这是一个术语，用于描述通过将其包装在自定义元素中并应用一点JavaScript来进一步增强标记的方式向常规旧HTML添加行为的Web组件。

An HTML Web Component is an ideal tool for extending the functionality of standard HTML, like say, a video element for example! I’m going to walk through how I built one that’ll make responsive video _even responsiver_, so it reacts to media changes after page load, should they occur.  
HTML Web组件是扩展标准HTML功能的理想工具，例如，视频元素！我将介绍我如何构建一个可以使响应式视频更加响应的视频，以便在页面加载后对媒体更改做出反应。

### First, a Custom Element  
第一，自定义元素

To start, we will need a custom element, which is just an HTML element that you invent that has at least one dash in its name. I’ll go with `responsive-video`, like this:  
首先，我们需要一个自定义元素，它只是一个您创建的HTML元素，其名称中至少有一个破折号。我会用 `responsive-video` ，像这样：

```
<span>&lt;responsive-video&gt;&lt;/responsive-video&gt;</span>
```

Nice. So that’s a custom element, and with a little added JavaScript it could become a web component. But in order to make it an “HTML Web Component,” we’ll want to wrap that component around some HTML that is already meaningful and functional on its own, such as our `video` element above.  
不错啊所以这是一个自定义元素，加上一点JavaScript，它就可以成为一个Web组件。但是为了使它成为一个“HTML Web组件”，我们需要将该组件包装在一些已经有意义和功能的HTML上，例如上面的 `video` 元素。

Here’s that `video` element wrapped in a `responsive-video` custom element.  
下面是包装在 `responsive-video` 自定义元素中的 `video` 元素。

```
<span>&lt;responsive-video&gt;</span><span>
  </span><span>&lt;video</span><span> </span><span>controls</span><span> </span><span>autoplay</span><span> </span><span>loop</span><span>&gt;</span><span>
    </span><span>&lt;source</span><span> </span><span>src</span><span>=</span><span>"/sandbox/video-media/small.mp4"</span><span> </span><span>media</span><span>=</span><span>"(max-width: 599px)"</span><span>&gt;</span><span>
    </span><span>&lt;source</span><span> </span><span>src</span><span>=</span><span>"/sandbox/video-media/large.mp4"</span><span>&gt;</span><span>
  </span><span>&lt;/video&gt;</span><span>
</span><span>&lt;/responsive-video&gt;</span>
```

That’s about it for the HTML part of this article. Based on what I’ve done so far, browsers will just ignore that custom element, (_though you can style it with CSS already if you want to_).  
这就是本文HTML部分的内容。根据我到目前为止所做的，浏览器将忽略该自定义元素，（尽管如果你想的话，你已经可以用CSS来设计它了）。

To get browsers to recognize this as an element with its own unique properties and behavior, you’ll need to write a web component in JavaScript. Let’s do that.  
要让浏览器将其识别为具有自己独特属性和行为的元素，您需要用JavaScript编写一个Web组件。那就这么办吧

### Adding the JavaScript 添加JavaScript

To enhance this HTML, we’ll create and load a JavaScript module that will contain our web component code. That code will live in a new file called `responsivevideo.js`.  
为了增强这个HTML，我们将创建并加载一个包含Web组件代码的JavaScript模块。该代码将存在于名为 `responsivevideo.js` 的新文件中。

Please note the last line of the code below to see how we can import that script into our page:  
请注意下面代码的最后一行，看看我们如何将该脚本导入到我们的页面中：

```
<span>&lt;responsive-video&gt;</span><span>
  </span><span>&lt;video</span><span> </span><span>controls</span><span> </span><span>autoplay</span><span> </span><span>loop</span><span>&gt;</span><span>
    </span><span>&lt;source</span><span> </span><span>src</span><span>=</span><span>"/sandbox/video-media/small.mp4"</span><span> </span><span>media</span><span>=</span><span>"(max-width: 599px)"</span><span>&gt;</span><span>
    </span><span>&lt;source</span><span> </span><span>src</span><span>=</span><span>"/sandbox/video-media/large.mp4"</span><span>&gt;</span><span>
  </span><span>&lt;/video&gt;</span><span>
</span><span>&lt;/responsive-video&gt;</span><span>
</span><span>&lt;script</span><span> </span><span>type</span><span>=</span><span>"module"</span><span> </span><span>src</span><span>=</span><span>"responsivevideo.js"</span><span>&gt;&lt;/script&gt;</span>
```

Now let’s look at the code we’ll put inside that file.  
现在让我们看看我们将放在该文件中的代码。

### Writing the Web Component Logic  
编写Web组件逻辑

Web Components are designed for Progressive Enhancement. They come with a series of lifecycle events that are incredibly helpful for applying behavior to elements at moments such as when they’re created or when they’re appended to the DOM, and also for removing behavior and event handlers when an element is removed from the DOM or destroyed altogether.  
Web组件是为渐进式增强而设计的。它们附带了一系列生命周期事件，这些事件对于在创建元素或将元素附加到DOM时将行为应用于元素以及在从DOM中删除元素或完全销毁元素时删除行为和事件处理程序非常有用。

Before we get ahead of ourselves on that, let’s start with some boilerplate code for our `responsive-video` component.  
在我们开始之前，让我们先从 `responsive-video` 组件的样板代码开始。

```
<span>class</span><span> </span><span>ResponsiveVideo</span><span> </span><span>extends</span><span> </span><span>HTMLElement</span><span> </span><span>{}</span><span>
customElements</span><span>.</span><span>define</span><span>(</span><span>"responsive-video"</span><span>,</span><span> </span><span>ResponsiveVideo</span><span>);</span>
```

That’s not a lot of code, but it is already doing a lot of work. To start, it defines a class called `ResponsiveVideo`, which extends the `HTMLElement` class, which is the same class that all standard HTML elements–you know, `<p>`, `<select>`, `<input>`, etc.–use for their own behavior in the browser. After that, we’re using `customElements.define` to actually define a new HTML element (the tag part) called `<responsive-video>` that will inherit the class’s logic and behavior.  
这不是很多代码，但它已经做了很多工作。首先，它定义了一个名为 `ResponsiveVideo` 的类，它扩展了 `HTMLElement` 类，这个类是所有标准HTML元素（如 `<p>` 、 `<select>` 、 `<input>` 等）在浏览器中用于其自身行为的同一个类。之后，我们使用 `customElements.define` 来实际定义一个名为 `<responsive-video>` 的新HTML元素（标记部分），它将继承类的逻辑和行为。

So now we have a Web Component, but it’s still not doing anything. Inside our class, we can start to use those lifecycle events I had mentioned to add (and remove) behavior and event handlers to the HTML at appropriate moments. I recommend [reading up on all of the features of web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements), but for the purpose of this article I’ll cover just a few lifecycle events that are relevant to adding the behavior we want:  
所以现在我们有了一个Web组件，但它仍然没有做任何事情。在我们的类中，我们可以开始使用我提到的那些生命周期事件来在适当的时候向HTML添加（和删除）行为和事件处理程序。我建议您阅读Web组件的所有功能，但出于本文的目的，我将只介绍一些与添加我们想要的行为相关的生命周期事件：

-   constructor 构造函数
-   connectedCallback
-   disconnectedCallback 已断开回调

#### The Constructor 构造函数

The `constructor` of a web component is called when an instance of its HTML element is created. It’s useful for establishing some upfront variables within the element that’ll be useful to later events and internal logic. It’s often not the best place for all of our initialization code though because when the constructor is called, the element may not be appended to the DOM quite yet, so the many conditions relating to the page around it or even inside it won’t yet be accessible.  
Web组件的 `constructor` 在创建其HTML元素的实例时被调用。它对于在元素中建立一些前期变量很有用，这些变量对后面的事件和内部逻辑很有用。它通常不是我们所有初始化代码的最佳位置，因为当构造函数被调用时，元素可能还没有被追加到DOM中，因此与它周围甚至内部页面相关的许多条件还无法访问。

Here’s our code with a constructor call added:  
下面是添加了构造函数调用的代码：

```
<span>class</span><span> </span><span>ResponsiveVideo</span><span> </span><span>extends</span><span> </span><span>HTMLElement</span><span> </span><span>{</span><span>
  </span><span>constructor</span><span>()</span><span> </span><span>{</span><span>
    </span><span>super</span><span>();</span><span>
    console</span><span>.</span><span>log</span><span>(</span><span>this</span><span>);</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
customElements</span><span>.</span><span>define</span><span>(</span><span>"responsive-video"</span><span>,</span><span> </span><span>ResponsiveVideo</span><span>);</span>
```

Inside the constructor, I started by calling `super()`. Generally, it’s advised that we include this step first because it allows the component to gain access to the base class’s (that is, `HTMLElement`) properties. Just after the `super()`, I’m logging `this` to the browser console, which refers to the HTML element we’re enhancing.  
在构造函数中，我首先调用 `super()` 。一般来说，建议我们首先包括这一步，因为它允许组件访问基类（即 `HTMLElement` ）的属性。在 `super()` 之后，我将 `this` 登录到浏览器控制台，它指的是我们正在增强的HTML元素。

If you were to check the browser console at this point, you would see that the HTML element itself was logged: “responsive-video”  
如果您在此时检查浏览器控制台，您将看到HTML元素本身被记录：“responsive-video”

For now, I won’t use the constructor for anything, but in my final component I am going to use it to define some upfront variables that other events and methods will use.  
现在，我不会使用构造函数来做任何事情，但在我的最后一个组件中，我将使用它来定义一些其他事件和方法将使用的前期变量。

## Using connectedCallback & disconnectedCallback  
使用connectedCallback和disconnectedCallback

Next, I’ll use some special lifecycle events to apply behavior to any `responsive-video` element when it is added to the DOM, and also remove behavior when/if it’s ever removed from the DOM. It’s worth pointing out here that in contrast to the days when we needed to wait for “DOM Ready” to query the DOM for elements to make our enhancements, these events are a major upgrade!  
接下来，我将使用一些特殊的生命周期事件，在任何 `responsive-video` 元素被添加到DOM时将行为应用于该元素，并在它从DOM中删除时删除行为。这里值得指出的是，与我们需要等待“DOM Ready”来查询DOM元素以进行增强的日子相比，这些事件是一个重大的升级！

I know I’m going to use these two events, so first I’ll add them with some console logs to show how they look.  
我知道我将使用这两个事件，所以首先我将添加它们和一些控制台日志，以显示它们的外观。

```
<span>class</span><span> </span><span>ResponsiveVideo</span><span> </span><span>extends</span><span> </span><span>HTMLElement</span><span> </span><span>{</span><span>
  </span><span>constructor</span><span>()</span><span> </span><span>{</span><span>
    </span><span>super</span><span>();</span><span>
    </span><span>// upfront variables will go here</span><span>
  </span><span>}</span><span>
  connectedCallback</span><span>(){</span><span>
    console</span><span>.</span><span>log</span><span>(</span><span>`${this} is in the DOM`</span><span>);</span><span>
  </span><span>}</span><span>
  disconnectedCallback</span><span>(){</span><span>
    console</span><span>.</span><span>log</span><span>(</span><span>`${this} has been removed from the DOM`</span><span>);</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
customElements</span><span>.</span><span>define</span><span>(</span><span>"responsive-video"</span><span>,</span><span> </span><span>ResponsiveVideo</span><span>);</span>
```

Above, we’re logging to the browser console whenever a `responsive-video` element shows up in the DOM (including when the page first loads), and whenever one is removed from the DOM.  
在上面的例子中，每当 `responsive-video` 元素出现在DOM中时（包括页面首次加载时），以及每当从DOM中删除时，我们都会记录到浏览器控制台。

connectedCallback is a good place to create useful references to elements inside my component. For example, many of my methods will reference the `video` element inside the component, so I can make a reference to it inside `connectedCallback` like so, using `this.querySelector` to search within the scope of the component itself instead of the entire document.  
connectedCallback是一个很好的地方来创建对组件内元素的有用引用。例如，我的许多方法将引用组件内部的 `video` 元素，因此我可以像这样在 `connectedCallback` 中引用它，使用 `this.querySelector` 在组件本身的范围内搜索，而不是整个文档。

```
<span>connectedCallback</span><span>(){</span><span>
  </span><span>this</span><span>.</span><span>video </span><span>=</span><span> </span><span>this</span><span>.</span><span>querySelector</span><span>(</span><span>"video"</span><span>);</span><span>
</span><span>}</span>
```

With these handy methods, we now have the tools we need to add some logic.  
有了这些方便的方法，我们现在就有了添加一些逻辑所需的工具。

### Adding Custom Behavior 添加自定义行为

The rest of our component’s code will serve one purpose: instructing the `video` element to select and load a new, appropriate source for the video element whenever/if media conditions change in a way that’s relevant to its `source` elements.  
我们组件的其余代码将用于一个目的：指示 `video` 元素为视频元素选择和加载一个新的，适当的源，无论何时/如果媒体条件以与其 `source` 元素相关的方式发生变化。

To do that, we’ll write some code that applies this general flow:  
为此，我们将编写一些应用此通用流程的代码：

-   Find all of the `source` elements inside the `video` that have `media` attributes, and pass those media attribute values (which will be media queries or types) to `matchMedia`, which we can use to start listening to the media queries for relevant changes. Once listening, `matchMedia`‘s “change” event will fire whenever those media queries start or stop matching the media conditions of the browser, which can happen when a user resizes their browser to a different size, for example.  
    找到 `video` 中所有具有 `media` 属性的 `source` 元素，并将这些媒体属性值（将是媒体查询或类型）传递给 `matchMedia` ，我们可以使用它来开始监听媒体查询以获取相关更改。一旦监听，#4 #的“更改”事件将在这些媒体查询开始或停止匹配浏览器的媒体条件时触发，例如，当用户将浏览器调整为不同大小时可能会发生这种情况。
-   When any of the media queries inside the video fire a change event, check if the currently playing video source is coming from a `source` element prior to the `source` element whose media just changed. If it is, then we can ignore that particular media change because any sources after the source that’s currently playing are irrelevant to selection. On the other hand, if the currently playing source of the video happens to be the source whose media did just change (presumably by no longer matching), then we should instruct the video element to load again (using `video.load()`) using its native selection to find the best source.  
    当视频中的任何媒体查询触发更改事件时，检查当前播放的视频源是否来自媒体刚刚更改的 `source` 元素之前的 `source` 元素。如果是，那么我们可以忽略特定的媒体更改，因为当前正在播放的源之后的任何源都与选择无关。另一方面，如果当前播放的视频源恰好是其媒体刚刚改变的源（可能不再匹配），那么我们应该指示video元素使用其原生选择再次加载（使用 `video.load()` ）以找到最佳源。

That’s mostly it! 差不多就是这样！

Here’s how that logic will be structured in the code in our component, with our `connectedCallback` and `disconnectedCallback` events applying code at opportune moments. In addition to those lifecycle events , I’ve also added 4 custom methods for my own code to use: `bindMediaListeners`, `unbindMediaListeners`, `previousSiblingIsPlaying`, and `reloadVideo`.  
下面是该逻辑在组件代码中的结构，我们的 `connectedCallback` 和 `disconnectedCallback` 事件在适当的时候应用代码。除了这些生命周期事件之外，我还为自己的代码添加了4个自定义方法：用途： `bindMediaListeners` 、 `unbindMediaListeners` 、 `previousSiblingIsPlaying` 和 `reloadVideo` 。

I’ve replaced some of the code inside those methods below with comments that describe how it flows.  
我已经用注释替换了下面这些方法中的一些代码，这些注释描述了它是如何流动的。

```
<span>class</span><span> </span><span>ResponsiveVideo</span><span> </span><span>extends</span><span> </span><span>HTMLElement</span><span> </span><span>{</span><span>
  </span><span>constructor</span><span>()</span><span> </span><span>{</span><span>
    </span><span>super</span><span>();</span><span>
    </span><span>// upfront variables will go here</span><span>
  </span><span>}</span><span>
  connectedCallback</span><span>()</span><span> </span><span>{</span><span>
    </span><span>this</span><span>.</span><span>video </span><span>=</span><span> </span><span>this</span><span>.</span><span>querySelector</span><span>(</span><span>'video'</span><span>);</span><span>
    </span><span>this</span><span>.</span><span>bindMediaListeners</span><span>();</span><span>
  </span><span>}</span><span>
  disconnectedCallback</span><span>()</span><span> </span><span>{</span><span>
    </span><span>this</span><span>.</span><span>unbindMediaListeners</span><span>();</span><span>
  </span><span>}</span><span>
  bindMediaListeners</span><span>(){</span><span>
    </span><span>// loop through the source elements inside this.video and set up listeners for their media queries</span><span>
    </span><span>// when any of those listeners fire a change event,</span><span>
    </span><span>// make sure the source element of the event is relevant using previousSiblingIsPlaying</span><span>
    </span><span>// if it's relevant, call reloadVideo to find a new source</span><span>
  </span><span>}</span><span>
  unbindMediaListeners</span><span>(){</span><span>
    </span><span>// unbind the media query listeners</span><span>
  </span><span>}</span><span>
  previousSiblingIsPlaying</span><span>(</span><span>elem</span><span>,</span><span> src</span><span>)</span><span> </span><span>{</span><span>
    </span><span>// a helper function that will return true or false for whether a previous source element is currently selected</span><span>
  </span><span>}</span><span>
  reloadVideo</span><span>(){</span><span>
    </span><span>// capture the currentTime of the video</span><span>
    </span><span>// reload the video, let the browser choose the best current source</span><span>
    </span><span>// set the current time of the video to where it last was</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>
customElements</span><span>.</span><span>define</span><span>(</span><span>"responsive-video"</span><span>,</span><span> </span><span>ResponsiveVideo</span><span>);</span>
```

That was a big chunk of code, but it should give you an idea of the flow for how it works.  
这是一个很大的代码块，但它应该给你一个给予它是如何工作的流程的想法。

## Completing the Enhancements  
完成增强功能

Next, let’s populate that scaffolding with the actual logic. Here’s our full web component code.  
接下来，让我们用实际的逻辑填充这个脚手架。这是我们完整的Web组件代码。

```
<span>class</span><span> </span><span>ResponsiveVideo</span><span> </span><span>extends</span><span> </span><span>HTMLElement</span><span> </span><span>{</span><span>
  </span><span>constructor</span><span>()</span><span> </span><span>{</span><span>
    </span><span>super</span><span>();</span><span>
    </span><span>this</span><span>.</span><span>listenedMedia </span><span>=</span><span> </span><span>[];</span><span>
    </span><span>this</span><span>.</span><span>reloadQueued </span><span>=</span><span> </span><span>false</span><span>;</span><span>
  </span><span>}</span><span>
  connectedCallback</span><span>()</span><span> </span><span>{</span><span>
    </span><span>this</span><span>.</span><span>video </span><span>=</span><span> </span><span>this</span><span>.</span><span>querySelector</span><span>(</span><span>'video'</span><span>);</span><span>
    </span><span>this</span><span>.</span><span>bindMediaListeners</span><span>();</span><span>
  </span><span>}</span><span>
  disconnectedCallback</span><span>()</span><span> </span><span>{</span><span>
    </span><span>this</span><span>.</span><span>unbindMediaListeners</span><span>();</span><span>
  </span><span>}</span><span>
  bindMediaListeners</span><span>(){</span><span>
    </span><span>this</span><span>.</span><span>querySelectorAll</span><span>(</span><span>'source'</span><span>).</span><span>forEach</span><span>(</span><span>source </span><span>=&gt;</span><span> </span><span>{</span><span>
      </span><span>if</span><span> </span><span>(</span><span>source</span><span>.</span><span>media</span><span>)</span><span> </span><span>{</span><span>
        </span><span>const</span><span> mqListener </span><span>=</span><span> </span><span>()</span><span> </span><span>=&gt;</span><span> </span><span>{</span><span>
          </span><span>if</span><span> </span><span>(</span><span>source</span><span>.</span><span>media </span><span>===</span><span> </span><span>this</span><span>.</span><span>video</span><span>.</span><span>currentSrc </span><span>||</span><span> </span><span>!</span><span>this</span><span>.</span><span>previousSiblingIsPlaying</span><span>(</span><span>source</span><span>,</span><span> </span><span>this</span><span>.</span><span>video</span><span>.</span><span>currentSrc</span><span>)</span><span> </span><span>&amp;&amp;</span><span> </span><span>!</span><span>this</span><span>.</span><span>reloadQueued</span><span>)</span><span> </span><span>{</span><span>
            </span><span>this</span><span>.</span><span>reloadVideo</span><span>();</span><span>
          </span><span>}</span><span>
        </span><span>};</span><span>
        </span><span>this</span><span>.</span><span>listenedMedia</span><span>.</span><span>push</span><span>({</span><span> media</span><span>:</span><span> source</span><span>.</span><span>media</span><span>,</span><span> handler</span><span>:</span><span> mqListener </span><span>});</span><span>
        window</span><span>.</span><span>matchMedia</span><span>(</span><span>source</span><span>.</span><span>media</span><span>).</span><span>addEventListener</span><span>(</span><span>"change"</span><span>,</span><span> mqListener</span><span>);</span><span>
      </span><span>}</span><span>
    </span><span>});</span><span>
  </span><span>}</span><span>
  unbindMediaListeners</span><span>(){</span><span>
    </span><span>this</span><span>.</span><span>listenedMedia</span><span>.</span><span>forEach</span><span>(</span><span>listener </span><span>=&gt;</span><span> </span><span>{</span><span>
      window</span><span>.</span><span>matchMedia</span><span>(</span><span>listener</span><span>.</span><span>media</span><span>).</span><span>removeEventListener</span><span>(</span><span>"change"</span><span>,</span><span> listener</span><span>.</span><span>handler</span><span>);</span><span>
    </span><span>});</span><span>
  </span><span>}</span><span>
  previousSiblingIsPlaying</span><span>(</span><span>elem</span><span>,</span><span> src</span><span>)</span><span> </span><span>{</span><span>
    </span><span>let</span><span> prevSibling </span><span>=</span><span> elem</span><span>;</span><span>
    </span><span>while</span><span> </span><span>(</span><span>elem</span><span>.</span><span>previousElementSibling</span><span>)</span><span> </span><span>{</span><span>
      </span><span>if</span><span> </span><span>(</span><span>prevSibling</span><span>.</span><span>src </span><span>===</span><span> src</span><span>)</span><span> </span><span>{</span><span>
        </span><span>return</span><span> </span><span>true</span><span>;</span><span>
      </span><span>}</span><span>
    </span><span>}</span><span>
    </span><span>return</span><span> </span><span>false</span><span>;</span><span>
  </span><span>}</span><span>
  reloadVideo</span><span>(){</span><span>
    </span><span>this</span><span>.</span><span>reloadQueued </span><span>=</span><span> </span><span>true</span><span>;</span><span>
    </span><span>const</span><span> currentTime </span><span>=</span><span> </span><span>this</span><span>.</span><span>video</span><span>.</span><span>currentTime</span><span>;</span><span>
    </span><span>const</span><span> playState </span><span>=</span><span> </span><span>this</span><span>.</span><span>video</span><span>.</span><span>playState</span><span>;</span><span>
    </span><span>this</span><span>.</span><span>video</span><span>.</span><span>load</span><span>();</span><span>
    </span><span>const</span><span> videoLoaded </span><span>=</span><span> </span><span>()</span><span> </span><span>=&gt;</span><span> </span><span>{</span><span>
      </span><span>this</span><span>.</span><span>video</span><span>.</span><span>playState </span><span>=</span><span> playState</span><span>;</span><span>
      </span><span>this</span><span>.</span><span>video</span><span>.</span><span>currentTime </span><span>=</span><span> currentTime</span><span>.</span><span>toString</span><span>();</span><span>
      </span><span>this</span><span>.</span><span>reloadQueued </span><span>=</span><span> </span><span>false</span><span>;</span><span>
      </span><span>this</span><span>.</span><span>video</span><span>.</span><span>removeEventListener</span><span>(</span><span>"loadeddata"</span><span>,</span><span> videoLoaded</span><span>);</span><span>
    </span><span>};</span><span>
    </span><span>this</span><span>.</span><span>video</span><span>.</span><span>addEventListener</span><span>(</span><span>"loadeddata"</span><span>,</span><span> videoLoaded</span><span>);</span><span>
  </span><span>}</span><span>
</span><span>}</span><span>

customElements</span><span>.</span><span>define</span><span>(</span><span>"responsive-video"</span><span>,</span><span> </span><span>ResponsiveVideo</span><span>);</span>
```

And it works! In about 50 lines of code, we’ve used a web component to extend HTML video to make it do much more.  
而且它有效！在大约50行代码中，我们使用了一个Web组件来扩展HTML视频，使其做得更多。

## Check out the Demo Page  
查看演示页面

You can try a demo of this responsive video web component here.  
您可以在这里尝试这个响应式视频Web组件的演示。

[Even Responsiver Video Demo Page  
Even Responsiver视频演示页面](https://scottjehl.com/sandbox/video-media/reallyrwdvideo)

But hey! Not so fast….  
但是嘿！别这么快....

I still have another important thing to cover before this thing is ready to ship.  
我还有一件重要的事要做在这东西准备好发货之前。

## Enhancing Reponsibly 增强责任感

As I mentioned early in the post, the behavior we added with this component is something that many folks _expect_ to already work when they start using responsive video. While there is no current proposal or plans for implementing this in web standards and browsers (that I know of, at least), this does seem like the sort of feature that could possibly become natively supported in browsers one day. I hope it does actually!  
正如我在文章的前面提到的，我们在这个组件中添加的行为是许多人在开始使用响应式视频时期望已经工作的。虽然目前还没有在Web标准和浏览器中实现这一点的提议或计划（至少我知道），但这似乎是有一天可能在浏览器中原生支持的那种功能。我希望它确实如此！

If that does ever happen, I really wouldn’t want this web component to be duplicating or worse, interfering with the behavior that a browser handles itself. I’d like this web component to act as a polyfill for this behavior if it’s not already supported, but if it is supported, I want this web component to make itself obsolete.  
如果这种情况真的发生了，我真的不希望这个Web组件被复制或更糟，干扰浏览器处理自己的行为。我希望这个Web组件作为一个polyfill的行为，如果它还没有得到支持，但如果它是支持的，我希望这个Web组件，使自己过时。

So just to be safe, we should check if the browser handles this behavior natively before we add it ourselves.  
因此，为了安全起见，我们应该在自己添加之前检查浏览器是否能够处理此行为。

It’s time for a feature test!  
是时候进行功能测试了！

### Writing a Video Media Change Feature Test  
编写视频媒体更改功能测试

I created the following feature test to check whether a browser performs this media switching behavior natively. It’s somewhat similar to [the test that I recently patched in the Web Platform Test suite](https://github.com/web-platform-tests/wpt/pull/42361/commits/a2851bd8017fe88b5f391c1bb99c2486f27162cc) which modern browsers run as part of their builds to ensure they support standard responsive video behavior. Except that this one tests for behavior that is not currently standard, of course.  
我创建了以下功能测试，以检查浏览器是否会执行此媒体切换行为。它有点类似于我最近在Web平台测试套件中修补的测试，现代浏览器作为其构建的一部分运行，以确保它们支持标准的响应视频行为。当然，除了这个测试目前还不是标准的行为。

The test returns a promise that will quickly resolve to either `true` or `false` to describe if a browser supports changing video sources after page load, when source media changes.  
该测试返回一个promise，它将快速解析为 `true` 或 `false` ，以描述浏览器是否支持在页面加载后更改视频源，当源媒体更改时。

```
<span>// feature test for native video media switching media</span><span>
</span><span>const</span><span> videoMediaChangeSupport </span><span>=</span><span> </span><span>async</span><span> </span><span>()</span><span> </span><span>=&gt;</span><span> </span><span>{</span><span>
  </span><span>return</span><span> </span><span>new</span><span> </span><span>Promise</span><span>(</span><span>resolve </span><span>=&gt;</span><span> </span><span>{</span><span>
    </span><span>const</span><span> iframe </span><span>=</span><span> document</span><span>.</span><span>createElement</span><span>(</span><span>"iframe"</span><span>);</span><span>
    </span><span>const</span><span> video </span><span>=</span><span> document</span><span>.</span><span>createElement</span><span>(</span><span>"video"</span><span>);</span><span>
    </span><span>const</span><span> source </span><span>=</span><span> document</span><span>.</span><span>createElement</span><span>(</span><span>"source"</span><span>);</span><span>
    </span><span>const</span><span> mediaSource </span><span>=</span><span> </span><span>new</span><span> </span><span>MediaSource</span><span>();</span><span>
    mediaSource</span><span>.</span><span>addEventListener</span><span>(</span><span>"sourceopen"</span><span>,</span><span> </span><span>()</span><span> </span><span>=&gt;</span><span> resolve</span><span>(</span><span>true</span><span>));</span><span>
    source</span><span>.</span><span>src </span><span>=</span><span> URL</span><span>.</span><span>createObjectURL</span><span>(</span><span>mediaSource</span><span>);</span><span>
    source</span><span>.</span><span>media </span><span>=</span><span> </span><span>"(min-width:10px)"</span><span>;</span><span>
    video</span><span>.</span><span>append</span><span>(</span><span>source</span><span>);</span><span>
    iframe</span><span>.</span><span>width </span><span>=</span><span> </span><span>"5"</span><span>;</span><span>
    iframe</span><span>.</span><span>style</span><span>.</span><span>cssText </span><span>=</span><span> </span><span>`position: absolute; visibility: hidden;`</span><span>;</span><span>
    document</span><span>.</span><span>documentElement</span><span>.</span><span>append</span><span>(</span><span>iframe</span><span>);</span><span>
    iframe</span><span>.</span><span>contentDocument</span><span>.</span><span>body</span><span>.</span><span>append</span><span>(</span><span>video</span><span>);</span><span>
    setTimeout</span><span>(()</span><span> </span><span>=&gt;</span><span> </span><span>{</span><span> iframe</span><span>.</span><span>width </span><span>=</span><span> </span><span>"15"</span><span>;</span><span> </span><span>});</span><span>
    setTimeout</span><span>(()</span><span> </span><span>=&gt;</span><span> </span><span>{</span><span>
      iframe</span><span>.</span><span>remove</span><span>();</span><span>
      resolve</span><span>(</span><span>false</span><span>);</span><span>
    </span><span>},</span><span> </span><span>1000</span><span>);</span><span>
  </span><span>});</span><span>
</span><span>};</span>
```

In case you’re curious, the test works by creating a `video` element with a child `source` element that has a media query, and appends that video to a generated `iframe` which is too narrow for the media query to match. Then, it resizes the iframe so that the relevant media query _will_ match. If the video requests the source after the iframe is resized, we can trust that the browser is already handling media switching in video, so we don’t need to apply our web component at all!  
如果你好奇的话，测试的工作原理是创建一个带有子元素 `source` 的 `video` 元素，该子元素具有一个媒体查询，并将该视频附加到生成的 `iframe` ，该 `iframe` 太窄，媒体查询无法匹配。然后，它调整iframe的大小，以便匹配相关的媒体查询。如果视频在iframe调整大小后请求源，我们可以相信浏览器已经在处理视频中的媒体切换，所以我们根本不需要应用我们的web组件！

### Conditional Web Components  
条件Web组件

Lastly, it’s time to re-define our web component ONLY if that feature test happens to fail. I’m calling this pattern a _Conditional Web Component_, because everything seems to have cool names now.  
最后，只有当功能测试失败时，才需要重新定义我们的Web组件。我将此模式称为条件Web组件，因为现在所有东西似乎都有很酷的名字。

To make it conditional, the last line of our component will now look like this:  
为了使它有条件，我们组件的最后一行现在看起来像这样：

```
<span>if</span><span>(</span><span> </span><span>await</span><span> videoMediaChangeSupport</span><span>()</span><span> </span><span>===</span><span> </span><span>false</span><span> </span><span>){</span><span>
  customElements</span><span>.</span><span>define</span><span>(</span><span>"responsive-video"</span><span>,</span><span> </span><span>ResponsiveVideo</span><span>);</span><span>
</span><span>}</span>
```

And again, that demo page has this latest example baked in!  
同样，演示页面有这个最新的例子！

[Even Responsiver Video Demo page  
Even Responsiver视频演示页面](https://scottjehl.com/sandbox/video-media/reallyrwdvideo)

You can browse the source here on Github if you prefer:  
如果你喜欢，你可以在Github上浏览源代码：

[ResponsiveVideo.js file  ResponsiveVideo.js文件](https://github.com/scottjehl/ResponsiveVideo/blob/main/responsivevideo.js)

## Using ResponsiveVideo.js  
使用ResponsiveVideo.js

The script I’ve described is on Github, licensed open source under MIT. Feel free to use it, fork it, or send me issues to consider! And I’ll plan publish it to NPM soon as well.  
我描述的脚本在Github上，在MIT下许可开源。请随意使用它，分叉它，或发送问题给我考虑！我也会很快把它发布到NPM上。

Github Repo for [ResponsiveVideo](https://github.com/scottjehl/ResponsiveVideo)

## Thanks! 谢谢你，谢谢

Thank you for reading. Feel free to leave a comment or reach out on [Mastodon](https://mstdn.social/@scottjehl) if you have ideas or questions.  
感谢您的阅读。如果你有想法或问题，请随时留下评论或联系Mastodon。