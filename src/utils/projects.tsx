import { PortfolioProject } from "../interface";
import weatherApp from "../images/weather_app.png"
import youtubeClone from "../images/youtube_clone.png"
import dashboard from "../images/dashboard.png"
import mesto from "../images/mesto.png"
import movie from "../images/movie.png"

export const projects: PortfolioProject[] = [
    {
        name: "Weather App",
        heading: "Weather App with hourly and daily forecast",
        paragraphs: ["Project for getting temperature, max, min, humidity, real feel, sunrise, sunset, hourly, and daily forecast with fetching data from OpenWeather endpoints.",],
        tech: ["JavaScript", "React", "Tailwind", "API","luxon", "unicons", "react-toastify"],
        source: "https://github.com/harrydmc/weather_app",
        image: weatherApp,
    },
    {
        name: "Youtube Clone",
        heading: "Youtube clone design with hooks and functional components",
        paragraphs: ["Video uploading app design using React and Styled Components.", "The main purpose of this project is to learn about React hooks and theme change feature."],
        tech: ["React", "Styled-components", "React Router"],
        source: "https://github.com/harrydmc/youtube_clone",
        image: youtubeClone,
    },
    {
        name: "Dashboard App",
        heading: "React Admin Dashboard Template Design",
        paragraphs: ["This project is the design of admin dashboard application.", "It is a 3-page project which provides general data on sales, users and products with charts, tables. Additionally users can change theme which is done with Theme.Provider."],
        tech: ["React", "JavaScript", "React Router", "SCSS"],
        source: "https://github.com/harrydmc/dashboard_project",
        image: dashboard,
    },
    {
        name: "Mesto App",
        heading: "React Mesto Auth",
        paragraphs: ["Mesto is a photo gallery application with the ability to edit profile information, change avatar, upload new photos via popup. The app has a user authentication and authorization. "],
        tech: ["React", "JavaScript", "React Router", "SCSS", "API"],
        source: "https://github.com/harrydmc/dashboard_project",
        image: mesto,
    },
    {
        name: "Movie-Stream",
        heading: "One page movie stream platform website",
        paragraphs: ["This is a layout of a one-page site for a movie streaming service, made to demonstrate HTMl, CSS skills."],
        tech: ["HTML", "CSS", "JavaScript", "Slick slider"],
        source: "https://github.com/harrydmc/movies_platform",
        image: movie,
    },
]