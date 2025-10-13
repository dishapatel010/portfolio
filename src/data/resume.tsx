import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikhil Katkar",
  initials: "NK",
  url: "https://katkar.in",
  location: "Dadar, Mumbai 400028, India",
  locationLink: "https://www.google.com/maps/place/Dadar,+Mumbai",
  description:
    "Computer Science graduate [AIML] passionate about AI and building smart solutions. I love creating, learning, and bringing ideas to life.",
  summary:
    "Experienced in backend development with Python, Flask, and REST APIs, and skilled in integrating cloud technologies such as Azure and Docker. I also have practical exposure to cybersecurity, GenAI, and AI-powered data analytics. I bring strong analytical skills, adaptability, and a drive to contribute to backend, cloud, or AI-focused roles in dynamic environments.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "Flask",
    "React",
    "Next.js",
    "Azure",
    "Oracle Cloud",
    "Cloudflare",
    "Docker",
    "SQL",
    "Git",
    "REST APIs",
    "GenAI",
    "Data Analysis",
    "Visualization",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
