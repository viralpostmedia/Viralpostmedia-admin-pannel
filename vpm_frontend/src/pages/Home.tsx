import React from 'react';
import { HomeHero } from '../components/sections/HomeHero';
import { Enterprise } from '../components/sections/Enterprise';
import { Services } from '../components/sections/Services';
import { VpmFrames } from '../components/sections/VpmFrames';
import { Faq } from '../components/sections/Faq';

export const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <Enterprise />
      <Services />
      <VpmFrames variant="grid" />
      <Faq />
    </>
  );
};
