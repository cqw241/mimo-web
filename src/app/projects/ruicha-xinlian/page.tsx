import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { projects } from "@/data/projects";
import { CaseStudySection } from "@/components/CaseStudySection";
import { FadeIn } from "@/components/FadeIn";

const project = projects.find((p) => p.slug === "ruicha-xinlian")!;

export const metadata: Metadata = {
  title: `${project.name} — 案例详情`,
  description: project.description,
};

export default function RuichaCaseStudy() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 pt-12 pb-24">
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              返回项目列表
            </Link>

            <p className="text-caption-uppercase text-primary mb-3 tracking-[0.12em]">
              科研项目 · AI 辅助识别
            </p>
            <h1 className="text-display-lg text-ink font-serif mb-4">
              {project.name}
            </h1>
            <p className="text-display-sm text-ink font-serif max-w-2xl mb-6">
              {project.tagline}
            </p>
            <p className="text-body-md text-body max-w-xl leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 rounded-full bg-surface-card text-caption text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/cqw241"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-canvas text-ink text-button font-medium border border-hairline hover:bg-surface-soft transition-colors"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Background & Problem ═══ */}
      <CaseStudySection label="Background" title="背景与问题">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-body-md text-body leading-relaxed mb-4">
              睿察·心链聚焦一个核心悖论：学生心理求助意愿低、早期信号不典型，而学校心理中心资源有限，难以在庞大学生群体中快速发现风险并启动规范转介。
            </p>
            <p className="text-body-md text-body leading-relaxed">
              睿察·心链通过多智能体协同与多模态分析技术，在保护隐私、不替代专业判断的前提下，架起一座从“风险初现”到“专业介入”的桥梁。
            </p>
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Target Users ═══ */}
      <CaseStudySection label="Users" title="目标用户与使用场景" dark>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                学校心理中心
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                接受系统的转介汇总信息和智能预警，精准分配专业干预资源到真正需要的学生。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                学生群体
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                通过日常标准聊天或视频通话双通道模式降低求助门槛，进行风险筛查和日常倾诉。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                心理健康专员/辅导员
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                按照既定转介流程接收自动触发的信息推送，辅助完成评估与跟进干预闭环。
              </p>
            </div>
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Solution Design ═══ */}
      <CaseStudySection label="Solution" title="解决方案设计">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-body-md text-body leading-relaxed mb-6">
              系统采用多智能体（Multi-Agent）并行架构协作，将风险识别拆分：
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "多模态风险感知",
                  desc: "同步采集并分析文本内容、语音特征（语速、音调）及面部表情变化，捕捉综合风险信号。",
                },
                {
                  step: "02",
                  title: "双通道交互",
                  desc: "提供日常评估标准聊天，以及针对深度辅助评估获取知情同意后的视频通话模式。",
                },
                {
                  step: "03",
                  title: "并行分析汇聚",
                  desc: "文本、视觉、语音等专用智能体同时进行分析工作，并在网关智能体处汇聚（Fan-in）低延迟判断。",
                },
                {
                  step: "04",
                  title: "条件智能路由",
                  desc: "根据多维分析结果动态决定信息流向（Fan-out），只推送高风险案例避免轰炸。",
                },
                {
                  step: "05",
                  title: "规范流转闭环",
                  desc: "按照学校既定的转介流程送达专业人手，不代替诊断决策而是建立识别至介入的桥梁。",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 items-start p-4 bg-surface-card rounded-lg"
                >
                  <span className="text-caption text-primary font-mono mt-0.5 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-title-sm text-ink font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-body-sm text-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ System Architecture ═══ */}
      <CaseStudySection label="Architecture" title="系统架构" dark>
        <FadeIn>
          <div className="max-w-4xl">
            <div className="bg-surface-dark-elevated rounded-lg p-8 font-mono text-code text-on-dark-soft overflow-x-auto">
              <pre className="whitespace-pre">{`
┌─────────────────────────────────────────────────────┐
│                   Frontend (React)                   │
│         用户界面 · 对话交互 · 报告展示               │
└───────────────────────┬─────────────────────────────┘
                        │ API
┌───────────────────────▼─────────────────────────────┐
│               Backend (Python / FastAPI)             │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │ 文本分析  │  │ 语音分析  │  │   面部线索分析     │  │
│  │  Agent   │  │  Agent   │  │     Agent        │  │
│  └────┬─────┘  └────┬─────┘  └───────┬───────────┘  │
│       │              │                │              │
│       └──────────────┼────────────────┘              │
│                      ▼                               │
│  ┌───────────────────────────────────────────────┐   │
│  │        LangGraph Orchestration Layer          │   │
│  │     状态管理 · 条件路由 · 结果聚合             │   │
│  └──────────────────────┬────────────────────────┘   │
│                         ▼                            │
│  ┌───────────────────────────────────────────────┐   │
│  │          Risk Grading Engine                   │   │
│  │      多维信号融合 · 分级策略 · 可解释输出       │   │
│  └──────────────────────┬────────────────────────┘   │
│                         ▼                            │
│  ┌───────────────────────────────────────────────┐   │
│  │     Alert & Human Review Pipeline             │   │
│  │      脱敏处理 · 告警推送 · 人工复核            │   │
│  └───────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┘
              `}</pre>
            </div>
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Core Modules ═══ */}
      <CaseStudySection label="Modules" title="核心模块">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                title: "多模态信号处理",
                desc: "文本情感分析、语音情绪识别、面部表情特征提取，统一编码为结构化信号向量。",
              },
              {
                title: "LangGraph 编排引擎",
                desc: "定义 Agent 拓扑、状态机、条件分支与错误恢复策略，支持灵活扩展新的分析 Agent。",
              },
              {
                title: "风险分级策略",
                desc: "基于规则与模型混合的分级引擎，输出低 / 中 / 高三级风险评估及可解释依据。",
              },
              {
                title: "RAG 知识检索",
                desc: "接入心理学文献与案例库，为分析 Agent 提供领域知识支撑，增强判断的专业性。",
              },
            ].map((mod) => (
              <div
                key={mod.title}
                className="bg-surface-card rounded-lg p-6"
              >
                <h3 className="text-title-sm text-ink font-medium mb-2">
                  {mod.title}
                </h3>
                <p className="text-body-sm text-body leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ My Contribution ═══ */}
      <CaseStudySection label="Contribution" title="我的贡献" dark>
        <FadeIn>
          <div className="max-w-3xl space-y-3">
            {[
              "设计并实现基于 LangGraph 的多智能体编排框架",
              "构建多模态信号融合与风险分级策略",
              "开发完整前后端系统，包含对话界面与报告展示",
              "集成 RAG 模块，接入心理学领域知识库",
              "设计脱敏告警与人工复核流程",
              "与心理学教授协作，确保系统的专业边界与伦理合规",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-3 bg-surface-dark-elevated rounded-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-body-sm text-on-dark leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Tech Stack ═══ */}
      <CaseStudySection label="Tech Stack" title="技术栈">
        <FadeIn>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-4 py-2 rounded-full bg-surface-card text-caption text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Reflection ═══ */}
      <CaseStudySection label="Reflection" title="反思与下一步" dark>
        <FadeIn>
          <div className="max-w-3xl space-y-4">
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                关键认知
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                多智能体系统的价值不在于技术复杂度，而在于将复杂任务拆解为可管理、可审计、可迭代的独立单元。在心理支持场景中，系统的可靠性和伦理边界比识别准确率更为重要。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                下一步计划
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                引入长期用户账号体系，支持连续性跟踪；优化多模态融合的权重自适应机制；扩展 RAG 知识库覆盖范围；开展小规模试点验证。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                重要声明
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                本系统定位为智能辅助与人工复核系统，不替代专业心理诊断。所有风险评估结果均需经专业人员确认后方可作为决策参考。
              </p>
            </div>
          </div>
        </FadeIn>
      </CaseStudySection>
    </>
  );
}
