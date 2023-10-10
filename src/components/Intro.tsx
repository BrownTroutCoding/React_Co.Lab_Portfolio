// import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa";


export default function Intro() {
    return (
        <section id="intro" className="p-6 rounded-md">
            <h1 className="text-4xl mb-4 mt-5 flex justify-center font-serif">Austin Beveridge</h1>
            <h1 className="text-2xl mb-4 mt-5 flex justify-center font-serif">Full Stack Software Developer</h1>

            <div className="mb-2 flex justify-center">
                <span>(406)223-2695</span>
            </div>
            <div className="mb-2 flex justify-center">
                <a href="mailto:Austinbev.dev@gmail.com" className="underline">Austinbev.dev@gmail.com</a>
            </div>
            <div className="mb-2 flex justify-center">
                <a href="https://www.linkedin.com/in/austin-beveridge-2ab33515b/" target="_blank" className="ml-2"><FaLinkedin size={24} color="5FBEFF"/></a>
                <a href="https://github.com/BrownTroutCoding" target="_blank" className="ml-2"><FaGithubSquare size={24} color="FFCC35"/></a>
            </div>
            <div className="flex justify-center mt-5">
                <Button 
                    component={HashLink} 
                    to="projects" 
                    variant="contained" 
                    style={{ 
                        backgroundColor: 'black', 
                        color: 'white', 
                        borderRadius: 0,
                        fontWeight: '300',
                        textTransform: 'none'
                    }}   
                    className="hover:bg-theme-dark-blue duration-200 px-10 py-3">
                    Projects
                    {<FaArrowRight style={{ marginLeft: '9px' }} />}
                </Button> 
            </div>
        </section>
    )
}