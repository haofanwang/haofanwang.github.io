# 文章发布指南

## 快速开始

### 1. 创建新文章

在 `posts` 目录下创建一个新的 `.md` 文件，例如 `my-article.md`：

```markdown
---
layout: post
title: 我的文章标题
date: 2025-11-14
---

# 这是文章标题

这里是文章内容...
```

### 2. Front Matter 说明

每篇文章开头必须包含 Front Matter（用 `---` 包围的 YAML 配置）：

- **layout**: 使用的布局模板（通常是 `post`）
- **title**: 文章标题（用于显示和 URL）
- **date**: 发布日期（格式：YYYY-MM-DD）
- **其他可选字段**: 作者、标签等

### 3. 访问 URL 规则

配置了 `permalink: /:title` 后，访问规则如下：

- 文件名: `posts/example-post.md`
- 访问 URL: `haofanwang.github.io/example-post`

**注意**: URL 使用的是文件名（不含 .md 后缀），不是 title 字段。

### 4. 文件命名建议

- 使用小写字母
- 使用连字符 `-` 分隔单词
- 使用有意义的名称
- 示例：`machine-learning-intro.md`、`paper-review-transformers.md`

## Markdown 语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 列表

```markdown
- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2
```

### 链接和图片

```markdown
[链接文字](https://example.com)
![图片描述](/images/pic.png)
```

### 代码块

````markdown
```python
def hello():
    print("Hello")
```
````

### 引用

```markdown
> 这是一段引用文字
```

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
```

## 本地测试

### 安装 Jekyll

```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

### 常用命令

```bash
# 启动服务器（带自动重载）
bundle exec jekyll serve --livereload

# 生成静态文件
bundle exec jekyll build

# 清理生成的文件
bundle exec jekyll clean
```

## 部署到 GitHub Pages

### 1. 提交更改

```bash
git add .
git commit -m "Add new post"
git push origin master
```

### 2. 等待构建

GitHub Pages 会自动检测更改并重新构建网站（通常需要几分钟）。

### 3. 访问文章

构建完成后，通过 `haofanwang.github.io/文章文件名` 访问。

## 常见问题

### Q: 文章没有显示？

A: 检查以下几点：
- Front Matter 格式是否正确（YAML 语法）
- 文件是否在 `posts` 目录下
- GitHub Pages 是否构建完成（查看仓库的 Actions 标签）

### Q: 样式不正确？

A: 确保 `_config.yml` 中的 `baseurl` 和 `url` 设置正确。

### Q: 如何修改文章布局？

A: 编辑 `_layouts/post.html` 文件。

### Q: 如何添加其他页面？

A: 在根目录创建 `.md` 文件，使用 `layout: page` 布局。

## 高级配置

### 自定义 Permalink

在 `_config.yml` 中修改：

```yaml
# 使用日期+标题
permalink: /:year/:month/:day/:title

# 使用分类+标题
permalink: /:categories/:title

# 仅使用标题（当前配置）
permalink: /:title
```

### 添加标签和分类

在 Front Matter 中添加：

```markdown
---
layout: post
title: 文章标题
categories: [技术, AI]
tags: [机器学习, Python]
---
```

## 示例文章模板

```markdown
---
layout: post
title: InstantID：零样本身份保持生成
date: 2025-11-14
categories: [AI, Computer Vision]
tags: [Diffusion Models, Identity Preservation]
---

# InstantID：零样本身份保持生成

## 摘要

这篇文章介绍了 InstantID 项目...

## 方法

我们提出了...

## 实验结果

![实验结果](/images/InstantID.png)

## 结论

...

## 参考文献

1. [论文链接](https://arxiv.org/abs/xxx)
2. [项目主页](https://github.com/xxx)
```

