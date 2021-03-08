import React from 'react';
import CategoryDetails from './CategoryDetails/CategoryDetails';

const Categories = (props) => {
    const {count} =props;
    return (
        <div>
            <h4>Category</h4>
            <CategoryDetails count={count}></CategoryDetails>
        </div>
    );
};

export default Categories;<h5>Category</h5>