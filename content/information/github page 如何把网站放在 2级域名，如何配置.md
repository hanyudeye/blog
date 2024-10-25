---
layout: default
toc: false
title: github page 如何把网站放在 2级域名，如何配置
date:  2024-10-26T07:12:27+08:00
categories: ['']
---

 在 GitHub Pages 上配置二级域名可以通过自定义域名设置完成，步骤如下：

### 1. 在 GitHub 仓库中设置 CNAME 文件

1. 打开你的网站项目的 GitHub 仓库。
2. 创建一个名为 `CNAME` 的文件（没有扩展名），在文件中写入你的二级域名，比如 `blog.example.com`。
3. 保存并提交该文件到仓库的根目录。

这样 GitHub Pages 就会识别并绑定到指定的二级域名。

### 2. 在域名提供商处设置 DNS 解析记录

登录你的域名提供商管理面板，找到 DNS 设置选项，添加以下记录：

- **记录类型**：CNAME
- **主机名**：输入你想要的二级域名前缀，例如 `blog`
- **指向**：输入 `你的用户名.github.io`，例如 `username.github.io`

这样，`blog.example.com` 就会指向你的 GitHub Pages 站点。

### 3. 检查 GitHub Pages 设置

1. 返回 GitHub 仓库页面，点击 `Settings` -> `Pages`。
2. 在 “Custom domain” 下，查看是否显示了你配置的域名，并确认 SSL 已启用（HTTPS）。
3. 如果 SSL 尚未启用，稍等片刻，GitHub Pages 通常会自动申请 SSL 证书并启用 HTTPS。

### 4. 等待生效

DNS 解析可能需要几分钟到几小时才能生效。生效后，你的 GitHub Pages 网站就可以通过二级域名访问了。

### 注意事项

- 确保在 GitHub 仓库的 `Settings > Pages` 中的 **Source** 已正确配置为 `main` 分支或 `gh-pages` 分支。
- 有时，可能需要清除浏览器缓存以查看最新的 DNS 更改。