import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import ProductForm from './ProductForm';

const UpdateForm = (props) => {
    
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res=>{
                setProduct(res.data)
                console.log(product)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = productParam =>{
        axios.put('http://localhost:8000/api/products/'+id, productParam)

            .then(res=>{
                console.log(res);
                navigate("/products")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
            {
                loaded && <ProductForm onSubmitProp={onSubmitHandler} initialTitle={product.title}
                initialPrice={product.price.$numberDecimal} initialDescription={product.description}/>
            }
        </div>
    )
}

export default UpdateForm;