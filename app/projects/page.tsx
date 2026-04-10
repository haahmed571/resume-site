"use client";

import { motion } from "framer-motion";
import { fadeUp, projects, Briefcase } from "@/components/shared";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-violet-300">
            Projects
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Systems I've Built</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/60">
            Technical projects focused on automation, operations, and process improvement.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                <Briefcase className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-white/68">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Approach
          </p>
          <h2 className="text-2xl font-semibold">How I Build</h2>
          <p className="mt-4 leading-8 text-white/70">
            My projects focus on solving real operational problems - reducing manual work,
            improving visibility into processes, and creating tools that make day-to-day
            technical operations more efficient. I prefer building solutions that directly
            address workflow bottlenecks and integrate with existing systems.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
