"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Network,
  Shield,
  Briefcase,
  GraduationCap,
  Cpu,
  Wrench,
} from "lucide-react";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export const experience = [
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

export const projects = [
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

export const skills = [
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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div>
          <Link href="/" className="text-lg md:text-xl font-semibold tracking-wide hover:text-cyan-300 transition">
            Hassan Ahmed
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition ${
                pathname === link.href ? "text-white font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden md:inline-flex rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            Resume
          </a>

          <Link
            href="/contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:scale-[1.03] transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.12]" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            Hassan Ahmed - AWS Network Deployment Technician
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:haahmed571@gmail.com"
              className="text-white/50 hover:text-white transition"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-ahmed-ba01b4200/"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 hover:text-white transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white transition"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Shield, Briefcase, GraduationCap, Mail, Linkedin, Github };
