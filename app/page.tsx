"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, Shield } from "@/components/shared";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main>
        <section className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-16 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300"
              >
                Resume Portfolio
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
              >
                Building the
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  {" "}
                  physical layer{" "}
                </span>
                behind cloud-scale systems.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-3xl text-lg leading-8 text-white/70"
              >
                AWS Network Deployment Technician, working as a TEKsystems contractor
                supporting Amazon Web Services, with a background in infrastructure
                support, telecom systems, field engineering, and automation. I
                specialize in hands-on deployment, troubleshooting, and operational
                execution across Layer 1-3 network environments.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 shadow-2xl shadow-cyan-500/10 transition hover:scale-[1.02]"
                >
                  View Experience <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/skills"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
                >
                  Explore Skills
                </Link>
                <a
                  href="/resume.pdf"
                  className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium hover:bg-cyan-400/20"
                >
                  Download Resume
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">4+</p>
                  <p className="mt-1 text-sm text-white/55">Technical roles</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">L1-L3</p>
                  <p className="mt-1 text-sm text-white/55">Troubleshooting focus</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">AWS</p>
                  <p className="mt-1 text-sm text-white/55">Deployment environment</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">Security+</p>
                  <p className="mt-1 text-sm text-white/55">Certified foundation</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4 text-sm text-white/65"
              >
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Southbridge, Virginia
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Cyber Security Graduate
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  TEKsystems @ AWS
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Current Focus</p>
                    <h2 className="text-xl font-semibold">
                      Deployment + Troubleshooting
                    </h2>
                  </div>
                  <Shield className="h-10 w-10 text-cyan-300" />
                </div>

                <div className="space-y-4">
                  {[
                    ["Layer 1-3 Diagnostics", "OSI-based fault isolation and issue resolution"],
                    ["Fiber & Cabling", "Validation, cleaning, patching, and replacement"],
                    ["Network Bring-Up", "VLANs, routing adjacencies, interface checks"],
                    ["Operational Accuracy", "Documentation, asset tracking, and port maps"],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="font-medium">{title}</p>
                      <p className="mt-1 text-sm text-white/60">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Explore
            </p>
            <h2 className="text-3xl font-semibold">Quick Navigation</h2>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/about", title: "About", desc: "Background and education" },
              { href: "/experience", title: "Experience", desc: "Career timeline" },
              { href: "/projects", title: "Projects", desc: "Systems I've built" },
              { href: "/skills", title: "Skills", desc: "Technical toolkit" },
            ].map((link) => (
              <motion.div
                key={link.href}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <Link
                  href={link.href}
                  className="group block rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition">
                    {link.title}
                  </h3>
                  <p className="mt-2 text-white/60">{link.desc}</p>
                  <ArrowRight className="mt-4 h-5 w-5 text-white/40 group-hover:text-cyan-300 transition" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
