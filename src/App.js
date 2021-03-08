import './App.css';
import Home from './Componets/Home/Home';
import Header from './Componets/Header/Header';
import Shipment from './Componets/Shipment/Shipment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';

export const ContextName = createContext()//first work

function App() {
  const [count,setCount] = useState(0)
  return (
    <ContextName.Provider className="App" value={[count,setCount]}>  {/*second work*/}
      <Home></Home>
      <Header></Header>
      <Shipment></Shipment>
    </ContextName.Provider>
  );
}

export default App;
