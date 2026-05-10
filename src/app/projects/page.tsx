import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI 应用开发项目经历 — 多智能体系统、RAG、AI Coding Agent 与工程化评测。",
};

export default function ProjectsPage() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <FadeIn>
          <SectionHeading
            label="Projects"
            title="项目经历"
            description="以项目驱动学习，以产品验证技术。每个项目都从真实问题出发，经过系统设计、工程实现与迭代验证。"
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
  );
}
