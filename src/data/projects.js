import {v4 as uuidv4 } from "uuid"

export const projects = [
    {
        id: uuidv4(),
        title: "How's the weather?",
        desc: "A responsive React app that fetches data from the open weather API. It shows general data over 3 cities, then the 7 days forecast for each city, and then some more detailes over each day.",
        github: "https://github.com/CarmenMihaela/react-weather-app",
        live: "https://carmenmihaela.com/weatherapp/",
        image: "./images/weatherapp.JPG"
    },

    {
        id: uuidv4(),
        title: "Your to do list",
        desc: "Made leveraging the useful hooks of React, this app gives you the possibility to jot your todos on desktop or mobile. And hold on to them for a while, by keeping them in local storage.",
        github: "https://github.com/CarmenMihaela/todo-app",
        live: "https://carmenmihaela.com/todoapp/",
        image: "./images/todoapp.JPG"
    },

    {
        id: uuidv4(),
        title: "Check your math",
        desc: "A JavaScript game that gives you math to do. You can play it on your mobile device too. ",
        github: "https://github.com/CarmenMihaela/react-weather-app",
        live: "https://github.com/CarmenMihaela/Quiz",
        image: "./images/quiz.JPG"
    },

    {
        id: uuidv4(),
        title: "Offers log",
        desc: "An interface made with Python's tkinter and some libraries (matplotlib and numpy), and sqlite3 database. It has 3 tabs, and the entries are stored in a database that is updated with each entry.",
        github: "https://github.com/CarmenMihaela/Offers-Log-GUI",
        live: "https://replit.com/@CarmenMihaela/Offers-Log-GUI-3-tabs#main.py",
        image: "./images/offerslog.JPG"
    },

    {
        id: uuidv4(),
        title: "Stop the time",
        desc: "A neat stopwatch build in JavaScript and using Sass, that is also responsive.",
        github: "https://github.com/CarmenMihaela/TechGrounds-JavaScript/tree/main/stopwatch",
        live: "https://carmenmihaela.com/stopwatch/stopwatch.html",
        image: "./images/stopwatch.JPG"
    },

    {
        id: uuidv4(),
        title: "The beautiful Netherlands",
        desc: "A JavaScript carrousel displaying just how beautiful nature can be.",
        github: "https://github.com/CarmenMihaela/TechGrounds-JavaScript/tree/main/carrousel",
        live: "https://carmenmihaela.com/carrousel/index.html",
        image: "./images/carrousel.JPG"
    },

    {
        id: uuidv4(),
        title: "Vorba dulce",
        desc: "The game is about guessing a word based on a picture shown. It is used by the Romanian weekend school in Groningen. On mobile, it opens best with Chrome. It is made with vanilla JavaScript and it is responsive.",
        github: "https://github.com/CarmenMihaela/Vorba-dulce-game",
        live: "https://carmenmihaela.com/index_en.html",
        image: "./images/vorbadulce.JPG"
    },

    {
        id: uuidv4(),
        title: "Transculturalia",
        desc: "The site for the Romanian weekend school in Groningen, made with Wordpress and love.",
        github: "/",
        live: "https://transculturalia.com/",
        image: "./images/transculturalia.JPG"
    }
]