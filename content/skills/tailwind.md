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

- sm 适用于最小宽度为 640px 的设备；
- md 适用于最小宽度为 768px 的设备；
- lg 适用于最小宽度为 1024px 的设备；
- xl 适用于最小宽度为 1280px 的设备；
- 2xl 适用于最小宽度为 1536px 的设备。

``` html
<div class="bg-blue-500 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500">
  这是一个响应式背景色
</div>
```

 
下面是一个详细的 **Tailwind CSS 教程笔记**，涵盖了从基础到进阶的用法，逐步解释其功能与特性。

---

## **什么是 Tailwind CSS?**
- **Tailwind CSS** 是一个功能类优先的 CSS 框架。
- 它不像传统框架（如 Bootstrap）那样提供预先设计好的组件，而是通过 **原子化的 CSS 类** 快速构建自定义设计。

---

## **安装与配置**

### 1. 安装 Tailwind CSS
#### 使用 npm 安装
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### 配置文件生成
运行 `npx tailwindcss init` 会生成一个默认的配置文件 `tailwind.config.js`，它允许你自定义颜色、间距、字体等。

### 2. 添加 Tailwind 到 CSS 文件
在项目的主 CSS 文件中（如 `styles.css`），添加以下内容：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. 构建 CSS
#### 开发环境
```bash
npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch
```
#### 生产环境
开启 **压缩模式**：
```bash
NODE_ENV=production npx tailwindcss -o ./dist/output.css --minify
```

---

## **核心概念**

### 1. **Utility-first Classes**
- **Utility 类** 是 Tailwind 的核心，每个类都执行一个小功能，比如设置颜色、边距、排版等。
- 示例：
  ```html
  <div class="bg-blue-500 text-white p-4 rounded">
    Hello, Tailwind!
  </div>
  ```
  - `bg-blue-500`：背景色为蓝色。
  - `text-white`：文字颜色为白色。
  - `p-4`：内边距为 `1rem`。
  - `rounded`：圆角。

---

### 2. **颜色**
Tailwind 内置了一组丰富的颜色系统：
- **背景颜色**：
  ```html
  <div class="bg-red-500">背景颜色是红色</div>
  ```
- **文字颜色**：
  ```html
  <p class="text-green-600">文字颜色是绿色</p>
  ```
- **边框颜色**：
  ```html
  <div class="border border-yellow-400">边框颜色是黄色</div>
  ```
  
自定义颜色可通过 `tailwind.config.js` 文件扩展：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        customPurple: '#7C3AED',
      },
    },
  },
};
```
然后使用：
```html
<div class="bg-customPurple text-white">自定义紫色</div>
```

---

### 3. **间距（Spacing）**
Tailwind 提供了统一的间距单位：
- **内边距（Padding）**：
  ```html
  <div class="p-4">Padding 为 1rem</div>
  <div class="px-2 py-4">X 轴 Padding 为 0.5rem，Y 轴为 1rem</div>
  ```
- **外边距（Margin）**：
  ```html
  <div class="m-8">Margin 为 2rem</div>
  <div class="mx-auto my-4">X 轴自动对齐，Y 轴 Margin 为 1rem</div>
  ```

---

### 4. **布局**
- **Flexbox**：
  ```html
  <div class="flex items-center justify-center">
    <p>这是一个 Flexbox 布局</p>
  </div>
  ```
  - `flex`：启用 Flex 布局。
  - `items-center`：垂直居中。
  - `justify-center`：水平居中。

- **Grid**：
  ```html
  <div class="grid grid-cols-3 gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  ```
  - `grid`：启用网格布局。
  - `grid-cols-3`：创建 3 列。
  - `gap-4`：设置网格间距。

---

### 5. **排版（Typography）**
- **字体大小**：
  ```html
  <p class="text-lg">文字大小为大号</p>
  ```
- **字体粗细**：
  ```html
  <p class="font-bold">加粗字体</p>
  <p class="font-light">细字体</p>
  ```
- **行高**：
  ```html
  <p class="leading-loose">行高较大</p>
  ```

---

### 6. **圆角与边框**
- **圆角**：
  ```html
  <div class="rounded">默认圆角</div>
  <div class="rounded-full">完全圆形</div>
  <div class="rounded-lg">较大的圆角</div>
  ```
- **边框**：
  ```html
  <div class="border border-gray-300">灰色边框</div>
  <div class="border-2 border-blue-500">更粗的蓝色边框</div>
  ```

---

### 7. **响应式设计**
Tailwind 内置了响应式断点：
- **断点前缀**：
  ```html
  <div class="text-sm md:text-lg lg:text-xl">
    这是响应式文字
  </div>
  ```
  - `md:`：中屏（768px）。
  - `lg:`：大屏（1024px）。
  - `xl:`：超大屏（1280px）。

---

### 8. **伪类**
通过 `hover`、`focus`、`active` 等伪类设置状态样式：
- **悬停样式**：
  ```html
  <button class="bg-blue-500 hover:bg-blue-700 text-white">
    Hover 我
  </button>
  ```
- **焦点样式**：
  ```html
  <input class="border focus:border-blue-500">
  ```

---

### 9. **动画与过渡**
- **过渡效果**：
  ```html
  <button class="bg-red-500 transition duration-300 ease-in-out hover:bg-red-700">
    鼠标悬停时变色
  </button>
  ```
  - `transition`：启用过渡效果。
  - `duration-300`：持续时间 300ms。
  - `ease-in-out`：缓入缓出。

- **动画类**：
  ```html
  <div class="animate-bounce">跳跃效果</div>
  <div class="animate-spin">旋转效果</div>
  ```

---

## **进阶功能**

### 1. **插件系统**
Tailwind 支持通过插件扩展功能。例如添加表单样式插件：
```bash
npm install -D @tailwindcss/forms
```

在 `tailwind.config.js` 中启用：
```javascript
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

---

### 2. **JIT 模式**
通过 Just-In-Time 模式，Tailwind 可以按需生成 CSS，优化性能。
启用方法：
```javascript
module.exports = {
  mode: 'jit',
};
```

---

### 3. **暗黑模式**
Tailwind 内置了暗黑模式支持：
```javascript
module.exports = {
  darkMode: 'class', // 启用 class 方式的暗黑模式
};
```

使用时：
```html
<div class="dark:bg-black dark:text-white">
  暗黑模式支持
</div>
```

---

### 总结
Tailwind CSS 是一个灵活的框架，通过原子化类名可以快速构建自定义设计。学习它的关键是熟悉类名及其含义，通过练习和项目应用，你将能更高效地使用 Tailwind CSS 构建出高质量的界面。