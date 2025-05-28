export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Rishika ',
    position: 'Teammate during Hackathon',
    img: 'assets/review1.png',
    review:
      'Working with Shivansh was an absolute pleasure. He’s a highly dependable teammate who not only codes efficiently but also brings structure and clarity to every discussion. His ability to stay calm under pressure, combined with a sharp eye for detail, makes him a strong asset to any team.',
  },
  {
    id: 2,
    name: 'Ayush',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Shivansh is one of the most reliable people I’ve worked with. He never hesitates to take initiative and has a strong grasp of both technical and design aspects. When we collaborated on a college-level web app project, he proactively handled the backend APIs and even helped others debug their code. It’s rare to find someone who combines strong coding skills with leadership and empathy.',
  },
  {
    id: 3,
    name: 'John',
    position: 'User & Beta Tester ',
    img: 'assets/review3.png',
    review:
      'The Tomato App is a game-changer for anyone looking to manage their time effectively. Shivansh created a clean and intuitive interface that made it super easy to stay focused using the Pomodoro technique. I especially loved the visual progress bar and how minimal the distractions were. You can tell it was made by someone who understands productivity and user experience.',
  },
  {
    id: 4,
    name: 'Dr. Kishor Upla',
    position: 'AI/ML Professor',
    img: 'assets/review4.png',
    review:
      'Shivansh’s Calorie Burnt Prediction project displayed a strong understanding of data preprocessing, model selection, and performance evaluation. What impressed me most was his commitment to interpreting results critically and tuning the model beyond just achieving high accuracy. He also documented the project clearly, which reflected a solid academic and practical approach to applying machine learning in real-world scenarios.',
  },
];

export const myProjects = [
  {
    title: 'Tomato – Food Delivery Platform',
    desc: 'Tomato is a sleek and efficient food delivery web platform that connects users with local restaurants.It offers a seamless browsing and ordering experience through an intuitive and responsive interface.',
    subdesc:
      'Built using React.js, Tomato features real-time cart updates and a modern UI for smooth navigation. It integrates with a robust backend to handle orders and payments, ensuring reliability and speed.',
    href: 'https://food-del-frontend-41e2.onrender.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    
    ],
  },
  
  {
    title: 'Calorie Burnt Prediction – Web & Mobile App',
    desc: 'A cross-platform application that predicts calories burned based on user activity data using machine learning. Available as both a web and mobile app, it provides real-time insights for fitness and health tracking.',
    subdesc:
      'The app leverages a supervised machine learning model trained on activity datasets using Python and scikit-learn.',
    href: 'https://github.com/Shivaanshtyagii/calories',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      
    ],
  },
  
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'React',
    pos: 'Web Developer',
    duration: '2022 - Present',
    title: "Developed a highly modular and scalable frontend for Tomato using React.js, creating 15+ reusable UI components and managing complex state across multiple user flows for customers, restaurants, and admins. Leveraged React best practices such as component composition, hooks, and context API to ensure maintainability and efficient data handling. Implemented responsive design to support 10+ screen sizes and integrated JWT-based authentication for secure user sessions, resulting in improved user engagement and seamless experience.",
    icon: '/assets/react.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ML',
    pos: 'Student Researcher – Machine Learning',
    duration: '2022 - Present',
    title: "Developed and trained regression-based machine learning models for accurate calorie burn prediction using feature engineering and data preprocessing. Optimized model performance through hyperparameter tuning and cross-validation to improve accuracy and robustness.",
    icon: '/assets/images.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Database',
    pos: 'Web Developer',
    duration: '2022 - Present',
    title: "Designed and managed efficient database schemas using both SQL and MongoDB to support scalable application requirements. Implemented complex queries, optimized indexing strategies, and ensured data integrity across relational and NoSQL databases, resulting in faster data retrieval and improved overall system performance.",
    icon: '/assets/db.png',
    animation: 'salute',
  },
];
