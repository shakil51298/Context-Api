import React, { useContext } from 'react';
import { ContextName } from '../../../../App';

const CategoryDetails = (props) => {
    const {name,category} = props.products
    return (
        <div className="border border-success p-2 m-2">
            <h5>Product Name: {name} </h5>
            <p>Category: {category}</p>
        </div>
    );
};

export default CategoryDetails;