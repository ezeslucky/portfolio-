import GitHubContributions from "@/components/github-contribution";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aurobindo Patra",
  initials: "HR",
  url: "https://github.com/ezeslucky",
  location: "Odisha, India",
  locationLink: "https://www.google.com/maps/place/odisha",
  description:
    "Tech Enthusiast turned Software Engineer . I love building things and helping people. Very active on Twitter.",
  summary:
    "I’m a passionate [ Full-Stack & AI Product  Engineer](#skills) with a deep love for coding and technology. My journey has led me to build a strong foundation in [Web Development, DevOps, and the evolving world of Web3](#projects).I thrive on developing innovative products and sharing insights through blogging. I’ve participated in [~5 hackathons & ideathons](#hackathons), winning 2 of them, which has sharpened my problem-solving skills and ability to build under pressure.Always eager to expand my skills and tackle new challenges, I’m actively seeking exciting opportunities to leverage my expertise and drive impactful projects.Whether it’s crafting seamless web experiences or exploring the future of decentralized applications, I’m committed to contributing to the tech landscape and growing alongside it.",
  avatarUrl: "/lucky.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Go",
    "Rust",
    "Actix",
    "Node.js",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Linux",
    "GitHub Actions",
    "Prisma",
    "Drizzle",
    "MonoRepo",
    "WebSocket",
    "WebRTC",
    "Kafka",
    "Redis",
    "GraphQL",
    "Nginx",
    "AWS",
    "CI/CD",
    "Grafana",
    "OpenAPI",
    "Prometheus",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://buymeacoffee.com/aurobindolk",
      icon: Icons.BuyMeACoffee ,
      label: "Buy Me A Coffee",
    },
  ],
  contact: {
    email: "aurobindolife888@gmail.com",
    tel: "+91 7439837730",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ezeslucky",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ezeslucky",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ezeslucky",
        icon: Icons.x,

        navbar: true,
      },
            Resume: {
        name: "Resume",
        url: "https://docs.google.com/document/d/1punelStSMwXQQj43Rtjv57JYJhwXbCoq/edit?usp=sharing&ouid=105499874851745795602&rtpof=true&sd=true",
        icon: Icons.Resume,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "mailto:aurobindolife888@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  

  work: [
    {
      company: "Grappltech",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontent devlopment internship",
      logoUrl: "/grappltech.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Developing and maintaining web applications using React.js and other related technologies.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.Implementing responsive design and ensuring cross-browser compatibility.Participating in code reviews and providing constructive feedback to other developers.",
    },
    {
      company: "NullClass",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web devlopment internship",
      logoUrl: "/null.png",
      start: "June 2024",
      end: "March 2025",
      description:
        "Developed and maintained responsive web applications using modern JavaScript frameworks.Implemented UI/UX designs and optimized front-end performance.Integrated APIs and managed database operations.Collaborated with a team to build scalable and efficient web solutions.",
    },
   {
      company: "Eastri",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full-Stack Intern",
      logoUrl: "",
      start: "May 2025",
      end: "Present",
      description:
        "Developed and maintained full-stack features using React.js, Next.js, and TypeScript on the frontend, ensuring a responsive and modern UI.Built backend services using Node.js and Express.js, integrating with MongoDB and PostgreSQL for robust data handling and persistenceImplemented secure authentication, API routes, and server-side logic using Next.js API routes and JWT-based auth.Deployed   applications via Docker, and configured hosting and CI/CD pipelines using GitHub Actions and AWS (EC2 & S3).  Used   WebSocket for real-time communication features, and integrated third-party APIs to enhance platform functionality.",

    },
       {
      company: "Deployi",
      href: "https://deployi.me/",
      badges: [],
      location: "Remote",
      title: "Co-Founder or Full-Stack & AI Product  Engineer",
      logoUrl: "",
      start: "Jan 2024",
      end: "Present",
      description:" Built DeployI, an all-in-one platform to deploy, manage, and scale applications of any kind ranging from simple web apps to complex microservices architectures.Enabled seamless deployment of applications written in Node.js, Go, Python, Ruby, PHP, and more.Supported popular databases like MySQL, PostgreSQL, MongoDB, MariaDB, and Redis, with automated backup to external storage."


    },
    {
      company: "Open Source",
      badges: [],
      href: "https://github.com/ezeslucky",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2023",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of  PostgreSQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
   
    {
      school: "Academy of Business Administration, India",
      
      degree: "Bachelor's  of Computer Application",
      logoUrl: "/aba.gif",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
              {
      title: "Deployi",
      href: "https://deployi.me/",
      dates: "March 2025",
      active: true,
      description:
        "Built DeployI, an all-in-one platform to deploy, manage, and scale applications of any kind—ranging from simple web apps to complex microservices architectures.Enabled seamless deployment of applications written in Node.js, Go, Python, Ruby, PHP, and more.Supported popular databases like MySQL, PostgreSQL, MongoDB, MariaDB, and Redis, with automated backup to external storage.  ",
      technologies: [
        "Docker", "Docker Compose", "Docker Swarm", "Traefik", "Node.js", "TypeScript", "MongoDB", "Redis", "PostgreSQL", "React","Kafka","MonoRepo",
        "CI/CD","Rust"

      ],
      links: [
        {
          type: "Website",
          href: "https://deployi.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/deployi.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/deploy.png",
      video: "",
    },
        {
      title: "BotNext-UI",
      href: "https://botnextui.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "Developed a highly customizable AI-powered chatbot UI with real-time interactions.Integrated Aceternity UI for seamless design and Resend API for automated email notifications.Optimized performance and responsiveness, ensuring a smooth user experience across devices.",
      technologies: [
        "Next.JS",  "Tailwind", "Shadcn UI", "Aceternity UI", "Resend API"
      ],
      links: [
        {
          type: "Website",
          href: "https://botnextui.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/BotNext-UI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/botnext.png",
      video: "",
    },

    {
      title: "Monitrix",
      href: "https://monitrix.vercel.app/",
      dates: "Feb 2025",
      active: true,
      description:
        "Build   Monitrix, a single unified platform for observability—logs, metrics, and traces—to streamline debugging and monitoring for modern systems.Leveraged OpenTelemetry, eliminating vendor lock-in and ensuring full transparency and flexibility.Designed a flexible DIY Query Builder supporting PromQL and ClickHouse SQL, empowering users to extract actionable insights from observability data .Enabled developers to debug with richer context through correlated logs, metrics, and traces. ",
      technologies: [
        "Next.JS",  "Tailwind", "Docker", "Go", "Resend API", "Redis", "PostgreSQl",
        "ClickHouse", "AWS", "Cloudflare", "CI/CD"
      ],
      links: [
        {
          type: "Website",
          href: "https://monitrix.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/monitrix.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/monitrix.png",
      video: "",
    },
 

    {
      title: "MeowFi",
      href: "https://meowfi-three.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "MeowFi is a memecoin landing page featuring a DEX swap interface that allows users to swap $MEOW tokens to Sepolia ETH. Built with cutting-edge web3 technologies, MeowFi provides a seamless and fun trading experience for crypto enthusiasts.",
      technologies: [
           "React" ,"Solidity" ,"Foundry" ,"Bun" ,"Ethersjs" , "Ruby","Tailwindcss" ,"Vitejs" ,"Sepolia" ,"Shadcn-ui"
      ],
      links: [
        {
          type: "Website",
          href: "https://meowfi-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/BotNext-UI.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/memo.png",
      video: "",
    },
    {
      title: "Drawio",
      href: "https://drawio-ivory.vercel.app/",
      dates: "April 2025",
      active: true,
      description:
        "DrawIO Realtime is a full-stack collaborative whiteboard app designed for real-time drawing and ideation. It allows multiple users to sketch together with seamless live updates.",
      technologies: [
        "Next.JS",  "Tailwind", "Shadcn UI", "Docker", "PostgreSQl", "turborepo",
        "Canvas",  "WebSocket"
      ],
      links: [
        {
          type: "Website",
          href: "https://drawio-ivory.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/drawio.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pro4.png",
      video: "",
    },
    // {
    //   title: "IcoNext",
    //   href: "https://ico-next.vercel.app/",
    //   dates: "March 2025",
    //   active: true,
    //   description:
    //     "IcoNext is a highly customizable AI-powered chatbot UI built for real-time interactions. Designed with a sleek and modern interface, it ensures a seamless user experience across devices.",
    //   technologies: [
    //     "Next.JS",  "Tailwind", "Shadcn UI", "Motion", "Resend API"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://ico-next.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/ezeslucky/IcoNext.git",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/iconext.png",
    //   video: "",
    // },
    {
      title: "AI-Finance",
      href: "https://alvest-finance.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "An AI-powered finance web application that provides intelligent financial insights and predictions. The platform utilizes machine learning algorithms to analyze financial data, generate reports, and assist users in making informed decisions.",
      technologies: [
        "Next.JS", "Supabase", "Tailwind", "Prisma", "Inngest", "ArcJet", "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://alvest-finance.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Ai-Saas-Finance.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/finance.png",
      video: "",
    },
   
    
  ],
  package:[
{
      title: "AICommitter",
      href: "https://www.npmjs.com/package/@ezeslucky/aicommitter",
      dates: "June 2025",
      active: true,
      description:
        "A CLI that writes your git commit messages for you with AI. Never write a commit message again.",
      
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@ezeslucky/aicommitter",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/aicommitter.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pac1.png",
      video: "",
    },
    {
      title: "Genie",
      href: "https://www.npmjs.com/package/@ezeslucky/genie-cli",
      dates: "June 2025",
      active: true,
      description:
        "Strongly typed CLI development for Node.js",
      
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@ezeslucky/genie-cli",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/genie.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pac2.png",
      video: "",
    },{
title: "Bundlify",
      href: "https://www.npmjs.com/package/@ezeslucky/bundlify",
      dates: "June 2025",
      active: true,
      description:
        "Bundlify is a JavaScript package bundler powered by Rollup that automatically builds your package from entry-points",
      
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@ezeslucky/bundlify",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/bundlify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pac3.png",
      video: "",
    }
    
    
   
  ],
  hackathons: [
    {
      title: "DeveloperWeek 2025 Hackathon",
      dates: "Jan 27 – Feb 13, 2025",
      location: "Online",
      description:
        "Participated in the nation's largest challenge-driven hackathon, where I built AIvest a dynamic solution leveraging Next.js, Prisma, Supabase, ShadCN, Inngest, and Arcjet  to enhance efficiency and scalability.",
        
      image: "hack1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ezeslucky/Ai-Saas-Finance.git",
        },
      ],
    },
    {
      title: "The Dev Challenge",
      dates: "Winners TBD 🏆",
      location: "Online",
      description: 
        "Developed BotNest, a dynamic platform for seamless bot creation, management, and monitoring. Features a sleek, responsive UI, real-time dashboards, and authentication powered by Clerk.Won The Dev Challenge among 791 participants. Built using Next.js, Aceternity UI, Clerk, and WebSockets.",
      image: "hack2.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ezeslucky/BotNext-UI.git",
        },
      ],
    },
    
  ],
} as const;
