# 网站改动说明

## 页面与导航

- 统一全站为浅蓝灰背景、白色内容面板、深蓝黑文字与冷蓝强调色。
- 首页的 Logo 与标题区下方增加一级导航：Home、Leaderboard、Getting started、Learn LLMRouter、Tutorials、API Reference。
- 首页与 Leaderboard 隐藏左侧导航栏；右侧目录（Table of contents）保留。
- Leaderboard 调整为紧凑的 benchmark 表格样式：固定表头/前列、搜索、赛道切换和排序均保留。

## 排行榜数值

已按论文 `LLMRouter: An Unified Library for LLM Routing` 的 Tables 2–4 核对数据。

- Personalized track 与 Real users 数值与论文一致。
- Main track 的 `CausalLM` 不再标记为 pending，补全论文 Table 2 的结果：
  - General 66.90，LoCoMo 25.40，LongMemEval 37.60
  - Geometry3K 24.60，MathVista 34.00，Video 33.33
  - TimeSeries 45.70，Avg 38.22
- 数据来源更新为论文 Tables 2–4，更新时间为 `2026-08-04`。

以上改动仅保存在本地，未 commit 或 push。
