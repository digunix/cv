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
    tel: "",
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
            <li>Managed complex, large-scale data migrations with zero downtime, ensuring seamless transitions and data integrity for enterprises.</li>
            <li>Provided in-depth consulting on optimizing IT assets, enhancing performance, and reducing operational risks through tailored security strategies.</li>
            <li>Assisted businesses in implementing scalable cloud and hybrid storage solutions, improving reliability and cost efficiency.</li>
            <li>Designed incident response and disaster recovery plans, minimizing downtime and ensuring business continuity.</li>
          </ul>
        </>
      ),
    },
    {
      company: "NinjaProxy",
      link: "https://ninjasproxy.com",
      title: "Managing Partner",
      start: "2022",
      end: null,
      description: (
        <>
          Lead a team dedicated to providing secure and scalable proxy solutions that offer unmatched reliability, speed, and anonymity, specifically designed for businesses needing uninterrupted data access. Developed and deployed scalable systems for secure and uninterrupted data access.
          <ul className="list-inside list-disc">
            <li>Partnering with AI startups, cybersecurity firms, and competitive intelligence teams to deliver proxy solutions tailored to their unique needs.</li>
            <li>Designed scalable proxy architectures to optimize performance and reliability for web scraping, market intelligence, and cybersecurity use cases.</li>
            <li>Design and implement scalable systems, unlocking access to hard-to-reach data while ensuring security and compliance.</li>
            <li>Oversee the development of innovative proxy products that simplify data access for SMBs, SMEs, and enterprise clients</li>
          </ul>
        </>
      ),
    },
    {
      company: "Veristor (Verinext)",
      link: "https://veristor.com",
      title: "Director of Corporate Operations",
      start: "2016",
      end: "2022",
      description: (
        <>
          Oversaw IT strategy, development, and implementation, working with legal and enterprise clients to enhance infrastructure security and reliability.
          <ul className="list-inside list-disc">
            <li>Spearheaded internal IT projects, including infrastructure upgrades, process automation, and system integrations</li>
            <li>Ensured full operational readiness from Day One, transitioning all employees to a secure and fully functional remote setup during the COVID-19 lockdown, maintaining business continuity without disruptions.</li>
            <li>Implemented initiatives that improved team collaboration, productivity, and overall IT reliability through deployments of two-factor authentication, mobile device management, software migrations.</li>
            <li>Led disaster recovery and network/cyber security initiatives through introspective firewalls, wifi upgrades to EAP and guest captive portals. off-site disaster recovery and testing, phishing simulations and training.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Veristor (Verinext)",
      link: "https://veristor.com",
      title: "Director of Professional and Migration Services",
      start: "2011",
      end: "2016",
      description: (
        <>
          Led a team delivering IT infrastructure, data migration, and security solutions tailored to enterprise and legal sector clients.
          <ul className="list-inside list-disc">
            <li>Advised, managed on data protection, compliance, and disaster recovery strategies.</li>
            <li>Managed teams for network and infrastructure projects for high-profile clients.</li>
            <li>Managed cross-country migrations with zero downtime, ensuring seamless transitions for petabyte-scale data.</li>
            <li>Implemented advanced planning and risk mitigation strategies to guarantee data integrity and operational continuity.</li>
            <li>Became the GO-TO for IBM Global Migration Team when they could not complete a migration with their team and tools.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Veristor (Verinext)",
      link: "https://veristor.com",
      title: "Sr. Storage Engineer",
      start: "2006",
      end: "2011",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>Helped design and deploy secure IT solutions for law firms such as <b>Troutman Sanders, King & Spalding, Alston & Bird</b>, ensuring compliance with legal industry standards.</li>
            <li>Provided infrastructure support for government and enterprise clients, including <b>>Oak Ridge National Laboratory</b> and <b>Lockheed Martin</b>.</li>
            <li>Implemented secure, high-availability storage solutions for legal and classified environments.</li>
            <li>Ensured business continuity through robust disaster recovery planning.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Network Architecture",
    "Server Architecture",
    "Mobile Device Management",
    "Remote Access",
    "Disaster Recovery",
    "Business Continuity",
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
