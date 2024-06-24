import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/randomUser.png";
import projectGroup1 from "./assets/images/cooking-assistant.png";
import projectGroup2 from "./assets/images/dreamland.png";
import projectGroup3 from "./assets/images/chaos-animals.png";
import otherGrid from "./assets/images/grid2.png";
import countryApi2 from "./assets/images/countryImage2.png";
import countryApi1 from "./assets/images/countries1.png";
import dbimage from "./assets/images/db_challenge.png";

const ProjectCardData = [
  {
    category: "React Projects",
    imgsrc: project1,
    title: "Airbnb Project",
    Technologies: "React, CSS, Redux",
    text: "This project showcases skills in React and Router, serving as a playground to learn hooks and props. It features a component that dynamically renders a list of cards based on data, with each Card component receiving and logging data through props. The travel subpage presents cards with next and previous buttons, using useState to manage the current slide index. Redux is implemented to store state for travel-related goals. The counterSlice defines state variables and provides reducers like increment and decrement. useSelector accesses state values, while useDispatch modifies them, and selectTotalCount computes total travel goals, ensuring a seamless user experience.",
    view: "https://github.com/kamila-wilczynska/Airbnb",
  },
  {
    category: "Other Projects",
    imgsrc: project2,
    title: "Random User API",
    Technologies: "HTML, CSS, JavaScript",
    text: "This project demonstrates my ability to work with JavaScript and API integration to dynamically fetch and display user data. The core functionality involves fetching random user data from the Random User API and presenting it in a structured format on a webpage. Efficiently manipulates the DOM to display user information within a designated container (#user-container).I implemented error handling to manage and log any issues that arise during the data fetching process",
    view: "https://github.com/kamila-wilczynska/Api--Random-User",
    live: "https://test-random-users.netlify.app/",
  },
  {
    category: "Group Projects",
    imgsrc: projectGroup2,
    title: "Dreamland",
    text: "This was my first collaborative project where I worked closely with a team to develop a fully functional web application. Utilizing HTML, CSS, and JavaScript, we built the Dream Generator, enhancing our teamwork, problem-solving skills, and technical expertise in web development. This project is a testament to our ability to merge creative ideas with technical skills",
    view: "https://github.com/kamila-wilczynska/Dream-Generator",
    live: "https://technative-academy.github.io/Dream-Generator/",
  },
  {
    category: "Group Projects",
    imgsrc: projectGroup1,
    title: "AI Cooking Assistant",
    text: "This is our second official collaborative project designed to showcase our new gained knowledge. This web app uses AI to provide personalized recipes based on taste preferences. Built with React for its component-based architecture and Redux for efficient state management and API handling, this project exemplifies modern web development practices.",
    view: "https://github.com/kamila-wilczynska/Team-Wolf",
    live: "https://team-wolf.netlify.app/",
  },
  {
    category: "Group Projects",
    imgsrc: projectGroup3,
    title: "Chaos Animals",
    text: "This is a fun and engaging single-page application showcasing tailor-selected animals. Developed through live pair-programming. This project leverages React to deliver a seamless user experience. Users can search for specific animals using an input field and reveal additional animals with a show more button, displaying up to the full list. Key features include a dynamic counter, JSON data manipulation, and reusable React components.",
    view: "https://github.com/kamila-wilczynska/animal-chaos",
    live: "https://chaos-animals.netlify.app/",
  },
  {
    category: "Other Projects",
    imgsrc: otherGrid,
    title: "Learning Grid-Fotomatic",
    text: "This is a practical exercise from Codecademy, designed to enhance my skills in CSS Grid. It involves creating a visually appealing and responsive photo gallery using CSS Grid, which allows for complex layouts with minimal code. Responsive design Ensures that the photo gallery adjusts seamlessly across various screen sizes, providing a consistent user experience on both desktop and mobile devices.",
    view: "https://github.com/kamila-wilczynska/Fotomatic-Codecademy",
  },
  {
    category: "Back-end Projects",
    imgsrc: countryApi1,
    title: "Countries-API",
    Technologies: "Node.js, CSS, Express.js, Postman",
    text: "This project, Countries API, demonstrates my ability to create a RESTful API. It provides detailed information about various countries, including names, capitals, and interesting facts. Designed to be user-friendly, the API includes endpoints for fetching all countries, retrieving details by ID, and managing country data with creation, updates, and deletions. Validation ensures data integrity. It has been tested with Postman sofrware",
    view: "https://github.com/kamila-wilczynska/Countries-API",
    live: "countries-api-1-onug.onrender.com/",
  },
  {
    category: "Back-end Projects",
    imgsrc: countryApi2,
    title: "Countries-API Form",
    Technologies: "Node.js, CSS, Express.js, Postman",
    text: "This project, Countries API and Form, demonstrates my skills in creating and presenting a RESTful API. The API provides access to  information about various countries. It features endpoints for fetching all countries and adding new ones with validation to ensure data integrity. The API is user-friendly and straightforward, with a form interface for easy interaction. This project showcases my ability to develop APIs and create intuitive user interfaces.",
    view: "https://github.com/kamila-wilczynska/Countries-API-Form",
    live: "https://countries-api-form.onrender.com/",
  },
  {
    category: "Back-end Projects",
    imgsrc: dbimage,
    title: "Database challenge",
    Technologies: "Node.js, CSS, Express.js, Postman",
    text: "This project involved designing and implementing a relational database for a blog site and an e-commerce store. For the blog, I created tables for authors, blog posts, and tags, managing one-to-many and many-to-many relationships. I learned to define primary keys, foreign keys, and constraints, and wrote SQL queries to retrieve and manipulate data. For the e-commerce store, I designed tables for sellers and products, handling similar relational structures. This project enhanced my skills in database design, SQL query writing, and understanding complex data relationships and constraints.",
    view: "https://github.com/kamila-wilczynska/Countries-API-Form",
    live: "https://countries-api-form.onrender.com/",
  },
];

export default ProjectCardData;
