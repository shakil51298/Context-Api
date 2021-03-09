
import React, { useContext, useState } from 'react';
import { ContextName } from '../../App';

const Header = () => {
    const [count,setCount] = useContext(ContextName)
    const Laptop= () =>{
        setCount('Laptop')
    }
    const Mobile= () =>{
        setCount('Mobile')
    }
    const Camera= () =>{
        setCount('Camera')
    }

    return (
        <div>
            <h4>this is Header page : {count}</h4>
            <button className="btn btn-success ml-2" onClick={Laptop}>Laptop</button>
            <button className="btn btn-success ml-2" onClick={Mobile}>Mobile</button>
            <button className="btn btn-success ml-2" onClick={Camera}>Camera</button>
            
        </div>
    );
};

export default Header;