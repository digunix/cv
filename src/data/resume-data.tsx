import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kevin Miller",
  initials: "KM",
  location: "Durango, CO MST",
  locationLink: "https://www.google.com/maps/place/Durango,CO",
  about:
    "Results-driven technology professional with over 25 years of experience in data storage, disaster recovery, network infrastructure, and IT security.",
  summary: (
    <>
      Proven track record of working with top law firms, government agencies, and Fortune 500 companies to design and implement robust, scalable, and secure IT solutions. 
      Adept at solving complex technical challenges with a strategic approach, ensuring compliance, business continuity, and operational efficiency.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/994381?v=4",
  personalWebsiteUrl: "https://kevinmiller.info",
  contact: {
    email: "kevin@gdrg.io",
    tel: "+14044146677",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/digunix",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kevinmillerinfo/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kevin_miller",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Certifications",
      degree: "VMWare VCP (2008), ISECOM OPST (2003)",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Global Data Resource Group (GDRG)",
      link: "https://gdrg.io",
      title: "Founder",
      start: "2022",
      end: null,
      description: (
        <>
          Helping customers secure digital assets, including servers, IPs, and bandwidth, while providing comprehensive consulting on infrastructure security, risk mitigation, and data governance.

          <ul className="list-inside list-disc">
            <li>
              Developed and deployed security frameworks that ensure regulatory compliance and protect against emerging cyber threats.
            </li>
            <li>
              Managed complex, large-scale data migrations with zero downtime, ensuring seamless transitions and data integrity for enterprises.
            </li>
            <li>
              Provided in-depth consulting on optimizing IT assets, enhancing performance, and reducing operational risks through tailored security strategies.
            </li>
             <li>
              Assisted businesses in implementing scalable cloud and hybrid storage solutions, improving reliability and cost efficiency.
            </li>
            <li>
              Designed incident response and disaster recovery plans, minimizing downtime and ensuring business continuity.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
