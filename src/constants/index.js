import project1 from "../assets/projects/image01.jpg";
import project2 from "../assets/projects/image02.jpg";
import project3 from "../assets/projects/image03.jpg";
import project4 from "../assets/projects/imageo4.jpg";


export const HERO_CONTENT = `A Software Engineering undergraduate who is passionate about coding and providing innovative ideas. Enthusiastic about continuous learning and ontributing to transformative tech project`;
                              

export const ABOUT_TEXT = `Hi there! I'm Kavindu Prabhashana Edirisinghe, an enthusiastic undergraduate from Sabaragamuwa University, Sri Lanka, specializing in Computer Science and Technology.
With a Diploma in Software Engineering under my belt, I'm passionately delving into full stack development, embracing the dynamic challenges and innovative solutions the software industry offers. My journey is driven by a love for DevOps and the continuous pursuit of mastering the latest technologies.
I've actively contributed to numerous projects, showcasing my skills and creativity. Beyond the screen, I thrive in extracurricular activities, and I proudly served in the Cadet Boys of Army Wing Cadets in 2015.
 My dedication has earned me multiple certifications and achievements, reflecting my commitment to excellence in the tech realm.
Let’s connect and explore the exciting world of technology together!`;

export const EXPERIENCES = [
  {
    year: "2023 - June",
    role: "DevOps Fundamentals",
    company: "Alison",
    description: ` focus on collaboration between development and operations, automation of processes, continuous integration and delivery, and monitoring. It aims to improve software quality, accelerate release cycles, and enhance scalability and reliability by fostering a culture of shared responsibility.`,
    
  },
  {
    year: "2023 - May",
    role: "Inroduction to Bash",
    company: "Microsoft Azure",
    description: `Validates foundational knowledge of Bash scripting and command-line tools. It covers essential skills for automating tasks, managing files, and system administration in Linux environments, prepare learners for practical applications and enhancing their proficiency in using Bash in cloud setting.`,
    
  },
  {
    year: "2023 - May",
    role: "Introduction to Azure Cloud Shell",
    company: "Microsoft Azure",
    description: `Validates foundational skills in using Azure Cloud Shell, a browser-based command-line tool for managing Azure resources. It covers basic commands, scripting, and resource management, equipping learners with essential cloud administration and automation capabilities within the Azure environment.`,
    
  },
  {
    year: "2023 - May",
    role: "Describe Cloud Computing",
    company: "Microsoft Azure",
    description: `Provides foundational knowledge and practical skills in cloud technologies, including infrastructure, platforms, and software services. It covers essential concepts such as cloud deployment models, scalability, security, and cost management, preparing individuals for roles in cloud administration, architecture, and support across various industries.`,
    
  },
  {
    year: "2023 May",
    role: "Connecting to a MongoDB Database",
    company: "MongoDB University",
    description: `Connecting to a MongoDB database involves using a MongoDB client or driver (such as MongoDB's native driver for Node.js) to establish a connection to the database server. This typically requires specifying the database URI, and possibly authentication credentials, to securely access and interact with the database.`,
    
  },
  {
    year: "2023 May",
    role: "MongoDB and the Documental Model",
    company: "MongoDB University",
    description: `MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Its document model allows for dynamic schemas, enabling easy data representation and complex queries. This structure supports rapid development and scalability, making it ideal for applications requiring high performance and diverse data types.`,
    
  },
  {
    year: "2023 May",
    role: "Working in Teams",
    company: "Slasscom Academy",
    description: `Demonstrates essential teamwork skills, including effective communication, collaboration, and conflict resolution. This certification provides foundational knowledge for contributing productively in team settings, emphasizing the importance of mutual respect, shared goals.`,
    
  },
  {
    year: "2023 May",
    role: "Communication Skills",
    company: "Slasscom Academy",
    description: `Equips individuals with essential communication techniques, including active listening, clear articulation, and effective interpersonal skills. This foundational training enhances personal and professional interactions, fostering better understanding, collaboration.`,
    
  },
];






export const PROJECTS = [
  {
    title: "UserHub | User managment web application",
    image: project1,
    description:
      "Effortless user management allows for easy input of ID and Name. Smooth data handling via Axios HTTP client requests. Secure storage ensured in a MongoDB cluster. Seamless communication facilitated through a REST API. Continuous integration and deployment managed with GitHub Actions. Deployment on a reliable AWS EC2 instance ensures stability and scalability.A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React Js", "Material UI", "CSS", "Node.js", "Express Js", "Mongo DB"],
    tools: ["Postman", "Figma", "Nginx", "PM2", "Git Hub Action", "AWS"],
  },
  {
    title: "VoltView | Elecricity bill calaculate web application",
    image: project2,
    description:
      "VoltView offers comprehensive user management, secure storage of user details in MongoDB. It calculates electricity bills based on meter readings, ensuring clarity in payment amounts. Users can effortlessly check unit prices via the unit tab. Integration with Axios enables smooth data handling. Administrators have full visibility and control over user information. Deployed on AWS EC2, managed with GitHub Actions, VoltView stays updated seamlessly.",
      technologies: ["React Js", "Bootstrap", "CSS", "Node.js", "Express Js", "Mongo DB"],
      tools: ["Postman", "Figma", "Nginx", "PM2", "Git Hub Action", "AWS"],
  },
  {
    title: "Wild Wonder | Wild life web application",
    image: project3,
    description:
      "web application designed to streamline the operations of the wildlife department at the Yala National Park. This application is crafted with precision using HTML and CSS for the front end, PHP for the back end, and SQL for data management. Figma for superior UI/UX design.",
    technologies: ["HTML", "CSS", "Php", "My SQL"],
    tools: ["Figma", "Git Hub"],
  },
  {
    title: "Foodi Flow | Resturant Managment desktop application",
    image: project4,
    description:
      "A desktop application for restaurant management, leveraging Python and SQLite. Users register securely, explore menus, and place orders effortlessly. Streamlined navigation and integrated payment ensure a smooth dining experience for customers and restaurant owners alike.",
    technologies: ["Python", "SQLite"],
    tools: ["Git Hub"],
  },
];

export const CONTACT = {
  address: "Matara , Sri Lanka",
  phoneNo: "+9476 162 1577",
  email: "kavinduprabhashana2000@gmail.com",
  linkdein: "https://www.linkedin.com/in/kavindu-prabhashana-edirisinghe-83852123a/",
  github: "https://github.com/kavinduEdiri",
  stackOverFlow: "kavinduprabhashana2000@gmail.com",
};
