# Blog Posts

这个文件夹包含了博客系统的所有文件。

## 文件结构

```
blog/
├── posts/              # 存放所有博客文章的 markdown 文件
│   ├── welcome.md
│   ├── diffusion-models-intro.md
│   └── instantid-journey.md
├── posts.json         # 博客文章元数据（可选，用于更灵活的管理）
└── README.md          # 本文件
```

## 如何添加新博客

### 方法 1: 直接添加（推荐）

1. 在 `posts/` 文件夹中创建新的 `.md` 文件
2. 按照以下格式编写 markdown 文件：

```markdown
# 博客标题

**Date:** YYYY-MM-DD  
**Author:** Haofan Wang

## 第一个章节

内容...

## 第二个章节

内容...
```

3. 在 `blog.html` 文件中的 `blogPosts` 数组添加新文章的元数据：

```javascript
{
  title: "你的博客标题",
  date: "YYYY-MM-DD",
  author: "Haofan Wang",
  excerpt: "博客简介...",
  file: "your-blog-file.md"
}
```

### 方法 2: 使用 JSON 配置文件（未来扩展）

可以将所有博客元数据维护在 `posts.json` 中，然后修改 `blog.html` 从 JSON 文件加载数据。

## 访问方式

- 博客列表：`https://yourusername.github.io/blog.html`
- 单篇博客：`https://yourusername.github.io/post.html?post=文件名（不含.md后缀）`

例如：
- `https://yourusername.github.io/post.html?post=welcome`
- `https://yourusername.github.io/post.html?post=diffusion-models-intro`

## Markdown 支持

博客系统使用 [marked.js](https://marked.js.org/) 来渲染 markdown，支持：

- 标题（h1-h6）
- 段落
- 列表（有序、无序）
- 代码块
- 行内代码
- 引用
- 链接
- 图片
- 粗体、斜体
- 等等...

## 样式定制

如果需要修改博客样式，可以编辑：
- `blog.html` 中的 `<style>` 部分（博客列表页样式）
- `post.html` 中的 `<style>` 部分（博客详情页样式）

