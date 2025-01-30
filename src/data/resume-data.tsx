import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kevin Miller",
  initials: "KM",
  location: "Durango, CO",
  locationLink: "https://www.google.com/maps/place/Durango,CO",
  about:
    "Results-driven technology professional with over 25 years of experience in data storage, disaster recovery, network infrastructure, and IT security.",
  summary: (
    <>
      Proven track record of working with top law firms, government agencies, and Fortune 500 companies to design and implement robust, scalable, and secure IT solutions. Adept at solving complex technical challenges with a strategic approach, ensuring compliance, business continuity, and operational efficiency.
    </>
  ),
  contact: {
    email: "kevin@kevinmiller.info",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kevinmillerinfo",
      },
    ],
  },
  education: [
    {
      school: "Certifications",
      degree: "VMWare VCP (2008), ISECOM OPST (2003)",
    },
  ],
  work: [
    {
      company: "Global Data Resource Group (GDRG)",
      start: "2022",
      end: "Present",
      title: "Founder",
      description: (
        <>
          Helping customers secure digital assets, including servers, IPs, and bandwidth, while providing comprehensive consulting on infrastructure security, risk mitigation, and data governance.
          <ul>
            <li>Developed and deployed security frameworks that ensure regulatory compliance and protect against emerging cyber threats.</li>
            <li>Managed complex, large-scale data migrations with zero downtime.</li>
            <li>Implemented scalable cloud and hybrid storage solutions.</li>
            <li>Designed incident response and disaster recovery plans.</li>
          </ul>
        </>
      ),
    },
    {
      company: "NinjaProxy",
      start: "2022",
      end: "Present",
      title: "Managing Partner",
      description: (
        <>
          Leading a team to provide secure and scalable proxy solutions for businesses needing uninterrupted data access.
          <ul>
            <li>Designed scalable proxy architectures for web scraping, market intelligence, and cybersecurity.</li>
            <li>Implemented IP rotation and geo-targeting strategies.</li>
            <li>Developed innovative proxy products simplifying data access for SMBs and enterprises.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Veristor",
      start: "2016",
      end: "2022",
      title: "Director of Corporate Operations",
      description: (
        <>
          Oversaw IT strategy, development, and implementation for legal and enterprise clients.
          <ul>
            <li>Led IT infrastructure upgrades, process automation, and system integrations.</li>
            <li>Managed secure remote workforce transition during the COVID-19 lockdown.</li>
            <li>Implemented disaster recovery and network security initiatives.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Veristor",
      start: "2011",
      end: "2016",
      title: "Director of Professional and Migration Services",
      description: (
        <>
          Led teams delivering IT infrastructure, data migration, and security solutions.
          <ul>
            <li>Managed cross-country data migrations with zero downtime.</li>
            <li>Provided compliance and disaster recovery strategies.</li>
            <li>Key partner for IBM Global Migration Team.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Veristor",
      start: "2006",
      end: "2011",
      title: "Sr. Storage Engineer",
      description: (
        <>
          Specialized in onsite implementation of data storage and disaster recovery solutions.
          <ul>
            <li>Designed and deployed secure IT solutions for top law firms.</li>
            <li>Supported government and enterprise clients like Oak Ridge National Laboratory and Lockheed Martin.</li>
          </ul>
        </>
      ),
    },
  ],
  notableClients: [
    "Troutman Sanders", "King & Spalding", "Alston & Bird", "Oak Ridge National Laboratory", "Lockheed Martin", "IBM", "Mailchimp", "Scripps Networks"
  ],
} as const;
