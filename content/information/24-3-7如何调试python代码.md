---
layout: default
toc: false
title: 24-3-7如何调试python代码
date:  2024-03-07T07:50:42+08:00
categories: ['']
---


1. 配置 DEBUG

在 .vscode/launch.json 配置文件中

```json

"configurations":[
    {
        "name": "调试配置名字",
        "type": "python",   //语言
        "request":"launch",//由VS Code来启动一个独立的具有debug功能的程序。
        ""
        "program":"${file}",
        "console":"integratedTerminal",
    }
]
```

3.request是最重要的参数，它能选择两种类型，一个是launch模式，一个是attach模式：

launch模式：由VS Code来启动一个独立的具有debug功能的程序。

attach模式：监听一个已启动的程序（其必须已经开启debug模式）。

大多数情况下，调试Python都是用launch模式。少数情况下，你无法通过新建独立程序来调试（如要与浏览器相结合的程序，launch模式会导致你大部分浏览器插件失效），这时候就需要attach模式。

4.program: 文件的绝对路径，一般不需要改动。

5.console: 终端的类型， integratedTerminal 指使用vscode终端。

当然，我们还可以设置其他参数，比如 stopOnEntry: true , 可以在进入程序的时候就暂停执行：


## 正文

VS Code是一款非常好用的编辑器，现在我基本上所有的开发任务都在VS Code上完成。它的代码调试[工具](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/tools/)其实也非常强大，但是许多人都不知道该怎么用，今天就来学习怎么用它调试[Python代码](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/python%25e4%25bb%25a3%25e7%25a0%2581/)吧。

## 1.准备

既然是用VS Code调试[Python代码](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/python%25e4%25bb%25a3%25e7%25a0%2581/)，那当然你得先安装好Python啦，如果你还没有安装，可以看这篇文章：[超详细Python安装指南](https://link.zhihu.com/?target=https%3A//pythondict.com/python-tutorials/how-to-install-python/)

除此之外，确保你已经安装了最新版本的VS Code: [https://code.visualstudio.com/](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/) 。安装完成后，记得还要安装Python扩展，打开VS Code，如下图所示安装Python扩展：

![](https://pic4.zhimg.com/v2-d7841a05058a0ee91ebf06d00e24c64f_b.jpg)

## 2.配置调试环境

打开VS Code的DEBUG设置，先点击左边的虫子，再点击上面的齿轮：

![](https://pic3.zhimg.com/v2-0cd8bc6f52a9d7bc894015369bee3876_b.jpg)

点击后提示选择一种语言，选择Python。然后要指定相应的文件类型，可以看到，它支持许多种Python的调试方法，有[Django](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/django/), Flask, 甚至是 Pyramid. 由于下面我们要讲的只是单文件的代码调试，因此选择Python File.

![](https://pic2.zhimg.com/v2-1623284037508432da83bfcdb0fcb621_b.jpg)

![](https://pic4.zhimg.com/v2-d5cd369b929734b31d156712572e8b7f_b.jpg)

然后会自动在当前文件夹的根目录/.[vscode](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/vscode/)中生成一个launch.json的配置文件，打开后你会发现长这个样子：

![](https://pic4.zhimg.com/v2-26af09b2b29f3d83ab8cffe987fa602f_b.jpg)

**下面是这些字段的说明：**

1.name: 当前DEBUG配置的名称。

2.Type: 指什么语言。

3.request是最重要的参数，它能选择两种类型，一个是launch模式，一个是attach模式：

launch模式：由VS Code来启动一个独立的具有debug功能的程序。

attach模式：监听一个已启动的程序（其必须已经开启debug模式）。

大多数情况下，调试Python都是用launch模式。少数情况下，你无法通过新建独立程序来调试（如要与浏览器相结合的程序，launch模式会导致你大部分浏览器插件失效），这时候就需要attach模式。

4.program: 文件的绝对路径，一般不需要改动。

5.console: 终端的类型， integratedTerminal 指使用[vscode](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/vscode/)终端。

当然，我们还可以设置其他参数，比如 stopOnEntry: true , 可以在进入程序的时候就暂停执行：

![](https://pic4.zhimg.com/v2-b413638df8c305c89a66fad23c6dec83_b.jpg)

## 3.编写一段调试用的代码

我们先随便编写一串代码，来演示怎么查看变量的值：

```text
import random a = random.randint(0,100) b = random.randint(0,100) print(a*b)
```

打开debug面板，点击绿色的播放按钮，就会在代码块上方出现一个控制条，点击单步调试，就能够一行行地执行代码：

![](https://pic4.zhimg.com/v2-13bf45c675a88f8bc108d3c0b4a01943_b.jpg)

第二行执行完毕后，左边便会出现a变量相应的值：

![](https://pic3.zhimg.com/v2-06bb8a539f959bccc300ea34ca06c3d6_b.jpg)

这样，通过调试，你能清楚知道a\*b的结果中，a和b分别对应的值。

但是，在工作生活中，我们自己写的模块、代码很少有需要调试的时候。只有当我们使用别的人框架或者别人的开源模块时，才时常会遇到问题，这时候调试[工具](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/tools/)才能发挥出最大的功效，比如下面这个例子：

```text
import sys f = open('20191206/myfile.txt') s = f.readline() print(s)
```

![](https://pic4.zhimg.com/v2-73c52038ae9b2b87c9161484b0b41c2f_b.png)

像这种编码问题，用调试[工具](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/tools/)是非常容易解决的：

先打一个断点：

![](https://pic1.zhimg.com/v2-d4036b3484506ce1e9c967ea0fbfc018_b.jpg)

进行调试，运行到报错的这一句话时，左边有f对象的详细信息，点击后可以看到encoding参数是cp936，而我们文件里的字符串本身是utf-8的，因此，我们在打开文件的时候要设置打开编码。

![](https://pic1.zhimg.com/v2-b5130c037ba9d1699fcfd4cf6110386c_b.jpg)

修改代码如下即可正常运行：

```text
import sys f = open('20191206/myfile.txt', encoding='utf-8') s = f.readline() print(s)
```

调试[工具](https://link.zhihu.com/?target=https%3A//pythondict.com/tag/tools/)的强大还不止如此，VS Code还有监视和调用堆栈的查看功能，虽然整体上并不如pycharm，但是对于我们中小型项目的调试其实是完全足够了。

我们的文章到此就结束啦，如果你希望我们今天的[Python 教程](https://link.zhihu.com/?target=https%3A//pythondict.com/)，请持续关注我们，如果对你有帮助，麻烦在下面点一个赞/在看哦

![](https://pic2.zhimg.com/v2-2fdaf428edaeb4f721adafe872ef656d_b.gif)

有任何问题都可以在下方留言区留言，我们都会耐心解答的！

___

Python实用宝典 [(pythondict.com](https://link.zhihu.com/?target=http%3A//pythondict.com/))  
不只是一个宝典  
欢迎关注公众号：Python实用宝典

原文来自Python实用宝典：[Python 使用VS Code进行调试](https://link.zhihu.com/?target=https%3A//pythondict.com/python-solution/python-vscode-debug/)

![](https://pic1.zhimg.com/v2-81bbd65d215053e43ba0d4911db8a1cc_b.jpg)