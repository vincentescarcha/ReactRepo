import React from 'react';
import './App.css';
import Banner from '../components/banner';
import HouseList from '../components/houseList';

function App() {
  return (
    <>
      <Banner headerText="Providing house all over the world" />
      <HouseList/>
    </>
  );
}

export default App;
