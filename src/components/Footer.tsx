import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <p className="text-title-md text-on-dark font-medium mb-2">
              Mason Carter
            </p>
            <p className="text-body-sm max-w-xs leading-relaxed">
              AI 应用开发者 — 把 AI 技术转化为真实场景中的工程产品。
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="text-caption-uppercase text-on-dark mb-4 tracking-[0.12em]">
                导航
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-body-sm hover:text-on-dark transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-body-sm hover:text-on-dark transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-body-sm hover:text-on-dark transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-body-sm hover:text-on-dark transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-caption-uppercase text-on-dark mb-4 tracking-[0.12em]">
                联系方式
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:exue489@gmail.com"
                  className="text-body-sm hover:text-on-dark transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={14} />
                  exue489@gmail.com
                </a>
                <a
                  href="https://github.com/cqw241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm hover:text-on-dark transition-colors inline-flex items-center gap-2"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm hover:text-on-dark transition-colors inline-flex items-center gap-2"
                >
                  <FileText size={14} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-caption text-muted-soft">
            &copy; {new Date().getFullYear()} Mason Carter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
