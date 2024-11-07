import React from 'react';

const projects = [
  {
    title: 'Hackathon Website',
    description: 'Hackathon Website using MERN stack dev.',
    category: 'Full stack dev',
    url: 'https://icfai-event.vercel.app/', // Replace with actual URL
  },
  {
    title: 'Recomanded system',
    description: 'movie Recomanded system',
    category: 'machine learning',
    url: 'https://example.com/hidden-mail', // Replace with actual URL
  },
  {
    title: 'NGO Website ',
    description: 'Complete Responsive NGO website ',
    category: 'full stack',
    url: 'https://example.com/phc-formatter', // Replace with actual URL
  },
  {
    title: 'Scanner App',
    description: 'Scanner App using python that make the QR code of picure , video, url etc.',
    category: 'python dev',
    url: 'https://example.com/blank', // Replace with actual URL
  },
  {
    title: 'Backend devploment',
    description: 'backend devploment using Django',
    category: 'python Development',
    url: 'https://example.com/xscale', // Replace with actual URL
  },
  {
    title: 'CRUD operation',
    description: 'CRUD operation using Node.js',
    category: 'Backend Development',
    url: 'https://example.com/web3-images', // Replace with actual URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-white italic">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-orange-600 mb-1">{project.category}</p>
              <p className="text-gray-700">{project.description}</p>
              <div className="mt-4 text-right text-orange-600 text-xl">
                &rarr;
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
