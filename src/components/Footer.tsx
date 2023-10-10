import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    const siteGithubUrl = "https://github.com/BrownTroutCoding";
    const personalGithubUrl = "https://github.com/BrownTroutCoding";
    const linkedInUrl = "https://www.linkedin.com/in/austin-beveridge-2ab33515b/";

    return (
        <footer className="bg-black p-6 text-center">
            <div className="flex justify-center space-x-4">
                <a href={personalGithubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white hover:text-gray-400" />
                </a>
                <h3 className='text-white'>Github</h3>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} className="text-white hover:text-gray-400" />
                </a>
                <h3 className='text-white'>LinkedIn</h3>
                <a href={siteGithubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-white hover:text-gray-400" />
                </a>
                <h3 className='text-white'>Source Code</h3>
            </div>
        </footer>
    );
};

export default Footer;
