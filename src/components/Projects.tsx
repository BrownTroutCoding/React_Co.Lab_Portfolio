import { useState } from 'react';
import { FaGithub, FaArrowLeft, FaArrowRight, FaGlobe } from "react-icons/fa";
import yeonjii from '../assets/Yeonjii.jpg'
import scoutfortrout from '../assets/scoutfortrout-static.jpg';
// import bookClub from '../assets/BookClub.jpg';
import coinGecko from '../assets/coingecko.jpg';
import spotify from '../assets/spotify.jpg';
// import carInventory from '../assets/car-inventory.jpg';
import yellowstone from '../assets/yellowstone-project.jpg';
// import topTier from '../assets/top-tier.jpg';
// import Button from '@mui/material/Button';
// import { yellow } from '@mui/material/colors';


type Project = {
    title: string;
    image: any;
    description: string,
    tech: string,
    backendUrl?: string;
    frontendUrl?: string;
    siteLink: string;
};

const Projects: Project[] = [
    {
        title: 'Yeonjii',
        image: yeonjii,
        tech: "Python, Flask, PostgreSQL, TypeScript, React, Tailwind CSS",
        description: "Yeonjii is a cover letter generator powered by the OpenAI API. It enables users to input details from their job description, resume, and personal story. Utilizing best practices informed by user feedback and insights from talent acquisition specialists, the application crafts a well-structured and effective cover letter, tailored to the user's professional profile and job aspirations.",
        backendUrl: 'https://github.com/Co-Lab-You-Belong-in-Tech/Craftly/tree/backend-branch',
        frontendUrl: 'https://github.com/Co-Lab-You-Belong-in-Tech/Craftly/tree/frontend-branch',
        siteLink: 'https://www.joincolab.io/product/Yeonjii-dcfd4',
    },
    {
        title: 'Scout for Trout',
        image: scoutfortrout,
        tech: "Python, Flask, PostgreSQL, JavaScript, React, Tailwind CSS",
        description: "A fly fishing web app where users can check river conditions, save favorite locations, and sign up/in with Google authentication. The home page offers quick information through the USGS API for checking river flow and temperatures before planning a fishing trip.",
        backendUrl: 'https://github.com/BrownTroutCoding/ScoutForTrout-Flask',
        frontendUrl: 'https://github.com/BrownTroutCoding/ScoutForTrout-React',
        siteLink: 'https://scoutfortrout.com/',
    },
    // {
    //     title: 'Book Club',
    //     image: bookClub,
    //     tech: "Python, Flask, PostgreSQL, JavaScript, React, Tailwind CSS",
    //     description: "A digital platform designed for a local book club. This web app leverages Google authentication and CRUD functionalities allowing members to seamlessly update, add, or delete books from their library.",
    //     backendUrl: 'https://github.com/BrownTroutCoding/Library',
    //     frontendUrl: 'https://github.com/BrownTroutCoding/React-App-Library',
    //     siteLink: 'https://joyful-starship-af61d0.netlify.app/#/',
    // },
    {
        title: 'Coin Gecko',
        image: coinGecko,
        tech: "JavaScript, HTML, CSS",
        description: "Delving into the rapidly evolving world of cryptocurrencies, this web app leverages CoinGecko API data to return a real-time data on various cryptocurrencies.",
        frontendUrl: 'https://github.com/BrownTroutCoding/CoinGecko-API',
        siteLink: 'https://spontaneous-dusk-a63333.netlify.app/',
    },
    {
        title: 'Jammers',
        image: spotify,
        tech: "JavaScript, HTML, CSS",
        description: "A melodious bridge to Spotify's music library, showcasing some of my favorite songs. This web app plays selected tracks in an intuitive gallery format.",
        frontendUrl: 'https://github.com/BrownTroutCoding/Spotify_App',
        siteLink: 'https://radiant-blancmange-deb71d.netlify.app/',
    },
    // {
    //     title: 'Car Inventory',
    //     image: carInventory,
    //     tech: "Python, Flask, PostgreSQL, JavaScript, React, Tailwind CSS",
    //     description: "A digital garage at the fingertips of car aficianodos. Integrated Google authentication with CRUD functionalities allow users to display their prized vehicles on an active website.",
    //     backendUrl: 'https://github.com/BrownTroutCoding/car-inventory',
    //     frontendUrl: 'https://github.com/BrownTroutCoding/car-inventory-app',
    //     siteLink: 'https://glittery-arithmetic-e60d96.netlify.app/#/',
    // },
    {
        title: 'Yellowstone',
        image: yellowstone,
        tech: "Html, CSS",
        description: "Using minimalist efficiency with Bootstrap 5, this landing page serves as an introduction to the Yellowstone National Park. It stands as a testament to my foundational skills in HTML, CSS and the versitility of Bootstrap.",
        frontendUrl: 'https://github.com/BrownTroutCoding/Park-website',
        siteLink: 'https://rainbow-sprinkles-d8e87d.netlify.app/',
    },
    // {
    //     title: 'Top Tier Boxing',
    //     image: topTier,
    //     tech: "HTML & CSS",
    //     description: "This HTML and CSS website serves as a digital front for a local boxing gym. Adorned with photos, videos, a sign-in component, and an integrated Google Reviews section, this site is an example of what I can achieve using purely HTML and CSS.",
    //     frontendUrl: 'https://github.com/BrownTroutCoding/TopTier-Boxing',
    //     siteLink: 'https://aesthetic-brigadeiros-5a25ad.netlify.app/',
    // },
    
];

export default function ProjectsComponent() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const currentProject = Projects[currentProjectIndex];

    return (
        <section id='projects' className="p-4 md:p-6 rounded-md mt-5 w-full md:w-3/4 mx-auto relative">
            <div className="text-2xl md:text-4xl mb-5 md:mb-10 flex justify-center font-serif">
                <h1>Projects</h1>
            </div>
            
            <div className="project-image-container relative overflow-hidden w-full h-64 md:h-96 border">
                <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover mb-4" />

                {/* Hover Details */}
                <div className="border absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center rounded">
                    <h1 className="text-white mb-4 text-4xl">{currentProject.title}</h1>
                    <h3 className='text-white mb-2 text-xl'>{currentProject.tech}</h3>
                    <p className='text-white mb-4 text-sx m-20 mt-5'>{currentProject.description}</p>
                    <div className="flex space-x-4 justify-start">
                        {currentProject.backendUrl && (
                            <a href={currentProject.backendUrl} target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                                <FaGithub /> Backend
                            </a>
                        )}
                        {currentProject.frontendUrl && (
                            <a href={currentProject.frontendUrl} target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                                <FaGithub /> Frontend
                            </a>
                        )}
                            <a href={currentProject.siteLink} target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                                <FaGlobe /> Live Site
                            </a>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-r-md" 
                    onClick={() => setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + Projects.length) % Projects.length)}
                >
                    <FaArrowLeft />
                </button>
                <button 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-l-md"
                    onClick={() => setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % Projects.length)}
                >
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
}