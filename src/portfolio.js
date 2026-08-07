/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Faheem's Portfolio",
  description:
    "Full Stack Engineer with 2+ years building scalable, full-stack platforms across healthcare, government, retail, and aviation. Specialised in React, NestJS, PostgreSQL, and AWS.",
  og: {
    title: "Syed Muhammad Faheem",
    type: "website",
    url: "http://SyedMuhammadFaheem.com/",
  },
};

//Home Page
const greeting = {
  title: "Syed Muhammad Faheem",
  logo_name: "FaheemDev",
  nickname: "Full Stack Engineer",
  subTitle:
    "Full Stack Engineer with 2+ years building scalable, full-stack platforms across healthcare, government, retail, and aviation. Specialised in React, NestJS, PostgreSQL, and AWS -- proficient in REST API development, performance optimisation, and CI/CD pipelines; experienced leading cross-functional Agile teams and frontend architectures from design to production.",
  resumeLink:
    "https://drive.google.com/file/d/1Rv8FCGmbcYFAg_1cwWLQnjJa1U2EvmRm/view?usp=sharing",
  portfolio_repository: "https://github.com/SyedMuhammadFaheem",
  githubProfile: "https://github.com/SyedMuhammadFaheem",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SyedMuhammadFaheem",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammadfaheemnu/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/channel/UC9GjbvZLcIY-4-ICeix3oGw/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:syed.faheem.official@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/fahimspangle/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/fahim.saggittarius/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/m.faheem1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive, design-system-driven UIs using React, Next.js and Tailwind CSS.",
        "⚡ Building component libraries and state/data-fetching layers with Redux, Ant Design and React TanStack Query.",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "skill-icons:nextjs-dark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Ant Design",
          fontAwesomeClassname: "simple-icons:antdesign",
          style: {
            color: "#0170FE",
          },
        },
        {
          skillName: "TanStack Query",
          fontAwesomeClassname: "simple-icons:reactquery",
          style: {
            color: "#FF4154",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building REST APIs and real-time services with NestJS, Node.js and Express.js.",
        "⚡ Designing relational and NoSQL schemas, and optimising queries with PostgreSQL, MongoDB and Redis.",
      ],
      softwareSkills: [
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "skill-icons:flask-light",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Cloud, DevOps & Tools",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Working with AWS services (S3, SQS, Cognito, Lambda, OpenSearch) and Firebase for scalable, event-driven backends.",
        "⚡ Setting up CI/CD pipelines, containerising services with Docker, and integrating Stripe, Twilio, Jest and SonarQube.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "OpenSearch",
          fontAwesomeClassname: "simple-icons:opensearch",
          style: {
            color: "#005EB8",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#635BFF",
          },
        },
        {
          skillName: "Twilio",
          fontAwesomeClassname: "simple-icons:twilio",
          style: {
            color: "#F22F46",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
          },
        },
        {
          skillName: "SonarQube",
          fontAwesomeClassname: "simple-icons:sonarqube",
          style: {
            color: "#4E9BCD",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Cynotryl/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Cynotryl",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/cyborg007",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/Cynotryl",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Computer and Emerging Sciences - FAST",
      subtitle: "BCS in Computer Science",
      logo_path: "nuces-logo.png",
      alt_name: "FAST NUCES",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, PDC, AI, Software Testing etc.",
        "⚡ Apart from this, I have done courses on Data Science, Testing and Scraping and Full Stack Development.",
        "⚡ 5x Deans List Honors",
        "⚡ CGPA: 3.63/4.0 - Cum Laude",
      ],
      website_link: "https://www.nu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React JS- Complete Guide for Frontend Web Development [2024]",
      subtitle: "- Udemy (Edyoda University)",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-563ea133-7604-4a47-bb0c-0fae939a1ac0/",
      alt_name: "udemy.com",
      color_code: "#8C151599",
    },
    {
      title: "Express Essentials",
      subtitle: "- Linkedin",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/94550e3cac7f257fc97d18cba3429194ff87b21d09df40f08ad2ad2bbdf4cefd",
      alt_name: "linkedin.com",
      color_code: "#00000099",
    },
    {
      title: "Learning Rest APIs",
      subtitle: "- Linkedin",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/b9549caed43c7542c9b58bec2c4b9952a85a104e6d19318402f5ab2a5acdd1bb",
      alt_name: "linkedin.com",
      color_code: "#00000099",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/b9549caed43c7542c9b58bec2c4b9952a85a104e6d19318402f5ab2a5acdd1bb",
      alt_name: "coursera.com",
      color_code: "#00000099",
    },
    {
      title: "Git from Basics to Advanced: Practical Guide for Developers",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-47dac503-4125-4645-be3b-cf2ebc43b204/",
      alt_name: "udemy.com",
      color_code: "#0C9D5899",
    },
    {
      title: "Intermediate Python",
      subtitle: "- DataCamp",
      logo_path: "datacamp.webp",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/course/4e7c790d0a68d356354a441f1b5828a78b3c6f2b",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Intermediate SQL Queries",
      subtitle: "- DataCamp",
      logo_path: "datacamp.webp",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/course/46e2b1f772c742f96b9c75d2307321d069504476",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have worked with a few reknowned tech companies and academia as a Full Stack Developer, Teaching Assistant and Student Lab Assistant. I love organising events and that is why I am also involved with student bodies and tech societies in a lead position.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "VentureDive",
          company_url: "https://www.venturedive.com/",
          logo_path: "venture-dive.png",
          duration: "July 2024 - Present",
          location: "Karachi, Pakistan",
          descriptions: [
            "• Led frontend architecture from scratch for 3 enterprise portals; established an Untitled UI + Tailwind CSS design system, built a JSON-configurable library of 10+ reusable UI components, and integrated REST APIs using React TanStack Query -- standardising development patterns across the entire frontend codebase.",
            "• Engineered scalable backend features for an AI-powered government employment platform using NestJS and PostgreSQL; integrated 3 AWS services -- OpenSearch for full-text global search, Redis for query performance optimisation, and SQS for async AI/ML data pipelines -- improving platform scalability and search responsiveness.",
            "• Shipped a multi-tenant compliance PWA in 6 weeks for 2 multinational enterprise clients (Unilever and Colgate); integrated CV model APIs for automated shelf image analysis, built interactive compliance dashboards, and designed the multi-tenant PostgreSQL schema from scratch.",
            "• Built the end-to-end booking management module for a B2C aviation platform, delivering 5 core user flows (flight listing, guest search by booking ID, add-on selection, payment gateway integration, and cancellation with partial refunds) using Next.js, TypeScript, and Firebase; resolved security vulnerabilities surfaced in a formal audit and shipped the full prototype in 2 months.",
            "• Developed custom appointment scheduling (React Big Calendar) and a Twilio-powered 3-channel communication suite (calls, SMS, email) for a healthcare SaaS platform; built a real-time workflow status builder enabling live tracking of patient journey stages using NestJS and PostgreSQL.",
            "• Mentored 5+ interns directly -- conducting structured code reviews, unblocking day-to-day technical challenges, and independently owning development of internal marketing tooling -- while driving their professional and technical growth through consistent, hands-on mentorship.",
          ],
          color: "#000000",
        },
        {
          title: "Full Stack Developer (Part-time)",
          company: "National Research Program for Universities - NRPU",
          company_url:
            "https://www.hec.gov.pk/english/services/universities/nrpu/Pages/Introduction.aspx",
          logo_path: "hec.png",
          duration: "October 2023 - October 2024",
          location: "Karachi, Pakistan",
          descriptions: [
            "• Built a full-stack IoT cattle health monitoring platform (Next.js, Node.js, MongoDB) and a real-time sensor data ingestion service, eliminating manual data collection for remote livestock operations.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "VentureDive",
          company_url: "https://www.venturedive.com/",
          logo_path: "venture-dive.png",
          duration: "March 2024 - June 2024",
          location: "Karachi, Pakistan (Hybrid)",
          descriptions: [
            "• Added localization to all the existing entities, catered minor bug fixes and helped QA to resolve page structure and data related issues using Strapi CMS.",
            "• Designed and developed a full-fledged full stack Budget Tracker App which can be used to track expenses, savings and income and help setup timely saving goals using React, Node, Express, PostgreSQL and TypeORM.",
            "• Added new features and addressed major bug fixes on an internal QA tool web app, similar to TestRails, using React and TypeScript, in preparation for a beta release",
          ],
          color: "#000000",
        },
        {
          title: "Backend Engineer (Intern)",
          company: "Motive (formerly KeepTruckin)",
          company_url: "https://gomotive.com/",
          logo_path: "motive.png",
          duration: "July 2023 - September 2023",
          location: "Karachi, Pakistan",
          descriptions: [
            "• Achieved 25% unit test coverage for the ELD PDF module using Ruby on Rails and Selenium; containerised updated service dependencies via Docker and published images to AWS ECR, strengthening the team's CI/CD pipeline reliability.",
          ],
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "boolean-retrieval-model",
      name: "How to implement a Boolean Retrieval Model?",
      createdAt: "March 15, 2023",
      description: "Article published on Medium",
      url:
        "https://medium.com/@syed.faheem.official/how-to-implement-the-boolean-retrieval-model-610e2776f2b6",
    },
    {
      id: "github-macos",
      name: "How to setup github on Mac OS?",
      createdAt: "June 10, 2023",
      description: "Article published on Medium",
      url:
        "https://medium.com/@syed.faheem.official/how-to-set-up-github-on-macos-b6950728737c",
    },
    {
      id: "strapi-plugins-comments",
      name: "Strapi Plugin Comments",
      createdAt: "April 30, 2024",
      description: "Article published on Medium",
      url:
        "https://medium.com/@syed.faheem.official/strapi-comments-plugin-7dfa4106cdb1",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack Development, AI, ML, Competitive Programming and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@syed.faheem.official",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Karachi, Pakistan",
    locality: "Karachi",
    country: "Pakistan",
    region: "Sindh",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "Personal Phone",
    subtitle: "+923312613326",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
