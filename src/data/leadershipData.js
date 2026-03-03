// src/data/leadershipData.js

// 1. Import each static image file
import hodImage from '../assets/HOD_CSDS.jpeg';
import rachnaImage from '../assets/Rachna.jpeg';
import priyaImage from '../assets/Priya.jpeg';
import presidentImage from '../assets/President.png';
import vpImage from '../assets/Vice_President.png';
import secretaryImage from '../assets/Secretary.png';

export const leadershipData = {
  hod: {
    name: "Dr. Harikesh Singh",
    role: "HOD CSE-DS",
    image: hodImage
  },
  Rachna: {
    name: "Rachna Singh Sisodia",
    role: "Faculty Coordinator",
    image: rachnaImage
  },
  Priya: {
    name: "Priya Singh",
    role: "Faculty Coordinator",
    image: priyaImage
  },
  coreTeam: {
    president: {
      name: "Kunal Sati",
      role: "President",
      image: presidentImage
    },
    vicePresident: {
      name: "Ansh Kumar", 
      role: "Vice President",
      image: vpImage
    },
    secretary: {  
      name: "Shanhavi Tiwari",
      role: "Secretary",
      image: secretaryImage
    },
  }
};