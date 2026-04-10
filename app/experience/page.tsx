"use client";

import { motion } from "framer-motion";
import { fadeUp, experience } from "@/components/shared";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Experience
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Career Timeline</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/60">
            A progression through infrastructure, networking, and technical operations roles.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 md:pl-10 space-y-10">
          {experience.map((job) => {
            const Icon = job.icon;
            return (
              <motion.div
                key={job.title + job.company}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="relative"
              >
                <div className="absolute -left-[42px] top-2 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#08101f] shadow-lg shadow-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.07]">
                  <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                        {job.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold">{job.title}</h3>
                      <p className="mt-2 text-white/65">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ""}
                      </p>
                    </div>

                    <ul className="space-y-3 text-white/75">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 leading-7"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
