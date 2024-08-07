---
layout: default
toc: false
title: github-action 的使用
date:  2024-08-07T15:40:07+08:00
categories: ['']
---

要创建一个Hugo站点并使用 GitHub Actions 部署到 GitHub Pages，你可以按照以下步骤进行设置。以下是一个完整的 GitHub Actions 配置文件示例：

### 1. 创建 Hugo 站点

如果你还没有 Hugo 站点，可以通过以下命令创建：

```bash
hugo new site my-hugo-site
cd my-hugo-site
```

然后在你的 Hugo 站点中添加内容并选择一个主题。

### 2. 设置 GitHub Pages 仓库

在 GitHub 上创建一个新的仓库，并将 Hugo 站点的内容推送到该仓库。确保你已经设置了 GitHub Pages。在仓库的设置中，选择 GitHub Pages 的源（例如 `gh-pages` 分支）。

### 3. 创建 GitHub Actions 配置文件

在你的 Hugo 站点仓库中，创建以下目录和文件：

```
.github/workflows/deploy.yml
```

将以下内容粘贴到 `deploy.yml` 文件中：

```yaml
name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches:
      - main  # 当 main 分支有推送时触发

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: 'latest'

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'

    - name: Install dependencies
      run: npm install

    - name: Build Hugo site
      run: hugo --minify

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```


### 4. 配置 `gh-pages` 分支

确保你已经在仓库中设置了 `gh-pages` 分支作为 GitHub Pages 的发布源。如果还没有创建 `gh-pages` 分支，可以通过以下命令创建：

```bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout main
```

### 5. 推送代码并触发部署

将你的代码推送到 GitHub 仓库的 `main` 分支，这将触发 GitHub Actions 部署流程：

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

完成这些步骤后，每当你向 `main` 分支推送更改时，GitHub Actions 将自动构建并部署你的 Hugo 站点到 GitHub Pages。

