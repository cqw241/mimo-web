import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { projects } from "@/data/projects";
import { CaseStudySection } from "@/components/CaseStudySection";
import { FadeIn } from "@/components/FadeIn";

const project = projects.find((p) => p.slug === "repopilot-harness")!;

export const metadata: Metadata = {
  title: `${project.name} — 案例详情`,
  description: project.description,
};

export default function RepopilotCaseStudy() {
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
              个人项目 · Developer Tools
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
              AI Coding Agent 正在快速进化，但工程界缺乏系统化的方式来评测、比较和治理这些 Agent 在真实工程场景中的表现。CI 修复是一个高价值的评测场景 — 它真实、可量化、有明确的成功标准。
            </p>
            <p className="text-body-md text-body leading-relaxed">
              RepoPilot Harness 的核心问题是：如何将散落在 CI 日志中的失败信息，转化为可复现、可评测、可审计、可持续改进的工程资产？
            </p>
          </div>
        </FadeIn>
      </CaseStudySection>

      {/* ═══ Target Users ═══ */}
      <CaseStudySection label="Users" title="目标用户" dark>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                AI Agent 开发者
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                需要量化评测 Agent 在真实 CI 场景中的修复能力。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                工程效能团队
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                需要治理和审计 AI 辅助编码的质量与可靠性。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                研究团队
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                需要可复现的实验基准来比较不同 Agent 策略。
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
              系统围绕「CI 失败 → 评测资产」的转化链路设计：
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "CI 失败采集",
                  desc: "自动捕获 CI 流水线中的失败日志、错误类型与上下文信息。",
                },
                {
                  step: "02",
                  title: "可复现封装",
                  desc: "将失败场景封装为独立的、可复现的测试用例，确保评测的一致性。",
                },
                {
                  step: "03",
                  title: "Agent 评测执行",
                  desc: "在隔离环境中运行 AI Coding Agent，记录修复过程与结果。",
                },
                {
                  step: "04",
                  title: "多维度评估",
                  desc: "从正确性、效率、代码质量等维度量化评估修复结果。",
                },
                {
                  step: "05",
                  title: "审计与改进",
                  desc: "生成可审计的评测报告，支持历史对比与持续改进。",
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
│              CI Failure Collector                │
│        GitHub Actions · CI Log Parser            │
└──────────────────────┬──────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────┐
│            Reproducible Test Case                │
│      环境快照 · 依赖锁定 · 失败复现脚本          │
└──────────────────────┬──────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────┐
│            Agent Evaluation Sandbox              │
│      隔离执行 · 过程录制 · 资源限制              │
└──────────────────────┬──────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────┐
│           Multi-Dimensional Scorer               │
│    正确性 · 效率 · 代码质量 · 安全性             │
└──────────────────────┬──────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────┐
│        Audit Report & Governance                 │
│    可视化报告 · 历史对比 · 趋势分析              │
└─────────────────────────────────────────────────┘
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
                title: "CI 失败采集器",
                desc: "对接 GitHub Actions API，解析 CI 日志，提取失败上下文与错误分类。",
              },
              {
                title: "可复现封装器",
                desc: "将失败场景封装为独立测试用例，包含环境配置、依赖锁定与复现脚本。",
              },
              {
                title: "Agent 评测沙箱",
                desc: "隔离执行环境，支持过程录制、资源限制与超时控制。",
              },
              {
                title: "治理报告引擎",
                desc: "生成结构化评测报告，支持多维度评分、历史对比与趋势可视化。",
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
              "设计整体系统架构与评测流程",
              "实现 CI 失败采集与可复现封装模块",
              "构建 Agent 评测沙箱与执行框架",
              "设计多维度评分体系",
              "开发审计报告与可视化界面",
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
                AI Coding Agent 的评测不应只看「能否修复」，更应关注修复的质量、效率和可审计性。工程化评测的核心价值在于将主观印象转化为可量化的工程指标。
              </p>
            </div>
            <div className="bg-surface-dark-elevated rounded-lg p-6">
              <h3 className="text-title-sm text-on-dark font-medium mb-2">
                下一步计划
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">
                扩展更多 CI 失败类型的支持；引入多 Agent 对比评测；构建公开的评测基准数据集。
              </p>
            </div>
          </div>
        </FadeIn>
      </CaseStudySection>
    </>
  );
}
