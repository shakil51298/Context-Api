import React, { useContext } from 'react';
import { ContextName } from '../../App';

const Shipment = () => {
    const name = useContext(ContextName)
    return (
        <div>
            <h4>this is shipoment page {name}</h4>
        </div>
    );
};

export default Shipment;