import React, { useState } from 'react';

const PaintingsGallery = () => {
  const [iframeSrc, setIframeSrc] = useState(null);

  const paintingData = [
    {
      imgSrc: 'artworks/1.jpg',
      title: 'Super AGI',
      artist: 'EntreMotivator',
      description: 'Super AGI is an advanced framework designed to create autonomous AI agents capable of performing complex tasks with minimal human intervention.',
      year: 'Developed in 2023',
      link: 'https://superagi.com/',
      position: { x: -15, y: 2, z: -19.5 },
      rotationY: 0,
    },
    {
      imgSrc: 'artworks/2.jpg',
      title: 'Assistant API',
      artist: 'EntreMotivator',
      description: 'Assistant API enables seamless integration of AI assistants into various applications, providing intelligent and context-aware responses.',
      year: 'Developed in 2022',
      link: 'https://assistantapi.com/',
      position: { x: -5, y: 2, z: -19.5 },
      rotationY: 0,
    },
    {
      imgSrc: 'artworks/3.jpg',
      title: 'AutoGPT',
      artist: 'EntreMotivator',
      description: 'AutoGPT is a powerful tool that automates tasks by generating and executing Python scripts based on natural language commands.',
      year: 'Developed in 2023',
      link: 'https://autogpt.com/',
      position: { x: 5, y: 2, z: -19.5 },
      rotationY: 0,
    },
    {
      imgSrc: 'artworks/4.jpg',
      title: 'LangChain - LangFlow',
      artist: 'EntreMotivator',
      description: 'LangChain with LangFlow enables the development of AI-powered applications by combining language models with various data sources and processing chains.',
      year: 'Developed in 2023',
      link: 'https://langflow.com/',
      position: { x: 15, y: 2, z: -19.5 },
      rotationY: 0,
    },
    {
      imgSrc: 'artworks/5.jpg',
      title: 'Open Interpreter',
      artist: 'EntreMotivator',
      description: 'Open Interpreter allows users to interact with language models in a highly customizable way, providing a flexible interface for AI communication.',
      year: 'Developed in 2023',
      link: 'https://openinterpreter.com/',
      position: { x: -15, y: 2, z: 19.5 },
      rotationY: Math.PI,
    },
    {
      imgSrc: 'artworks/6.jpg',
      title: 'Mem0',
      artist: 'EntreMotivator',
      description: 'Mem0 is an AI memory system that stores and retrieves information for agents, enabling long-term learning and adaptation.',
      year: 'Developed in 2023',
      link: 'https://mem0.com/',
      position: { x: -5, y: 2, z: 19.5 },
      rotationY: Math.PI,
    },
    {
      imgSrc: 'artworks/7.jpg',
      title: 'Multi On',
      artist: 'EntreMotivator',
      description: 'Multi On is a multitasking AI that can handle multiple tasks simultaneously, optimizing efficiency and productivity.',
      year: 'Developed in 2023',
      link: 'https://multion.com/',
      position: { x: 5, y: 2, z: 19.5 },
      rotationY: Math.PI,
    },
    {
      imgSrc: 'artworks/8.jpg',
      title: 'Self Operation Computer',
      artist: 'EntreMotivator',
      description: 'The Self Operation Computer is an AI-driven system that autonomously manages computing resources and operations, ensuring optimal performance.',
      year: 'Developed in 2023',
      link: 'https://selfoperationcomputer.com/',
      position: { x: 15, y: 2, z: 19.5 },
      rotationY: Math.PI,
    },
    {
      imgSrc: 'artworks/9.jpg',
      title: 'CrewAI',
      artist: 'EntreMotivator',
      description: 'CrewAI is a collaborative AI framework that allows multiple agents to work together on complex tasks, enhancing problem-solving capabilities.',
      year: 'Developed in 2023',
      link: 'https://crewAI.com/',
      position: { x: -19.5, y: 2, z: -15 },
      rotationY: Math.PI / 2,
    },
    {
      imgSrc: 'artworks/10.jpg',
      title: 'AutoGen',
      artist: 'EntreMotivator',
      description: 'AutoGen is an AI system that autonomously generates content, including text, images, and code, based on user inputs.',
      year: 'Developed in 2023',
      link: 'https://autogen.com/',
      position: { x: -19.5, y: 2, z: -5 },
      rotationY: Math.PI / 2,
    },
    {
      imgSrc: 'artworks/11.jpg',
      title: 'ChatDev',
      artist: 'EntreMotivator',
      description: 'ChatDev is a conversational AI designed to assist in software development by providing code suggestions, debugging, and documentation.',
      year: 'Developed in 2023',
      link: 'https://chatdev.com/',
      position: { x: -19.5, y: 2, z: 5 },
      rotationY: Math.PI / 2,
    },
    {
      imgSrc: 'artworks/12.jpg',
      title: 'Open Home Assistant',
      artist: 'EntreMotivator',
      description: 'Open Home Assistant is an AI-powered system for smart homes, managing everything from lighting to security with voice commands.',
      year: 'Developed in 2023',
      link: 'https://openhomeassistant.com/',
      position: { x: -19.5, y: 2, z: 15 },
      rotationY: Math.PI / 2,
    },
    {
      imgSrc: 'artworks/13.jpg',
      title: 'BabyAGI',
      artist: 'EntreMotivator',
      description: 'BabyAGI is a scaled-down version of AGI, designed for specific tasks with a focus on learning and adaptation in a controlled environment.',
      year: 'Developed in 2023',
      link: 'https://babyagi.com/',
      position: { x: 19.5, y: 2, z: -15 },
      rotationY: -Math.PI / 2,
    },
    {
      imgSrc: 'artworks/14.jpg',
      title: 'OpenGPTs',
      artist: 'EntreMotivator',
      description: 'OpenGPTs is a platform that allows users to deploy and customize GPT models for a wide range of applications.',
      year: 'Developed in 2023',
      link: 'https://opengpts.com/',
      position: { x: 19.5, y: 2, z: -5 },
      rotationY: -Math.PI / 2,
    },
    {
      imgSrc: 'artworks/15.jpg',
      title: 'LangGraph',
      artist: 'EntreMotivator',
      description: 'LangGraph is a tool that visualizes the connections between different language models and their outputs, enabling better understanding and optimization.',
      year: 'Developed in 2023',
      link: 'https://langgraph.com/',
      position: { x: 19.5, y: 2, z: 5 },
      rotationY: -Math.PI / 2,
    },
    {
      imgSrc: 'artworks/16.jpg',
      title: 'LangFlow',
      artist: 'EntreMotivator',
      description: 'LangFlow is a visual interface for creating and managing language model workflows, integrating multiple AI tools into cohesive systems.',
      year: 'Developed in 2023',
      link: 'https://langflow.com/',
      position: { x: 19.5, y: 2, z: 15 },
      rotationY: -Math.PI / 2,
    },
  ];

  const handleClick = (link) => {
    setIframeSrc(link);
  };

  return (
    <div>
      <div className="gallery">
        {paintingData.map((painting, index) => (
          <div key={index} className="painting" onClick={() => handleClick(painting.link)}>
            <img src={painting.imgSrc} alt={painting.title} style={{ width: `${painting.width}em`, height: `${painting.height}em` }} />
            <div className="info">
              <h3>{painting.title}</h3>
              <p>{painting.description}</p>
              <p>{painting.year}</p>
            </div>
          </div>
        ))}
      </div>

      {iframeSrc && (
        <div className="iframe-container">
          <iframe
            src={iframeSrc}
            title="Painting Details"
            width="100%"
            height="600px"
            frameBorder="0"
            allowFullScreen
          />
          <button onClick={() => setIframeSrc(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PaintingsGallery;
