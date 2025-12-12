export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "React, Next.js, Tailwind, Python, FastAPI, Django, PostgreSQL, SQL,Selenium",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Developer passionate about building practical soultions",
    description: "From AI tools to automation systems and full-stack web apps",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Python automation & data extraction tools",
    description: "Working with FastAPI, Selenium, BeautifulSoup, PostgreSQL",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "Open to frontend, backend, automation or AI-powered projects",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Product Scraper – FastAPI",
    des: "A Python FastAPI project for scraping product data with automated extraction using Selenium and storing in PostgreSQL. Clean REST API design and practical backend implementation.",
    img: "/p1.png",
    iconLists: [
      "/re.svg",
      "/python.svg",
      "/dj.svg",
      "/pgre.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
    ],
    link: "https://github.com/fatima0x/Product_Scraper_FASTAPI.git",
  },
  {
    id: 2,
    title: "Django Finance Tracker",
    des: "A full-stack finance tracker built in Django with MySQL backend. Manage expenses, categories, and get financial insights with authentication and responsive design.",
    img: "/p2.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/python.svg",
      "/dj.svg",
      "/pgre.svg",
      "/stream.svg",
      "/c.svg",
    ],
    link: "https://github.com/fatima0x/Django_finance_tracker_MYSQL.git",
  },
  {
    id: 3,
    title: "React Blog App",
    des: "Personal blog built in React. Fully deployed with SEO optimizations and clean UI. Includes routing, components, and interactive post management.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://react-blog-web-app-ytdj.vercel.app/",
  },
  {
    id: 4,
    title: "Flask Article CRUD App",
    des: "A practical CRUD application built in Flask for managing articles. Includes database integration and clean user interface.",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/python.svg",
      "/dj.svg",
      "/pgre.svg",
      "/gsap.svg",
    ],
    link: "https://github.com/fatima0x/flask_article_crud.git",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Fatima was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Fatima's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Fatima is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Frontend Developer",
    desc: "Delivered responsive and high-quality frontend websites for clients using React, Next.js, and Tailwind CSS. Also worked on UI improvements and API integrations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Backend Developer",
    desc: "Built and maintained backend APIs using Django, FastAPI, and PostgreSQL. Developed features like authentication, CRUD operations, and server-side logic.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Junior Software Developer — Red Coast Corporation",
    desc: "Working on both frontend (Next.js, React) and backend (Django, FastAPI). Contributing to the PhotoSoft AI app and Stackwise backend including authentication & APIs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
