import React, { useContext } from 'react';
import { ContextName } from '../../App';


const Shipment = () => {
    const decrease = useContext(ContextName)
    return (
        <div>
            <h4>this is shipoment page {decrease}</h4>
        </div>
    );
};

export default Shipment;