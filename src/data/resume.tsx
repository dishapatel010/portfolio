import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Nikhil Katkar",
  initials: "NK",
  url: "https://katkar.in",
  location: "Dadar, Mumbai 400028, India",
  locationLink: "https://www.google.com/maps/place/Dadar,+Mumbai",
  description:
    "Computer Science Engineer [AI & ML] specializing in AI-driven automation, backend systems, and scalable cloud infrastructure. Creator of Nexiuo, an Instagram automation platform for businesses & creators to scale engagement using AI. I love building products, solving real problems, and bringing ideas to life.",
  summary:
    "Experienced in backend engineering using Python, TypeScript, Flask, Next.js & REST APIs, with hands-on work in distributed systems, Docker, Cloudflare, and Azure. Practical exposure to Cybersecurity, GenAI, and data-driven automation. Strong problem-solving mindset, rapid learner, and passionate about backend, cloud, and AI engineering roles that demand innovation and performance.",
  avatarUrl: "/me.png",
    { name: "Python", icon: Python },
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "C" },
    { name: "Flask" },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Azure" },
    { name: "Oracle Cloud" },
    { name: "Cloudflare" },
    { name: "Docker", icon: Docker },
    { name: "SQL" },
    { name: "MongoDB" },
    { name: "Git" },
    { name: "REST APIs" },
    { name: "Meta Graph API" },
    { name: "GenAI" },
    { name: "Data Analysis" },
    { name: "Visualization" },
    { name: "Better-Auth" },
    { name: "CI/CD" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nikhil@katkar.in",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dishapatel010",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nikhilkatkar",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nikhil@katkar.in",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Tata Consultancy Services (TCS)",
      href: "https://www.tcs.com/",
      badges: [],
      location: "Mumbai, India",
      title: "TCSer",
      logoUrl: "https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/media-kit/TCS-logo-black-CMYK.svg",
      start: "June 2026",
      end: "Present",
      description: "Working as a TCSer in Mumbai.",
    },
    {
      company: "Tata",
      href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_u6M8GscpX5YrCB4c7_1752061009123_completion_certificate.pdf",
      badges: [],
      location: "Remote",
      title: "Cybersecurity Analyst (Forage Simulation)",
      logoUrl: "",
      start: "July",
      end: "2025",
      description:
        "Gained expertise in Identity and Access Management (IAM) and cybersecurity best practices. Delivered comprehensive IAM solutions aligned with business objectives, showcasing strong technical communication skills.",
    },
    {
      company: "Tata",
      href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_u6M8GscpX5YrCB4c7_1752057335897_completion_certificate.pdf",
      badges: [],
      location: "Remote",
      title: "GenAI Powered Data Analytics (Forage Simulation)",
      logoUrl: "",
      start: "July",
      end: "2025",
      description:
        "Developed an AI-powered, ethically compliant strategy to reduce financial credit delinquency by leveraging GenAI tools like ChatGPT for data analysis, predictive modeling, and no-code frameworks for risk assessment and collections.",
    },
  ],
  education: [
    {
      school: "Saraswati College of Engineering, Kharghar Navi Mumbai",
      href: "https://engineering.saraswatikharghar.edu.in/",
      degree: "B.E. in Computer Science (Artificial Intelligence & Machine Learning) | CGPI: 7.72",
      logoUrl: "",
      start: "2021",
      end: "2025",
      description: "",
    },
    {
      school: "Wilson College, Girgaon Chowpatty, Mumbai",
      href: "https://www.wilsoncollege.edu/",
      degree: "Higher Secondary Certificate (HSC) | 84.83%",
      logoUrl: "",
      start: "2019",
      end: "2021",
      description: "",
    },
    {
      school: "Shraddashram Vidyamandir Boys High School, Mumbai",
      href: "http://www.sharadashram.org/",
      degree: "Secondary School Certificate (SSC) | 79.60%",
      logoUrl: "",
      start: "2013",
      end: "2019",
      description: "",
    },
  ],
  projects: [
    {
      title: "Nexiuo – Instagram Automation Platform",
      href: "https://nexiuo.app",
      dates: "",
      active: true,
      description:
        "Built a full-scale Instagram automation platform for creators and businesses to automate audience engagement using AI-driven workflows. Supports automated DMs, comment responses, and story mention replies with configurable actions, dynamic messaging, and emoji reactions. Includes analytics dashboards, inbox management, and secure onboarding via Better-Auth. Official Meta Tech Partner integration for Instagram Business APIs.",
      technologies: [
        "Next.js", "TypeScript", "Node.js", "REST APIs", "Meta Graph API", "Cloudflare", "Better-Auth", "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://nexiuo.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HEX 0x1A",
      href: "",
      dates: "",
      active: true,
      description:
        "Built a Telegram mini-app using Next.js and MongoDB that acts as a shared resource hub for a community. Users can browse a feed, search by tags, like and save resources, while admins moderate submissions, review reports, and manage organizations. Integrated with rich filtering, in-app notifications, Authorization & Security using Better Auth. Used by 400+ active users.",
      technologies: ["Next.js", "MongoDB", "Better-Auth", "Telegram"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Community Management Bot",
      href: "",
      dates: "",
      active: true,
      description:
        "Built a Telegram bot that runs a gamified \"guild\" community, handling member onboarding by invite, enforcing group rules, managing bans, and tracking who invited whom. It adds game-like features such as ranks, tasks, virtual shop items/passes, and subscription checks, all backed by a database and background scheduler.",
      technologies: ["Telegram Bot API", "Database", "Background Scheduler"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AR Navigation for Indoor Spaces",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed an AR-based indoor navigation system using Next.js, MindAR, and MongoDB. Features step-by-step guidance via image recognition, offline support, and a full admin panel for managing navigation paths and targets.",
      technologies: ["Next.js", "MindAR", "MongoDB"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/ARNAV",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Last.FM - Telegram Mini App",
      href: "",
      dates: "",
      active: true,
      description:
        "Built a Next.js-based Mini App integrating Last.fm API to display real-time listening habits, including current track, recent plays, and top charts with a responsive Telegram-optimized interface.",
      technologies: ["Next.js", "Last.fm API", "Telegram"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/lastfm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Supply Chain DApp on Sepolia Testnet",
      href: "",
      dates: "",
      active: true,
      description:
        "Created a decentralized supply chain management app using Ethereum and smart contracts. Implemented product tracking, ownership transfer, and real-time state updates with Sepolia testnet.",
      technologies: ["Ethereum", "Smart Contracts", "Sepolia Testnet"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/supply-chain-dapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TUNE TRENDS",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a Flask-based tool for analysing and visualizing Spotify user data, including top tracks, artists, and playlists, offering clear insights into user listening patterns.",
      technologies: ["Flask", "Spotify API", "Data Visualization"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/insight-spotify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "WEB GIS RENDERING",
      href: "",
      dates: "",
      active: true,
      description:
        "Built an interactive GIS data visualization tool using Python and Plotly for 2D/3D mapping and spatial data analysis in a browser-based interface.",
      technologies: ["Python", "Plotly"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Amazon India Payment Details Exporter",
      href: "",
      dates: "",
      active: true,
      description:
        "Designed a browser extension to extract payment transaction data from Amazon India, including UPI ID capture and one-click export to HTML with a user-friendly interface.",
      technologies: ["Browser Extension", "HTML"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/AmazonPayHistoryIN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Email-NotifyTG-Worker",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a Cloudflare Worker to route Gmail alerts to Telegram with Spacebin links for content viewing. Enabled seamless, real-time email-to-message conversion for quick access.",
      technologies: ["Cloudflare Worker", "Telegram", "Spacebin"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/Email-NotifyTG-Worker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TGStory – Instagram-Style Stories",
      href: "",
      dates: "",
      active: true,
      description:
        "Engineered a media-sharing bot using Cloudflare Workers and KV Storage to post dynamic stories in AMP/Instant View format, enhanced for mobile viewing via telegra.ph.",
      technologies: ["Cloudflare Workers", "KV Storage", "telegra.ph"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dishapatel010/TgStory",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
} as const;
