import {v4 as uuidv4 } from "uuid"

export const projects = [
    {
        id: uuidv4(),
        title: "How's the weather?",
        desc: "A responsive React app that fetches data from the open weather API. It shows general data over 3 cities, then the 7 days forecast for each city, and then some more detailes over each day.",
        github: "https://github.com/CarmenMihaela/react-weather-app",
        live: "https://carmenmihaela.com/weatherapp/",
        image: "https://images.unsplash.com/photo-1562058743-952cd3619264?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },

    {
        id: uuidv4(),
        title: "Your to do list",
        desc: "Made leveraging the useful hooks of React, this app gives you the possibility to jot your todos on desktop or mobile. And hold on to them for a while, by keeping them in local storage.",
        github: "https://github.com/CarmenMihaela/todo-app",
        live: "https://carmenmihaela.com/todoapp/",
        image: "https://images.unsplash.com/photo-1585173531824-1ac539a2ed70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=459&q=80"
    },

    {
        id: uuidv4(),
        title: "Check your math",
        desc: "A JavaScript game that gives you math to do. You can play it on your mobile device too. ",
        github: "https://github.com/CarmenMihaela/Quiz",
        live: "https://carmenmihaela.com/quiz/",
        image: "https://cdn.pixabay.com/photo/2020/09/23/03/54/background-5594879_960_720.jpg"
    },

    {
        id: uuidv4(),
        title: "Offers log",
        desc: "An interface made with Python's tkinter and some libraries (matplotlib and numpy), and sqlite3. It has 3 tabs, and the entries are stored in a database that is updated with each entry.",
        github: "https://github.com/CarmenMihaela/Offers-Log-GUI",
        live: "https://replit.com/@CarmenMihaela/Offers-Log-GUI-3-tabs#main.py",
        image: "https://cdn.pixabay.com/photo/2020/07/31/05/44/server-5451985_960_720.jpg"
    },

    {
        id: uuidv4(),
        title: "Stop the time",
        desc: "A neat stopwatch build in JavaScript and using Sass, that is also responsive.",
        github: "https://github.com/CarmenMihaela/TechGrounds-JavaScript/tree/main/stopwatch",
        live: "https://carmenmihaela.com/stopwatch/stopwatch.html",
        image: "https://cdn.pixabay.com/photo/2019/04/10/08/38/clock-4116436_960_720.jpg"
    },

    {
        id: uuidv4(),
        title: "The beautiful Netherlands",
        desc: "A JavaScript carrousel displaying just how beautiful nature can be.",
        github: "https://github.com/CarmenMihaela/TechGrounds-JavaScript/tree/main/carrousel",
        live: "https://carmenmihaela.com/carrousel/index.html",
        image: "https://cdn.pixabay.com/photo/2017/12/12/21/49/sun-3015546_960_720.jpg"
    },

    {
        id: uuidv4(),
        title: "Vorba dulce",
        desc: "Guess the word based on a picture shown. This game is used by the Romanian weekend school in Groningen. On mobile, it opens best with Chrome. Made with vanilla JavaScript and responsive.",
        github: "https://github.com/CarmenMihaela/Vorba-dulce-game",
        live: "https://carmenmihaela.com/vorbadulce/index_en.html",
        image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },

    {
        id: uuidv4(),
        title: "Transculturalia",
        desc: "The site for the Romanian weekend school in Groningen, made with Wordpress and love.",
        github: "/",
        live: "https://transculturalia.com/",
        image: "https://images.unsplash.com/photo-1472997239248-a99b26e937e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80"
    }
]