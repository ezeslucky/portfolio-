import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aurobindo Patra",
  initials: "HR",
  url: "https://github.com/ezeslucky",
  location: "Odisha, India",
  locationLink: "https://www.google.com/maps/place/odisha",
  description:
    "Tech Enthusiast turned Full-Stack Engineer . I love building things and helping people. Very active on Twitter.",
  summary:
    "I’m a passionate [pre-final year undergrad](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps, and the emerging world of Web3](#education). I thrive on building innovative [products](#projects) and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/lucky.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "",
      icon: NotebookIcon,
      label: "Blog",
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
      title: "Simple Code-Editor",
      href: "https://editor-virid-rho.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed an Online IDE with multi-language support . Customizable experience with themes. Smart output handling with Success & Error states",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Convex"
      ],
      links: [
        {
          type: "Website",
          href: "https://editor-virid-rho.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Editor.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/editor.png",
      video: "",
    },
    {
      title: "Suburbia Skateboards",
      href: "https://skateboard-eta.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        " Build a 3D skateboard customizer app and landing page with Next.js 15, GSAP, Prismic, Three.js, Tailwind, and TypeScript!",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Three.js",
        "TailwindCSS",
        "Shadcn UI",
        "GSAP"
      ],
      links: [
        {
          type: "Website",
          href: "https://skateboard-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Skateboard.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/scat.png",
      video: "",
    },
    {
      title: "Chrome Extension",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        " A Chrome extension that adds ChatGPT to every text box on the internet! Use it to write tweets, revise emails, fix coding bugs, or whatever else you need, all without leaving the site you are on. Includes a plugin system for greater control over ChatGPT behavior and ability to interact with 3rd party APIs.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
        "Convex",
      ],
      links: [
        
        {
          type: "Source",
          href: "https://github.com/ezeslucky/ChatGpt-Extension.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Object Ditector",
      href: "https://ai-object-ditector.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        " Developed an AI-powered object detection platform leveraging advanced computer vision technologies. The website allows users to upload images and detect objects in real-time with accurate labeling and bounding boxes. Built using modern web technologies and deployed on Vercel for seamless performance and scalability.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-object-ditector.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Ai-object-ditector.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/object.png",
      video: "",
    },
    {
      title: "Figma",
      href: "https://figma-clone-eight-eta.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Allows multiple users to collaborate simultaneously by showing individual cursors, enabling real-time chat, and reactions for interactive communication.Displays a list of currently active users in the collaborative environment, providing visibility into who is currently engaged.Allows users to adjust the properties of design elements, offering flexibility in customizing and fine-tuning visual components.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://figma-clone-eight-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Figma-Clone.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/figma.png",
      video: "",
    },
    {
      title: "Iphone",
      href: "https://iphone-animation-delta.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "A visually engaging website showcasing animations inspired by iPhone design and functionality. Developed with a focus on sleek UI, smooth transitions, and responsiveness across devices. Perfect for demonstrating expertise in animation and front-end development.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "Three.js",
        "GSAP",
        
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://iphone-animation-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Iphone-Animation.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/iphone.png",
      video: "",
    },
    {
      title: "Gaming",
      href: "https://gaming-animated.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed an engaging and dynamic website focused on gaming animations. This project demonstrates expertise in creating visually appealing and interactive web interfaces tailored for gaming enthusiasts.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "Three.js",
        "GSAP",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gaming-animated.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Gaming-Animated.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/game.png",
      video: "",
    },
    {
      title: "Fizzi",
      href: "https://animated-rosy.vercel.app//",
      dates: "September 2024",
      active: true,
      description:
        " Designed and developed an engaging animated website with a focus on seamless transitions and interactive elements. The project showcases creative UI/UX design principles and responsive web development techniques.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "Three.js",
        "GSAP",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://animated-rosy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezeslucky/Animated.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fizzi.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SIH Hackathon",
      dates: "September 2024 - Present",
      location: "Kolkata, India",
      description:
        "Developed a web application that helps in ships re-routing using cuttinf edge traffic and optimizing the time taken to reach the destination.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ezeslucky",
        },
      ],
    },
  ],
} as const;
