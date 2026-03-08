export const SITE_CONFIG = {
  name: "Basement Labs",
  tagline: "From hackathon to protocol. Zero capital. Full control.",
  description: "A Web3 venture studio that turns builder energy into grant-funded, launchpad-ready protocols \u2014 in 3 months.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://basementlabs.xyz",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "For Builders", href: "/for-builders" },
  { label: "For Ecosystems", href: "/for-ecosystems" },
  { label: "Blog", href: "/blog" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "https://x.com/basementlabs", icon: "twitter" },
  { label: "Discord", href: "https://discord.gg/basementlabs", icon: "discord" },
  { label: "Telegram", href: "https://t.me/basementlabs", icon: "send" },
  { label: "GitHub", href: "https://github.com/basementlabs", icon: "github" },
] as const;

export const FOOTER_PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "For Builders", href: "/for-builders" },
  { label: "For Ecosystems", href: "/for-ecosystems" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { label: "Projects Scouted Monthly", value: "10\u201315" },
  { label: "Weeks to Grant-Funded", value: "~12" },
  { label: "Builder Ownership", value: "30\u201350%+" },
  { label: "Active Spinouts", value: "4\u20136" },
] as const;

export const SPRINT_SYSTEM = [
  { id: "S0", title: "Scout", timeline: "Always-on", description: "Continuous scouting across ETHGlobal, Solana, Base, Arbitrum, and BNB Chain hackathons. 10\u201315 projects reviewed monthly.", exitGate: "Project shortlisted for deep-dive" },
  { id: "S1", title: "Select & Scope", timeline: "Weeks 1\u20132", description: "Due diligence, co-founder assignment, legal framework setup, architecture planning. 2\u20133 projects selected per quarter.", exitGate: "Signed co-founder agreement + architecture doc" },
  { id: "S2", title: "Build & Ship", timeline: "Weeks 3\u20136", description: "Smart contracts, frontend, testnet deployment. Internal audits. Demo-ready MVP in 4 weeks.", exitGate: "Testnet-deployed MVP + internal audit pass" },
  { id: "S3", title: "Fund & Launch", timeline: "Weeks 7\u201310", description: "Pitch live MVPs to 3\u20135 ecosystems. Submit targeted grant applications. Secure funding.", exitGate: "Grant approval or signed term sheet" },
  { id: "S4", title: "Graduate", timeline: "Weeks 11\u201312", description: "Transition to launchpad partners for 0 \u2192 1 execution. Mainnet prep, multi-chain expansion, full independence.", exitGate: "Independent entity with funding secured" },
] as const;

export const FAQ_ITEMS = [
  { question: "Do I need a team?", answer: "No. We assign you a co-founder from our founding member network." },
  { question: "How much equity do I keep?", answer: "30\u201350%+ depending on role and contribution." },
  { question: "What if my project gets killed?", answer: "We cover wind-down costs ($2\u20135K). Your learnings feed back into the ecosystem. IP terms are clear from day one." },
  { question: "How long is the program?", answer: "3 months (12 weeks), 4 sprints." },
  { question: "Do I need to raise capital?", answer: "No. We're grant-first. Zero upfront capital required." },
  { question: "Which chains do you work with?", answer: "Multi-chain from day one. We've worked with ecosystems including Solana, Base, Arbitrum, and BNB Chain." },
  { question: "What happens after the program?", answer: "You graduate to launchpad partners for 0 \u2192 1 execution \u2014 mainnet, multi-chain expansion, and full independence." },
  { question: "Can I apply with a project that's already live?", answer: "Our sweet spot is \u22121 \u2192 0, but if you have an early-stage live project that needs grant funding and ecosystem alignment, reach out." },
] as const;

export const FEATURED_PROJECTS = [
  { name: "Project Alpha", chain: "Solana", description: "DeFi protocol optimizing yield strategies across Solana ecosystems.", status: "active" as const },
  { name: "Project Beta", chain: "Base", description: "On-chain reputation layer for hackathon builders and contributors.", status: "active" as const },
  { name: "Project Gamma", chain: "Arbitrum", description: "Decentralized grant management platform with milestone-based payouts.", status: "graduated" as const },
] as const;

export const TEAM_MEMBERS = [
  { name: "Tony Klor", role: "Founding Member", x: "https://x.com/tonyklor", initials: "TK" },
  { name: "Rohit Purkait", role: "Founding Member", x: "https://x.com/rohitpurkait", initials: "RP" },
] as const;
