import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "关于 Mason Carter — AI 应用开发者，聚焦多智能体系统、RAG 与工程化评测。",
};

const techStack = [
  {
    category: "AI",
    items: ["LangGraph", "RAG", "LLM Application", "Multi-Agent", "Multimodal AI"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Node.js"],
  },
  {
    category: "Engineering",
    items: ["GitHub", "CI/CD", "Evaluation", "Reproducible Experiments"],
  },
  {
    category: "Native / Research",
    items: ["C++20", "Qt", "Simulation", "Visualization"],
  },
];

const photos = [
  { src: "/photos/life-1.jpg", alt: "生活瞬间 1" },
  { src: "/photos/life-2.jpg", alt: "生活瞬间 2" },
  { src: "/photos/life-3.jpg", alt: "生活瞬间 3" },
  { src: "/photos/life-4.jpg", alt: "生活瞬间 4" },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══ Intro ═══ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-24">
          <FadeIn>
            <p className="text-caption-uppercase text-muted mb-3 tracking-[0.12em]">
              About
            </p>
            <h1 className="text-display-lg text-ink font-serif mb-6 max-w-2xl">
              关于我
            </h1>
            <div className="max-w-2xl space-y-4">
              <p className="text-body-md text-body-strong leading-relaxed">
                我是 Mason Carter，一名 AI 应用开发者。
              </p>
              <p className="text-body-md text-body leading-relaxed">
                我关注的核心问题是：如何将 AI 技术从实验室能力转化为真实场景中可靠运行的工程产品。这不仅是一个技术问题，更是一个关于系统设计、工程治理与人机协作边界的问题。
              </p>
              <p className="text-body-md text-body leading-relaxed">
                目前我的实践方向集中在多智能体系统编排、RAG 知识增强、AI Coding Agent 评测与隐私计算仿真。每个项目都从一个真实问题出发，经过系统设计、工程实现与迭代验证。
              </p>
              <p className="text-body-md text-body leading-relaxed">
                计算机专业本科在读，截至大二上学期均分 83。在心理学教授的支持下开展科研项目，探索 AI 在心理支持场景中的辅助应用边界。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Tech Stack ═══ */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <SectionHeading
              label="Tech Stack"
              title="技术栈"
              description="按领域分类的核心技术能力。"
            />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {techStack.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.08}>
                <div className="bg-surface-card rounded-lg p-6">
                  <h3 className="text-title-sm text-ink font-medium mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-3 py-1 rounded-full bg-hairline-soft text-caption text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Education ═══ */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <SectionHeading
              label="Education"
              title="教育背景"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl space-y-6">
              <div className="bg-surface-card rounded-lg p-6">
                <h3 className="text-title-md text-ink font-medium mb-1">
                  计算机科学与技术 · 本科在读
                </h3>
                <p className="text-body-sm text-muted mb-3">
                  截至大二上学期均分 83
                </p>
                <p className="text-body-sm text-body leading-relaxed">
                  在心理学教授的支持下，开展 AI 在心理支持场景中的辅助应用科研项目。跨学科的经历帮助我更好地理解 AI 技术的伦理边界与人机协作设计。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Photo Wall ═══ */}
      <section className="bg-surface-soft">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <FadeIn>
            <SectionHeading
              label="Life"
              title="生活片段"
              description="代码之外的日子。"
            />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {photos.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.1}>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-surface-card flex items-center justify-center">
                  <span className="text-body-sm text-muted">{photo.alt}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
