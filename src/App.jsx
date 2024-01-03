import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './client/components/Navbar/Navbar';
import Banner from './client/pages/Banner/Banner';
import Card from './client/components/Card/Card';
import CardComponent from './client/components/CardComponenet/CardComponet';
import { mockData } from './client/data/data';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/" element={<Card data={mockData.data} />} />
        <Route path="/card/:id" element={<CardComponent data={mockData.data} />} />
      </Routes>
    </>
  );
};

export default App;
