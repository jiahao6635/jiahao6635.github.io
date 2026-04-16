# 项目作品集模块设计（Markdown 驱动）

- 日期：2026-04-16
- 项目：`jiahao6635.github.io`
- 目标：在个人博客中新增直观的项目作品集展示模块，参考 `lispking.github.io` 的气质，但保持现有站点风格一致。

## 1. 背景与目标

当前博客已具备文章列表与文章详情能力，但项目展示仍偏简历式，缺少视觉层次与叙事结构。新增作品集模块后，用户应能快速看到：

- 我做过哪些项目
- 项目类型与技术标签
- 每个项目的核心价值与完整细节

## 2. 范围与非目标

范围内：

- 新增 Markdown 驱动项目数据源
- 重构 `/projects` 为大卡片作品集列表
- 新增 `/projects/[slug]` 项目详情页
- 顶部导航增加“项目”入口
- 缺失 `demo` / `github` 时自动隐藏对应按钮

范围外：

- 不做时间字段展示
- 不做后台 CMS
- 不做复杂搜索（仅标签/状态筛选）

## 3. 用户已确认约束

- 数据维护方式：Markdown 自动读取
- 字段中不展示时间
- `github` 不是必填链接
- 列表风格：大卡片（视觉优先）
- 详情进入方式：点击卡片进入独立详情页

## 4. 信息架构

路由结构：

- `/projects`：项目列表页（大卡片）
- `/projects/[slug]`：项目详情页

内容存储：

- `/_projects/*.md`：每个项目一个文件

前端数据层：

- `src/data/projects.ts`：读取、解析、排序、查询项目数据

## 5. 数据模型（Frontmatter）

必填字段：

- `title: string`
- `description: string`
- `coverImage: string`
- `tags: string[]`
- `status: "进行中" | "已完成"`
- `featured: boolean`

可选字段：

- `demo?: string`
- `github?: string`

正文：

- Markdown 正文用于详情页叙事（背景、难点、方案、结果）

Slug 规则：

- 从文件名生成 `slug`（例如 `_projects/xianyu-auto-search.md` -> `xianyu-auto-search`）

## 6. 页面设计

### 6.1 `/projects` 列表页

页面结构：

- 顶部标题区：模块标题 + 定位说明
- 筛选区：
  - 标签筛选（动态汇总全部标签）
  - 状态筛选（全部 / 进行中 / 已完成）
- 列表区：大卡片网格
  - 桌面：2 列
  - 移动端：1 列

卡片信息：

- 封面大图
- 项目标题
- 项目简介
- 标签组
- 状态标签
- 操作入口：
  - “查看详情”（内部路由）
  - `demo` 按钮（存在时显示）
  - `github` 按钮（存在时显示）

交互：

- hover 轻微上浮与阴影增强
- 按钮和标签复用站点现有暖色风格

### 6.2 `/projects/[slug]` 详情页

页面结构：

- Hero：封面图、标题、标签、状态
- 正文区：Markdown 渲染内容
- 底部操作区：可选 `demo` / `github` + 返回作品集

## 7. 视觉与样式策略

设计基调：

- 保持现有 `soft-white + muted-gold` 主题
- 保留现有字体与纸感背景
- 在项目模块上强化“作品展示感”（大图比例、留白、卡片层次）

样式组织：

- 在 `src/app/globals.css` 增加 `portfolio-*` 命名样式
- 不引入新的 UI 框架

## 8. 组件与文件变更计划

新增：

- `src/data/projects.ts`
- `src/app/projects/[slug]/page.tsx`
- `_projects/*.md`（至少 2-3 个示例）

修改：

- `src/app/projects/page.tsx`
- `src/components/Navbar.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`（新增“精选项目”区块，可选但默认实现）

## 9. 数据流

1. 构建期读取 `/_projects/*.md`
2. 解析 frontmatter 与 Markdown 正文
3. 生成项目数组并导出：
   - `projects`
   - `sortedProjects`
   - `getProjectBySlug(slug)`
4. 列表页读取 `sortedProjects`
5. 详情页按 `slug` 查询并渲染

## 10. 错误处理

- frontmatter 缺失关键字段：在构建时提供默认回退，避免页面崩溃
- 封面图为空：回退到占位图（`/placeholder.jpg`）
- slug 不存在：详情页 `notFound()`
- demo/github 为空：不渲染对应按钮

## 11. 测试与验收

功能验收：

- `/projects` 正常展示且筛选可用
- 卡片点击进入正确详情页
- 无 `demo/github` 的项目卡片不出现空按钮
- 移动端与桌面端布局正常

工程验收：

- `npm run lint` 通过
- `npm run build` 通过

## 12. 风险与应对

- 风险：Markdown frontmatter 手写错误导致数据异常
- 应对：在 `projects.ts` 里做字段兜底与安全转换

- 风险：卡片内容过长导致视觉失衡
- 应对：列表页简介截断，详情页展示完整信息

## 13. 实施顺序

1. 建立 `projects.ts` 与 Markdown 数据源
2. 实现详情页
3. 重构列表页（大卡片 + 筛选）
4. 补齐导航与首页入口
5. 完成样式与响应式调优
6. 运行 lint/build 验证
