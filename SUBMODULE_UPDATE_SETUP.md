# Content 子模块自动更新配置指南

## 已完成的配置

### 1. 主博客仓库（blog）
- ✅ 已创建 `.github/workflows/update-submodules.yml` 工作流
- ✅ 已优化 `hugo.yml` 使用 `submodules: recursive`

## 需要完成的步骤

### 2. 在 Content 仓库中配置工作流通知（使用 Personal Access Token）

由于跨仓库 API 调用需要特殊权限，`GITHUB_TOKEN` 无法完成，必须使用 Personal Access Token。

**第一步：创建 Personal Access Token**

1. 进入 https://github.com/settings/tokens
2. 点击 **Generate new token** → **Generate new token (classic)**
3. 填写信息：
   - Token name: `BLOG_DEPLOY_TOKEN`
   - Expiration: 选择 **No expiration** 或设置较长期限
   - Scopes：勾选 `workflow` （必须）
4. 点击 **Generate token**，复制生成的 token（只显示一次）

**第二步：在 Content 仓库配置 Secret**

1. 进入 content 仓库（thinking）的 **Settings**
2. 左侧菜单 → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 填写：
   - Name: `BLOG_DISPATCH_TOKEN`
   - Secret: 粘贴上面复制的 token
5. 点击 **Add secret**

**第三步：在 Content 仓库创建工作流**

在 content 仓库的 `.github/workflows/` 中创建 `notify-parent.yml`：

```yaml
name: Notify Parent Repository

on:
  push:
    branches: ['master', 'main']

permissions:
  contents: read

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger parent repo workflow
        run: |
          echo "Triggering parent repo workflow..."
          curl -X POST \
            -H "Authorization: token ${{ secrets.BLOG_DISPATCH_TOKEN }}" \
            -H "Accept: application/vnd.github.v3+json" \
            https://api.github.com/repos/hanyudeye/blog/actions/workflows/update-submodules.yml/dispatches \
            -d '{"ref":"master"}' \
            -v
        continue-on-error: true
```

保存后，在 content 仓库中推送任何更改，notify-parent.yml 就会自动运行并触发博客的 update-submodules 工作流。

## 工作流程说明

```
Content 仓库推送
    ↓
notify-parent.yml 工作流运行
    ↓
调用博客仓库 API 触发 update-submodules.yml
    ↓
更新 content 子模块指针
    ↓
提交更新到博客仓库
    ↓
触发 Hugo 构建（hugo.yml）
    ↓
部署到 GitHub Pages
```

## 三种触发方式

1. **自动触发**（需配置）：content 推送 → notify-parent.yml 工作流 → 调用 API → 自动更新博客子模块
2. **定时检查**（已启用）：每 6 小时自动检查一次子模块是否有更新
3. **手动触发**（最简单）：在博客仓库 Actions 中手动运行 `Update Submodules` 工作流

## 验证配置

1. 在 content 仓库中推送一个更改
2. 进入博客仓库的 **Actions** 标签
3. 应该看到 `update-submodules` 工作流开始运行
4. 成功后会自动触发 `Deploy Hugo site to Pages`
