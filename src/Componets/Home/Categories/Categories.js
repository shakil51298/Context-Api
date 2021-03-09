import React, { useContext, useEffect, useState } from 'react';
import { ContextName } from '../../../App';
import CategoryDetails from './CategoryDetails/CategoryDetails';

const AllProducts =[
    {name:'Lenovo',category:'laptop'},
    {name:'Asus',category:'laptop'},
    {name:'Hp', category:'laptop' },
    {name:'Samsung',category:'mobile'},
    {name:'Apple',category:'mobile'},
    {name:'Nokiya',category:'mobile'},
    {name:'Canon',category:'camera'},
    {name:'Sony',category:'camera'},
    {name:'Nikkon',category:'camera'}
]
const Categories = () => {
    const [Category] = useContext(ContextName);
    // console.log(Category);
    const [products,setProducts] = useState([])
    useEffect(() => {
        const SelectedPd=AllProducts.filter(pd=>pd.category === Category.toLowerCase())
        setProducts(SelectedPd);
    }, [Category])

    return (
        <div>
            {
                products.map(pd=><CategoryDetails products={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;<h5>Category</h5>