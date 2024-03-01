Since I’ve launched my [12 startups in 12 months](https://levels.io/12-startups-12-months/) challenge, the #1 question I get asked is about my work flow and how I can ship so fast. I don’t work particularly longer hours than most people (I think). I do work fast and rough. In this post, I’d like to show you the basics of how my I build my minimum viable products (or MVPs).  
自从我在12个月的挑战中推出了12家初创公司以来，我被问到的第一个问题是关于我的工作流程以及我如何能够如此快速地发货。我的工作时间并不比大多数人长（我想）。我做事又快又粗暴。在这篇文章中，我想向你展示如何构建我的最小可行产品（或MVP）的基础知识。

First, a public service announcement, I don’t do things conventionally and probably not according to the rules. Especially not with these 12 projects. So it’d be a bad idea to follow how I do things exactly. It’s probably better to just figure out your own workflow. That’s what I did.  
首先，一个公共服务公告，我不做常规的事情，可能不按照规则。尤其是这12个项目。所以完全按照我的方式做事是个坏主意。最好还是自己想办法。我就是这么做的

## Solve your own problems, or not?  
解决自己的问题，还是不解决？

I start with an idea. I built [GoFuckingDoIt](http://gofuckingdoit.com/?ref=levels.io) so I stopped procrastinating and was fined money if I didn’t finish what I said I would. [Tubelytics](http://tubelytics.com/?ref=levels.io) was there to get a general overview of all my different YouTube channels performance. And when I wanted to know which cities had the best cost of living for a traveling nomad like me, I built [NomadList](http://nomadlist.io/?ref=levels.io).  
我从一个想法开始。我建立了GoFuckingDoIt，这样我就不再拖延了，如果我没有完成我说过的话，我会被罚款。Tubelytics在那里得到了我所有不同的YouTube频道性能的一般概述。当我想知道哪些城市的生活成本最适合像我这样的流浪者时，我建立了NomadList。

As you see, most of my ideas are actually there to solve my own problems — as [David Heinemeier Hansson](http://twitter.com/dhh?ref=levels.io) calls it [scratching your own itch](https://gettingreal.37signals.com/ch02_Whats_Your_Problem.php?ref=levels.io)).  
正如你所看到的，我的大部分想法实际上都是为了解决我自己的问题--就像大卫·海涅迈尔·汉森所说的那样。

Is that good though? As [this article](http://www.wired.com/2014/08/12-startups-in-12-months/?ref=levels.io) points out, we might need to consider that a majority of us doing this stuff are young white males. So if we only solve our own problems, we limit ourselves in audience and problem settings. I don’t think that’s bad necessarily. It’s great to start off by solving your own problems. Personally, in the long run, I’d like to build more stuff that has a wider impact though.  
这样好吗正如这篇文章所指出的，我们可能需要考虑到，我们中的大多数人做这件事是年轻的白色男性。因此，如果我们只解决自己的问题，我们就限制了自己的受众和问题设置。我不认为这是坏事。从解决自己的问题开始是很好的。就个人而言，从长远来看，我想建立更多的东西，有更广泛的影响，虽然。

## My development philosophy  
我的发展理念

In terms of development I sympathize highly with [Colin](http://twitter.com/alphacolin?ref=levels.io) from [Customer.io](http://customer.io/?ref=levels.io) whose site is aptly titled [I Am Not A Programmer](http://iamnotaprogrammer.com/?ref=levels.io). I’m not and I don’t want to be one either. I just want my stuff to work and not break. Programming is not my passion. Making stuff is my passion. Just as I don’t like mathematics, but I like how you can apply it to build a skyscraper.  
在开发方面，我非常同情来自Customer.io的Colin，他的网站名为“我不是程序员”。我不是，我也不想成为一个。我只想让我的东西工作而不是坏掉。编程不是我的激情。做东西是我的激情。就像我不喜欢数学，但我喜欢你如何运用它来建造摩天大楼。

If something potentially takes off, I do want my code to be easily readable by other coders to refactor and/or scale it.  
如果有什么东西可能会起飞，我希望我的代码能够被其他编码人员轻松读取，以重构和/或扩展它。

If you look at any of my sites, they’re very minimal [\[1\]](http://gofuckingdoit.com/?ref=levels.io) and basic [\[2\]](http://nomadlist.io/?ref=levels.io). That’s on purpose. I don’t have as much as time to build things big and I don’t see the point of building things big immediately. And I like minimal user interfaces. I don’t think a site needs to be filled with functionality from top to bottom.  
如果你看我的任何一个网站，它们都是非常小的\[1\]和基本的\[2\]。我是故意的。我没有那么多的时间来建立大的东西，我不认为立即建立大的东西的意义。我喜欢最小的用户界面。我不认为一个网站需要从上到下充满功能。

## My development environment  
我的开发环境

I don’t really have an [IDE](http://en.wikipedia.org/wiki/Integrated_development_environment?ref=levels.io). I just code everything in [Sublime Text 3](http://www.sublimetext.com/3?ref=levels.io), I highly recommend it to anyone.  
我真的没有一个IDE。我只是在Sublime Text 3中编写所有代码，我强烈推荐给任何人。

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-31-01.53.53-1024x527.png)

To give you an idea, two years ago I was still using Notepad++ on Windows 7:  
给予你一个想法，两年前我还在Windows 7上使用Notepad++：

![](https://levels.io/content/images/2014/09/best-free-file-editor-for-windows-1.png)

Sublime Text is great since it has auto completion, linting (e.g. live debugging of your code) and dark themes (like [Soda](https://github.com/buymeasoda/soda-theme%22?ref=levels.io)) that don’t burn your eyes. The auto-completion and linting especially now saves me incredible amounts of time. If I type this:  
Sublime Text很棒，因为它有自动完成，linting（例如实时调试代码）和不会灼伤眼睛的黑暗主题（如Soda）。特别是现在的自动完成和linting为我节省了大量的时间。如果我输入这个：

<html>

and press tab, Sublime auto-completes it into:  
然后按tab，Sublime会自动完成它：

<!DOCTYPE html>  
<html>  
<head>  
<title></title>  
</head>  
<body>

</body>  
</html>

Sublime’s linting will visually show where I have errors in my PHP, JS or SCSS code. I also use [CodeKit](https://incident57.com/codekit/?ref=levels.io) to compile/minify my JS and SCSS files. Like Sublime, it also supports linting. So if I don’t see the error in Sublime, CodeKit will simply pop up a window and tell me what’s wrong:  
Sublime的linting将直观地显示我在PHP，JS或SCSS代码中的错误。我还使用CodeKit来编译/缩小我的JS和SCSS文件。像Sublime一样，它也支持linting。因此，如果我在Sublime中没有看到错误，CodeKit将简单地弹出一个窗口并告诉我错误所在：

![](https://levels.io/content/images/2014/09/Screenshot-2014-09-05-13.17.28-1024x705.png)

A year ago, I didn’t have any of these features. I didn’t even have a local server, so I’d make a change to my code, then upload it to my development server (on DreamHost) and see if it worked. I developed entire sites like this. It would take 1000x more time though. I know, I know! Ridiculous. But what do you do if you don’t know?  
一年前，我还没有这些特征。我甚至没有本地服务器，所以我会对代码进行更改，然后将其上传到我的开发服务器（在DreamHost上），看看它是否有效。我开发了整个这样的网站。这将需要1000倍的时间。我知道我知道荒谬了但如果你不知道怎么办？

I’d recommend anyone to use a MacBook or Mac to develop your stuff on. It helps so much that OSX is a lot like Linux. That means I can have an almost exact duplicate of my production environment (e.g. the actual Linode server where the live website is running) on my development environment (e.g. my MacBook). So I can code and test stuff without breaking the live site. It also allows me to develop my sites when I don’t have internet. To show you, above is my MacBook, below is my server:  
我建议大家使用MacBook或Mac来开发你的东西，OSX很像Linux，这很有帮助。这意味着我可以在我的开发环境（例如我的MacBook）上拥有几乎完全相同的生产环境（例如运行实时网站的实际Linode服务器）。所以我可以编码和测试的东西，而不破坏现场。它还允许我在没有互联网的情况下开发我的网站。上面是我的MacBook，下面是我的服务器：

![](https://levels.io/content/images/2014/09/Screenshot-2014-09-05-15.16.42x-1024x946.png)

You can do all of this in Windows too, but it’s not as smooth and your production and dev environment will look a lot different — that is, if you use a Linux server, which you should (you say Microsoft .NET? I say lulz were had!)  
您也可以在Windows中完成所有这些，但它并不那么流畅，您的生产和开发环境看起来会有很大不同-也就是说，如果您使用Linux服务器，您应该（您说Microsoft .NET？我说lulz是有！）

## Design process 设计过程

When designing I usually start off with an idea of how it should look in my head already. I usually draw it out on paper first. For example, this is [GoFuckingDoIt.com](http://gofuckingdoit.com/?ref=levels.io) (I know, it looks terrible!)  
在设计的时候，我通常会先在脑海中想好它应该是什么样子。我通常先把它画在纸上。例如，这是GoFuckingDoIt.com（我知道，它看起来很糟糕！）

![photo (12)](https://levels.io/content/images/2014/08/photo-12-1024x768.jpg)

And then I just build it in Photoshop and evolve it further. If I need a stock photo, I always get a mock first from [Stocksy](http://stocksy.com/?ref=levels.io). They have amazing, beautiful, authentic stock photography. Really special stuff. Then when I actually decide to use it, I pay $10 and I have it licensed!  
然后我就在Photoshop里把它做出来，再进一步改进。如果我需要一张库存照片，我总是先从斯托克西那里得到一张模拟照片。他们有惊人的，美丽的，真实的股票摄影。很特别的东西。然后，当我真正决定使用它，我支付10美元，我有它的许可！

![](https://levels.io/content/images/2014/08/mock3.png)

Then I build it in HTML and CSS. That’s when things start changing. For example the name went from Just Fucking Do It to Go Fucking Do It, and I switched around the picture with another one from Stocksy:  
然后我用HTML和CSS构建它。一切都开始改变了。例如，这个名字从Just Fucking Do It变成了Go Fucking Do It，我把照片换成了Stocksy的另一张：

![Screenshot 2014-09-02 21.31.31](https://levels.io/content/images/2014/08/Screenshot-2014-09-02-21.31.31-1024x473.png)

I then tweak it until the interface looks great. Then I make it responsive for mobile. I use Chrome’s new emulation feature to see how it looks on mobile. It’s **quintessential** right now to make sure your site looks great on any mobile device. 40% of my traffic comes from mobile now. People will simply leave your site if they can’t use it! Take it serious.

![](https://levels.io/content/images/2014/08/Screenshot-2014-09-02-21.33.09-1024x361.png)

When the front-end is finished, I usually start building the back-end (the stuff on the server) and making it actually interactive.

A year ago, I used to host all my sites with [DreamHost](http://dreamhost.com/?ref=levels.io). I was on there for years. My sites weren’t that special though so they didn’t need a lot resources. When I started doing intense background cron jobs though, I started getting messages telling me I should probably stop doing that and get my own server. Fair enough I thought, I’ll get my own.

I didn’t even know how a Linux shell worked back then. And it probably took me a week before I had a working server set up on [Linode](https://www.linode.com/?r=9ca5a3583601b91e04ba71883446f0ed3d8fd025&ref=levels.io). But when it worked, it felt so much better to have my own server. I now owned the entire stack. From front-end, back-end to the server itself. That meant if something didn’t work, I could quickly find the problem, instead of relying on some hosting company fucking up their shit and me debugging it for 12 hours to then figure out it was their fault.

## Tech stack

I have a very basic stack. It’s Nginx on Ubuntu on Linode with basic PHP, Node.JS, JS, CSS and HTML.

**Linode**  
My server is hosted by the awesome guys and girls at [Linode](https://www.linode.com/?r=9ca5a3583601b91e04ba71883446f0ed3d8fd025&ref=levels.io) (yes that’s a referral link). I run all my sites (even this blog you’re looking at) on one virtual private server (VPS).

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-31-01.21.52-1024x480.png)

To show you how cheap it is: I pay $40/m for a Linode with 4 GB RAM, 4 CPU cores, 96 GB SSD storage and 4TB transfer i/o. You think that sounds slow and tiny? Yep, that’d be a slow MacBook, but as a server it’s really quite fast. It takes floods of users easily. To give you an idea, every time one of my sites gets press or is featured on [Hacker News](https://levels.io/hacker-news-number-one/) or [Product Hunt](https://levels.io/product-hunt-hacker-news-number-one/), it’ll get flooded with users (often >1000 concurrent users per second).

It’s never went down yet either, except for the cases when I broke it myself 🙂

I love Linode’s dashboard too. I’ve tried AWS’s but it’s just too complicated for me. Like when I shut down an AWS instance, it loses all data? Sure that might sound logical to an engineer, but not to me. To me that’s just not very user friendly. Linode has a lot less features than AWS but in my case that’s good. It’s simple. You can deploy a server instantly with one button, install a Linux distribution on it and it’ll be up and running in 5 minutes.

**Ubuntu**  
My server runs Ubuntu 14.04 LTS as its OS. Why? It seemed like the most common Linux distribution when I picked it. And LTS stands for long-term support, which means even if you don’t upgrade to the next versions, it’ll receive bug fixes for quite a few years.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-31-01.25.24-1024x434.png)

**Nginx**  
On top of that, I run a basic Nginx server with the PHP-FPM gateway installed to enable PHP to run. I love Nginx because it’s very maintenance free and even if you don’t tweak it after installing, it’s usually just crazy fast out of the box.

**PHP/Node.JS**  
The back-end of the sites itself are mostly written in PHP. I’m always embarrassed when I have to tell people this, but to be fair PHP has gotten a lot better these days. I am feeling the pressure to start moving over to Node.JS though, although I’ve been saying that for awhile (it’s hard to switch engrained habits).

**HTML/JS/SCSS**  
The front-end of the sites is written in hand-coded HTML (like most people still do) and just raw JS. I do use jQuery to make stuff easier. I use some parts of SCSS to speed things up, but mostly it’s just me typing raw CSS code.

**Deploying fast**  
I like this setup, because I can deploy sites very fast. I’ll register a domain with [NameCheap](http://namecheap.com/?ref=levels.io), use their FreeDNS to add DNS entries to point to my Linode VPS IP address. I’ll clone an existing nginx.conf (Nginx config file) from another domain, change a few things and upload it. Then I connect to my server, enter the command below:

> sudo ln -s /srv/http/domain.com/app/nginx.conf /etc/nginx/sites/domain.com  
> sudo nginx -s restart

This links the nginx.conf file to the nginx server and then reloads the server and it’ll be live. I can do that in about 15 minutes. Which is crazy cool to me.

I remember it used to take me hours to add a new site/domain to DreamHost because I needed to get through their horribly slow web panel. SSH-ing into a server is definitely superior to a web panel. I figured that out fast.

## Folder structure

Last year, I was obsessing about how my folder structure was supposed to look. My projects had become quite a mess and I started looking at popular frameworks to base a structure on. After months, I slowly evolved into using this structure:

**/\_assets**  
This is the folder I start with. It contains all the rough pre-dev assets like mock ups in Photoshop and Sketch of the interface and logo designs. Then when the site is developed, I put stuff like screenshots of press mentions in this folder. It’s pretty much everything that shouldn’t be on the server.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-30-04.36.54-1024x484.png)

**/public/assets/**  
This includes all public asset files. That means pretty much everything used by the front-end. CSS for styling, JS for client-side scripting, images in PNG etc. This should all be publicly accessible. All JS/CSS files are pre-processed from the /app/ folder.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-30-04.44.50-1024x467.png)

**/app/**  
This includes all front-end (SCSS, JS), back-end code (PHP, Node.JS) and also the server configuration in the nginx.conf file that Nginx uses. This folder isn’t accessible publicly by itself (only /public/ is accessible publicly). Instead, I use Nginx’s config file as a natural router to route specific URLs to specific PHP files. That allows me to control what applications are accessible by clients.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-30-22.02.42-1024x316.png)

I use [CodeKit](https://incident57.com/codekit/?ref=levels.io) to monitor this folder and automatically pre-process/minify/compile the SCSS and JS files to the **/public/assets/** folder:

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-30-04.48.18-1024x516.png)

![Screenshot 2014-08-29 17.35.40](https://levels.io/content/images/2014/08/Screenshot-2014-08-29-17.35.40-1024x705.png)

**/lib/**  
This includes all back-end server-side libraries and stuff I didn’t make myself and don’t want to edit. For example Stripe’s library for payment processing and Twitter’s OAuth library. Libraries are included from this folder by apps in the /app/ folder.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-30-04.46.47-1024x332.png)

**/workers/**  
This includes all app files that are scheduled and do stuff in the background by cron jobs. Think about sending out email queues or downloading/uploading data on a daily basis, like scraping or backing up files. I guess you could call them agents or daemons too.

**/logs/**  
This includes simple .txt files to log stuff. If I do a scheduled cron job, I usually do it like this:

> \*\*\* \* \* \* php -f /srv/http/domain.com/workers/doStuff.php > /srv/http/domain.com/logs/doStuff.txt\*\*

This enables me to quickly check up on the result of any scheduled jobs.

**/data/**  
This includes all data used by the app. I actually shy away from using real database systems in the 12 startups. Instead I use JSON text files. Wow. Yes. What a shocker! So this is for example how [NomadList](http://nomadlist.io/?ref=levels.io)‘s data looks. Every text file usually just contains a JSON encoded array of data. The string in the filename is an MD5 hash of what it’s about. With NomadList, that’s the city + state + country name.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-30-04.32.13-1024x899.png)

So yep very rough. Is this a horrible idea? Sure. But I’m not a programmer and at this scale it’s fast to develop with. If there’s anything I hate more, it’s setting up a database structure. How the hell am I going to know what fields I will want to use? It’s slow and for me it seems super counter intuitive. Especially if you like to code fast.

You can always write a script that puts this in a MySQL/MariaDB/PostgreSQL database later. I’d say if you’re getting sensitive user data though you will want to secure it in a more decent fashion.

## My coding style

Except for jQuery, I don’t use any frameworks. Why? Because many times, they just make things more complex. I kind of just write code. I do want to keep things clean and fast though. I like DRY KISSes: Don’t Repeat Yourself and Keep It Simple Stupid. When I need a function or piece of code I already wrote before, I grab it from a previous project. That saves some time.

## To-do lists

So how do I know what I’m doing in a day? I used to have serious difficulties getting tasks done. [Trello](http://trello.com/?ref=levels.io) helps a lot. It’s a kan-ban type system that lets you make lists with cards in it. Each card can be a task. You can arrange lists whichever way you want. And you can have multiple boards for different projects. Just go [try it now](http://trello.com/?ref=levels.io), it’s free and awesome.

I have a particular workflow with Trello. I think I saw somebody else on [Hacker News](http://news.ycombinator.com/?ref=levels.io) do this and that’s where I copied it from. I have a list for this year, this month, this week, today and now. When I go do something I drag it in to the ‘now’ list. That gives me an immediate sense of action and knowing what to focus on.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-31-01.37.10-1024x316.png)

When I finish the task, I drag it to the list on the left. This list holds all completed tasks for this week. At the end of the week, I move this entire list out of the ‘to-do’ board to the ‘finished’ board.

![](https://levels.io/content/images/2014/08/Screenshot-2014-08-31-01.43.30-1024x480.png)

Now it’s out of my way. This list is important because it gives you a sense of satisfaction and loose measurement of how productive your week is. And the fun thing is, after a while of doing this, you can go to the ‘finished’ board and see everything you did for the last X weeks. And it makes you feel quite productive and proud of yourself! ^\_^

## Conclusion

So that’s how I work! Not really special but since many people asked I thought this might help.

Like I said it’s probably not following any best practices. But it works. I actually ship products.

I think the most important thing to remember is that it doesn’t really matter how people do things. When I used to make electronic music, the forums would be full of people asking “which tools do XXX use?” and “which program do you make this bassline with”, and in the end it wouldn’t matter. It doesn’t matter if you use PHP, Node.JS, Ruby or whatever hip new language. Everyone uses different tools and has their own ways and tricks. It’s really about what you’re best, quickest and most comfortable with.

When you are unified with your tools, you can really make anything ^\_o

P.S. I'm on [Twitter](https://twitter.com/levelsio) too if you'd like to follow more of my stories. And I wrote a book called [MAKE](https://makebook.io/) about building startups without funding. [See a list of my stories](https://levels.io/archive/) or [contact me](https://levels.io/contact-me/). To get an alert when I write a new blog post, you can subscribe below: