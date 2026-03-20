---
title: "OpenClaw 技能安装与配置记录"
date: 2026-03-20 11:49:00 +0800
categories: [OpenClaw, 技能配置]
tags: [OpenClaw, AI, 技能安装，self-improving-agent]
author: 嘉豪
---

# OpenClaw 技能安装与配置记录

**日期**: 2026 年 3 月 20 日  
**作者**: 嘉豪  
**项目**: OpenClaw 虚拟程序员龙虾养成计划

---

## 📋 概述

本文档记录了 OpenClaw 技能的安装过程和当前已配置的技能清单，作为虚拟程序员龙虾养成计划的一部分。

---

## 🔧 安装 self-improving-agent 技能

### 技能说明

**self-improving-agent** 是一个让 AI 持续学习和改进的技能。它通过记录错误、纠正和经验到 markdown 文件，帮助 AI 在后续任务中避免重复犯错。

### 安装步骤

#### 1. 尝试通过 clawdhub 安装（失败）

```bash
clawdhub install self-improving-agent
```

**结果**: `clawdhub` 命令在当前环境中不可用。

#### 2. 改用手动安装（成功）

```bash
git clone https://github.com/peterskoett/self-improving-agent.git ~/.openclaw/skills/self-improving-agent
```

#### 3. 创建学习文件目录

```bash
mkdir -p ~/.openclaw/workspace/.learnings
```

#### 4. 初始化日志文件

创建三个核心日志文件：

- `LEARNINGS.md` — 记录纠正、知识缺口、最佳实践
- `ERRORS.md` — 记录命令失败、异常
- `FEATURE_REQUESTS.md` — 记录用户请求的功能

#### 5. 启用 Hook 自动提醒

```bash
Copy-Item -Recurse ~/.openclaw/skills/self-improving-agent/hooks/openclaw ~/.openclaw/hooks/self-improvement
openclaw hooks enable self-improvement
```

**结果**: ✅ Hook 启用成功 `🧠 self-improvement`

### 使用规范

| 情况 | 记录位置 |
|------|----------|
| 命令报错 | `ERRORS.md` |
| 用户纠正 | `LEARNINGS.md` (category: correction) |
| 发现更好的做法 | `LEARNINGS.md` (category: best_practice) |
| 用户要新功能 | `FEATURE_REQUESTS.md` |

有价值的学习可以推广到 `SOUL.md`、`AGENTS.md`、`TOOLS.md` 等文件，变成永久规则。

---

## 📦 当前已安装技能清单

### 全局技能 (`~/.openclaw/skills/`)

| 技能 | 说明 |
|------|------|
| `self-improving-agent` | 持续学习技能，记录错误和经验到 markdown 文件 |

### 工作区技能 (`~/.openclaw/workspace/skills/`)

| 技能 | 说明 |
|------|------|
| `agent-browser` | Rust 无头浏览器自动化 CLI |
| `agent-team-orchestration` | 多 Agent 团队协作编排 |
| `claude-code` | Claude Code 集成 |
| `codex-orchestrator` | Codex 后台进程管理 |
| `codex-sub-agents` | OpenAI Codex CLI 编码任务 |
| `context7-cli` | Context7 文档库管理 CLI |
| `evolver` | 能力进化 - 自动改进性能 |
| `ontology` | 类型化知识图谱 |
| `planning-with-files` | 文件式规划，跟踪复杂任务进度 |
| `prompt-engineering-expert` | 提示工程专家指导 |
| `using-superpowers` | 强制技能调用协议 |

### 内置扩展（已启用）

- `feishu_doc` - 飞书文档读写
- `feishu_chat` - 飞书聊天
- `feishu_wiki` - 飞书知识库
- `feishu_drive` - 飞书云存储
- `feishu_bitable` - 飞书多维表格

---

## 📊 统计

- **全局技能**: 1 个
- **工作区技能**: 11 个
- **飞书扩展**: 5 个
- **总计**: 17 个技能/扩展

---

## 🎯 下一步计划

1. 验证 self-improving-agent 的 hook 是否正常工作
2. 在实际任务中测试学习记录流程
3. 根据使用情况优化技能配置
4. 探索其他 ClawHub 技能的安装

---

## 📝 备注

- 本文档由 OpenClaw 虚拟程序员龙虾自动生成
- 记录时间：2026-03-20
- Git 用户：jiahao6635 <li15733056635@163.com>
