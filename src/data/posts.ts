export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  categories: string[];
  coverImage: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "openclaw-claudecode-codex-guide",
    title: "OpenClaw-ClaudeCode-Codex 实战指南",
    date: "2026-03-24",
    description: "这份指南面向已经准备把 AI 工具真正接入开发流程的人，目标不是'试一下能不能跑'，而是建立一套可重复、可监控、可验证的协作方法。",
    categories: ["OpenClaw", "Claude Code", "Codex CLI", "AI Coding"],
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    content: [
      "这份指南面向已经准备把 AI 工具真正接入开发流程的人，目标不是'试一下能不能跑'，而是建立一套可重复、可监控、可验证的协作方法。",
      "文中的命令以 Windows PowerShell 为主，Node.js 环境默认使用 LTS 版本。",
      "**环境准备**：OpenClaw 作为总控层，负责接收任务、拆解任务、调用 Claude Code 或 Codex，并把结果汇总成一条完整执行链。Claude Code 更适合长链路编码、代码阅读、跨文件重构和交互式修复。Codex 适合明确目标、快速落地、命令行驱动的代码任务。",
      "**快速开始**：最好的入门方式不是'随便问一句'，而是给出一个能验证完整链路的小任务。把以下三件事说清楚：目标是什么、完成标准是什么、什么时候切换执行器。",
      "**执行器选择**：Claude Code 适合需要通读多个模块后再改代码、需要先分析方案再分步实施、需要长链路对话式修复的场景。Codex 适合任务定义清楚、需要快速改文件并立即执行命令验证、需要生成脚本补测试修 lint 的场景。",
      "**实战案例**：前端项目开发（Vue3）推荐先用 Claude Code 阅读目录结构、识别状态管理方式、识别 API 封装方式，输出实施方案。然后用 Codex 创建页面与子组件、补路由、接入 mock 数据、运行 lint/build。",
      "**前后端联调检查**：用 Claude Code 做接口契约审查，让它列出前端字段、后端字段、差异项、风险项。用 Codex 按差异清单逐项修复，执行联调脚本或本地构建。",
      "**常见问题**：PTY 模式问题建议换用原生终端如 Windows Terminal，避免在不完整 PTY 环境里跑交互 TUI。权限确认问题建议提前确认运行环境的沙箱策略，把工作目录、可写目录和 git 权限预先设好。",
      "**最佳实践**：高质量任务拆解必须同时包含目标、边界、验证。Prompt 编写建议结构：先给目标、再给约束、再给验证、最后规定输出格式。验证流程推荐顺序：lint、tsc、test、build、关键路径手测。",
      "**总结**：OpenClaw、Claude Code、Codex 最有效的用法，不是三者分别使用，而是建立'编排 + 分析 + 执行 + 验证'的协作链。Claude Code 负责看全局、做复杂判断，Codex 负责快速落地和命令式闭环，OpenClaw 负责把整套流程串起来。",
    ],
  },
  {
    slug: "openclaw-deployment-journal",
    title: "从零部署 OpenClaw：一个 AI 助手的诞生记录",
    date: "2026-03-19",
    description: "记录我如何在 30 分钟内完成 OpenClaw 的部署、配置和首次对话，以及过程中踩过的坑和学到的经验。",
    categories: ["AI", "工具", "部署"],
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    content: [
      "今天是 2026 年 3 月 19 日，我决定部署 OpenClaw，一个可以 24 小时待命的 AI 助手。这篇文章记录从零开始到首次对话的全过程，包括安装、配置、技能安装，以及遇到的问题和解决方案。",
      "**为什么选择 OpenClaw**：我需要的是一个能真正干活的协作者，而不是聊天机器人。OpenClaw 可以调度 Claude Code、Codex 等编码工具，能接需求、拆任务、参与真实开发流程，这正是我想要的'虚拟程序员'。",
      "**部署过程**：我的机器配置是 AMD Ryzen 5 5600G + 32GB 内存 + GTX 1660 SUPER。OpenClaw 安装很顺利，基于 Node.js，用 npm 或 npx 就能跑起来。网关启动后，第一件事是配置飞书频道，因为我想在飞书里和它对话。",
      "**首次对话：给 AI 起名字**：启动后它让我给它起名字，我叫它'小石'🪨。这个设计我很喜欢——不是预设一个名字，而是让用户参与定义助手的身份。接着我填了 USER.md，告诉它叫我'老板'，时区是北京时间。",
      "**技能安装：有成功也有失败**：我尝试安装 planning-with-files、context7-cli、agent-browser，这三个成功了。但 repo-coder、task-reporter、gh-fix-ci 在 ClawHub 上没找到。经验：不是所有 skill 都发布在 ClawHub 上，有些需要手动创建或从 GitHub 安装。",
      "**功耗分析：24 小时开机的成本**：我让小石分析了机器功耗，结论是待机约 80-100W，中负载 150-200W。24 小时开机每天约 3-3.5 度电，按北京电价算每天 1.5-1.8 元，每月 45-55 元。这个成本可以接受，毕竟换来一个随时待命的助手。",
      "**飞书文档权限问题**：我让它读取一个飞书 Wiki 文档，但遇到了权限问题。虽然我给了'管理协作者'权限，但飞书插件的工具调用需要正确的认证配置。最后我意识到，有时候最直接的方式还是复制粘贴。",
      "**学到的经验**：1) 技能安装前先搜索确认名字和来源；2) 飞书插件需要正确配置应用权限；3) 功耗分析对于 24 小时运行的服务很重要；4) 和 AI 协作时，清晰的上下文比复杂的工具调用更有效。",
      "**完整闭环：从写文章到自动部署**：文章写完后，我让小石直接修改 posts.ts 文件，然后执行 git add、git commit、git push 一套流程。GitHub Actions 自动触发部署，1-2 分钟后网站就更新了。最后我还让它打开浏览器访问网站，截取首页和文章详情页的截图发给我验证。整个过程从写文章到上线验证，全程自动化，我只需要最后看一眼截图确认。",
      "**下一步计划**：继续配置 OpenClaw，让它能真正帮我写代码、review PR、管理项目。目标是把它养成一个靠谱的'虚拟程序员龙虾'，能理解需求、拆解任务、驱动编码工具、汇报结果。",
    ],
  },
  {
    slug: "building-better-writing-rhythm",
    title: "建立更稳定的写作节奏",
    date: "2026-03-05",
    description: "分享我如何把写作从'偶尔灵感'变成'稳定输出'的三步方法。",
    categories: ["写作", "效率"],
    coverImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
    content: [
      "以前我总把写作当作灵感驱动的事情，结果就是频繁中断。后来我开始固定写作时段：每天早上 30 分钟，不求写完，只求开写。",
      "第二个变化是建立选题池。我把日常读到的观点、工作里的问题、生活观察都记录进一个清单，写作时直接挑选，避免'今天写什么'的空转。",
      "最后是发布闭环：每篇文章发布后，我都会做一次简短复盘，记录阅读反馈与改进点。长期下来，写作速度和质量都更稳定。",
    ],
  },
  {
    slug: "designing-calm-digital-products",
    title: "如何设计更'安静'的数字产品",
    date: "2026-02-20",
    description: "减少打扰、提高可读性，让用户把注意力留给真正重要的内容。",
    categories: ["设计", "产品"],
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    content: [
      "很多产品过度依赖颜色和动画争抢注意力，用户反而更难完成任务。我的做法是先定义页面主目标，再把非关键元素降噪。",
      "在视觉上，我倾向于限制色彩数量，保持留白，使用明确的信息层级，让用户一眼知道'先看哪里、再做什么'。",
      "安静不是无聊，而是让界面服务内容与任务。当用户能更快完成目标时，产品体验自然会变好。",
    ],
  },
  {
    slug: "from-notes-to-published-post",
    title: "从零散笔记到可发布文章",
    date: "2026-01-30",
    description: "一个轻量工作流：收集、归类、提纲、成稿，帮助你快速把想法落地。",
    categories: ["博客", "创作"],
    coverImage:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1400&q=80",
    content: [
      "我会先收集原始素材：读书摘录、会议记录、临时灵感。关键不是完整，而是先把想法保存下来。",
      "接着每周做一次归类，把同主题笔记放在一起，并写出一句核心观点。只要观点清晰，文章结构通常就会自然出现。",
      "最后根据'问题 - 分析 - 结论'的模板成稿。这个流程简单，但能持续产出，是我最常用的内容创作方法。",
    ],
  },
  {
    slug: "weekly-review-that-actually-works",
    title: "真正有用的每周复盘模板",
    date: "2025-12-18",
    description: "用 20 分钟回顾一周，把'忙碌'转化为'有方向的改进'。",
    categories: ["复盘", "成长"],
    coverImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80",
    content: [
      "每周复盘不需要复杂系统，我只保留三个问题：这周最有效的动作是什么？最大的阻力来自哪里？下周要删掉什么？",
      "其中'删掉什么'最关键。很多时候效率低并不是做得不够多，而是做了太多不重要的事情。",
      "长期坚持后，你会看到时间分配和目标越来越一致，生活的掌控感也会明显提升。",
    ],
  },
];

export const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
