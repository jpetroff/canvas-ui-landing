// import { useState } from 'react'
import Contacts from './components/contacts';
import FeatureImage from './components/feature-image';
import FeaturesBlock from './components/features-block';
import Footer from './components/footer';
import Header from './components/header'
import Roadmap from './components/roadmap';
import Video from './components/video';

const App = () => {

  return (
    <div className="flex flex-col w-[1152px] mobile:w-full mobile:px-6 items-center overflow-x-hidden">
      <Header />
      <FeatureImage />
      <FeaturesBlock />
      <Video />
      <Roadmap />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
