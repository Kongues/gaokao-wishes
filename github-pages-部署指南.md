# GitHub Pages 部署指南

## 准备工作

1. 确保您有一个GitHub账号，如果没有，请前往 [GitHub官网](https://github.com/) 注册

## 详细步骤

### 1. 创建新仓库

1. 登录您的GitHub账号
2. 点击右上角的"+"图标，选择"New repository"
3. 填写仓库名称，建议使用"gaokao-wishes"或类似名称
4. 可以添加描述（可选）
5. 选择"Public"（公开）
6. 点击"Create repository"按钮创建仓库

### 2. 上传文件到仓库

**方法一：通过网页界面上传**

1. 在新创建的仓库页面，点击"uploading an existing file"链接
2. 将您的所有文件（index.html, styles.css, script.js等）拖拽到上传区域
3. 在底部添加提交信息，如"初始提交"
4. 点击"Commit changes"按钮提交

**方法二：通过Git命令行上传（适合熟悉Git的用户）**

```bash
# 克隆仓库到本地
git clone https://github.com/你的用户名/gaokao-wishes.git

# 复制所有文件到仓库文件夹中

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "初始提交"

# 推送到GitHub
git push origin main
```

### 3. 启用GitHub Pages

1. 在仓库页面，点击顶部的"Settings"选项卡
2. 在左侧菜单中，找到并点击"Pages"选项
3. 在"Source"部分，从下拉菜单中选择"main"分支
4. 点击"Save"按钮
5. 等待几分钟，页面会刷新并显示您的网站URL
   - 通常格式为：`https://你的用户名.github.io/gaokao-wishes/`

### 4. 访问您的网站

- 部署完成后，您可以通过上述URL访问您的高考祝福网页
- 您可以将此链接分享给任何人，他们都可以通过此链接访问您的祝福页面

### 5. 更新网站内容

如果您需要更新网站内容：

1. 修改本地文件
2. 重复上传步骤
3. GitHub Pages会自动更新您的网站内容

## 注意事项

- GitHub Pages部署通常需要几分钟时间，请耐心等待
- 如果您修改了文件并重新上传，网站更新也需要几分钟时间
- 确保您的仓库是公开的，否则其他人无法访问您的网站
- 如果您想使用自定义域名，可以在GitHub Pages设置中配置

## 常见问题解决

1. **网站无法访问**：确保您等待了足够的时间（通常5-10分钟）让GitHub完成部署
2. **样式或脚本不生效**：检查文件路径是否正确，确保CSS和JavaScript文件能被正确加载
3. **页面显示404错误**：确认仓库名称与URL中的名称一致，检查文件名是否为"index.html" 