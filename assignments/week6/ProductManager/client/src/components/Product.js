import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Product = (props) => {
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
            <DeleteButton product={product} callBack={()=>navigate("/products")}/>
        </div>
    )
}

export default Product;