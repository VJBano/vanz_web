import {
    frontend,
    backend,
    ux,
    prototyping,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    postgresql,
    express,
    mysql,
    quiz_app,
    vijaya,
    sourceum,
    qrcode,
    pos,
    go
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Frontend Developer',
      icon: frontend,
    },
    {
      title: 'Backend Developer',
      icon: backend,
    },
    {
      title: 'UI/UX Design',
      icon: ux,
    },
    {
      title: 'Software Prototyping',
      icon: prototyping,
    },
  ];
  
  const technologies = [
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Redux Toolkit',
      icon: redux,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'postgresql',
      icon: postgresql,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'docker',
      icon: docker,
    },
    {
      name:"Express",
      icon:express
  },
  {
    name:"MySQL",
    icon:mysql
  },
  {
    name:"GoLang",
    icon:go
  }
  ];
  
  const experiences = [
    {
      title: 'Junior Software Engineer',
      company_name: 'Vijaya Technologies Inc',
      icon: vijaya,
      iconBg: '#333333',
      date: 'Jul 2022 - Aug 2023',
    },
    {
      title: 'Research Assistant',
      company_name: 'Sourceum Research',
      icon: sourceum,
      iconBg: '#333333',
      date: 'Nov 2021 - Aug 2022',
    },
    // {
    //   title: 'Junior Software Engineer',
    //   company_name: 'Kelhel',
    //   icon: kelhel,
    //   iconBg: '#333333',
    //   date: 'May 2022 - Oct 2022',
    // },
    // {
    //   title: 'Full Stack Developer',
    //   company_name: 'Diversity Cyber Council',
    //   icon: dcc,
    //   iconBg: '#333333',
    //   date: 'Sep 2022 - Present',
    // },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'Quiz App Mobile',
      description: 'A Quiz App for Mobile is an engaging and interactive application that allows users to test their knowledge, learn new facts, and have fun answering questions on various topics.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: quiz_app,
      repo: 'https://vjbano.github.io/quiz_app/',
      demo: 'https://vjbano.github.io/quiz_app/',
    },
    
    {
      id: 'project-2',
      name: 'QRCode Generator',
      description:
        'A QR Code Generator is a versatile tool that allows users to create customized QR codes effortlessly.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: qrcode,
      repo: 'https://vjbano.github.io/QRCode-Generator/',
      demo: 'https://vjbano.github.io/QRCode-Generator/',
    },
    {
      id: 'project-3',
      name: 'Mobile POS',
      description: 'A mobile Point of Sale (POS) system with a barcode scanner offers efficient and streamlined product and stock management for businesses.',
      tags: [
        {
          name: 'react-native',
          color: 'blue-text-gradient',
        },
        {
          name: 'sqlite',
          color: 'green-text-gradient',
        },
        {
          name: 'expo',
          color: 'pink-text-gradient',
        },
      ],
      image: pos,
      repo: 'https://github.com/VJBano/POS',
      demo: 'https://github.com/VJBano/POS',
    },
    // {
    //   id: 'project-4',
    //   name: 'Movie Metro',
    //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    //   tags: [
    //     {
    //       name: 'nextjs',
    //       color: 'blue-text-gradient',
    //     },
    //     {
    //       name: 'supabase',
    //       color: 'green-text-gradient',
    //     },
    //     {
    //       name: 'css',
    //       color: 'pink-text-gradient',
    //     },
    //   ],
    //   image: movie,
    //   repo: 'https://github.com/shaqdeff/Movie-Metro',
    //   demo: 'https://movie-metro.netlify.app/',
    // },
    // {
    //   id: 'project-5',
    //   name: 'Nyeusi Fest Site',
    //   description:
    //     'This is a demo concert website for a music festival called Nyeusi.',
    //   tags: [
    //     {
    //       name: 'nextjs',
    //       color: 'blue-text-gradient',
    //     },
    //     {
    //       name: 'supabase',
    //       color: 'green-text-gradient',
    //     },
    //     {
    //       name: 'css',
    //       color: 'pink-text-gradient',
    //     },
    //   ],
    //   image: nyeusi,
    //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    // },
  ];
  
  export { services, technologies, experiences, projects };
  