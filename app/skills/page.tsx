"use client";

import { motion } from "framer-motion";
import { fadeUp, skills } from "@/components/shared";

const skillCategories = [
  {
    title: "Network & Infrastructure",
    color: "cyan",
    items: [
      "AWS Network Deployment",
      "Data Center Operations",
      "Layer 1–3 Troubleshooting",
      "WAN / LAN Networking",
      "Switches & Routers",
      "Fiber Optics",
      "Rack & Stack",
    ],
  },
  {
    title: "Protocols & Configuration",
    color: "violet",
    items: [
      "VLANs",
      "TCP/IP",
      "Routing & Switching",
      "Firewalls",
      "Wireless Networking",
      "Circuit Turn-Up Support",
    ],
  },
  {
    title: "Systems & Support",
    color: "sky",
    items: [
      "Telephony Systems",
      "Hardware Diagnostics",
      "Infrastructure Support",
      "Technical Documentation",
    ],
  },
  {
    title: "Tools & Development",
    color: "emerald",
    items: [
      "Wireshark",
      "Nmap",
      "VMware",
      "Python",
      "Flask",
      "Google Apps Script",
      "SQL",
    ],
  },
];

export default function SkillsPage() {
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
            Core Skills
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Technical Toolkit</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/60">
            Networking, infrastructure support, deployment operations, troubleshooting,
            documentation, and technical administration across physical and logical environments.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p
                className={`mb-3 text-sm uppercase tracking-[0.35em] ${
                  category.color === "cyan"
                    ? "text-cyan-300"
                    : category.color === "violet"
                    ? "text-violet-300"
                    : category.color === "sky"
                    ? "text-sky-300"
                    : "text-emerald-300"
                }`}
              >
                {category.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75"
                  >
                    {skill}
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
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            All Skills
          </p>
          <h2 className="text-2xl font-semibold">Complete Overview</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
