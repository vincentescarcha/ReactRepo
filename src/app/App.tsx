import './App.css';
import Banner from '../components/banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import House from '../components/house';
import HouseList from '../components/houseList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Banner headerText="Providing house all over the world" />
      
        <Routes>
          <Route path="/" element={<HouseList />} />
          <Route path="/House" element={<House />} />
          <Route path="*" element={(
            <h3>
              Page not found
            </h3>
          )} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
