import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

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

    const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId))
    }
    return (
        <div>
            {
                products.map((product, index)=>{
                    return <div key={index} className='d-flex justify-content-center'>
                                <h4 className='m-1'>
                                    <Link to={`/products/${product._id}`}>
                                        {product.title}
                                    </Link>
                                </h4>
                                <div className="d-flex m-1 align-self-center">
                                    <p className='m-1'>||</p>
                                    <p className='m-1'>
                                        <Link to={`/products/edit/${product._id}`}>
                                            edit
                                        </Link>
                                    </p>
                                    <DeleteButton product={product} callBack={()=>removeFromDom(product._id)}/>
                                </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProductList;