"use client";

import { motion } from "framer-motion";
import { fadeUp, Mail, Linkedin, Github } from "@/components/shared";

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Let's Build Something Real</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/60">
            Open to infrastructure, networking, deployment, and technical operations
            opportunities where strong execution and systems thinking matter.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Get In Touch
            </p>
            <h2 className="text-2xl font-semibold">Connect With Me</h2>
            <p className="mt-4 leading-8 text-white/70">
              Whether you have a question about my experience, want to discuss a potential
              opportunity, or just want to connect - I'd love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:haahmed571@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30 hover:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-white/60">haahmed571@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/hassan-ahmed-ba01b4200/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30 hover:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Linkedin className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-white/60">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-400/30 hover:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Github className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-white/60">View my repositories</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-violet-300">
              What I'm Looking For
            </p>
            <h2 className="text-2xl font-semibold">Opportunities</h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Network Operations",
                  desc: "Roles focused on deployment, troubleshooting, and maintaining network infrastructure.",
                },
                {
                  title: "Data Center Engineering",
                  desc: "Positions involving physical infrastructure, rack and stack, and hardware operations.",
                },
                {
                  title: "Infrastructure Support",
                  desc: "Opportunities in technical operations, system administration, and field engineering.",
                },
                {
                  title: "Technical Projects",
                  desc: "Collaboration on automation, process improvement, and operational tooling.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:haahmed571@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" /> Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-ahmed-ba01b4200/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn Profile
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium hover:bg-cyan-400/20"
          >
            Download Resume
          </a>
        </motion.div>
      </main>
    </div>
  );
}
