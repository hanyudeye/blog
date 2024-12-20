---
layout: default
toc: false
title: 日常使用的比较推荐的软件
date:  2024-06-26T09:36:13+08:00
categories: ['软件']
---

这些是Windows下我推荐使用的软件

<!--more-->

## 文本朗读

balabolka，可以自动朗读剪贴板的文本。

## 配置命令快捷键 

ahk，可以设置命令对应快捷键，我用来设置快捷 打开 某应用的窗口

举个例子:

``` ahk
;切换窗口
ToggleQuakeWindowT(windowT)
{
    ; 查找窗口
    WinGet, windowID, ID,  %windowT%
    ; 如果窗口存在，则隐藏/显示
    if (windowID)
    {

        WinGet, windowState, MinMax, ahk_id %windowID%
        if (windowState)
	{
            WinRestore ahk_id %windowID%
            WinWait,%windowT%
            WinActivate
	}
        else
            WinMinimize ahk_id %windowID%
    }

}

```

## 浏览器

edge 浏览器，用来分割窗口，鼠标手势，还有侧栏，方便打开不同站点

## 编辑器

visual code ，装上 vspacecode ，方便编辑文本

