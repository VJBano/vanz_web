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
    quiz_app,
    vijaya,
    sourceum
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
  ];
  
  const experiences = [
    {
      title: 'Junior Software Engineer',
      company_name: 'Vijaya Technologies Inc',
      icon: vijaya,
      iconBg: '#333333',
      date: 'Jul 2022 - Present',
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
      name: 'Quiz App',
      description: 'A Quiz App for Mobile is an engaging and interactive application that allows users to test their knowledge, learn new facts, and have fun answering questions on various topics. With a user-friendly interface optimized for mobile devices, the app offers a diverse range of quizzes, including general knowledge, educational subjects, pop culture, and more. Users can select quizzes based on their interests, navigate through questions, submit scores, and receive instant feedback. The app enhances learning and entertainment by challenging users intellect while providing a seamless mobile experience. Whether its for educational purposes or casual enjoyment, the Quiz App for Mobile provides an enjoyable way to engage with quizzes anytime, anywhere.',
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
    // {
    //   id: 'project-2',
    //   name: 'Leaderboard',
    //   description:
    //     'A leaderboard list app that displays scores submitted by different players.',
    //   tags: [
    //     {
    //       name: 'react',
    //       color: 'blue-text-gradient',
    //     },
    //     {
    //       name: 'restapi',
    //       color: 'green-text-gradient',
    //     },
    //     {
    //       name: 'scss',
    //       color: 'pink-text-gradient',
    //     },
    //   ],
    //   image: leaderboard,
    //   repo: 'https://github.com/shaqdeff/Leaderboard',
    //   demo: 'https://shaqdeff.github.io/Leaderboard/',
    // },
    // {
    //   id: 'project-3',
    //   name: 'Math Magicians',
    //   description: 'This is a single-page calculator app built with React',
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
    //   image: math,
    //   repo: 'https://github.com/shaqdeff/Math-Magicians',
    //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    // },
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
  