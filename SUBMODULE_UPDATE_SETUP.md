# Content 子模块自动更新配置指南

## 已完成的配置

### 1. 主博客仓库（blog）
- ✅ 已创建 `.github/workflows/update-submodules.yml` 工作流
- ✅ 已优化 `hugo.yml` 使用 `submodules: recursive`

## 需要完成的步骤

### 2. 在 Content 仓库中配置工作流（推荐方案）

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
            -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
            -H "Accept: application/vnd.github.v3+json" \
            https://api.github.com/repos/hanyudeye/blog/actions/workflows/update-submodules.yml/dispatches \
            -d '{"ref":"master"}'
```

**步骤**：
1. 在 content 仓库中创建上述工作流文件
2. 无需额外配置，使用默认的 `GITHUB_TOKEN`
3. 当有推送时，会自动触发博客仓库的更新工作流

> 如果出现权限问题，需要在 content 仓库的 **Settings** → **Actions** → **General** 中，允许跨仓库访问（如果有该选项）

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

1. **自动触发**：content 仓库推送 → Webhook → 自动更新
2. **定时检查**：每天 00:00 UTC 检查一次子模块是否有更新
3. **手动触发**：在 GitHub Actions 中手动运行工作流

## 验证配置

1. 在 content 仓库中推送一个更改
2. 进入博客仓库的 **Actions** 标签
3. 应该看到 `update-submodules` 工作流开始运行
4. 成功后会自动触发 `Deploy Hugo site to Pages`
