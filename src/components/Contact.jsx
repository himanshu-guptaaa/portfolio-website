import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const phrases = [
  "Have A Coffee",
  "Collaborate",
  "Lunch",
  "Work Together"
];

const Contact = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    const email = 'himanshugupta00072@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopySuccess('Email copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        setCopySuccess('Failed to copy email');
      });
  };

  useEffect(() => {
    // Function to rotate phrases every 3 seconds
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000); // Change phrase every 3 seconds

    return () => clearInterval(phraseInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="contact" className="relative py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto text-center">

        {/* Rotating text phrases */}
        <h2 className="text-6xl font-bold mb-8 italic fade-in">
          Let's {phrases[currentPhrase]}
        </h2>
        
        <p className="text-xl">
          You can reach me via email at <br />
          <span 
            onClick={handleCopyEmail} 
            className="underline cursor-pointer text-white">
            himanshugupta00072@gmail.com
          </span>
        </p>

        {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/himanshu-gupta-813056254/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://github.com/himanshu-guptaaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
