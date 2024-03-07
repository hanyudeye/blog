---
layout: default
toc: false
title: 24-3-7如何调试python代码
date:  2024-03-07T07:50:42+08:00
categories: ['']
---

说明：执行别人代码时才要调试，自己代码一般不需要

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

1. 打断点
2. F5 执行
3. F10 单步
4. Shift+F5 中断

