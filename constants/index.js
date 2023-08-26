import { Linking } from 'react-native'
import { themeColors } from '../theme'

export const categories = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Engineering",
  },
  {
    id: 3,
    title: "Technology",
  },
  {
    id: 4,
    title: "Programming",
  },
  {
    id: 5,
    title: "Development",
  },
  {
    id: 6,
    title: "Gaming",
  },
]



export const clubItems = [
  {
    id: 1,
    name: 'IEEE',
    tag1: 'engineering',
    tag2: 'technology',
    tag3: 'community',
    tag4: 'all',
    stacks1: 'Research',
    stacks2: 'technology',
    stacks3: 'Community',
    accent: '#76bde9',
    bgimage: require('../assets/images/22.png'),
    image: require('../assets/logos/ieee.png'),
    desc: 'IEEE (Institute of Electrical and Electronics Engineers) is a global community of engineers, scientists, and technologynology enthusiasts. Join us to network and collaborate on cutting-edge projects.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 2,
    name: 'Mobile Technologies',
    tag1: 'programming',
    tag2: 'technology',
    tag3: 'development',
    tag4: 'all',
    stacks1: 'Mobile Apps',
    stacks2: 'Android',
    stacks3: 'IOS',
    accent: '#cb6ce6',
    bgimage: require('../assets/images/14.png'),
    image: require('../assets/logos/MobileTech.png'),
    desc: 'Mobile technologies Club is all about staying updated on the latest mobile app development trends, platforms, and tools.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 3,
    name: 'CodeChef_BU',
    tag1: 'programming',
    tag2: 'technology',
    tag3: 'challenges',
    tag4: 'all',
    stacks1: 'Coding',
    stacks2: 'Learning',
    stacks3: 'Competitions',
    accent: '#6f3ac6',
    bgimage: require('../assets/images/3.png'),
    image: require('../assets/logos/codechef.png'),
    cname: 'Vishesh Shah',
    vname: 'Adit Agrawal',
    chair: 'https://i.postimg.cc/hQjHjWDt/cc.png',
    vc: 'https://i.postimg.cc/PN5GKZWn/ccv.png',
    desc: "CodeChef is a chapter established in sept 2022 after the Indian website “CodeChef”. We prepare the students for competitive and non-competitive level coding by conducting the weekly coding contests of the website among the students. Our aim doesn’t only comprise of basic level coding but also preparing students for advanced level problems and thus maintaining stars on their CodeChef’s account.",
    vis: "Our vision is to create a coding culture. And not only that, we want no child to be have the fear of coding inside them. We will teach them but in a better and more fun way. ",
    wp: 'none',
    insta: 'https://www.instagram.com/codechef_bu/',
    web:'https://twitter.com/CodechefBu',
    lk: 'https://www.linkedin.com/company/codechef-bu/about/',
    pic: 'yes',
    img1: require('../assets/events/cc1.jpg'),
    img2: require('../assets/events/cc2.jpg'),
    img3: require('../assets/events/cc3.jpg')},
  
  {
    id: 4,
    name: 'Alan Turing Club',
    tag1: 'engineering',
    tag2: 'programming',
    tag3: 'mathematics',
    tag4: 'all',
    stacks1: 'Maths',
    stacks2: 'Algorithms',
    stacks3: 'Logic Building',
    accent: '#616161',
    bgimage: require('../assets/images/4.png'),
    image: require('../assets/logos/atc.png'),
    cname: 'Udit Chaudhary',
    vname: 'Akshay Sinha',
    chair: 'https://i.postimg.cc/cvnGwSQK/atc.jpg',
    vc: 'https://i.postimg.cc/Hc2gn9bB/atcv.jpg',
    desc: "Alan Turing Club aims to cultivate a community of exceptional coders, providing them with comprehensive resources and training to prepare for top companies. Our exclusive interactions with renowned tech experts ensure a holistic and transformative learning journey." ,
    vis: "Our vision at Alan Turing Club is to build a clan of elite coders by recognizing their potential, facilitating their training, and polishing their skill sets to prepare them for MAANG and Fortune 500 companies. In culmination, our commitment entails not only furnishing students with comprehensive resources and tests but also facilitating their journey through exclusive interactions with esteemed gurus within the realm of technology, ensuring a holistic and transformative learning experience.",
    wp: 'none',
    insta: 'https://www.instagram.com/alanturingclub_bu/',
    web:'none',
    lk: 'https://www.linkedin.com/in/alan-turing-club-bu-832127258/',
    pic: 'yes',
    img1: require('../assets/events/atc1.jpeg'),
    img2: require('../assets/events/atc2.jpeg'),
    img3: require('../assets/events/atc3.png')},
  {
    id: 5,
    name: 'Google Developer Student Club',
    tag1: 'development',
    tag2: 'programming',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Google',
    stacks2: 'Hackathons',
    stacks3: 'Workshops',
    accent: '#f4db7b',
    bgimage: require('../assets/images/21.png'),
    image: require('../assets/logos/GDSC.png'),
    desc: 'Google Developer Student Club is the official student community for Google Developers. Explore Google technologies, attend workshops, and participate in hackathons.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 6,
    name: 'Association for Computing Machinery (ACM)',
    tag1: 'technology',
    tag2: 'engineering',
    tag3: 'profession',
    tag4: 'all',
    stacks1: 'Theories',
    stacks2: 'Profession',
    stacks3: 'technology',
    accent: '#76bde9',
    bgimage: require('../assets/images/22.png'),
    image: require('../assets/logos/ACM.png'),
    desc: 'ACM (Association for Computing Machinery) is dedicated to advancing computing as a science and profession. Join us to engage with computer science enthusiasts and explore the latest developments in the field.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 7,
    name: 'Product Design & Technology',
    tag1: 'innovation',
    tag2: 'creativity',
    tag3: 'engineering',
    tag4: 'all',
    stacks1: 'Product',
    stacks2: 'Design',
    stacks3: 'Innovation',
    accent: '#616161',
    bgimage: require('../assets/images/4.png'),
    image: require('../assets/logos/pdtc.png'),
    cname: 'Dhruv Agarwal',
    vname: 'Kanchandeep Singh Bhasin-',
    chair: 'https://i.postimg.cc/q6rn5bGd/pdt.jpg',
    vc: 'https://i.postimg.cc/tZWWDQW5/pdtv.jpg',
    desc: 'We try to incur an interest in the first year students about what is product designing. How it is done. What are they key aspects of product designing.',
    vis: 'Create awareness and about PDT and make people believe that PDT is important',
    wp: 'none',
    insta: 'https://instagram.com/pdtc_bu?igshid=OGQ5ZDc2ODk2ZA==',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 8,
    name: 'Computer Society of India (CSI)',
    tag1: 'engineering',
    tag2: 'technology',
    tag3: 'india',
    tag4: 'all',
    stacks1: 'Research',
    stacks2: 'Community',
    stacks3: 'Indian Society',
    accent: '#183883',
    bgimage: require('../assets/images/19.png'),
    image: require('../assets/logos/CSI.png'),
    desc: 'CSI (Computer Society of India) is committed to promoting the advancement of computer science in India. Connect with like-minded individuals and contribute to the technology community.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')}, 
  {
    id: 9,
    name: 'Bennett DroneSoc',
    tag1: 'engineering',
    tag2: 'technology',
    tag3: 'photography',
    tag4: 'all',
    stacks1: 'Drones',
    stacks2: 'Photography',
    stacks3: 'Aerial technology',
    accent: '#564d52',
    bgimage: require('../assets/images/23.png'),
    image: require('../assets/logos/drone.png'),
    desc: 'Bennett DroneSoc is your gateway to aerial technolology. Discover the art of flying drones, explore aerial photography, and learn about the latest drone innovations.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')}, 
  {
    id: 10,
    name: 'Bennett Institute of AI Studies (BIAS)',
    tag1: 'engineering',
    tag2: 'programming ',
    tag3: 'technology ',
    tag4: 'all',
    stacks1: 'AI',
    stacks2: 'Machine Learning',
    stacks3: 'Neural Network',
    accent: '#b01c33',
    bgimage: require('../assets/images/red.png'),
    image: require('../assets/logos/bais.png'),
    desc: ' BIAS (Bennett Institute of AI Studies) is your gateway to the fascinating world of Artificial Intelligence (AI). Join us to understand AIs impact on various domains and dive deep into machine learning and neural networks.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 11,
    name: 'Quantum Computing',
    tag1: 'engineering',
    tag2: 'technology',
    tag3: 'science',
    tag4: 'all',
    stacks1: 'Science',
    stacks2: 'Supercomputers',
    stacks3: 'Research',
    accent: '#333333',
    bgimage: require('../assets/images/4.png'),
    image: require('../assets/logos/Quantum.png'),
    desc: 'Quantum Computing Club is where you will explore the exciting and emerging field of quantum computing. Understand the principles and potential applications of quantum computers.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 12,
    name: 'Devops Club',
    tag1: 'development',
    tag2: 'programming',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Devops',
    stacks2: 'Learn Automation',
    stacks3: 'Deployment',
    accent: '#5271ff',
    bgimage: require('../assets/images/19.png'),
    image: require('../assets/logos/DEVOPS.png'),
    desc: 'Devops Club is your introduction to the world of DevOps (Development and Operations). Learn how to automate software development and deployment processes.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 13,
    name: 'Full Stack Club',
    tag1: 'programming',
    tag2: 'development',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Front-End',
    stacks2: 'Back-End',
    stacks3: 'Development',
    accent: '#76bde9',
    bgimage: require('../assets/images/22.png'),
    image: require('../assets/logos/fs.png'),
    desc: 'Full stack development refers to the development of both front end, back end and UI-UX portions of an application. Front end development refers to the visible portion of a website or application that directly interacts with the user. Back end development is the term for server side of development that mostly focuses on functionality. It is in charge of overseeing internal operations and the database.',
    cname: 'Vinayak Singh',
    vname: 'Aayush Chamoli',
    chair: 'https://i.postimg.cc/1VrKVMH7/fs.jpg',
    vc: 'https://i.postimg.cc/k2x4dZTb/fsv.jpg',
    vis: "Empowering student's lives through impactful education that makes a difference.",
    wp: 'none',
    insta: 'https://www.instagram.com/fullstackbu/',
    web: 'none',
    lk: 'none',
    pic: 'yes',
    img1: require('../assets/events/fs2.jpg'),
    img2: require('../assets/events/fs1.jpg'),
    img3: require('../assets/events/fs3.jpg')},
  {
    id: 14,
    name: 'IEEE WIE',
    tag1: 'engineering',
    tag2: 'inclusivity',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Diversity',
    stacks2: 'Inclusivity',
    stacks3: 'Community',
    accent: '#75308b',
    bgimage: require('../assets/images/10.png'),
    image: require('../assets/logos/wie.png'),
    desc: 'IEEE Women in Engineering (WIE) empowers women in technology. Be part of a supportive community focused on gender diversity and inclusivity in technology.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 15,
    name: 'Geeks for Geeks BU',
    tag1: 'technology',
    tag2: 'programming',
    tag3: 'challenges',
    tag4: 'all',
    stacks1: 'Problem Solving',
    stacks2: 'Projects',
    stacks3: 'Challenges',
    accent: '#348c3f',
    bgimage: require('../assets/images/11.png'),
    image: require('../assets/logos/gfg.png'),
    cname: 'Neze Papreja',
    vname: 'Anushka Sharma',
    chair: 'https://i.postimg.cc/nC5tXzQb/gfg.jpg',
    vc: 'https://i.postimg.cc/yg7MM329/gfgv.jpg',
    desc: "GeeksforGeeks, A tech chapter, is a dynamic and interactive student organization aimed at fostering a community of passionate learners and enthusiasts in the field of computer science and programming. The club provides a platform for members to enhance their technical skills, collaborate on projects, participate in coding competitions, and engage in knowledge-sharing activities" ,
    vis: "  “Learn, Practice, and Excel”- GeeksforGeeks envisions a world where every programmer access top-tier learning resources, excels in tech careers, and impacts the industry. We offer diverse courses beyond programming, fostering a global community of learners. Join us to unleash your potential, stay ahead in tech, and make a mark in this dynamic landscape.",
    wp: 'none',
    insta: 'https://www.instagram.com/geeksforgeeks_bu/',
    web: 'none',
    lk: 'https://www.linkedin.com/company/gfg-bu/?originalSubdomain=in',
    pic: 'yes',
    img1: require('../assets/events/gfg3.jpg'),
    img2: require('../assets/events/gfg1.jpg'),
    img3: require('../assets/events/gfg2.jpg')}, 
  {
    id: 16,
    name: 'Technotix',
    tag1: 'gadgets',
    tag2: 'discussion',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Discussion',
    stacks2: 'technology Trends',
    stacks3: 'Research',
    accent: '#19eeb2',
    bgimage: require('../assets/images/12.png'),
    image: require('../assets/logos/technotics.png'),
    desc: 'technotix is the club for technology enthusiasts. Stay updated on the latest technology trends, gadgets, and breakthroughs. Engage in technology discussions and hands-on projects.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 17,
    name: 'Indian Blockchain Fraternity',
    tag1: 'blockchain',
    tag2: 'cryptocurrency',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Smart Contracts',
    stacks2: 'Cryptocurrency',
    stacks3: 'Research',
    accent: '#012251',
    bgimage: require('../assets/images/13.png'),
    image: require('../assets/logos/ibf.png'),
    desc: 'Join the Indian Blockchain Fraternity and explore the disruptive potential of blockchain technology. Dive into the world of cryptocurrencies, smart contracts, and decentralized applications.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 18,
    name: 'Solace Studio (Gaming)',
    tag1: 'gaming',
    tag2: 'programming',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Gaming',
    stacks2: 'Esports',
    stacks3: 'Game Design',
    accent: '#b873dd',
    bgimage: require('../assets/images/14.png'),
    image: require('../assets/logos/solace.png'),
    desc: 'Solace Studio is the place for gaming enthusiasts. From game design and development to esports, join us to explore the world of gaming and interactive media.',
    vis: 'empty',
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 19,
    name: 'Ciphers (Cyber Sec)',
    tag1: 'engineering',
    tag2: 'programming',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Ethical Hacking',
    stacks2: 'Security',
    stacks3: 'Cyber',
    accent: '#7ca894',
    bgimage: require('../assets/images/15.png'),
    image: require('../assets/logos/cipher.png'),
    wp: 'none',
    insta: 'none',
    web: 'none',
    lk: 'none',
    desc: 'Ciphers is your ticket to the world of cybersecurity and ethical hacking. Learn how to protect digital assets and information while discovering vulnerabilities in a controlled environment.',
    vis: 'empty',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
  {
    id: 20,
    name: 'Robotic Process Automation (RPA)',
    tag1: 'engineering',
    tag2: 'robots',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Automate',
    stacks2: 'Innovate',
    stacks3: 'Collaborate',
    accent: '#5271ff',
    bgimage: require('../assets/images/19.png'),
    image: require('../assets/logos/RPA.png'),
    cname: 'Anshuman Pandey',
    vname: 'Krishna Singh',
    chair: 'https://i.postimg.cc/RNWkxBpP/rpa.jpg',
    vc: 'https://i.postimg.cc/bdC75JgD/rpav.jpg',
    desc: "At its foundation, Robotic Process Automation (RPA) is a technological marvel that uses automation to optimize commercial processes. It's like if you had a staff of tireless virtual assistants tackling repetitive jobs, freeing up human talent for more strategic pursuits. We hope to demystify its complexities, provide members with hands-on experience, and build an environment conducive to innovation. We'll decipher bot language, untangle the strands of process automation, and reinvent operational efficiency together.",
    vis: "Consider a future in which our club serves as an innovation hub, bringing together brains interested in Robotics Process Automation. We're not just imagining efficiency; we're designing a world in which chores are seamlessly mechanized, unleashing human creativity and strategic thinking. Join us in designing a future in which robots collaborate with us, altering how we live and work.",
    wp: 'none',
    insta: 'https://instagram.com/bu.rpa?igshid=MjEwN2IyYWYwYw==',
    web: 'none',
    lk: 'none',
    pic: 'no',
    img1: require('../assets/events/soon.png'),
    img2: require('../assets/events/soon.png'),
    img3: require('../assets/events/soon.png')},
    
    {
    id: 21,
    name: 'Data Science Society',
    tag1: 'visualization',
    tag2: 'data',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'Dynamic',
    stacks2: 'Innovative',
    stacks3: 'Collaborative',
    accent: '#5271ff',
    bgimage: require('../assets/images/19.png'),
    image: require('../assets/logos/ds.png'),
    cname: 'Aayush Tripathi',
    vname: 'Anoushka Kaul',
    chair: 'https://i.postimg.cc/jwvptdr1/ds.jpg',
    vc: 'https://i.postimg.cc/sBPFH4Hs/dsv.jpg',
    desc: "Whether you're a seasoned data enthusiast or just starting your journey in the world of data, our club is the perfect place to explore, learn, and collaborate on all things related to data science. We at DSS provide a Platform for machine learning and Data analysis enthusiasts to come to learn, collaborate and apply their skills into real-world projects.. We also organize regular workshops and tutorials which offer a supportive environment to explore and develop skills.",
    vis: "Our Vision is:\n\n1.Empowering Data-  Driven Innovation\n\n2.Building a Collaborative Network\n\n3.Creating a Supportive Learning Environment",
    wp: 'none',
    insta: 'https://instagram.com/dss_bu?igshid=MzRlODBiNWFlZA==',
    web: 'https://twitter.com/DSS_BU?s=20',
    lk: 'https://www.linkedin.com/in/data-science-640763289/',
    pic: 'yes',
    img1: require('../assets/events/ds1.jpeg'),
    img2: require('../assets/events/ds2.jpeg'),
    img3: require('../assets/events/ds3.jpeg')},
  {
    id: 22,
    name: 'AltReality',
    tag1: 'ar',
    tag2: 'gaming',
    tag3: 'technology',
    tag4: 'all',
    stacks1: 'AR',
    stacks2: 'VR',
    stacks3: 'MR',
    accent: '#d1435b',
    bgimage: require('../assets/images/27.png'),
    image: require('../assets/logos/alt.jpg'),
    cname: 'Shrey Khetan',
    vname: 'Sarvasv Trivedi',
    chair: 'https://i.postimg.cc/TLGxT45K/alt.jpg',
    vc: 'https://i.postimg.cc/K4GbVCyV/altv.jpg',
    desc: "Your doorway to Augmented Reality (AR) and Virtual Reality (VR) wonders! We're a community passionate about shaping the future with AR and VR technology. Join us in crafting immersive experiences and pushing boundaries. Let's redefine reality together!" ,
    vis: "We want to create an environment of innovation ,where members have the opportunity to explore, learn, create and tech using the latest AR and VR technology. We aim to inspire and empower our members to develop innovative and impactful projects that will shape the future of this industry. Our vision is to build a community of talented individuals who share the passion for AR and VR, and who will continue to push the boundaries of what is possible with this technology.",
    wp: 'https://chat.whatsapp.com/BwqflspYQDCHZOHi79Usd1',
    insta: 'https://instagram.com/altreality_bu?igshid=YmMyMTA2M2Y=',
    web: 'https://linktr.ee/altrealitybu',
    lk: 'none',
    pic: 'yes',
    img1: require('../assets/events/alt1.jpg'),
    img2: require('../assets/events/alt2.jpg'),
    img3: require('../assets/events/alt3.jpg')},
    
]