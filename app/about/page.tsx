"use client";

import { motion } from "framer-motion";
import { fadeUp, GraduationCap } from "@/components/shared";

export default function AboutPage() {
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
            About Me
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Technical depth with field execution
          </h1>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Background
            </p>
            <h2 className="text-2xl font-semibold">Who I Am</h2>
            <p className="mt-5 leading-8 text-white/70">
              My background combines infrastructure support, networking,
              telecom systems, and operational automation. I am strongest in
              environments where physical hardware, connectivity,
              troubleshooting, and process discipline all matter at the same
              time.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              I like work that is real, measurable, and close to the systems
              that keep organizations running - from cabling and device
              deployment to documentation, diagnosis, and workflow
              improvement.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              Currently working as an AWS Network Deployment Technician through
              TEKsystems, I focus on hands-on deployment, Layer 1-3 troubleshooting,
              and maintaining the physical infrastructure that powers cloud-scale systems.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-violet-300">
              Education
            </p>
            <h2 className="text-2xl font-semibold">Academic Foundation</h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-cyan-300" />
                  <h3 className="text-lg font-medium">
                    George Mason University
                  </h3>
                </div>
                <p className="font-medium">
                  Bachelor of Applied Science, Cyber Security
                </p>
                <p className="text-sm text-white/60">December 2023</p>
                <p className="mt-2 text-sm text-white/50">
                  Concentration in Cyber Security and Data Analysis
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-violet-300" />
                  <h3 className="text-lg font-medium">
                    Northern Virginia Community College (NVCC)
                  </h3>
                </div>
                <p className="font-medium">
                  Associate of Applied Science, Cyber Security
                </p>
                <p className="text-sm text-white/60">August 2021</p>
                <p className="mt-2 text-sm text-white/50">
                  Concentration in Cyber Security and Network Configuration
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Certifications & Location
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-2xl font-semibold text-white">Security+</p>
              <p className="mt-1 text-sm text-white/55">CompTIA Certified</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-2xl font-semibold text-white">Virginia</p>
              <p className="mt-1 text-sm text-white/55">Southbridge Area</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-2xl font-semibold text-white">AWS</p>
              <p className="mt-1 text-sm text-white/55">Data Center Environment</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
