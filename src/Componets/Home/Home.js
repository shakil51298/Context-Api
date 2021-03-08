import React, { useContext } from 'react';
import { ContextName } from '../../App';
import Categories from './Categories/Categories';

const Home = () => {
    const count = useContext(ContextName)//third work
    return (
        <div className="border border-primary w-75">
            <h2>this is home page {count}</h2>
            <h2>this is home page {count}</h2>{/*fourth work */}
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;