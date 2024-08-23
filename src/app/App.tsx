import React, { useCallback, useState } from 'react';
import './App.css';
import Banner from '../components/banner';
import navValues from '../helpers/navValues';
import ComponentPicker from '../components/componentPicker';
import INavState from '../models/INavState'
import IHouse from '../models/IHouse';

const navigationContext = React.createContext<INavState>({current: navValues.home, navigate: () => {}});

function App() {
  const navigate = useCallback(
    (navTo: string, param?: IHouse) => setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState<INavState>({ current: navValues.home, navigate });

  return (
    <navigationContext.Provider value={nav}>
      <Banner headerText="Providing house all over the world" />
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
}

export { navigationContext };
export default App;
