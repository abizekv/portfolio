import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa6";
import mockup from "./assets/project-imgs/mockup.jpg"
import yelpCamp from "./assets/project-imgs/yelpcamp.jpg"
import assemblyEndGame from "./assets/project-imgs/assembly-endgame.jpg"
import tenzies from "./assets/project-imgs/tenzies.jpg"
import randomQuotes from "./assets/project-imgs/random-quotes.jpg"
import ageCalculatorApp from "./assets/project-imgs/age-calculator-app.jpg"
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
    }
};


const projectsData = [
    {
        id: 1,
        projectName: "Tic Tac Toe",
        projectDescription: "lorem ipsum input os vs os scaling in the shipwreckage at eastern africa lorem ipsum input os vs os scaling in the shipwreckage at eastern africa",
        projectImgSrc:assemblyEndGame,
        techStacks: [
            stacks.html,
            stacks.css,
            stacks.javascript,
            stacks.react,

        ],
        sourceCodeUrl:"github.io",
        projectUrl:"project.xyz.com"
    },
    {
        id: 2,
        projectName: "Candy Crush ",
        projectDescription: "defeat the candy boss",
         projectImgSrc:yelpCamp,
        techStacks: [
            stacks.html,
            stacks.css,
            stacks.javascript,
            stacks.react,

        ]
    },
    {
        id: 3,
        projectName: "Candy Crush ",
        projectDescription: "defeat the candy boss",
         projectImgSrc:tenzies,
        techStacks: [
            stacks.html,
            stacks.css,
            stacks.javascript,
            stacks.react,

        ]
    },
    {
        id: 4,
        projectName: "Candy Crush ",
        projectDescription: "defeat the candy boss",
         projectImgSrc:randomQuotes,
        techStacks: [
            stacks.html,
            stacks.css,
            stacks.javascript,
            stacks.react,

        ]
    },
    {
        id: 5,
        projectName: "Age Calculator App",
        projectDescription: "defeat the candy boss",
         projectImgSrc:ageCalculatorApp,
        techStacks: [
            stacks.html,
            stacks.css,
            stacks.javascript,
            stacks.react,

        ]
    }
]

export default projectsData

