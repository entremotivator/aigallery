// Data for each painting
const paintings = [
  // Front Wall
  {
    wall: 'Front',
    imgSrc: 'artworks/1.jpg',
    title: 'Super AGI',
    artist: 'EntreMotivator',
    description: 'Super AGI is an advanced framework designed to create autonomous AI agents capable of performing complex tasks with minimal human intervention.',
    year: 'Developed in 2023',
    position: { x: -15, y: 2, z: -19.5 },
    rotationY: 0,
    link: 'https://example.com/superagi'
  },
  {
    wall: 'Front',
    imgSrc: 'artworks/2.jpg',
    title: 'Assistant API',
    artist: 'EntreMotivator',
    description: 'Assistant API enables seamless integration of AI assistants into various applications, providing intelligent and context-aware responses.',
    year: 'Developed in 2022',
    position: { x: -5, y: 2, z: -19.5 },
    rotationY: 0,
    link: 'https://example.com/assistantapi'
  },
  {
    wall: 'Front',
    imgSrc: 'artworks/3.jpg',
    title: 'AutoGPT',
    artist: 'EntreMotivator',
    description: 'AutoGPT is a powerful tool that automates tasks by generating and executing Python scripts based on natural language commands.',
    year: 'Developed in 2023',
    position: { x: 5, y: 2, z: -19.5 },
    rotationY: 0,
    link: 'https://example.com/autogpt'
  },
  {
    wall: 'Front',
    imgSrc: 'artworks/4.jpg',
    title: 'LangChain - LangFlow',
    artist: 'EntreMotivator',
    description: 'LangChain with LangFlow enables the development of AI-powered applications by combining language models with various data sources and processing chains.',
    year: 'Developed in 2023',
    position: { x: 15, y: 2, z: -19.5 },
    rotationY: 0,
    link: 'https://example.com/langflow'
  },

  // Back Wall
  {
    wall: 'Back',
    imgSrc: 'artworks/5.jpg',
    title: 'Open Interpreter',
    artist: 'EntreMotivator',
    description: 'Open Interpreter allows users to interact with language models in a highly customizable way, providing a flexible interface for AI communication.',
    year: 'Developed in 2023',
    position: { x: -15, y: 2, z: 19.5 },
    rotationY: Math.PI,
    link: 'https://example.com/openinterpreter'
  },
  {
    wall: 'Back',
    imgSrc: 'artworks/6.jpg',
    title: 'Mem0',
    artist: 'EntreMotivator',
    description: 'Mem0 is an AI memory system that stores and retrieves information for agents, enabling long-term learning and adaptation.',
    year: 'Developed in 2023',
    position: { x: -5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    link: 'https://example.com/mem0'
  },
  {
    wall: 'Back',
    imgSrc: 'artworks/7.jpg',
    title: 'Multi On',
    artist: 'EntreMotivator',
    description: 'Multi On is a multitasking AI that can handle multiple tasks simultaneously, optimizing efficiency and productivity.',
    year: 'Developed in 2023',
    position: { x: 5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    link: 'https://example.com/multion'
  },
  {
    wall: 'Back',
    imgSrc: 'artworks/8.jpg',
    title: 'Self Operation Computer',
    artist: 'EntreMotivator',
    description: 'The Self Operation Computer is an AI-driven system that autonomously manages computing resources and operations, ensuring optimal performance.',
    year: 'Developed in 2023',
    position: { x: 15, y: 2, z: 19.5 },
    rotationY: Math.PI,
    link: 'https://example.com/selfoperationcomputer'
  },

  // Left Wall
  {
    wall: 'Left',
    imgSrc: 'artworks/9.jpg',
    title: 'CrewAI',
    artist: 'EntreMotivator',
    description: 'CrewAI is a collaborative AI framework that allows multiple agents to work together on complex tasks, enhancing problem-solving capabilities.',
    year: 'Developed in 2023',
    position: { x: -19.5, y: 2, z: -15 },
    rotationY: Math.PI / 2,
    link: 'https://example.com/crewai'
  },
  {
    wall: 'Left',
    imgSrc: 'artworks/10.jpg',
    title: 'AutoGen',
    artist: 'EntreMotivator',
    description: 'AutoGen is an AI system that autonomously generates content, including text, images, and code, based on user inputs.',
    year: 'Developed in 2023',
    position: { x: -19.5, y: 2, z: -5 },
    rotationY: Math.PI / 2,
    link: 'https://example.com/autogen'
  },
  {
    wall: 'Left',
    imgSrc: 'artworks/11.jpg',
    title: 'ChatDev',
    artist: 'EntreMotivator',
    description: 'ChatDev is a conversational AI designed to assist in software development by providing code suggestions, debugging, and documentation.',
    year: 'Developed in 2023',
    position: { x: -19.5, y: 2, z: 5 },
    rotationY: Math.PI / 2,
    link: 'https://example.com/chatdev'
  },
  {
    wall: 'Left',
    imgSrc: 'artworks/12.jpg',
    title: 'Open Home Assistant',
    artist: 'EntreMotivator',
    description: 'Open Home Assistant is an AI-powered system for smart homes, managing everything from lighting to security with voice commands.',
    year: 'Developed in 2023',
    position: { x: -19.5, y: 2, z: 15 },
    rotationY: Math.PI / 2,
    link: 'https://example.com/openhomeassistant'
  },

  // Right Wall
  {
    wall: 'Right',
    imgSrc: 'artworks/13.jpg',
    title: 'BabyAGI',
    artist: 'EntreMotivator',
    description: 'BabyAGI is a scaled-down version of AGI, designed for specific tasks with a focus on learning and adaptation in a controlled environment.',
    year: 'Developed in 2023',
    position: { x: 19.5, y: 2, z: -15 },
    rotationY: -Math.PI / 2,
    link: 'https://example.com/babyagi'
  },
  {
    wall: 'Right',
    imgSrc: 'artworks/14.jpg',
    title: 'OpenGPTs',
    artist: 'EntreMotivator',
    description: 'OpenGPTs is a platform that allows users to deploy and customize GPT models for a wide range of applications.',
    year: 'Developed in 2023',
    position: { x: 19.5, y: 2, z: -5 },
    rotationY: -Math.PI / 2,
    link: 'https://example.com/opengpts'
  },
  {
    wall: 'Right',
    imgSrc: 'artworks/15.jpg',
    title: 'LangGraph',
    artist: 'EntreMotivator',
    description: 'LangGraph is a tool that visualizes the connections between different language models and their outputs, enabling better understanding and optimization.',
    year: 'Developed in 2023',
    position: { x: 19.5, y: 2, z: 5 },
    rotationY: -Math.PI / 2,
    link: 'https://example.com/langgraph'
  },
  {
    wall: 'Right',
    imgSrc: 'artworks/16.jpg',
    title: 'LangFlow',
    artist: 'EntreMotivator',
    description: 'LangFlow is a visual interface for creating and managing language model workflows, integrating multiple AI tools into cohesive systems.',
    year: 'Developed in 2023',
    position: { x: 19.5, y: 2, z: 15 },
    rotationY: -Math.PI / 2,
    link: 'https://example.com/langflow'
  },
];

// Generate painting data
export const paintingData = paintings.map(painting => ({
  imgSrc: painting.imgSrc,
  width: 5,
  height: 3,
  position: painting.position,
  rotationY: painting.rotationY,
  info: {
    title: painting.title,
    artist: painting.artist,
    description: painting.description,
    year: painting.year,
    link: painting.link,
  },
  cs3d: {
    // Custom attributes for CS3D framework, replace with actual CS3D properties as needed
    texture: painting.imgSrc,
    dimensions: { width: 5, height: 3 },
    position: painting.position,
    rotation: { y: painting.rotationY }
  }
}));
