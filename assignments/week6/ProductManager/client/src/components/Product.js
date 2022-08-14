import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Product = (props) => {
    const {removeFromDom} = props;
    const [product, setProduct] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res=> {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/"+productId)
            .then(res=>{
                navigate('/products')
                removeFromDom(productId)
                console.log(res)
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <h5>
                Title: {product.title}
            </h5>
            {/* Object we get from the server is unkown so this checks the data before accessing it*/}
            <h5>
                Price: ${product.price && product.price.$numberDecimal ? product.price.$numberDecimal : 'Nope'}
            </h5>
            <h5>
                Description: {product.description}
            </h5>
            <Link to={`/products`}>home</Link>
            <button className='m-1' onClick={(e)=>{deleteProduct(product._id)}}>delete</button> 
        </div>
    )
}

export default Product;