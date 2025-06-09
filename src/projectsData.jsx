import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaNodeJs
} from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiEjs,
    SiCloudinary,
    SiMapbox,
    SiPassport,
    SiVite,
    SiMui
} from "react-icons/si";
import yelpCamp from "./assets/project-imgs/yelpcamp.jpg"
import assemblyEndGame from "./assets/project-imgs/assembly-endgame.jpg"
import tenzies from "./assets/project-imgs/tenzies.jpg"
import randomQuotes from "./assets/project-imgs/random-quotes.jpg"
import ageCalculatorApp from "./assets/project-imgs/age-calculator-app.jpg"
import museumOfCandy from "./assets/project-imgs/museum-of-candy.jpg"
import reactTodo from "./assets/project-imgs/react-todo.jpg"


const stacks = {
    html: {
        name: "HTML",
        logo: FaHtml5,
        logoColor: "#e34c26"
    },
    css: {
        name: "CSS",
        logo: FaCss3Alt,
        logoColor: "#264de4"
    },
    javascript: {
        name: "JavaScript",
        logo: FaJs,
        logoColor: "#f0db4f"
    },
    react: {
        name: "React",
        logo: FaReact,
        logoColor: "#61dafb"
    },
    bootstrap: {
        name: "Bootstrap",
        logo: FaBootstrap,
        logoColor: "#7952b3"
    },
    nodeJs: {
        name: "Node.js",
        logo: FaNodeJs,
        logoColor: "#3c873a"
    },
    expressJs: {
        name: "Express.js",
        logo: SiExpress,
        logoColor: "#000000"
    },
    mongoDB: {
        name: "MongoDB",
        logo: SiMongodb,
        logoColor: "#47a248"
    },
    mongoose: {
        name: "Mongoose",
        logo: SiMongoose,
        logoColor: "#800000"
    },
    ejs: {
        name: "EJS",
        logo: SiEjs,
        logoColor: "#a91e50"
    },
    cloudinary: {
        name: "Cloudinary",
        logo: SiCloudinary,
        logoColor: "#3448c5"
    },
    mapBox: {
        name: "Mapbox",
        logo: SiMapbox,
        logoColor: "#3bb2d0"
    },
    passportJs: {
        name: "Passport.js",
        logo: SiPassport,
        logoColor: "#34e27a"
    },
    vite: {
        name: "Vite",
        logo: SiVite,
        logoColor: "#646CFF"
    },
    materialUi: {
        name: "Material UI",
        logo: SiMui,
        logoColor: "#007FFF"
    }
};

const projectsData = [
    {
        id: 1,
        projectName: "Yelp Camp",
        projectDescription: "YelpCamp is a full-stack web application for sharing and reviewing campgrounds. Users can register, create, edit, and delete campgrounds, upload images, leave reviews, and explore locations on an interactive map.",
        projectImgSrc: yelpCamp,
        techStacks: [
            stacks.nodeJs,
            stacks.expressJs,
            stacks.mongoDB,
            stacks.mongoose,
            stacks.ejs,
            stacks.bootstrap,
            stacks.cloudinary,
            stacks.mapBox,
            stacks.passportJs
        ],
        sourceCodeUrl: "https://github.com/abizekv/Yelp-Camp",
        projectUrl: "yelp-camp-n3k4.onrender.com/"
    },
    {
        id: 2,
        projectName: "Assembly End Game",
        projectDescription: "Assembly: Endgame is a word-guessing game inspired by Hangman, but with a programming twist! Guess the mystery word in under 8 attempts to keep the programming world safe from Assembly. Each wrong guess eliminates a programming language—can you save them all?",
        projectImgSrc: assemblyEndGame,
        techStacks: [
            stacks.react,
            stacks.vite,
            stacks.javascript,
            stacks.css
        ],
        sourceCodeUrl: "https://github.com/abizekv/assembly-endgame",
        projectUrl: "https://abizekv.github.io/assembly-endgame/"
    },
    {
        id: 3,
        projectName: "Tenzies",
        projectDescription: "Tenzies is a fast-paced dice game built with React. The goal is to roll all dice to the same number. Click on dice to hold their value and roll the rest until all dice match. It's a fun way to practice state management and interactive UI design in React!",
        projectImgSrc: tenzies,
        techStacks: [
            stacks.react,
            stacks.vite,
            stacks.javascript,
            stacks.css
        ],
        sourceCodeUrl: "https://github.com/abizekv/tenzies",
        projectUrl: "https://abizekv.github.io/tenzies/"
    },
    {
        id: 4,
        projectName: "Random Quotes Generator",
        projectDescription: "The Random Quote Generator is a web application that fetches and displays a random quote each time you load the page or click the refresh button. It features dynamic color themes, social sharing options (Twitter, Tumblr), and a clean, responsive UI built with React and Material UI.",
        projectImgSrc: randomQuotes,
        techStacks: [
            stacks.react,
            stacks.vite,
            stacks.javascript,
            stacks.css,
            stacks.materialUi
        ],
        sourceCodeUrl: "https://github.com/abizekv/Random-Quotes",
        projectUrl: "https://abizekv.github.io/Random-Quotes/"
    },
    {
        id: 5,
        projectName: "Age Calculator App",
        projectDescription: "The Age Calculator App is a responsive web application that allows users to input their birth date and instantly calculate their exact age in years, months, and days. The app features a clean, modern UI and provides instant feedback for invalid inputs, ensuring a smooth user experience across devices.",
        projectImgSrc: ageCalculatorApp,
        techStacks: [
            stacks.react,
            stacks.vite,
            stacks.javascript,
            stacks.css,
            stacks.html
        ],
        sourceCodeUrl: "https://github.com/abizekv/age-calculator-app",
        projectUrl: "https://abizekv.github.io/age-calculator-app/"
    },
    {
        id: 6,
        projectName: "Museum of Candy",
        projectDescription: "Museum Of Candy is a vibrant, responsive landing page inspired by modern museum and candy shop aesthetics. The project showcases creative use of Bootstrap, custom CSS, and Google Fonts to deliver a visually engaging user experience. It features interactive navigation, playful imagery, and a clean, mobile-friendly layout.",
        projectImgSrc: museumOfCandy,
        techStacks: [
            stacks.html,
            stacks.css,
            stacks.bootstrap
        ],
        sourceCodeUrl: "https://github.com/abizekv/Museum-of-Candy",
        projectUrl: "https://abizekv.github.io/Museum-of-Candy/"
    },
    {
        id: 7,
        projectName: "React Todo",
        projectDescription: "A simple and modern Todo application built with React and Material UI. Easily add, complete, and remove tasks, with your todos saved in local storage for persistence.",
        projectImgSrc: reactTodo,
        techStacks: [
            stacks.react,
            stacks.materialUi,
            stacks.vite,
            stacks.css,
            stacks.javascript
        ],
        sourceCodeUrl: "https://github.com/abizekv/react-todo",
        projectUrl: "https://abizekv.github.io/react-todo/"
    }
]



export default projectsData

// Yelp Camp techStacks: nodeJs, expressJs, mongoDB, mongoose, ejs, bootstrap, cloudinary, mapBox, passportJs
// Assembly End Game techStacks: react, vite, javascript, css
// Tenzies techStacks: react, vite, javascript, css
// Random Quotes Generator techStacks: react, vite, javascript, css, materialUi
// Age Calculator App techStacks: react, vite, javascript, css, html
// Museum of Candy techStacks: html, css, bootstrap
// React Todo techStacks: react, materialUi, vite, css, javascript