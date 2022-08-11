import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                products.map((product, index)=>{
                    return <h4 key={index}>{product.title}</h4>
                })
            }
        </div>
    )
}

export default ProductList;