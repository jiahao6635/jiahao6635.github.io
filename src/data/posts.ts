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
    slug: "building-better-writing-rhythm",
    title: "建立更稳定的写作节奏",
    date: "2026-03-05",
    description: "分享我如何把写作从“偶尔灵感”变成“稳定输出”的三步方法。",
    categories: ["写作", "效率"],
    coverImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
    content: [
      "以前我总把写作当作灵感驱动的事情，结果就是频繁中断。后来我开始固定写作时段：每天早上 30 分钟，不求写完，只求开写。",
      "第二个变化是建立选题池。我把日常读到的观点、工作里的问题、生活观察都记录进一个清单，写作时直接挑选，避免“今天写什么”的空转。",
      "最后是发布闭环：每篇文章发布后，我都会做一次简短复盘，记录阅读反馈与改进点。长期下来，写作速度和质量都更稳定。",
    ],
  },
  {
    slug: "designing-calm-digital-products",
    title: "如何设计更“安静”的数字产品",
    date: "2026-02-20",
    description: "减少打扰、提高可读性，让用户把注意力留给真正重要的内容。",
    categories: ["设计", "产品"],
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    content: [
      "很多产品过度依赖颜色和动画争抢注意力，用户反而更难完成任务。我的做法是先定义页面主目标，再把非关键元素降噪。",
      "在视觉上，我倾向于限制色彩数量，保持留白，使用明确的信息层级，让用户一眼知道“先看哪里、再做什么”。",
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
      "最后根据“问题-分析-结论”的模板成稿。这个流程简单，但能持续产出，是我最常用的内容创作方法。",
    ],
  },
  {
    slug: "weekly-review-that-actually-works",
    title: "真正有用的每周复盘模板",
    date: "2025-12-18",
    description: "用 20 分钟回顾一周，把“忙碌”转化为“有方向的改进”。",
    categories: ["复盘", "成长"],
    coverImage:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80",
    content: [
      "每周复盘不需要复杂系统，我只保留三个问题：这周最有效的动作是什么？最大的阻力来自哪里？下周要删掉什么？",
      "其中“删掉什么”最关键。很多时候效率低并不是做得不够多，而是做了太多不重要的事情。",
      "长期坚持后，你会看到时间分配和目标越来越一致，生活的掌控感也会明显提升。",
    ],
  },
];

export const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
