export const HERO_CONTENT = {
  badge: "Software Engineer and Chaos-to-Code Converter",
  title: "Your Competitors Wish They",
  titleAccent: "Found Me First.",
  description: "I turn ideas into deployed products before meetings turn into excuses. Launch faster. Grow smarter. Stay ahead.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Get In Touch",
};

export const PROJECTS_CONTENT = {
  title: "Selected",
  titleAccent: "Projects",
  description: "A curated selection of my most recent work, ranging from complex dashboards to elegant landing pages.",
  projects: [
    {
      title: 'FarmHive',
      description: 'FarmHive is a digital marketplace platform built for farmers to buy agricultural tools and products while also selling their produce directly to buyers.',
      tags: ['MongoDB', 'Express', 'React', 'NodeJs'],
      github: "https://github.com/theamishdev/FarmHive",
      link: "https://farm-hive.vercel.app/",
      logos: [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', alt: 'Express', style: { filter: 'invert(1) brightness(2)' } },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', alt: 'React' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
      ]
    },
    {
      title: 'ConnectShare',
      description: 'ConnectShare is a digital networking platform built for entrepreneurs to share business ideas and organize meetings to discuss and develop them further.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: "https://github.com/AadishJain112/ConnectShare",
      link: "dazzling-valkyrie-5ebd8e.netlify.app",
      logos: [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', alt: 'HTML5' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', alt: 'CSS3' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', alt: 'PHP' },
      ]
    },
    {
      title: 'DeadLock Detection System',
      description: 'Deadlock Detection System is an interactive web-based application designed to detect, analyze, and resolve deadlocks in operating systems using real-time simulation.',
      tags: ['HTML', 'CSS','JavaScript'],
      github: "https://github.com/theamishdev/-deadlock-detection-system",
      link: "https://deadlockdetectionsystem.netlify.app/",
      logos: [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', alt: 'HTML5' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', alt: 'CSS3' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      ]
    },
    {
      title: 'Mental Health Stimulator',
      description: 'Mental Health Stimulator is a console-based Java application designed to support emotional well-being through mood tracking and guided wellness activities.',
      tags: ['java'],
      github: "https://github.com/theamishdev/Console_based_Mental_health_Stimulator",
      logos: [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', alt: 'Java' },
      ]
    },
    {
      title: 'Git Book',
      description: 'Git Book is a lightweight interactive web application designed to demonstrate and explain essential Git commands through a simple button-based interface.',
      tags: ['HTML', 'CSS', 'JavaScript',],
      github: "https://github.com/theamishdev/Devops_CA/",
      link: "https://gitbook-seven.vercel.app/",
      logos: [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', alt: 'HTML5' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', alt: 'CSS3' },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
      ]
    },
    {
      title: 'VR Experience Pro',
      description: 'Immersive 3D gallery for digital artists featuring high-fidelity rendering and spatial audio.',
      tags: ['Three.js', 'WebXR', 'React', 'GSAP'],
      github: "https://github.com/theamishdev/VR-Pro",
      link: "https://vr-demo.vercel.app",
      logos: [
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg', alt: 'Three.js', style: { filter: 'invert(1) brightness(2)' } },
        { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', alt: 'React' },
      ]
    }
  ]
};

export const ABOUT_CONTENT = {
  title: "Passionate about",
  titleAccent: "Problem Solving",
  paragraphs: [
    "With over years of experience in full-stack development, I specialize in building scalable web applications that provide seamless user experiences.",
    "My journey in tech is driven by a curiosity for how things work and a commitment to writing clean, efficient, and maintainable code."
  ],
  skills: [
    {
      category: "Development",
      items: ["React / Next.js", "Node.js / Express", "PostgreSQL / MongoDB"]
    },
    {
      category: "Design",
      items: ["Framer Motion", "Responsive UI", "Accessibility (A11y)"]
    }
  ]
};

export const CONTACT_CONTENT = {
  title: "Let's build something",
  titleAccent: "Incredible",
  description: "Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.",
  email: "amish@example.com",
  socials: [
    { name: "Github", href: "https://github.com/theamishdev" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/amish12/" },
    { name: "Twitter", href: "#" }
  ]
};
