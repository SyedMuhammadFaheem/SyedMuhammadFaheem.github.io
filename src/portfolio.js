/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Faheem's Portfolio",
  description:
    "Enthusiastic individual with a commitment to excellence. Extensive understanding of core programming concepts, databases, machine learning and hosting services. Team-oriented and hardworking with good communication skills",
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
  nickname: "Tech Troubleshooter",
  subTitle:
    "An enthusiastic individual with a commitment to excellence along with an extensive understanding of core programming concepts, databases, machine learning and hosting services. Team-oriented and hardworking with good communication skills.",
  resumeLink:
    "https://drive.google.com/file/d/1n_N2dikdb2VxZfkb5PwSugmg1NSBBVC9/view?usp=sharing",
  portfolio_repository:
    "https://github.com/SyedMuhammadFaheem/PersonalPortfolio",
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
    name: "X-Twitter",
    link: "https://twitter.com/fahimspangle/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
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
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and Next.",
        "⚡ Developing cross platform mobile applications using React Native and Swift.",
        "⚡ Creating application backend in Node, Express & Flask.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
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
          skillName: "Swift",
          fontAwesomeClassname: "skill-icons:swift",
          style: {
            color: "#61DAFB",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "skill-icons:selenium",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable  models for various deeplearning and statistical use cases.",
        "⚡ Experience of working with Computer Vision and NLP projects.",
        "⚡ Experience of visualizing and extracting valuable insights from large datasets.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit",
          fontAwesomeClassname: "skill-icons:scikitlearn-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "devicon:numpy-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Neural Networks",
          fontAwesomeClassname: "eos-icons:neural-network",
          style: {
            backgroundColor: "transparent",
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture and Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Have knowledge of design and implementation of various relational and NoSQL Databases along with query optimization",
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, PDC, AI etc.",
        "⚡ Apart from this, I have done courses on Data Science, Testing and Scraping and Full Stack Development.",
        "⚡ 4x Deans List Honors",
        "⚡ CGPA: 3.6/4.0",
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
          title: "Full Stack Developer",
          company: "National Research Program for Universities - NRPU",
          company_url:
            "https://www.hec.gov.pk/english/services/universities/nrpu/Pages/Introduction.aspx",
          logo_path: "hec.png",
          duration: "October 2023 - Present",
          location: "Karachi, Pakistan (Remote)",
          description:
            "Designed and developed a scalable full stack IoT integrated Web App which helps monitor cattle animals health statuses using Next, Node, Express and MongoDB. Designed and developed a live data streaming server which receives data from remote IoT devices, processes it and captures them into a cloud database.",
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
          duration: "March 2024 - Present",
          location: "Karachi, Pakistan (Hybrid)",
          description:
            "Added localization to all the existing entities, catered minor bug fixes and helped QA to resolve page structure and data related issues using Strapi CMS. Designed and developed a full-fledged full stack Budget Tracker App which can be used to track expenses, savings and income and help setup timely saving goals using React, Node, Express, PostgreSQL and TypeORM.",
          color: "#000000",
        },
        {
          title: "Backend Engineering Intern",
          company: "Motive (formerly KeepTruckin)",
          company_url: "https://gomotive.com/",
          logo_path: "motive.png",
          duration: "July 2023 - Sept 2023",
          location: "California, United States (Remote)",
          description:
            "Developed unit tests (75% test coverage) by scraping HTML docs to verify the logic and results for different Electronic Log PDF sections which in turn increased the efficiency of code refactoring using Selenium and Ruby on Rails. Built Docker images for new additional dependencies and pushed them to AWS ECR instance.",
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
    subtitle: "Nazimabad Block 1, Karachi, Sindh, Pakistan 74600",
    locality: "Karachi",
    country: "Pakistan",
    region: "Sindh",
    postalCode: "74600",
    streetAddress: "Nazimabad Block 1",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "Personal Phone",
    subtitle: "+92331613326",
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
