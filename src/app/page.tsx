import Link from "next/link";
import { ArrowRight, Mail, Download, Brain, Search, Code2, BarChart3 } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { CapabilityCard } from "@/components/CapabilityCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  const featuredProject = projects.find((p) => p.slug === "ruicha-xinlian")!;

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-24 md:pt-32 md:pb-32">
          <FadeIn>
            <p className="text-caption-uppercase text-muted mb-4 tracking-[0.12em]">
              AI 应用开发者
            </p>
            <h1 className="text-display-xl text-ink font-serif max-w-3xl mb-6">
              Mason Carter｜柴其炜
            </h1>
            <p className="text-display-sm text-ink font-serif max-w-2xl mb-4">
              AI落地，产品说话
            </p>
            <p className="text-body-md text-body max-w-xl leading-relaxed mb-10">
              聚焦多智能体系统、RAG、AI Coding Agent 与工程化评测，探索 AI
              在心理支持、代码智能与隐私计算等复杂场景中的可靠落地。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-primary text-on-primary text-button font-medium hover:bg-primary-active transition-colors"
              >
                查看项目
                <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-canvas text-ink text-button font-medium border border-hairline hover:bg-surface-soft transition-colors"
              >
                <Download size={15} />
                下载简历
              </a>
              <a
                href="https://github.com/cqw241"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-canvas text-ink text-button font-medium border border-hairline hover:bg-surface-soft transition-colors"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-canvas text-ink text-button font-medium border border-hairline hover:bg-surface-soft transition-colors"
              >
                <Mail size={15} />
                联系我
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Featured Projects ═══ */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <SectionHeading
              label="Projects"
              title="项目经历"
              description="以项目驱动学习，以产品验证技术。"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Capability Areas ═══ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <SectionHeading
              label="Capabilities"
              title="能力方向"
              description="围绕 AI 工程化落地的核心能力。"
            />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0}>
              <CapabilityCard
                icon={<Brain size={20} />}
                title="Multi-Agent Systems"
                description="基于 LangGraph 的多智能体编排，任务分解、状态管理与协作流程设计。"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <CapabilityCard
                icon={<Search size={20} />}
                title="RAG & Knowledge Systems"
                description="检索增强生成、知识库构建与上下文工程，提升 LLM 在专业领域的可靠性。"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <CapabilityCard
                icon={<Code2 size={20} />}
                title="AI Coding Agent"
                description="面向代码智能的评测框架、CI 修复场景与工程化治理方案。"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <CapabilityCard
                icon={<BarChart3 size={20} />}
                title="Simulation & Visualization"
                description="隐私计算仿真、指标量化分析与可视化实验平台构建。"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Highlight: 睿察 · 心链 ═══ */}
      <section className="bg-surface-dark">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <p className="text-caption-uppercase text-on-dark-soft mb-3 tracking-[0.12em]">
              Featured Project
            </p>
            <h2 className="text-display-md text-on-dark font-serif tracking-tight mb-4">
              {featuredProject.name}
            </h2>
            <p className="text-body-md text-on-dark-soft max-w-2xl leading-relaxed mb-8">
              {featuredProject.tagline}。{featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 rounded-full bg-surface-dark-elevated text-caption text-on-dark-soft"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/projects/${featuredProject.slug}`}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-primary text-on-primary text-button font-medium hover:bg-primary-active transition-colors"
              >
                查看案例详情
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA Band ═══ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <div className="bg-primary rounded-lg p-12 md:p-16 text-center">
              <h2 className="text-display-sm text-on-primary font-serif mb-4">
                AI 落地，产品说话
              </h2>
              <p className="text-body-md text-on-primary/80 max-w-lg mx-auto mb-8">
                如果你正在寻找 AI 应用开发、LLM 工程化或多智能体系统方向的实习生，欢迎联系我。
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-canvas text-ink text-button font-medium hover:bg-surface-soft transition-colors"
                >
                  联系我
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-primary-active text-on-primary text-button font-medium hover:opacity-90 transition-colors"
                >
                  下载简历
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
