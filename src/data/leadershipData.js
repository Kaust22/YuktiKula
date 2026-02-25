// src/data/leadershipData.js

// 1. Import each static image file
import hodImage from '../assets/HOD_CSDS.jpeg';
import facultyImage from '../assets/Club_Coordinator.jpeg';
import coreTeamImage from '../assets/core_team.png';

export const leadershipData = {
  hod: {
    name: "Dr. Harikesh Singh",
    role: "HOD CSE-DS",
    image: hodImage
  },
  faculty: {
    name: "Rachna Singh Sisodia",
    role: "Faculty Coordinator",
    image: facultyImage
  },
  coreTeam: {
    image: coreTeamImage,
    members: [
      { role: "Club President", name: "Param Saxena" },
      { role: "Club Vice-President", name: "Arpita Ojha" },
      { role: "Club Secretary", name: "Jigisha Baliyan" }
    ]
  }
};