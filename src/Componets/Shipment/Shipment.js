import React, { createContext, useContext, useState } from 'react';
import { ContextName } from '../../App';

const decreaseContext = createContext();

const Shipment = () => {
    const [decrease, setDecrease]=useState(0)
    
    return (
        <decreaseContext.Provider value={decrease}>
            <h4>this is shipoment page {decrease}</h4>
            <button className="btn btn-success" >Decrease</button>
            <button className="btn btn-danger ml-3" >Reset</button>
        </decreaseContext.Provider>
    );
};

export default Shipment;