import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Element } from 'react-scroll'; // Import Element for scrolling
import Home from './componenets/Home';
import Pricing from './componenets/Pricing';
import Recommended from './componenets/Recommended';
import Service from './componenets/feature_ Service';
import CoFounder from './componenets/CoFounder';
import Calendar from './componenets/Calendar';
import Access from './componenets/Access';
import Philosophy from './componenets/Philosophy';
import Founder from './componenets/Trainer';
import Footer from './componenets/Footer';
import Navbar from './componenets/Navbar'; // Import Navbar

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection = ({ id, children }) => {
  return (
    <Element name={id}> {/* Wrap section with Element for scrolling */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            {children}
          </motion.div>
        )}
      </InView>
    </Element>
  );
};

function App() {
  return (
    <Box>
      <Navbar /> {/* Include Navbar */}

      <AnimatedSection id="home">
        <Home />
      </AnimatedSection>

      <AnimatedSection id="about">
        <Recommended />
      </AnimatedSection>

      <AnimatedSection id="services">
        <Service />
      </AnimatedSection>

      <AnimatedSection id="pricing">
        <Pricing />
      </AnimatedSection>

      <AnimatedSection id="trainer">
        <CoFounder />
      </AnimatedSection>

      <AnimatedSection id="counseling">
        <Calendar />
      </AnimatedSection>

      <AnimatedSection id="access">
        <Access />
      </AnimatedSection>

      <AnimatedSection id="philosophy">
        <Philosophy />
      </AnimatedSection>

      <AnimatedSection id="founder">
        <Founder />
      </AnimatedSection>

      <AnimatedSection id="footer">
        <Footer />
      </AnimatedSection>
    </Box>
  );
}

export default App;
