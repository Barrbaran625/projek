import React from 'react';
import Hero from '../component/hero';
import Menu from '../component/Menu';

const Dashboard = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Hero />
      <Menu />
    </div>
  );
};

export default Dashboard;