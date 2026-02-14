import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import BlobCursor from '@/components/common/BlobCursor/BlobCursor';

function App() {
  return (
    <>
      <BlobCursor fillColor="#5eead4" trailCount={4} />
      <MainLayout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
