import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    const backendSiteGithubUrl = "https://github.com/BrownTroutCoding/Flask_Co.Lab_Portfolio.git";
    const frontendSiteGithubUrl = "https://github.com/BrownTroutCoding/React_Co.Lab_Portfolio.git";
    const personalGithubUrl = "https://github.com/BrownTroutCoding";
    const linkedInUrl = "https://www.linkedin.com/in/austin-beveridge-2ab33515b/";

    return (
        <footer className="bg-black p-6 text-center">
            <div className="flex justify-center space-x-20">
                <a href={personalGithubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white hover:text-gray-400" />
                    <h3 className='text-white'>Github</h3>
                </a>
                
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} className="text-white hover:text-gray-400" />
                    <h3 className='text-white'>LinkedIn</h3>
                </a>
                
                <a href={frontendSiteGithubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white hover:text-gray-400" />
                    <h3 className='text-white'>Frontend Source</h3>
                </a>
                
                <a href={backendSiteGithubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white hover:text-gray-400" />
                    <h3 className='text-white'>Backend Source</h3>
                </a>
                
            </div>
        </footer>
    );
};

export default Footer;
