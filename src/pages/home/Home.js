import React from 'react';
import Banner from './banner/Banner';
import Category from './category/Category';
import Navbar from './navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner/>
      <Category/>
    </div>
  );
};

export default Home;