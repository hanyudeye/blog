# Content 子模块自动更新配置指南

## 已完成的配置

### 1. 主博客仓库（blog）
- ✅ 已创建 `.github/workflows/update-submodules.yml` 工作流
- ✅ 已优化 `hugo.yml` 使用 `submodules: recursive`

## 需要完成的步骤

### 2. 方案 A：自动触发（推荐，但需要跨仓库权限）

在 content 仓库的 `.github/workflows/` 中创建 `notify-parent.yml`：

```yaml
name: Notify Parent Repository

on:
  push:
    branches: ['master', 'main']

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger parent repo update
        run: |
          curl -X POST \
            -H "Authorization: token ${{ secrets.PARENT_REPO_TOKEN }}" \
            -H "Accept: application/vnd.github.v3+json" \
            https://api.github.com/repos/hanyudeye/blog/actions/workflows/update-submodules.yml/dispatches \
            -d '{"ref":"master"}'
```

**需要的权限设置**：
1. 在 content 仓库的 **Settings** → **Secrets and variables** → **Actions** 中新增密钥
2. 创建 `PARENT_REPO_TOKEN`：
   - 进入 https://github.com/settings/tokens
   - 生成新的 Personal Access Token（经典）
   - 权限勾选：`public_repo`, `workflow` 或 `repo`（完全访问）
   - 复制 token 到 content 仓库的 `PARENT_REPO_TOKEN` 密钥

### 2. 方案 B：定时自动检查（无需额外配置）

博客仓库已配置每 6 小时自动检查一次 content 的更新，无需任何操作。

### 2. 方案 C：手动触发（最简单）

进入博客仓库的 **Actions** → **Update Submodules** → **Run workflow** 按钮手动执行

## 工作流程说明

```
Content 仓库推送
    ↓
触发 Webhook/Actions
    ↓
主博客仓库的 update-submodules 工作流运行
    ↓
更新 content 子模块指针
    ↓
提交更新
    ↓
触发 Hugo 构建（hugo.yml）
    ↓
部署到 GitHub Pages
```

## 三种触发方式

1. **自动触发**（需配置）：content 推送 → notify-parent.yml 工作流 → 调用 API → 更新博客子模块
2. **定时检查**（已启用）：每 6 小时自动检查一次子模块是否有更新
3. **手动触发**（最简单）：在博客仓库 Actions 中手动运行 `Update Submodules` 工作流

## 验证配置

1. 在 content 仓库中推送一个更改
2. 进入博客仓库的 **Actions** 标签
3. 应该看到 `update-submodules` 工作流开始运行
4. 成功后会自动触发 `Deploy Hugo site to Pages`
