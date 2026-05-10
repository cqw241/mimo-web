import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { projects } from "@/data/projects";
import { CaseStudySection } from "@/components/CaseStudySection";
import { FadeIn } from "@/components/FadeIn";

const project = projects.find((p) => p.slug === "geotaskshield")!;

export const metadata: Metadata = {
  title: `${project.name} — 案例详情`,
  description: project.description,
};

export default function GeotaskshieldCaseStudy() {
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
              个人项目 · Privacy Computing
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

      {/* ═══ Background ═══ */}
      <CaseStudySection label="Background" title="背景与问题">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-body-md text-body leading-relaxed mb-4">
              移动群智感知（Mobile Crowdsensing）通过大量移动设备用户协作完成感知任务，但参与者的位置隐私面临严重威胁。任务分配过程中，平台需要知道参与者的位置以优化分配效率，但这直接暴露了用户的行踪轨迹。
            </p>
            <p className="text-body-md text-body leading-relaxed">
              GeoTaskShield 的核心问题是：如何在保护参与者位置隐私的同时，维持合理的任务完成率和系统收益？不同的隐私机制与分配算法对效率与隐私的权衡影响如何？
            </p>
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Target Users ═══ */}
      <CaseStudySection label="Users" title="目标用户" dark>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                隐私计算研究者
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                需要可复现的实验平台来对比不同隐私机制的效果与代价。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                群智感知平台设计者
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                需要在系统设计阶段评估隐私保护策略对业务指标的影响。
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
              系统构建了一个完整的仿真环境，支持多维度量化分析：
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "场景建模",
                  desc: "定义感知任务、参与者、地理位置与移动模型，构建可配置的仿真场景。",
                },
                {
                  step: "02",
                  title: "隐私机制实现",
                  desc: "实现多种位置隐私保护机制（如差分隐私、位置扰动、地理混淆等）。",
                },
                {
                  step: "03",
                  title: "任务分配算法",
                  desc: "实现多种分配策略，在隐私约束下优化任务完成率与系统收益。",
                },
                {
                  step: "04",
                  title: "多指标量化评估",
                  desc: "量化任务完成率、系统收益、公平性与隐私损失等核心指标。",
                },
                {
                  step: "05",
                  title: "可视化与报告",
                  desc: "提供实时仿真可视化、批量实验分析与 Markdown/CSV 报告导出。",
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

      {/* ═══ Architecture ═══ */}
      <CaseStudySection label="Architecture" title="系统架构" dark>
        <FadeIn>
          <div className="max-w-4xl">
            <div className="bg-surface-dark-elevated rounded-lg p-8 font-mono text-code text-on-dark-soft overflow-x-auto">
              <pre className="whitespace-pre">{`
┌─────────────────────────────────────────────────┐
│              Qt Visualization Layer              │
│     地图渲染 · 实时仿真 · 交互控制面板           │
└──────────────────────┬──────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────┐
│            Simulation Engine (C++20)             │
│  ┌──────────────┐  ┌──────────────────────────┐  │
│  │ 场景管理器    │  │ 移动模型 & 任务生成器    │  │
│  └──────┬───────┘  └──────────┬───────────────┘  │
│         │                     │                  │
│  ┌──────▼─────────────────────▼───────────────┐  │
│  │         Task Allocation Engine              │  │
│  │    多种分配算法 · 隐私约束求解              │  │
│  └──────────────────┬────────────────────────┘   │
│                     ▼                            │
│  ┌────────────────────────────────────────────┐  │
│  │        Privacy Mechanism Layer             │  │
│  │  差分隐私 · 位置扰动 · 地理混淆            │  │
│  └──────────────────┬────────────────────────┘   │
│                     ▼                            │
│  ┌────────────────────────────────────────────┐  │
│  │      Metrics & Analysis Engine             │  │
│  │  完成率 · 收益 · 公平性 · 隐私损失         │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
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
                title: "仿真引擎",
                desc: "基于 C++20 构建的高性能仿真核心，支持大规模参与者与任务的并行仿真。",
              },
              {
                title: "隐私机制层",
                desc: "可插拔的隐私保护模块，支持差分隐私、位置扰动、地理混淆等多种机制。",
              },
              {
                title: "可视化界面",
                desc: "基于 Qt 的实时仿真可视化，支持地图渲染、参数调节与结果展示。",
              },
              {
                title: "实验分析与报告",
                desc: "批量实验配置、自动化执行与 Markdown/CSV 格式报告导出。",
              },
            ].map((mod) => (
              <div key={mod.title} className="bg-surface-card rounded-lg p-6">
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

      {/* ═══ Contribution ═══ */}
      <CaseStudySection label="Contribution" title="我的贡献" dark>
        <FadeIn>
          <div className="max-w-3xl space-y-3">
            {[
              "设计整体系统架构与仿真流程",
              "实现基于 C++20 的高性能仿真引擎",
              "构建多种隐私保护机制的可插拔模块",
              "开发 Qt 可视化界面与交互控制面板",
              "设计多指标量化评估体系",
              "实现批量实验分析与报告导出功能",
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
                隐私保护不是零和博弈。通过合理的机制设计，可以在可接受的隐私损失范围内维持较高的任务完成率。仿真实验的价值在于提供量化的决策依据，而非直觉判断。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                下一步计划
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                引入更复杂的移动模型；支持动态隐私预算调整；扩展到更大规模的仿真实验；探索与真实数据集的对接。
              </p>
            </div>
          </div>
        </FadeIn>
      </CaseStudySection>
    </>
  );
}
