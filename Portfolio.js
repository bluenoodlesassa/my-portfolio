import React, { useState } from "react";

const skills = [
  {
    name: "Low Voice",
    level: "Expert",
    status: "Pending",
    details: "I provide deep narration and voice acting for various projects, including audiobooks and documentaries. My voice adds gravitas and professionalism to your content, ensuring that your message resonates with your audience.",
  },
  {
    name: "Video Ads",
    level: "Intermediate",
    details: "Engaging video advertisements that capture attention and drive conversions. I create scripts and visuals that effectively communicate the core message, optimized for different platforms to maximize reach.",
  },
  {
    name: "Proposal Writing",
    level: "Intermediate",
    details: "Crafting compelling proposals that effectively communicate value to stakeholders. I focus on clarity and persuasive language, ensuring that every proposal highlights key benefits and outcomes.",
  },
  {
    name: "Script Writing",
    level: "Expert",
    status: "Pending",
    details: "Writing scripts for various media formats, including videos, podcasts, and presentations. I ensure that the scripts are engaging, well-structured, and tailored to the target audience, making every word count.",
  },
  {
    name: "Video Ad Campaigns",
    level: "Intermediate",
    details: "Managing and optimizing video ad campaigns across platforms. I analyze performance metrics and make data-driven decisions to enhance ad effectiveness and reach your target market.",
  },
  {
    name: "YouTube Video",
    level: "Expert",
    details: "Producing high-quality YouTube videos from concept to final cut. This includes scripting, filming, editing, and optimizing videos for SEO to increase visibility and engagement.",
  },
  {
    name: "Voice Narration",
    level: "Expert",
    details: "Providing professional voice narration for educational materials, e-learning courses, and podcasts. I adapt my voice style to suit different content types, ensuring clarity and engagement.",
  },
  {
    name: "Voice Editing",
    level: "Expert",
    details: "Editing and enhancing voice recordings to ensure clarity and professionalism. I remove background noise, adjust levels, and apply effects to create polished audio that stands out.",
  },
  {
    name: "Google Voice",
    level: "Intermediate",
    details: "Setting up and managing Google Voice accounts for streamlined communication. I assist in configuring settings, features, and integrations to optimize your communication strategy.",
  },
  {
    name: "Voice Over",
    level: "Expert",
    details: "Delivering professional voice-over services for commercials, presentations, and more. I focus on tone, pacing, and emotion to bring your scripts to life.",
  },
];

const SkillCard = ({ name, level, status, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 m-2 border border-gray-600 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-300">Level: {level}</p>
      {status && <p className="text-red-400">Status: {status}</p>}
      <button 
        className="mt-2 text-blue-400 hover:underline" 
        onClick={toggleDropdown}
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-200">{details}</p>
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">My Proficient Fields</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <div className="mt-10 bg-gray-800 shadow-md rounded-lg p-6 border border-gray-600 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact Me</h2>
        <p className="text-gray-300">Feel free to reach out to me via:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            <strong>Discord:</strong> <span className="text-blue-400">bluenoodles___</span>
          </li>
          <li>
            <strong>Email:</strong> <span className="text-blue-400">Ztansley087@gmail.com</span>
          </li>
        </ul>
        <p className="mt-4 text-gray-300">
          You can view my portfolio at:{" "}
          <a href="https://your-portfolio-link.com" className="text-blue-400 hover:underline">
            your-portfolio-link.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
