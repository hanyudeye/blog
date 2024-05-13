---
layout: default
toc: false
title: Tailwind CSS (顺风)
date:  2024-05-13T10:51:27+08:00
categories: ['']
---

#  Tailwind CSS

Tailwind CSS 是一个强大的工具，用于快速构建现代网页界面，包括移动端样式。

<!--more-->

## 安装

### 1. Tailwind Cli

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Add the paths to all of your template files in your tailwind.config.js file.

``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. CDN

## 响应式设计

Tailwind CSS 提供了一系列的响应式类，可以根据屏幕尺寸来调整样式。例如，你可以使用 sm:、md:、lg:、xl: 等前缀来指定不同屏幕尺寸下的样式。

``` html
<div class="bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500">
  这是一个响应式背景色
</div>
```
