# 深色模式使用指南

## 🌓 功能概述

博客现在支持**深色/浅色主题切换**功能，提供更好的阅读体验。

## ✨ 主要特性

### 1. 一键切换
- 点击导航栏右侧的 🌙/☀️ 图标即可切换主题
- 浅色模式：显示月亮图标 🌙
- 深色模式：显示太阳图标 ☀️

### 2. 自动记忆
- 主题选择会保存在浏览器本地存储
- 下次访问自动应用上次选择的主题

### 3. 系统偏好检测
- 首次访问时自动检测系统主题偏好
- 支持跟随系统深色模式设置

### 4. 平滑过渡
- 所有颜色切换都有 0.3 秒的平滑动画
- 提供舒适的视觉体验

## 🎨 主题配色方案

### 浅色主题（默认）
```css
背景色:     #ffffff (纯白)
文字色:     #2c2c2c (深灰)
标题色:     #000000 (纯黑)
链接色:     #A31F34 (酒红色)
代码背景:   #f8f8f8 (浅灰)
图标色:     #666666 (中灰)
```

### 深色主题
```css
背景色:     #1a1a1a (深灰黑)
文字色:     #d4d4d4 (浅灰)
标题色:     #f0f0f0 (亮灰)
链接色:     #ff6b7a (粉红色)
代码背景:   #2d2d2d (暗灰)
图标色:     #aaaaaa (中灰)
```

## 🎯 适用场景

### 浅色模式适合
- ☀️ 白天或光线充足的环境
- 📱 户外阅读
- 🖨️ 需要打印的内容

### 深色模式适合
- 🌙 夜间或暗光环境
- 👁️ 减轻眼睛疲劳
- 💻 长时间阅读
- 🔋 OLED 屏幕省电

## 📱 响应式设计

主题切换按钮在不同设备上的表现：

| 设备 | 位置 | 大小 |
|------|------|------|
| 桌面端 | 导航栏右侧，图标后 | 18px |
| 平板 | 导航栏右侧 | 16px |
| 手机 | 导航栏右侧 | 16px |

## 🛠️ 技术实现

### 1. HTML 结构
```html
<button id="theme-toggle" class="theme-toggle-btn">
  <i class="fas fa-moon"></i>
</button>
```

### 2. CSS 变量
使用 CSS 自定义属性管理主题颜色：
```css
:root {
  --bg-color: #ffffff;
  --text-color: #2c2c2c;
  /* ... 更多变量 */
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #d4d4d4;
  /* ... 深色主题变量 */
}
```

### 3. JavaScript 逻辑
- 读取/保存主题到 `localStorage`
- 检测系统主题偏好
- 动态切换 `data-theme` 属性
- 更新按钮图标

### 4. 文件位置
- 布局文件: `_layouts/post.html`
- 样式文件: `css/blog-style.css`
- 脚本文件: `js/theme-toggle.js`

## 🔧 自定义配置

### 修改深色主题颜色

编辑 `css/blog-style.css` 中的 `[data-theme="dark"]` 部分：

```css
[data-theme="dark"] {
  --bg-color: #你的背景色;
  --text-color: #你的文字色;
  --link-color: #你的链接色;
  /* ... 其他颜色 */
}
```

### 修改切换动画速度

修改过渡时间：
```css
* {
  transition: background-color 0.3s ease, /* 改为你想要的时间 */
              color 0.3s ease, 
              border-color 0.3s ease;
}
```

### 禁用系统偏好检测

编辑 `js/theme-toggle.js`，删除或注释掉：
```javascript
// 删除这部分代码
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  return DARK_THEME;
}
```

## 📊 浏览器兼容性

| 浏览器 | 最低版本 | 备注 |
|--------|---------|------|
| Chrome | 49+ | 完全支持 |
| Firefox | 31+ | 完全支持 |
| Safari | 9.1+ | 完全支持 |
| Edge | 15+ | 完全支持 |
| Opera | 36+ | 完全支持 |

CSS 自定义属性和 `data-` 属性被所有现代浏览器支持。

## 🐛 故障排除

### 主题切换无效
1. 检查浏览器控制台是否有 JavaScript 错误
2. 确认 `theme-toggle.js` 文件已正确加载
3. 清除浏览器缓存并刷新页面

### 主题不保存
1. 检查浏览器是否启用了 `localStorage`
2. 某些隐私模式可能禁用本地存储
3. 检查浏览器控制台的存储设置

### 颜色显示异常
1. 检查 CSS 变量是否正确定义
2. 确认 `data-theme` 属性已正确设置在 `<html>` 标签
3. 清除浏览器缓存

## 🎓 最佳实践

### 1. 配色对比度
- 确保文字和背景有足够对比度（WCAG AA 标准：4.5:1）
- 深色模式避免纯黑背景（#000），使用深灰更柔和

### 2. 代码高亮
- 深色模式使用专门的代码高亮配色
- 确保代码在两种主题下都清晰可读

### 3. 图片处理
```css
/* 深色模式下调整图片亮度（可选）*/
[data-theme="dark"] img {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}
```

### 4. 图标适配
- 使用 Font Awesome 图标，自动适配颜色
- SVG 图标使用 `currentColor` 继承文字颜色

## 📝 使用示例

### 在其他页面添加主题切换

1. **在 HTML 中添加按钮**：
```html
<button id="theme-toggle" class="theme-toggle-btn">
  <i class="fas fa-moon"></i>
</button>
```

2. **引入样式**：
```html
<link href="/css/blog-style.css" rel="stylesheet">
```

3. **引入脚本**：
```html
<script src="/js/theme-toggle.js"></script>
```

### 检测当前主题

在 JavaScript 中：
```javascript
const currentTheme = document.documentElement.getAttribute('data-theme');
console.log('当前主题:', currentTheme); // 'light' 或 'dark'
```

## 🔮 未来改进

可能的增强功能：

- [ ] 自动根据时间切换主题（早上自动浅色，晚上自动深色）
- [ ] 更多主题选项（除了深色/浅色）
- [ ] 主题切换时的更炫酷动画
- [ ] 为不同页面设置不同的默认主题
- [ ] 添加"自动"选项（始终跟随系统）

## 📚 相关资源

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Dark Mode Design Guidelines](https://material.io/design/color/dark-theme.html)
- [prefers-color-scheme (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

**享受舒适的阅读体验！** 🎉

如有问题或建议，欢迎提出 issue。

