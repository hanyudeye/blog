> If you want to learn how to 📦 3d scan any object with just your phone's 📸 camera: in this thread I will explain how to do that for free 🙃 [pic.twitter.com/uiW9EQYMvE](https://t.co/uiW9EQYMvE?ref=levels.io)  
> 如果你想学习如何使用手机的摄像头对任何物体进行3D扫描：在这篇文章中，我将免费解释如何做到这pic.twitter.com/uiW9EQYMvE📸
> 
> — Pieter Levels @ 🇳🇱 (@levelsio) [October 21, 2017](https://twitter.com/levelsio/status/921754472539459586?ref_src=twsrc%5Etfw&ref=levels.io)  
> \- Pieter Levels @Levelsio（@levelsio）2017年10月21日

Something many people don’t know is that these days you can 3d scan any object with just your phone camera. It’s called photogrammetry, it’s really cool and looks like this:  
很多人不知道的是，现在你可以用手机摄像头对任何物体进行3d扫描。它叫做摄影测量学，它看起来很酷，就像这样：

![](https://levels.io/content/images/2017/10/Image2.jpg)

You can also use hundreds of cameras to do it:  
您也可以使用数百个摄像头来完成：

![](https://levels.io/content/images/2017/10/Photogrammetry.jpg)

The idea behind photogrammetry is that you take lots of photos (50 to 1,000 to even more) from different angles of an object, left, right, up, down, front, behind and software then stitches together lots of photos (from 50 to 1,000).  
摄影测量背后的想法是，你从一个物体的不同角度拍摄大量照片（50到1,000甚至更多），左，右，上，下，前，后和软件，然后将大量照片拼接在一起（从50到1,000）。

![](https://levels.io/content/images/2017/10/botetourt1.jpg)

It figures out the angle each photo is taken at and based on the differences between the photos figures out 3d depth data. It creates something called a “point cloud” of 3d points:  
它计算出每张照片拍摄的角度，并根据照片之间的差异计算出3d深度数据。它创建了一个叫做"点云"的三维点：

![](https://levels.io/content/images/2017/10/3dselect2.png)

## Does it work? 它有用吗？

Now, you’d think that photogrammetry would be nice in theory, but in practice? Well, it actually works really really well. So well that in many cases it’s sharper than an average infrared or laser based 3d scanner.  
现在，你可能会认为摄影测量在理论上很好，但在实践中呢？实际上，它真的很好用。在许多情况下，它比一般的红外或激光3d扫描仪更清晰。

## How to do it?  
怎么做？

First, take lots of photos of your object. In my case, I shot pics of a classic ornament in my parents old house that they want to 3d print for their new house. I know, I know, it looks demonic AF:  
首先，给你的物体拍很多照片。在我的例子中，我在我父母的老房子里拍摄了一个经典装饰品的照片，他们想为他们的新房子3d打印。我知道，我知道，它看起来像恶魔：

![](https://levels.io/content/images/2017/10/IMG_0438.jpg)

![](https://levels.io/content/images/2017/10/IMG_0436.jpg)

![](https://levels.io/content/images/2017/10/IMG_0423.jpg)

After 50 pics: 50张照片后：

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-21-at-5.27.40-PM.png)

Second, send your photos to your computer (use Airdrop etc.).  
第二，将照片发送到您的计算机（使用Airdrop等）。

Third, upload those photos to [Autodesk Recap 360](http://recap360.autodesk.com/?ref=levels.io). That’s a web app front end for Autodesk’s 3d processing servers. You’ll need to make a free Autodesk account, login and you can upload.  
然后，将这些照片上传到Autodesk Recap 360。这是Autodesk 3D处理服务器的Web应用程序前端。您需要创建一个免费的Autodesk帐户，登录并上传。

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-21-at-5.26.08-PM.png)

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-21-at-5.25.54-PM.png)

You then get back a 3d model. You can view it in 3d on Autodesk’s site.  
然后你会得到一个3D模型。您可以在Autodesk网站上以3D形式查看它。

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-22-at-2.12.14-AM.png)

Better yet, you can download the 3d model as an zip file that has 3 files.  
更好的是，你可以下载3d模型作为一个压缩文件，有3个文件。

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-21-at-5.34.02-PM.png)

You get an .OBJ 3d model:  
你得到一个.OBJ 3D模型：

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-21-at-5.34.48-PM-1.png)

.. a material file .MTL and a texture file as a .JPG that’s simply a raw image of the textures it projects on your 3d object.  
..一个材质文件.MTL和一个纹理文件.JPG，这只是一个原始图像的纹理，它的项目在您的三维对象。

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-21-at-5.35.59-PM.png)

## What to do with your 3d object?  
如何处理你的3D对象？

There’s 3 things you can do now:  
你现在可以做三件事：

### Share it online 在线分享

To share your object with the world, you can upload it to a site like [Sketchfab](http://sketchfab.com/?ref=levels.io). It’s a 3d model sharing community where anyone can upload, download and share 3d objects, not just 3d scans. Here’s my model:  
要与世界分享您的对象，您可以将其上传到像Sketchfab这样的网站。这是一个3d模型共享社区，任何人都可以上传，下载和共享3d对象，而不仅仅是3d扫描。这是我的模型：

\### Augmented Reality  #增强现实

Thing is, Sketchfab also have a great mobile app for iOS and they just introduced AR with iOS11’s ARKit. That means with a few taps you can place your 3d object back in IRL:  
问题是，Sketchfab也有一个很棒的iOS移动的应用程序，他们刚刚在iOS 11的ARKit中引入了AR。这意味着只需点击几下，您就可以将3D对象放回IRL：

> One more thing 😊 you can put your 3d scanned object back IRL into ✨Augmented Reality with [@sketchfab](https://twitter.com/Sketchfab?ref_src=twsrc%5Etfw&ref=levels.io)’s mobile app [pic.twitter.com/5qW244kvlo](https://t.co/5qW244kvlo?ref=levels.io)  
> 还有一件事，你可以把你的三维扫描对象回IRL到增强现实与@sketchfabpic.twitter.com/5qW244kvlo
> 
> — Pieter Levels @ 🇳🇱 (@levelsio) [October 21, 2017](https://twitter.com/levelsio/status/921797078216531968?ref_src=twsrc%5Etfw&ref=levels.io)  
> \- Pieter Levels @Levelsio（@levelsio）2017年10月21日

### Virtual Reality 虚拟现实

If you have a VR headset or phone that supports it, the Sketchfab app also allows you to watch it with that. If you want to use your 3d object to make a game around, download [Unity3d](http://unity3d.com/?ref=levels.io), and you can make a VR game with it ([as I’m doing](https://levels.io/from-web-dev-to-vr-dev/)). Otherwise you can edit it in 3d with [Cinema4D](https://www.maxon.net/?ref=levels.io).  
如果你有一个支持它的VR耳机或手机，Sketchfab应用程序也可以让你用它来观看。如果你想用你的3D对象来制作一个游戏，下载Unity3d，你可以用它来制作一个VR游戏（就像我正在做的那样）。您可以使用Cinema 4D在3D中编辑它。

Plenty of options! 很多选择！

### 3d printing 3d打印

![](https://levels.io/content/images/2017/10/29.si_.jpg)

Any .OBJ file you can send to a 3d printer company and they can help you convert it into a 3d object to print. Some new [3d printers can print in full color](https://i.materialise.com/blog/how-3d-printing-in-multiple-colors-works/?ref=levels.io) now, but most still print a solid color, so you’ll have to paint it yourself.  
你可以将任何.OBJ文件发送给3D打印机公司，他们可以帮助你将其转换为3D对象进行打印。一些新的3d打印机现在可以打印全色，但大多数仍然是纯色打印，所以你必须自己画。

![](https://levels.io/content/images/2017/10/29.si_.jpg)

## What should I scan?  
我应该扫描什么？

![](https://levels.io/content/images/2017/10/male_human-3b_highlights_blog.png)  
Try scanning someone’s face. They’ll need to sit still and the background needs to be somewhat empty and flat. You can use a white bed cloth and hold it behind for better results. Or if you have a DSLR camera, use its depth of field to make sure the background is blurry. The less background you get in the picture, the better idea the processing has of the object in the foreground you want a 3d model of.  
扫描某人的脸。他们需要坐着不动，背景需要有点空和单位。您可以使用白色床布，并举行它背后更好的效果。或者，如果你有一个数码单反相机，使用它的景深，以确保背景是模糊的。你在图片中得到的背景越少，处理过程中对前景中你想要的3d模型的对象的想法就越好。

An example of how I did it wrong today, with too much background stuff going on so that there wasn’t enough detail in the object (the head/face).  
这是我今天做错的一个例子，有太多的背景材料，所以没有足够的物体细节（头部/面部）。

![](https://levels.io/content/images/2017/10/Screen-Shot-2017-10-22-at-3.12.32-AM.png)

You can also scan nostalgic objects from your childhood, so you can save them in case they’re lost. You’ll be able to watch them from anywhere you are just on your phone.  
你还可以扫描你童年时期的怀旧物品，这样你就可以保存它们，以防它们丢失。你将能够看到他们从任何地方你只是在你的手机上。

Also think of touristic monuments you’ve been to that you want to save. The process is still wieldy, but it might be fun to try.  
也想想你去过的旅游纪念碑，你想保存。这个过程仍然很实用，但尝试一下可能会很有趣。

## What’s the limitations? 有什么限制？

Photogrammetry isn’t perfect (yet). Best results are with static objects that you can move around.  
摄影测量学还不是完美的。最好的结果是与静态对象，你可以移动。

It also might take a few tries to get it right. And Autodesk’s Recap360 is now limited to 50 photos per scan, which is fine for an individual object. But too limited for real big projects. They have a paid Windows app though (whyyyyy Windows and not OSX?!). But their entire product payment and download flow is absolutely horrid, so I’d just stick to the web app!  
它也可能需要几次尝试才能正确。Autodesk的Recap 360现在限制为每次扫描50张照片，这对于单个对象来说是可以的。但对真实的大项目来说太有限了。他们有一个付费的Windows应用程序，虽然（为什么Windows而不是OSX？！）。但他们的整个产品支付和下载流程是绝对可怕的，所以我只是坚持网络应用程序！

Photogrammetry does particularly bad with big areas like rooms where it has to figure out how every picture overlaps. In those cases it’s still better to use a real 3d scanner like [Matterport](https://matterport.com/?ref=levels.io), that I bought to 3d scan my parents house. That one uses infrared to get depth. It’s less sharp with individual objects, but for big spaces it works better.  
摄影测量在像房间这样的大区域尤其糟糕，因为它必须弄清楚每张照片是如何重叠的。在这种情况下，最好还是使用像Matterport这样的真实的3D扫描仪，我买了3D扫描我父母的房子。它用红外线探测深度。它对单个物体不那么锐利，但对大空间效果更好。

## Enjoy! 好好享受吧！

Photogrammetry is cool new tech to play with. It’s not perfect yet, but rapidly improving. And it’s an example of a tech we need in the future to bridge the IRL world with the virtual. Because wouldn’t you want all your stuff in your VR beach house? Oh right, [minimalism](https://levels.io/3d-scan-phone/levels.io/minimalism)!  
摄影测量是一项很酷的新技术。它还不完美，但正在迅速改进。这是我们未来需要的一种技术的一个例子，它将IRL世界与虚拟世界联系起来。因为你不想把你所有的东西都放在你的虚拟海滩房子里吗？对，极简主义！

P.S. I'm on [Twitter](https://twitter.com/levelsio) too if you'd like to follow more of my stories. And I wrote a book called [MAKE](https://makebook.io/) about building startups without funding. [See a list of my stories](https://levels.io/archive/) or [contact me](https://levels.io/contact-me/). To get an alert when I write a new blog post, you can subscribe below:  
P.S.我也在Twitter上，如果你想关注我的更多故事。我写了一本书叫MAKE，是关于在没有资金的情况下建立初创公司的。查看我的故事列表或联系我。要在我写新博客文章时获得提醒，您可以在下面订阅：