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
              GeoTaskShield不只是一个任务分配仿真工具，而是面向隐私计算与移动群智感知领域的一体化研究与决策验证平台。我们的核心理念是：让研究者和城市治理者在“数据效用”与“隐私保护”之间找到可量化、可解释、可验证的最优均衡。
            </p>
            <p className="text-body-md text-body leading-relaxed">
              平台将广州大学城这类城市空间的真实矛盾——用位置数据提升服务效率与保护个人轨迹隐私之间的冲突——转化为一套完整的“设计→运行→攻击检验→报告→分享”研究闭环。
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
                学术研究与教学
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                研究不同隐私机制效果，进行沙盒推演与论文数据生成。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                群智感知平台、城市治理决策者
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                评估隐私政策对数据效用的影响与权衡。
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
                  title: "深度仿真引擎",
                  desc: "支持多轮时序仿真与累积隐私风险建模，利用真实路网进行空间计算，实现数字孪生环境。",
                },
                {
                  step: "02",
                  title: "智能研究 Agent",
                  desc: "作为主动研究伙伴分析实验结果，推荐参数优化、提供归因解释，并支持多维反事实推理。",
                },
                {
                  step: "03",
                  title: "多维可解释性",
                  desc: "打开决策黑箱，图形化解释单次分配权重与特征重要性，生成包含全场景的交互 HTML 报告。",
                },
                {
                  step: "04",
                  title: "红蓝对抗验证",
                  desc: "内置典型的攻击模型库进行实测对抗对比，让隐私保障不再停留于理论公式。",
                },
                {
                  step: "05",
                  title: "开放算法生态",
                  desc: "标准化算法接口与基准市场，能够一键复现学术算法或添加插件化的自定义规则。",
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
