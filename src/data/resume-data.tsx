import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ruiquan Zhao",
  initials: "BJ",
  location: "Xiamen, China, UTC+8",
  locationLink: "https://maps.app.goo.gl/Fu1UZtUTFvTC21e96",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "I am a seasoned WordPress Developer with a robust background in web development, specializing in WordPress and WooCommerce. Since 2017, I have successfully led the development of over 400 websites for a diverse range of clients through my work at Yunclever. My journey in web development began at Baijuncheng, where I honed my skills in HTML5, CSS3, JavaScript, Bootstrap, and Photoshop.",
  avatarUrl: "./images/logos/avatar.jpeg",
  personalWebsiteUrl: "",
  contact: {
    email: "zrq1320@gmail.com",
    tel: "+8618116589761",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/1zrq",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wordpress-development/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Zhongnan University of Economics and Law",
      degree: "Bachelor of Finance",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Yunclever.com",
      link: "https://www.yunclever.com/",
      badges: [],
      title: "Full stack engineer",
      logo: ConsultlyLogo,
      start: "2017",
      end: null,
      description:
        "The agency builds websites for businesses around the city, using WordPress and WooCommerce to build 400+ websites for clients",
    },
    {
      company: "Baijuncheng",
      link: "",
      badges: [],
      title: "Web Developer",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2016",
      description:
        "HTML5，CSS3, Javascript, Bootstrap, PS",
    },
    
  ],
  skills: [
    "WordPress",
    "WooCommerce",
    "PHP",
    "Mysql",
    "Nginx",
    "Mysql",
    "CSS",
    "HTML",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
  ],
  projects: [
    {
      title: "Elementiau",
      techStack: [
        "WordPress",
        "PHP",
        "WooCommerce",
      ],
      description:
        "For outdoor home products, I complete server selection, domain name configuration, custom styles, and plugin settings",
      logo: ParabolLogo,
      link: {
        label: "elementiau.com",
        href: "http://www.elementiau.com/",
      },
    },
    {
        title: "Modenodesign",
        techStack: [
          "WordPress",
          "PHP",
          "WooCommerce",
        ],
        description:
          "Convert Figma designs into fully functional WordPress websites",
        logo: ParabolLogo,
        link: {
          label: "modenodesign.com",
          href: "https://www.modenodesign.com/",
        },
      },
    {
      title: "Shipping Insurance for WooCommerce Plugin",
      techStack: [
        "WordPress",
        "PHP",
        "WooCommerce",
      ],
      description:
        "Boost your store’s average order value (AOV) and enhance customer satisfaction with the Shipping Insurance for WooCommerce plugin. ",
      logo: EvercastLogo,
      link: {
        label: "wordpress.org",
        href: "https://wordpress.org/plugins/e-commerce-shipping-insurance/",
      },
    },
    {
      title: "Sukorun",
      techStack: [
        "WordPress",
        "PHP",
        "WooCommerce",
      ],
      description: "Auto Parts Website",
      logo: ConsultlyLogo,
      link: {
        label: "sukorun.com",
        href: "https://www.sukorun.com/",
      },
    },
    {
      title: "Yishunbike",
      techStack: [
        "WordPress", 
        "PHP",
        "WooCommerce",
        "WP-Rocket, ",
        "GTM",
        "GA",
        "Omnisend",
        "Cloudflare",
        "Nginx",
        "Google Ads",
       ],
      description:
        "Create secure and optimized websites, Customize themes and plugins as needed.",
      logo: MonitoLogo,
      link: {
        label: "yishunbike.com",
        href: "https://www.yishunbike.com/",
      },
    },
    {
      title: "Pawfectmemories.com",
      techStack: [
        "WordPress", 
        "PHP",
        "WooCommerce",
        "Elementor",
        "Rank Math",
      ],
      description:
        "Pet Customized E-commerce WebsiteCustomized pet e-commerce website, connected to stripe, wp-rocket, GTM, GA, Omnisend",
      logo: JarockiMeLogo,
      link: {
        label: "pawfectmemories.com",
        href: "https://www.pawfectmemories.com/",
      },
    },
    {
      title: "Op2ma",
      techStack: [
        "WordPress", 
        "PHP",
        "WooCommerce",
        "Elementor",
      ],
      description:
        "Australian automotive software service provider, cooperation for more than 3 years",
      logo: Minimal,
      link: {
        label: "op2ma.com",
        href: "hhttps://www.op2ma.com/",
      },
    },
    {
      title: "Testel",
      techStack: [
        "WordPress", 
        "PHP",
        "WooCommerce",
        "Betheme",
        "Goole Ads",
        "Rank Math",
      ],
      description:
        "Testel is one of the largest safety testing full-service providers, with more than 2 years of cooperation",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://www.testel.com.au/",
      },
    },
    
  ],
} as const;
