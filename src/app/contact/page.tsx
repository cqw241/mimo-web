import type { Metadata } from "next";
import { Mail, FileText } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "联系 Mason Carter — AI 应用开发、LLM 工程化或多智能体系统方向的实习生。",
};

export default function ContactPage() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-24">
        <FadeIn>
          <p className="text-caption-uppercase text-muted mb-3 tracking-[0.12em]">
            Contact
          </p>
          <h1 className="text-display-lg text-ink font-serif mb-6 max-w-2xl">
            联系我
          </h1>
          <p className="text-body-md text-body max-w-xl leading-relaxed mb-12">
            如果你正在寻找 AI 应用开发、LLM 工程化或多智能体系统方向的实习生，欢迎联系我。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          <FadeIn delay={0} className="h-full">
            <a
              href="mailto:exue489@gmail.com"
              className="group block h-full bg-surface-card rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(20,20,19,0.06)]"
            >
              <div className="w-10 h-10 rounded-md bg-hairline-soft flex items-center justify-center text-primary mb-5">
                <Mail size={20} />
              </div>
              <h3 className="text-title-sm text-ink font-medium mb-1">
                Email
              </h3>
              <p className="text-body-sm text-body break-all mb-1">
                exue489@gmail.com
              </p>
              <p className="text-body-sm text-body break-all">
                2191917096@qq.com
              </p>
            </a>
          </FadeIn>

          <FadeIn delay={0.1} className="h-full">
            <a
              href="https://github.com/cqw241"
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full bg-surface-card rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(20,20,19,0.06)]"
            >
              <div className="w-10 h-10 rounded-md bg-hairline-soft flex items-center justify-center text-primary mb-5">
                <GithubIcon size={20} />
              </div>
              <h3 className="text-title-sm text-ink font-medium mb-1">
                GitHub
              </h3>
              <p className="text-body-sm text-body">
                github.com/cqw241
              </p>
            </a>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full bg-surface-card rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_12px_rgba(20,20,19,0.06)]"
            >
              <div className="w-10 h-10 rounded-md bg-hairline-soft flex items-center justify-center text-primary mb-5">
                <FileText size={20} />
              </div>
              <h3 className="text-title-sm text-ink font-medium mb-1">
                Resume
              </h3>
              <p className="text-body-sm text-body">
                下载简历 PDF
              </p>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
