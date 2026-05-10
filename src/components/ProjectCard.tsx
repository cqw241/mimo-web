"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.article
        className="group relative bg-surface-card rounded-lg overflow-hidden cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {/* Cover image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-title-lg text-ink font-medium mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-body-sm text-body leading-relaxed mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 rounded-full bg-hairline-soft text-caption text-muted transition-colors duration-300 group-hover:bg-surface-cream-strong"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.article>
    </Link>
  );
}
