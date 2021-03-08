
import React, { useContext, useState } from 'react';
import { ContextName } from '../../App';

const Header = () => {
    const [count,setCount] = useContext(ContextName)
    const increments =()=>{
        const total = count + 1;
        setCount(total)
    }

    return (
        <div>
            <h4>this is Header page : {count}</h4>
            <button className="btn btn-success" onClick={increments}>Increments</button>
        </div>
    );
};

export default Header;