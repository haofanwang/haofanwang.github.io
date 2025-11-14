# 个人主页

这是 Haofan Wang 的个人主页，部署在 GitHub Pages 上。

## 如何添加文章

1. 在 `posts` 目录下创建新的 `.md` 文件
2. 在文件开头添加 Front Matter：

```markdown
---
layout: post
title: 你的文章标题
date: 2025-11-14
---

# 文章内容

这里写你的文章内容...
```

3. 提交并推送到 GitHub
4. 文章将可以通过 `haofanwang.github.io/文章标题` 访问

### 示例

如果你创建了 `posts/example-post.md` 文件，标题为 "示例文章"，那么可以通过以下 URL 访问：
- `haofanwang.github.io/example-post`（permalink 使用文件名）

## 文件结构

```
.
├── _config.yml          # Jekyll 配置文件
├── _layouts/            # 布局模板
│   ├── default.html     # 默认布局
│   ├── post.html        # 文章布局
│   └── page.html        # 页面布局
├── posts/               # 文章目录
│   └── *.md            # Markdown 文章
├── css/                 # 样式文件
├── js/                  # JavaScript 文件
├── images/              # 图片资源
└── index.html          # 主页
```

## 部署

推送到 GitHub 后，GitHub Pages 会自动构建并部署你的网站。
