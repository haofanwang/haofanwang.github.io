# Jekyll 网站设置指南

## 📚 什么是 Jekyll？

Jekyll 是一个静态网站生成器，它可以：
- ✅ 使用 `_config.yml` 集中管理网站配置
- ✅ 通过模板避免重复代码
- ✅ 自动将 Markdown 文件转换为 HTML
- ✅ 支持变量、循环等模板语法

## 🎯 已完成的工作

### 1. 创建了 Jekyll 基础结构

```
haofanwang.github.io/
├── _config.yml          # Jekyll 配置文件（已恢复并完善）
├── Gemfile              # Ruby 依赖管理（新建）
├── _layouts/            # 布局模板（新建）
│   ├── default.html     # 默认布局
│   └── post.html        # 博客文章布局
├── _posts/              # 博客文章目录（新建）
│   └── 2025-11-14-the-turning-point-in-image-generation.md
├── css/
│   └── blog-style.css   # 博客样式（新建）
└── index.html           # 主页（保持原样）
```

### 2. 配置文件说明

#### `_config.yml` - 核心配置
现在你可以在这里集中管理：
- 网站标题和描述
- 作者信息（中英文名字）
- 社交媒体链接
- 博客文章设置

**使用方法**：
在 HTML 或 Markdown 中使用变量：
```liquid
{{ site.title }}           # 输出: Haofan Wang
{{ site.author.name }}     # 输出: Haofan Wang
{{ site.author.name_zh }}  # 输出: 王浩帆
{{ site.social.github }}   # 输出: haofanwang
```

#### `_layouts/post.html` - 博客布局
- 自动读取 `_config.yml` 中的配置
- 顶部导航栏自动显示你的名字和社交媒体链接
- 不需要在每篇文章中重复代码

## 🚀 如何安装和运行 Jekyll

### 步骤 1：安装 Ruby 和 Jekyll

**macOS** (你的系统):
```bash
# 如果还没安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Ruby (macOS 自带的版本太旧)
brew install ruby

# 添加到 PATH（添加到 ~/.zshrc）
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# 安装 Jekyll 和 Bundler
gem install jekyll bundler
```

### 步骤 2：安装项目依赖

```bash
cd ~/Desktop/haofanwang.github.io
bundle install
```

### 步骤 3：本地运行网站

```bash
# 启动 Jekyll 服务器
bundle exec jekyll serve

# 或者使用 LiveReload（修改文件自动刷新）
bundle exec jekyll serve --livereload
```

然后在浏览器打开：http://localhost:4000

### 步骤 4：构建网站

```bash
# 生成静态文件到 _site 目录
bundle exec jekyll build
```

## 📝 如何写博客文章

### 方法 1：使用 Markdown（推荐）

1. **在 `_posts/` 目录创建文件**
   文件名格式：`YYYY-MM-DD-标题.md`
   ```
   _posts/2025-11-14-my-new-post.md
   ```

2. **添加 Front Matter**
   ```markdown
   ---
   layout: post
   title: 我的新文章
   date: 2025-11-14
   author: Haofan Wang
   ---

   # 文章标题

   这里是文章内容...
   ```

3. **Jekyll 会自动**：
   - 读取 Markdown 文件
   - 转换为 HTML
   - 应用 `post.html` 布局
   - 生成最终页面

### 方法 2：直接写 HTML（保留兼容性）

你的 `index.html` 可以保持不变，Jekyll 会直接复制它。

## 🔧 修改网站配置

现在只需编辑 `_config.yml`，就可以全站生效！

### 例子 1：修改名字
```yaml
# _config.yml
author:
  name: Your Name
  name_zh: 你的名字
```

所有使用 `{{ site.author.name }}` 的地方都会自动更新！

### 例子 2：添加社交媒体
```yaml
# _config.yml
social:
  github: yourusername
  twitter: yourhandle
```

博客顶部导航栏会自动更新链接。

### 例子 3：修改网站标题
```yaml
# _config.yml
title: Your New Title
description: Your New Description
```

## 📦 部署到 GitHub Pages

### 选项 1：使用 Jekyll（推荐）

GitHub Pages 原生支持 Jekyll！只需：

1. **提交所有 Jekyll 文件**
   ```bash
   git add .
   git commit -m "Convert to Jekyll site"
   git push origin master
   ```

2. **GitHub 会自动构建**
   - 无需提交 `_site` 目录
   - GitHub 会自动运行 Jekyll
   - 几分钟后网站就更新了

3. **注意**：确保 `_config.yml` 中的 `url` 正确：
   ```yaml
   url: "https://haofanwang.github.io"
   ```

### 选项 2：本地构建后部署

如果 GitHub Pages 不支持某些插件：

```bash
# 本地构建
bundle exec jekyll build

# 将 _site 目录内容推送到 gh-pages 分支
# （需要额外配置）
```

## 🎨 自定义样式

### 修改博客样式
编辑 `css/blog-style.css`

### 修改主站样式
编辑 `css/style.css`

所有 Jekyll 模板会自动加载这些样式。

## 🔍 Jekyll 变量参考

常用变量：

| 变量 | 输出 |
|------|------|
| `{{ site.title }}` | 网站标题 |
| `{{ site.author.name }}` | 作者英文名 |
| `{{ site.author.name_zh }}` | 作者中文名 |
| `{{ site.baseurl }}` | 网站子路径 |
| `{{ page.title }}` | 当前页面标题 |
| `{{ page.date }}` | 文章日期 |
| `{{ content }}` | 页面内容 |

## 📖 常用命令速查

```bash
# 本地预览
bundle exec jekyll serve

# 本地预览（自动刷新）
bundle exec jekyll serve --livereload

# 构建网站
bundle exec jekyll build

# 清理缓存
bundle exec jekyll clean

# 查看 Jekyll 版本
jekyll --version

# 更新依赖
bundle update
```

## ⚠️ 注意事项

1. **修改 `_config.yml` 后需要重启服务器**
   ```bash
   # Ctrl+C 停止服务器
   bundle exec jekyll serve  # 重新启动
   ```

2. **文件命名规范**
   - 博客文章：`_posts/YYYY-MM-DD-title.md`
   - 布局文件：`_layouts/name.html`
   - 配置文件：`_config.yml`

3. **不要提交 `_site` 目录**
   这是 Jekyll 生成的临时文件，GitHub Pages 会自动生成。

4. **Jekyll 不会处理以 `.` 或 `_` 开头的文件**
   除非在 `_config.yml` 中明确包含：
   ```yaml
   include:
     - _special_folder
   ```

## 🆚 对比：Jekyll vs 纯 HTML

| 特性 | 纯 HTML | Jekyll |
|------|---------|--------|
| 修改名字 | 需要改多个 HTML 文件 | 只改 `_config.yml` |
| 写博客 | 手动写 HTML | 写 Markdown 自动转换 |
| 导航栏 | 每个页面都要写 | 写一次模板，自动复用 |
| 配置管理 | 分散在各个文件 | 集中在 `_config.yml` |
| 维护成本 | 高 | 低 |

## 🎯 下一步

1. **现在运行**：
   ```bash
   cd ~/Desktop/haofanwang.github.io
   bundle install
   bundle exec jekyll serve
   ```

2. **访问** http://localhost:4000 查看效果

3. **写新博客**：在 `_posts/` 目录创建新的 Markdown 文件

4. **修改配置**：编辑 `_config.yml` 查看变化

## 📚 学习资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [Jekyll 中文文档](https://jekyllcn.com/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Liquid 模板语法](https://shopify.github.io/liquid/)

---

现在你的网站已经是完整的 Jekyll 网站了！`_config.yml` 中的所有配置都会生效。🎉

