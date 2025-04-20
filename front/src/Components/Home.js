import React, { useEffect } from 'react';
import Footer from './Footer';
import '../css/Home.css'; 
import Header from './Header';
import Hero from './Hero';
import Resources from './Resources';
import CTA from './CTA';
import DailyPractice from './DailyPractice';
import RelaxationIntro from './RelaxationIntro';
import Testimonials from './Testimonials';


  function Home() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Header />
       <Hero />
       <RelaxationIntro />
      <Resources />
      <DailyPractice />
      <Testimonials />
      <CTA />
       <Footer />
    </div>
  );
}

export default Home;
