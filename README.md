# 杨天成 - 赛博朋克风格个人主页

一个极具未来感、赛博朋克/数字全息风格的个人主页，使用 Next.js、Tailwind CSS、Framer Motion 和 react-tsparticles 构建。

## 在线预览

部署后可直接访问 Vercel 生成的域名进行预览。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
```

## Vercel 部署

本项目已配置为零配置部署到 Vercel：

1. 将代码推送到 GitHub 仓库
2. 访问 [Vercel](https://vercel.com)
3. 点击 "New Project"
4. 导入你的仓库
5. 点击 "Deploy"

Vercel 会自动检测 Next.js 项目并完成部署。

## 内容更新指南

### 修改个人简介

编辑 `/data/bio.json` 文件：

```json
{
  "name": "你的名字",
  "title": "你的职位/头衔",
  "age": 你的年龄,
  "hometown": "你的城市",
  "status": "当前状态 @ 学校/公司",
  "bio": "个人简介",
  "skills": ["技能1", "技能2", "..."],
  "social": {
    "github": "GitHub链接",
    "email": "邮箱地址"
  }
}
```

### 修改教育经历

编辑 `/data/education.json` 文件：

```json
{
  "education": [
    {
      "id": 1,
      "school": "学校名称",
      "degree": "学位",
      "major": "专业",
      "period": "时间区间",
      "gpa": "GPA",
      "description": "描述文字",
      "achievements": ["成就1", "成就2"]
    }
  ]
}
```

### 修改项目经历

编辑 `/data/projects.json` 文件：

```json
{
  "projects": [
    {
      "id": 1,
      "name": "项目名称",
      "description": "项目描述",
      "techStack": ["技术1", "技术2"],
      "status": "项目状态(活跃/维护中/已完成/概念验证)",
      "link": "项目链接",
      "highlights": ["亮点1", "亮点2"]
    }
  ]
}
```

### 修改研究内容

编辑 `/data/research.json` 文件：

```json
{
  "research": [
    {
      "id": 1,
      "title": "研究课题标题",
      "description": "研究描述",
      "status": "进行中/规划中",
      "startDate": "开始日期",
      "tags": ["标签1", "标签2"],
      "progress": 进度百分比,
      "publications": ["发表论文1"]
    }
  ]
}
```

## 技术栈

- **Next.js 14** - React 框架 (App Router)
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Framer Motion** - 动画库
- **react-tsparticles** - 粒子背景效果
- **TypeScript** - 类型安全

## 功能特性

- 交互式粒子背景（鼠标排斥效果）
- 赛博朋克风格 HUD 个人信息面板
- 全息投影风格的导航按钮
- 动态内容切换动画
- 教育经历时间轴
- 项目卡片（悬停展开详情）
- 研究进度时间线
- 响应式设计

## 项目结构

```
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 主页面
├── components/
│   ├── ParticleBackground.tsx  # 粒子背景
│   ├── PersonalHUD.tsx         # 个人信息面板
│   ├── Navigation.tsx          # 导航组件
│   ├── ContentDisplay.tsx      # 内容展示
│   ├── EducationSection.tsx    # 教育经历
│   ├── ProjectsSection.tsx     # 项目经历
│   └── ResearchSection.tsx     # 研究内容
├── data/
│   ├── bio.json          # 个人简介数据
│   ├── education.json    # 教育经历数据
│   ├── projects.json     # 项目数据
│   └── research.json     # 研究数据
├── package.json
├── tailwind.config.ts
└── vercel.json
```

## 自定义

### 颜色主题

在 `tailwind.config.ts` 中修改主题颜色：

```typescript
colors: {
  'cyber-blue': '#00d4ff',    // 电光蓝
  'cyber-pink': '#ff00ff',    // 霓虹粉
  'cyber-green': '#00ff88',   // 荧光绿
  // ... 其他颜色
}
```

### 字体

Google Fonts 字体在 `app/globals.css` 和 `app/layout.tsx` 中引入：
- Orbitron - 科技感标题字体
- Rajdhani - 几何感字体
- JetBrains Mono - 等宽代码字体

## License

MIT License - 可自由使用和修改。
