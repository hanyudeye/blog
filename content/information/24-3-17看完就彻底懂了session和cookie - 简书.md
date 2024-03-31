## 看完就彻底懂了session和cookie

[![](https://upload.jianshu.io/users/upload_avatars/2038576/cbfea7a8-2d1c-48b4-b818-c5c25eca35c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp)](https://www.jianshu.com/u/54c75f2bd9e3)

32016.07.07 19:54:43字数 1,498阅读 46,246

## http 之session和cookie

-   由于HTTP协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识具体的用户，这个机制就是Session.典型的场景比如购物车，当你点击下单按钮时，由于HTTP协议无状态，所以并不知道是哪个用户操作的，所以服务端要为特定的用户创建了特定的Session，用用于标识这个用户，并且跟踪用户，这样才知道购物车里面有几本书。这个Session是保存在服务端的，有一个唯一标识。在服务端保存Session的方法很多，内存、数据库、文件都有。集群的时候也要考虑Session的转移，在大型的网站，一般会有专门的Session服务器集群，用来保存用户会话，这个时候 Session 信息都是放在内存的，使用一些缓存服务比如Memcached之类的来放 Session。

2.  **思考一下服务端如何识别特定的客户**？这个时候Cookie就登场了。每次HTTP请求的时候，客户端都会发送相应的Cookie信息到服务端。实际上大多数的应用都是用 Cookie 来实现Session跟踪的，第一次创建Session的时候，服务端会在HTTP协议中告诉客户端，需要在 Cookie 里面记录一个Session ID，以后每次请求把这个会话ID发送到服务器，我就知道你是谁了。有人问，如果客户端的浏览器禁用了 Cookie 怎么办？一般这种情况下，会使用一种叫做URL重写的技术来进行会话跟踪，即每次HTTP交互，URL后面都会被附加上一个诸如 sid=xxxxx 这样的参数，服务端据此来识别用户。
3.  Cookie其实还可以用在一些方便用户的场景下，设想你某次登陆过一个网站，下次登录的时候不想再次输入账号了，怎么办？这个信息可以写到Cookie里面，访问网站的时候，网站页面的脚本可以读取这个信息，就自动帮你把用户名给填了，能够方便一下用户。这也是Cookie名称的由来，给用户的一点甜头。  
    所以，总结一下：  
    Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中；  
    Cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式

### Cookie： --->常见的应用场景是：自动登录的

Cookie是浏览器保存信息的一种方式，可以理解为一个文件，保存到客户端了啊，服务器可以通过响应浏览器的set-cookie的标头，得到Cookie的信息。你可以给这个文件设置一个期限，这个期限呢，不会因为浏览器的关闭而消失啊。其实大家应该对这个效果不陌生，很多购物网站都是这个做的，即使你没有买东西，他也记住了你的喜好，现在回来，会优先给你提交你喜欢的东西啊，他们也真是煞费苦心了啊。

#### Cookie的操作：

-   添加Cookie
    
    ```cpp
    Cookie cookie = new Cookie("user", "suntao"); cookie.setMaxAge(7*24*60*60); // 一星期有效 response.addCookie(cookie);
    ```
    
-   获取Cookie
    
    ```dart
    // 因为取得的是整个网页作用域的Cookie的值，所以得到的是个数组 Cookie[] cookies = request.getCookies(); for(int i = 0 ; i < cookies.length ; i++){ String name = cookies[i].getName() ; String value = cookies[i].getValue() ; }
    ```
    

> cookie的存活期：默认为-1  
> 会话Cookie：把Cookie保存到浏览器上，当存活期为负数  
> 持久Cookie：把Cookie保存到文件中，当存活期为正数  
> 设置存活期：c.setMaxAge();

### HttpSession 会话机制 -->Servlet的会话机制的实现

创建于服务器端，保存于服务器，维护于服务器端,每创建一个新的Session,服务器端都会分配一个唯一的ID，并且把这个ID保存到客户端的Cookie中，保存形式是以JSESSIONID来保存的。

-   |-- 通过HttpServletRequest.getSession 进行获得HttpSession对象，通过setAttribute()给会话赋值，可以通过invalidate()将其失效。
    
-   |--每一个HttpSession有一个唯一的标识SessionID，只要同一次打开的浏览器通过request获取到session都是同一个。
    
-   |--WEB容器默认的是用Cookie机制保存SessionID到客户端，并将此Cookie设置为关闭浏览器失效，Cookie名称为：JSESSIONID
    
-   |--每次请求通过读取Cookie中的SessionID获取相对应的Session会话
    
-   |--HttpSession的数据保存在服务器端，所以不要保存数据量耗资源很大的数据资源，必要时可以将属性移除或者设置为失效
    
-   |--HttpSession可以通过setMaxInactiveInterval()设置失效时间(秒)或者在web.xml中配置
    
    ```xml
    <session-config> <!--单位：分钟--> <session-timeout>30</session-timeout> </session-config>
    ```
    
-   |--HttpSession默认使用Cookie进行保存SessionID，当客户端禁用了Cookie之后，可以通过URL重写的方式进行实现。
    
    -   可以通过response.encodeURL(url) 进行实现
        
    -   API对encodeURL的结束为，当浏览器支持Cookie时，url不做任何处理；当浏览器不支持Cookie的时候，将会重写URL将SessionID拼接到访问地址后。
        

要想了解内部发生了什么操作，点击以下链接[Http Session和Cookie原理](https://link.jianshu.com/?t=http://my.oschina.net/biezhi/blog/490242#OSC_h2_3)

最后编辑于

：2017.12.03 07:51:44

更多精彩内容，就在简书APP

![](https://upload.jianshu.io/images/js-qrc.png)

"小礼物走一走，来简书关注我"

[![  ](https://cdn2.jianshu.io/assets/default_avatar/3-9a2bcc21a5d89e21dafc73b39dc5f582.jpg)](https://www.jianshu.com/u/51344b645c49)共1人赞赏

[![  ](https://upload.jianshu.io/users/upload_avatars/2038576/cbfea7a8-2d1c-48b4-b818-c5c25eca35c8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp)](https://www.jianshu.com/u/54c75f2bd9e3)

总资产207共写了7.2W字获得1,257个赞共633个粉丝

-   序言：七十年代末，一起剥皮案震惊了整个滨河市，随后出现的几起案子，更是在滨河造成了极大的恐慌，老刑警刘岩，带你破解...
    
    [![](https://upload.jianshu.io/users/upload_avatars/15878160/783c64db-45e5-48d7-82e4-95736f50533e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)沈念sama](https://www.jianshu.com/u/dcd395522934)阅读 148,225评论 1赞 315
    
-   序言：滨河连续发生了三起死亡事件，死亡现场离奇诡异，居然都是意外死亡，警方通过查阅死者的电脑和手机，发现死者居然都...
    
-   文/潘晓璐 我一进店门，熙熙楼的掌柜王于贵愁眉苦脸地迎上来，“玉大人，你说我怎么就摊上这事。” “怎么了？”我有些...
    
-   文/不坏的土叔 我叫张陵，是天一观的道长。 经常有香客问我，道长，这世上最难降的妖魔是什么？ 我笑而不...
    
-   正文 为了忘掉前任，我火速办了婚礼，结果婚礼上，老公的妹妹穿的比我还像新娘。我一直安慰自己，他们只是感情好，可当我...
    
    [![](https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)茶点故事](https://www.jianshu.com/u/0f438ff0a55f)阅读 49,991评论 1赞 266
    
-   文/花漫 我一把揭开白布。 她就那样静静地躺着，像睡着了一般。 火红的嫁衣衬着肌肤如雪。 梳的纹丝不乱的头发上，一...
    
-   那天，我揣着相机与录音，去河边找鬼。 笑死，一个胖子当着我的面吹牛，可吹牛的内容都是我干的。 我是一名探鬼主播，决...
    
-   文/苍兰香墨 我猛地睁开眼，长吁一口气：“原来是场噩梦啊……” “哼！你这毒妇竟也来了？” 一声冷哼从身侧响起，我...
    
-   序言：老挝万荣一对情侣失踪，失踪者是张志新（化名）和其女友刘颖，没想到半个月后，有当地人在树林里发现了一具尸体，经...
    
-   正文 独居荒郊野岭守林人离奇死亡，尸身上长有42处带血的脓包…… 初始之章·张勋 以下内容为张勋视角 年9月15日...
    
    [![](https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)茶点故事](https://www.jianshu.com/u/0f438ff0a55f)阅读 29,713评论 2赞 226
    
-   正文 我和宋清朗相恋三年，在试婚纱的时候发现自己被绿了。 大学时的朋友给我发了我未婚夫和他白月光在一起吃饭的照片。...
    
    [![](https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)茶点故事](https://www.jianshu.com/u/0f438ff0a55f)阅读 31,067评论 1赞 236
    
-   序言：一个原本活蹦乱跳的男人离奇死亡，死状恐怖，灵堂内的尸体忽然破棺而出，到底是诈尸还是另有隐情，我是刑警宁泽，带...
    
-   正文 年R本政府宣布，位于F岛的核电站，受9级特大地震影响，放射性物质发生泄漏。R本人自食恶果不足惜，却给世界环境...
    
    [![](https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)茶点故事](https://www.jianshu.com/u/0f438ff0a55f)阅读 31,994评论 3赞 216
    
-   文/蒙蒙 一、第九天 我趴在偏房一处隐蔽的房顶上张望。 院中可真热闹，春花似锦、人声如沸。这庄子的主人今日做“春日...
    
-   文/苍兰香墨 我抬头看了看天上的太阳。三九已至，却和暖如春，着一层夹袄步出监牢的瞬间，已是汗流浃背。 一阵脚步声响...
    
-   我被黑心中介骗来泰国打工， 没想到刚下飞机就差点儿被人妖公主榨干…… 1. 我叫王不留，地道东北人。 一个月前我还...
    
-   正文 我出身青楼，却偏偏与公主长得像，于是被迫代替她去往敌国和亲。 传闻我的和亲对象是个残疾皇子，可洞房花烛夜当晚...
    
    [![](https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)茶点故事](https://www.jianshu.com/u/0f438ff0a55f)阅读 34,252评论 2赞 241
    

### 被以下专题收入，发现更多相似内容

### 推荐阅读[更多精彩内容](https://www.jianshu.com/)

-   转自 ：http://blog.csdn.net/taoff/articles/1921009.aspx 一、术语...
    
-   1\. cookie 1.1 什么是cookie cookie 是存储于访问者的计算机中的变量。每当同一台计算机通过...
    
-   背景在HTTP协议的定义中，采用了一种机制来记录客户端和服务器端交互的信息，这种机制被称为cookie，cooki...
    
    [![](https://upload.jianshu.io/users/upload_avatars/1063431/5ab45111-774b-4cb2-a1e3-4b0702bf02a3.png?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp)时芥蓝](https://www.jianshu.com/u/bd4811478d4b)阅读 2,311评论 1赞 17
    
-   青鹤生气道：“绿萝姑娘再美与我有什么关系？那是殿下喜欢的人。” 包子知道青鹤又误会了她，耐心地解释道：“我想问的是...
    
    [![](https://cdn2.jianshu.io/default_avatar/9.jpg)柳汀雪](https://www.jianshu.com/u/7f8f2d719cf6)阅读 268评论 0赞 0
    
-   在那些青春年少的岁月中，多少都会有些青涩美好的记忆，有的人相识，有的人分离，有的人成为朋友而有的人却咫尺天涯。 故...
    
    [![](https://cdn2.jianshu.io/default_avatar/11.jpg)随峰星起](https://www.jianshu.com/u/6f171c11a49d)阅读 187评论 0赞 0