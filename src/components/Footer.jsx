import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';  

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto text-center">

        <div className="mb-4">
          <a href="https://github.com/Sharath-44" className="mx-2 text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" /> 
          </a>
          <a href="https://www.linkedin.com/in/sharath-m-s-38317b220/" className="mx-2 text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
          </a>
          <a href="https://www.instagram.com/sharxth4/profilecard/?igsh=dHgxaDR2cjF1eTEz" className="mx-2 text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />  
          </a>
        </div>

        {/* Footer Links */}
        <div className="mb-4">
          <a href="https://drive.google.com/file/d/1F0EKYXK-z9z4vE_BZCW143n3MdF3hWd3/view?usp=sharing" className="mx-4 text-gray-400 hover:text-white">Resume</a>
          <a href="/projects" className="mx-4 text-gray-400 hover:text-white">Projects</a>
          <a href="/contact" className="mx-4 text-gray-400 hover:text-white">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sharath M S. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
