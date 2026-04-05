"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Network,
  Shield,
  ArrowDown,
  Briefcase,
  GraduationCap,
  Cpu,
  Wrench,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const experience = [
  {
    title: "AWS Network Deployment Technician",
    company: "TEKsystems · Contract @ Amazon Web Services",
    location: "Northern Virginia",
    period: "April 2026 – Present",
    icon: Network,
    points: [
      "Deploy, label, install, and test network hardware including switches, routers, optics, patch panels, and structured cabling in AWS data center environments.",
      "Perform rack and stack operations, hardware replacements, fiber validation, connector cleaning, and physical-layer troubleshooting during deployment and break-fix workflows.",
      "Support network bring-up by verifying connectivity, VLAN assignments, routing adjacencies, interface status, and circuit turn-up readiness.",
      "Troubleshoot Layer 1 through Layer 3 issues including link failures, bad optics, patching faults, misconfigured ports, and hardware-related connectivity problems.",
      "Work with remote network engineering teams to resolve escalated deployment and infrastructure issues in production and pre-production environments.",
      "Maintain accurate deployment records, port maps, asset tracking, and operational documentation in alignment with AWS standards and procedures.",
    ],
  },
  {
    title: "Network & Telecommunication Technician",
    company: "Guest Services",
    location: "Fairfax, VA",
    period: "August 2024 – March 2026",
    icon: Server,
    points: [
      "Configured and deployed WAN, LAN, voice, and wireless networks including routers, firewalls, switches, access points, and telephony systems to support business operations.",
      "Monitored, diagnosed, and resolved network equipment issues while performing repairs, upgrades, and preventive maintenance to maintain service reliability.",
      "Administered telephone systems including new hire extensions, voicemail setup, troubleshooting, and system upgrades based on organizational needs.",
      "Sourced, procured, and audited internet and voice services across multiple locations while maintaining records and helping prevent service and billing losses.",
      "Maintained detailed documentation of network configurations, mappings, service records, provider information, and operational procedures.",
      "Collaborated with service providers to resolve outages and technical issues related to internet, telephony, and network services in a timely manner.",
      "Provided remote and onsite support for desktops, peripherals, and mobile devices, including iOS and Android troubleshooting.",
    ],
  },
  {
    title: "Computer Technician",
    company: "OnSpot Appliance Repair LLC",
    location: "Dumfries, VA",
    period: "January 2024 – August 2024",
    icon: Cpu,
    points: [
      "Installed, maintained, and troubleshot computer hardware, software, and network systems in a small business service environment.",
      "Provided day-to-day technical support to users and resolved software, hardware, connectivity, and workstation issues.",
      "Configured operating systems, business applications, and security software across supported devices.",
      "Set up and maintained small office network infrastructure including routers, switches, and firewall-connected environments.",
      "Supported internal operations through practical troubleshooting, system upkeep, and process-oriented technical assistance.",
   
    ],
  },
  {
    
    title: "Field Engineer I",
    company: "Sytech Corporation",
    location: "Alexandria, VA",
    period: "June 2023 – January 2024",
    icon: Wrench,
    points: [
      "Installed, maintained, and troubleshot computer hardware, software, and network systems in field and operational environments.",
      "Provided technical support to end users by resolving software issues, hardware faults, and application-related problems.",
      "Set up and managed network infrastructure including routers, switches, firewalls, and VPN connections to support secure connectivity.",
      "Configured network devices and administered domains, user accounts, permissions, and device access controls.",
      "Supported network security and monitoring operations while assisting with specialized communications and data handling environments.",
      "Helped maintain reliable technical operations through hands-on troubleshooting, device configuration, and infrastructure support.",
    ],
  },
];

const projects = [
  {
    title: "Work Order Automation",
    desc: "Built workflow automation around Gmail, Google Sheets, and Calendar to reduce repetitive dispatch work and improve service operations.",
    tags: ["Apps Script", "Gmail", "Sheets", "Automation"],
  },
  {
    title: "Internal Operations Dashboard",
    desc: "Created dashboards for appointment flow, escalation visibility, status tracking, and service coordination.",
    tags: ["Reporting", "Operations", "Dashboards"],
  },
  {
    title: "Flask Work Order Platform",
    desc: "Developed a custom internal app with work order tracking, notes, PDFs, maps, and process management features.",
    tags: ["Python", "Flask", "SQL", "PDF"],
  },
];

const skills = [
  "AWS Network Deployment",
  "Data Center Operations",
  "Layer 1–3 Troubleshooting",
  "WAN / LAN Networking",
  "Switches & Routers",
  "Fiber Optics",
  "Rack & Stack",
  "VLANs",
  "TCP/IP",
  "Routing & Switching",
  "Firewalls",
  "Wireless Networking",
  "Telephony Systems",
  "Hardware Diagnostics",
  "Circuit Turn-Up Support",
  "Infrastructure Support",
  "Technical Documentation",
  "Wireshark",
  "Nmap",
  "VMware",
  "Python",
  "Flask",
  "Google Apps Script",
  "SQL",
];

export default function ResumeWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white selection:bg-cyan-400/30">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.12]" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

    {/* LEFT: NAME */}
    <div>
      <h1 className="text-lg md:text-xl font-semibold tracking-wide">
        Hassan Ahmed
      </h1>
    </div>

    {/* CENTER: NAV LINKS */}
    <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
      <a href="#about" className="hover:text-white transition">About</a>
      <a href="#experience" className="hover:text-white transition">Experience</a>
      <a href="#projects" className="hover:text-white transition">Projects</a>
      <a href="#skills" className="hover:text-white transition">Skills</a>
    </nav>

    {/* RIGHT: ACTIONS */}
    <div className="flex items-center gap-3">
      <a
        href="/resume.pdf"
        target="_blank"
        className="hidden md:inline-flex rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
      >
        Resume
      </a>

      <a
        href="mailto:haahmed571@gmail.com"
        className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:scale-[1.03] transition"
      >
        Contact
      </a>
    </div>

  </div>
</header>
      <main>
      <section className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-16 lg:px-10">
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
        execution across Layer 1–3 network environments.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="#experience"
          className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 shadow-2xl shadow-cyan-500/10 transition hover:scale-[1.02]"
        >
          View Experience
        </a>
        <a
          href="#skills"
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
        >
          Explore Skills
        </a>
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
          <p className="text-2xl font-semibold text-white">L1–L3</p>
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
            ["Layer 1–3 Diagnostics", "OSI-based fault isolation and issue resolution"],
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

  <motion.a
    href="#about"
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 1.8 }}
    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white/70 md:block"
  >
    <ArrowDown className="h-5 w-5" />
  </motion.a>
</section>
        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
                About
              </p>
              <h2 className="text-3xl font-semibold">
                Technical depth with field execution
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                My background combines infrastructure support, networking,
                telecom systems, and operational automation. I am strongest in
                environments where physical hardware, connectivity,
                troubleshooting, and process discipline all matter at the same
                time.
              </p>
              <p className="mt-4 leading-8 text-white/70">
                I like work that is real, measurable, and close to the systems
                that keep organizations running — from cabling and device
                deployment to documentation, diagnosis, and workflow
                improvement.
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
              <div className="space-y-6">
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
        </section>

       <section
  id="experience"
  className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
>
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUp}
  >
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
      Experience
    </p>
    <h2 className="text-3xl font-semibold">Career timeline</h2>
  </motion.div>

  <div className="relative mt-12 border-l border-white/10 pl-8 md:pl-10 space-y-10">
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
</section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-violet-300">
              Projects
            </p>
            <h2 className="text-3xl font-semibold">Systems I’ve built</h2>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Core Skills
            </p>
            <h2 className="text-3xl font-semibold">Technical toolkit</h2>
            <p className="mt-3 max-w-3xl text-white/60">
              Networking, infrastructure support, deployment operations, troubleshooting, documentation, and technical administration across physical and logical environments.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
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
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8 text-center shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Contact
            </p>
            <h2 className="text-3xl font-semibold">Let’s build something real</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
              Open to infrastructure, networking, deployment, and technical
              operations opportunities where strong execution and systems
              thinking matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:haahmed571@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-ahmed-ba01b4200/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
