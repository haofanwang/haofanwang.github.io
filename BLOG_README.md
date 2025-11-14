# 博客使用说明

## 功能说明

这个个人主页现在支持简单的博客功能，你可以通过以下方式访问博客文章：

- **主页**: `https://haofanwang.github.io/` - 显示你的个人主页
- **博客文章**: `https://haofanwang.github.io/文章名称` - 直接访问单篇博客

## 如何添加新博客

### 1. 创建 Markdown 文件

在 `_posts` 目录下创建一个新的 `.md` 文件，例如：

```
_posts/My-New-Article.md
```

### 2. 编写博客内容

每个博客文件需要包含以下格式：

```markdown
---
title: 你的文章标题
date: 2025-11-14
---

# 文章主标题

这里是你的文章正文内容...

## 二级标题

文章内容支持完整的 Markdown 语法。
```

**重要说明：**
- 文件开头必须包含 `---` 分隔的 Front Matter
- `title`: 文章标题（必须）
- `date`: 发布日期（可选）
- Front Matter 之后就是正文内容

### 3. 访问你的文章

假设你创建了 `_posts/My-New-Article.md` 文件，你可以通过以下 URL 访问：

```
https://haofanwang.github.io/My-New-Article
```

注意：URL 中不需要 `.md` 后缀。

## 示例

### 示例 1: 技术文章

创建文件：`_posts/Deep-Learning-Tutorial.md`

```markdown
---
title: 深度学习入门教程
date: 2025-11-14
---

# 深度学习入门

深度学习是机器学习的一个分支...

## 基础概念

- 神经网络
- 反向传播
- 梯度下降

## 代码示例

\```python
import torch
import torch.nn as nn

model = nn.Linear(10, 1)
\```
```

访问地址：`https://haofanwang.github.io/Deep-Learning-Tutorial`

### 示例 2: 带图片的文章

创建文件：`_posts/My-Photography.md`

```markdown
---
title: 我的摄影作品
date: 2025-11-14
---

# 我的摄影作品集

这是我最近拍摄的一些照片。

## 风景摄影

![美丽的日落](/images/sunset.jpg)

## 人像摄影

![肖像](/images/portrait.jpg)
```

访问地址：`https://haofanwang.github.io/My-Photography`

## Markdown 语法支持

系统支持标准的 Markdown 语法，包括：

- **标题**: `#`, `##`, `###` 等
- **列表**: 有序列表和无序列表
- **代码块**: 使用三个反引号
- **链接**: `[文本](URL)`
- **图片**: `![描述](/images/xxx.png)`
- **粗体/斜体**: `**粗体**`, `*斜体*`
- **引用**: `> 引用文字`
- **表格**: 标准 Markdown 表格语法

## 注意事项

1. **文件命名**：建议使用英文和连字符，避免使用空格和特殊字符
   - ✅ 好的命名：`My-First-Article.md`, `Deep-Learning-101.md`
   - ❌ 不好的命名：`我的文章.md`, `article 1.md`

2. **图片路径**：图片需要放在 `images` 目录下，在 Markdown 中使用 `/images/xxx.png` 引用

3. **Front Matter**：每个文章开头的 Front Matter 是必需的，格式必须正确

4. **实时生效**：提交到 GitHub 后，通常需要几分钟时间 GitHub Pages 才会更新

## 部署步骤

1. 将所有文件提交到 GitHub：

```bash
git add .
git commit -m "Add blog functionality"
git push origin master
```

2. 等待 GitHub Pages 构建完成（通常 1-3 分钟）

3. 访问你的博客：`https://haofanwang.github.io/文章名称`

## 技术实现

这个博客系统使用了：
- **404.html**: GitHub Pages 的自定义 404 页面，用于处理所有博客路由
- **Marked.js**: 在浏览器端解析 Markdown
- **客户端路由**: 纯前端实现，无需后端服务器

当访问 `haofanwang.github.io/xxx` 时：
1. GitHub Pages 找不到该页面，返回 404.html
2. 404.html 中的 JavaScript 解析 URL，提取文章名称
3. 从 `_posts/xxx.md` 加载 Markdown 文件
4. 在浏览器中渲染为 HTML 并显示

## 常见问题

**Q: 为什么访问博客显示 404？**
A: 确保文件名正确，且已成功推送到 GitHub。等待几分钟让 GitHub Pages 更新。

**Q: 图片无法显示？**
A: 检查图片路径是否正确，确保使用 `/images/xxx.png` 格式的绝对路径。

**Q: 如何删除博客？**
A: 直接删除 `_posts` 目录下对应的 `.md` 文件即可。

**Q: 能否创建子目录？**
A: 当前实现不支持子目录，所有博客必须直接放在 `_posts` 目录下。

