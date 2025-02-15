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
        name: 'Clients',
        href: '#clients',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Goldy Kumar',
        position: 'Founder Of Corhaven Technology pvt ltd',
        img: 'assets/profile.png',
        review:
            'Vishwajeet played a crucial role in the development of RupayLender.com. His expertise in the MERN stack and problem-solving skills ensured a seamless and efficient implementation of key features. He was proactive, reliable, and delivered high-quality work on time. Highly recommended!',
    },
    {
        id: 2,
        name: 'Krishna Nand Vishwakarma',
        position: 'Owner of HMC',
        img: 'assets/krishna.jpg',
        review:
        'Vishwajeet did an excellent job developing our Inventory and HMC website. His attention to detail, technical proficiency, and dedication resulted in a user-friendly and well-structured platform. He understood our requirements perfectly and delivered beyond expectations. A great professional to work with!',
    },
    // {
    //     id: 3,
    //     name: 'John Dohsas',
    //     position: 'Project Manager at UrbanTech ',
    //     img: 'assets/review3.png',
    //     review:
    //         'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    // },
    // {
    //     id: 4,
    //     name: 'Ether Smith',
    //     position: 'CEO of BrightStar Enterprises',
    //     img: 'assets/review4.png',
    //     review:
    //         'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    // },
];

export const myProjects = [
    {
        title: 'Rupaylender Web Application - Internship',
        desc: 'Rupay Lender is a MERN stack-based loan management application designed to simplify and automate the lending process for financial institutions and borrowers. It offers a seamless experience with secure loan applications, approvals, repayment tracking, and financial analytics, ensuring transparency and efficiency. We also created the Admin Panel and Subadmin panel for the simplicity of company',
        subdesc: 'As a Full-Stack Intern, I played a key role in building a scalable and efficient system using React.js, Node.js, Express.js, and MongoDB. The platform integrates JWT-based authentication, automated approval mechanisms, payment gateways, and role-based access control',
        href: 'https://rupaylender.com/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: 'rgba(243, 154, 40, 0.15)',
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
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'MUI',
                path: '/assets/material-ui.png',
            },
        ],
    },
    {
        title: 'Code Editor - Online Compiler',
        desc: 'The Code Editor is a web-based compiler built with React.js, offering a seamless coding experience with real-time execution. It features syntax highlighting, code suggestions, and customizable themes, enhancing developer productivity.',
        subdesc: 'As a Frontend Developer, I integrated Monaco Editor for an advanced coding interface and Piston API for multi-language code execution. This project showcases my expertise in React.js, API integration, and interactive UI development. ',
        href: 'https://react-editor-code.netlify.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
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
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'SKP Projects - Industrial Website',
        desc: 'SKP Projects is a professional website built for an oil and gas pipeline industry, designed to showcase services and projects effectively. Developed using React.js, HTML, CSS, and JavaScript, the website ensures a clean, responsive, and user-friendly experience.',
        subdesc: "During my first internship at VentureGrow Pvt Ltd, I enhanced the website's UI, responsiveness, and functionality, improving its overall performance. This project reflects my skills in frontend development, UI/UX design, and website optimization.",
        href: 'https://skp-projects.netlify.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: 'rgba(9, 245, 161, 0.1)',
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
                name: 'HTML',
                path: '/assets/html-5.png',
            },
            {
                id: 3,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 4,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
        ],
    },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        // for desk
        // deskScale: isSmall ? 0.0 : isMobile ? 0.06 : 0.075 ,
        // deskPosition: isMobile ? [0.5, -4.7, 0] : [0.25, -7.8, 0],

        // for spaceship
        deskScale: isSmall ? 0.0 : isMobile ? 0.009 : 0.0095,
        deskPosition: isMobile ? [0.5, -1.7, 0] : [0.25, -2.0, 0],


        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
        // starClusterPosition: isSmall ? [5, -10, -10] : isMobile ? [9, -10, -10] : isTablet ? [11, -7, -10] : [13, -13, -10],
        // starClusterPosition: isSmall ? 0.0 : isMobile ? 0.06 : 25,
        StarClusterMinecraft: isSmall ? 0.0 : isMobile ? 0.06 : .1,
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];