import React, { useContext } from 'react';
import { ContextName } from '../../../../App';

const CategoryDetails = (props) => {
    const hisName = useContext(ContextName)
    const {count}=props;
    return (
        <div>
            <h5>this is cactegory details has : {count} and his naem {hisName}</h5>
        </div>
    );
};

export default CategoryDetails;