# Personal Page of Haofan Wang

这是 Haofan Wang（王浩帆）的个人网站，使用 Jekyll 构建。

## 🚀 快速开始

### 首次设置

```bash
# 1. 安装依赖
bundle install

# 2. 本地运行
bundle exec jekyll serve --livereload

# 3. 访问网站
# 打开浏览器访问 http://localhost:4000
```

### 日常使用

```bash
# 启动本地服务器
bundle exec jekyll serve --livereload

# 构建网站
bundle exec jekyll build

# 清理缓存
bundle exec jekyll clean
```

## 📝 写博客

在 `_posts/` 目录创建新文件，文件名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: 文章标题
date: 2025-11-14
author: Haofan Wang
---

文章内容使用 Markdown 编写...
```

## ⚙️ 配置

编辑 `_config.yml` 可以修改网站的全局配置，包括：
- 网站标题和描述
- 作者信息
- 社交媒体链接

修改配置后需要重启 Jekyll 服务器才能生效。

## 📚 文档

详细的设置和使用说明请查看：
- [JEKYLL_SETUP.md](JEKYLL_SETUP.md) - Jekyll 完整设置指南

## 🌐 在线访问

https://haofanwang.github.io

## 📁 项目结构

```
├── _config.yml          # Jekyll 配置
├── _layouts/            # 页面布局模板
├── _posts/              # 博客文章 (Markdown)
├── css/                 # 样式文件
├── js/                  # JavaScript 文件
├── images/              # 图片资源
├── documents/           # PDF 文档
├── index.html           # 主页
└── Gemfile              # Ruby 依赖
```

## 🛠️ 技术栈

- Jekyll 4.3
- Bootstrap 4
- Font Awesome
- Academicons
- jQuery

## 📄 许可

Personal website - All rights reserved.
