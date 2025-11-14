# CSS 宽度配置说明

## 当前设置（已优化）

| 元素 | 宽度设置 | 位置 |
|------|---------|------|
| 导航栏容器 | 1200px | `blog-style.css` 第19行 |
| 内容区域 | 1100px | `blog-style.css` 第102行 |
| 文章内边距 | 60px 80px | `blog-style.css` 第109行 |
| 行高 | 1.75 | `blog-style.css` 第139行 |

## 推荐的宽度预设

### 预设 1：紧凑型（适合代码密集的技术博客）
```css
.blog-nav-container {
  max-width: 1400px;  /* 导航栏 */
}

.blog-container {
  max-width: 1300px;  /* 内容区域 */
}

.blog-post {
  padding: 60px 100px;  /* 更大的内边距 */
}

.blog-content {
  line-height: 1.7;     /* 更紧凑的行高 */
  font-size: 15px;      /* 稍小的字体 */
}
```
**效果**：每行约 100-110 个字符

### 预设 2：标准型（当前设置 - 平衡）
```css
.blog-nav-container {
  max-width: 1200px;
}

.blog-container {
  max-width: 1100px;
}

.blog-post {
  padding: 60px 80px;
}

.blog-content {
  line-height: 1.75;
  font-size: 16px;
}
```
**效果**：每行约 85-95 个字符 ⭐ **推荐**

### 预设 3：舒适型（适合长文阅读）
```css
.blog-nav-container {
  max-width: 1000px;
}

.blog-container {
  max-width: 900px;
}

.blog-post {
  padding: 60px 70px;
}

.blog-content {
  line-height: 1.8;
  font-size: 17px;
}
```
**效果**：每行约 70-80 个字符

### 预设 4：经典型（类似原始设置）
```css
.blog-nav-container {
  max-width: 900px;
}

.blog-container {
  max-width: 800px;
}

.blog-post {
  padding: 60px;
}

.blog-content {
  line-height: 1.8;
  font-size: 16px;
}
```
**效果**：每行约 60-70 个字符

## 专业排版建议

### 最佳行长度（每行字符数）

根据排版学研究：
- **英文**：45-75 个字符最舒适，最多 90 个
- **中文**：35-45 个字最舒适，最多 55 个
- **代码**：80-120 个字符（取决于团队规范）

### 阅读体验优化

1. **行高与字体大小比例**
   ```
   行高 = 字体大小 × 1.5 ~ 2.0
   ```
   - 英文：1.5-1.6 倍
   - 中文：1.7-2.0 倍（中文需要更大行距）

2. **内容宽度计算**
   ```
   理想宽度 = 目标字符数 × 平均字符宽度 + 内边距
   ```

3. **响应式断点**
   - 桌面：> 1200px - 全宽
   - 笔记本：1024px - 1200px - 适中
   - 平板：768px - 1024px - 紧凑
   - 手机：< 768px - 单列

## 如何修改

### 方法 1：直接编辑 CSS

编辑 `css/blog-style.css`，找到对应的类，修改 `max-width` 值。

**重启 Jekyll 服务器**：
```bash
# Ctrl+C 停止
bundle exec jekyll serve --livereload
```

### 方法 2：使用浏览器开发者工具测试

1. 在浏览器中按 `F12` 打开开发者工具
2. 在 Elements 标签中找到 `.blog-container`
3. 在 Styles 面板中修改 `max-width` 值
4. 实时查看效果
5. 满意后复制到 `blog-style.css`

### 方法 3：添加自定义配置

在 `blog-style.css` 顶部添加 CSS 变量：

```css
:root {
  --blog-max-width: 1100px;
  --blog-nav-width: 1200px;
  --blog-padding-x: 80px;
  --blog-line-height: 1.75;
  --blog-font-size: 16px;
}

.blog-nav-container {
  max-width: var(--blog-nav-width);
}

.blog-container {
  max-width: var(--blog-max-width);
}

.blog-post {
  padding: 60px var(--blog-padding-x);
}

.blog-content {
  line-height: var(--blog-line-height);
  font-size: var(--blog-font-size);
}
```

这样只需修改变量值，所有地方自动更新。

## 宽屏显示器优化

如果你使用 27 寸或更大的显示器：

```css
/* 针对超宽屏幕 */
@media (min-width: 1920px) {
  .blog-nav-container {
    max-width: 1600px;
  }
  
  .blog-container {
    max-width: 1400px;
  }
  
  .blog-post {
    padding: 60px 120px;
  }
}
```

## 移动端优化

当前响应式设置会自动适配移动端，如需调整：

```css
@media (max-width: 768px) {
  .blog-container {
    padding: 80px 20px 40px;  /* 减小移动端内边距 */
  }
  
  .blog-post {
    padding: 30px 25px;
  }
  
  .blog-content {
    font-size: 15px;  /* 移动端字体稍小 */
  }
}
```

## 实用工具

在线测试不同宽度效果：
- [Responsively](https://responsively.app/) - 多设备预览
- Chrome DevTools - Device Mode (Cmd+Shift+M)

阅读体验检查清单：
- [ ] 单行不超过 100 个英文字符
- [ ] 段落之间有足够间距
- [ ] 代码块不需要横向滚动（大部分情况）
- [ ] 移动端可以舒适阅读
- [ ] 图片自适应容器宽度

---

**当前配置**：标准型（预设 2），适合大多数技术博客。如有特殊需求，参考上述预设自行调整。

