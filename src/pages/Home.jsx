import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import BlinkingWords from '../components/Home/BlinkingWords';
import TimelineSection from '../components/Home/TimelineSection';
import YuktiKulaBoxes from '../components/Home/YuktiKulaBoxes';
import WhoWeAreSection from '../components/Home/WhoWeAreSection';
import TeamsGrid from '../components/Home/TeamsGrid';
import RecruitmentSection from '../components/Home/RecruitmentSection';
import ProfileCard from '../components/Home/ProfileCard';

const Home = () => {
  return (
    <div className="bg-transparent text-white font-poppins min-h-screen">
      <HeroSection />
      <BlinkingWords />
      <TimelineSection />
      <YuktiKulaBoxes />
      <WhoWeAreSection />
      <TeamsGrid />
      <RecruitmentSection />
      <ProfileCard />
    </div>
  );
};

export default Home;