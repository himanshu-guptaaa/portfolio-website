import React, { useState } from 'react';


  <section id="projects" className="py-20 bg-black text-gray-800">
    <div className="container mx-auto text-center">
      <h2 className="text-6xl font-bold mb-8 text-blue-200 italic">Interest</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white border">Communication</div>
        <div className="p-4 bg-white border">Startup</div>
        <div className="p-4 bg-white border">Exploring</div>
      </div>
    </div>
  </section>

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    const email = 'himanshugupta00072@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopySuccess('Email copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 2000); // Clears the success message after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        setCopySuccess('Failed to copy email');
      });
  };

  return (
    <section id="contact" className="py-20 bg-black text-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-blue-200 italic">Contact Me</h2>
        <p className="text-xl">
          You can reach me via email
          <br /> {/* Line break added here */}
          <span 
            onClick={handleCopyEmail} 
            className="text-blue-200 underline cursor-pointer focus:outline-none">
             himanshugupta00072@gmail.com
          </span>
        </p>
        {copySuccess && <p className="text-blue-200 mt-2">{copySuccess}</p>}
      </div>
    </section>
  );
};

export default Contact;
