import React, { useState } from 'react';
import './App.css';
import Banner from '../components/banner';
import HouseList from '../components/houseList';
import House from '../components/house';
import IHouse from '../models/house';

function App() {
  const [selectedHouse, setSelectedHouse] = useState<IHouse>();
  return (
    <>
      <Banner headerText="Providing house all over the world" />
      {selectedHouse
        ? <House house={selectedHouse} />
        : <HouseList selectHouse={setSelectedHouse} />}
    </>
  );
}

export default App;
