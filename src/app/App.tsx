import React, { useState } from 'react';
import './App.css';
import Banner from '../components/banner';
import HouseList from '../components/houseList';
import House from '../components/house';
import IHouse from '../models/IHouse';

function App() {
  const [selectedHouse, setSelectedHouse] = useState<IHouse>();

  function setSelectedHouseWrapper(house: IHouse) {
    // if need to do some checks
    setSelectedHouse(house);
  }

  return (
    <>
      <Banner headerText="Providing house all over the world" />
      {selectedHouse
        ? <House house={selectedHouse} />
        : <HouseList selectHouse={setSelectedHouseWrapper} />}
    </>
  );
}

export default App;
