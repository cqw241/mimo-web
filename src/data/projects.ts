export interface Project {
  slug: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  status: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "ruicha-xinlian",
    name: "睿察 · 心链",
    nameEn: "Ruicha Xinlian",
    tagline: "面向高校心理支持场景的多智能体 AI 辅助识别系统",
    description:
      "融合文本、语音与面部线索，通过 LangGraph Agent 编排、多模态分析与风险分级策略，支持心理风险早期识别、脱敏告警、人工复核与规范转介闭环。",
    tags: [
      "LangGraph",
      "Multi-Agent",
      "Multimodal AI",
      "Risk Grading",
      "RAG",
      "Full-stack",
    ],
    coverImage: "/projects/ruicha/cover.png",
    featured: true,
    status: "可运行多智能体流程，完整前后端，可进行一次性测试",
    highlights: [
      "LangGraph Agent 编排",
      "风险分级策略",
      "多模态融合",
    ],
  },
  {
    slug: "repopilot-harness",
    name: "RepoPilot Harness",
    nameEn: "RepoPilot Harness",
    tagline: "面向 AI Coding Agent 的工程化 Harness、CI 修复评测与治理平台",
    description:
      "以 CI 修复为首个高价值场景，将真实 CI 失败转化为可复现、可评测、可审计、可持续改进的私有工程资产。",
    tags: [
      "AI Coding Agent",
      "CI Repair",
      "Evaluation Harness",
      "Governance",
      "Developer Tools",
    ],
    coverImage: "/projects/repopilot/cover.png",
    featured: false,
    status: "开发中",
    highlights: [
      "工程化评测",
      "CI 修复场景",
      "可审计与可持续改进",
    ],
  },
  {
    slug: "geotaskshield",
    name: "GeoTaskShield",
    nameEn: "GeoTaskShield",
    tagline: "面向移动群智感知的隐私保护任务分配仿真系统",
    description:
      "通过量化任务完成率、系统收益、公平性与隐私损失等指标，对比不同隐私机制与分配算法对效率与隐私权衡的影响。系统基于 C++20 与 Qt 构建，提供可视化仿真、批量实验分析、Markdown/CSV 报告导出及智能实验辅助。",
    tags: [
      "C++20",
      "Qt",
      "Privacy Computing",
      "Simulation",
      "Visualization",
    ],
    coverImage: "/projects/geotaskshield/cover.png",
    featured: false,
    status: "开发中",
    highlights: [
      "隐私效率权衡",
      "可视化仿真",
      "可复现实验分析",
    ],
  },
];
