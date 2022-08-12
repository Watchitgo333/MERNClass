import {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);

            setProducts([...products, res.data]);
            setTitle("");
            setDescription("");
            setPrice("");
        })
        .catch(err=>console.log(err))

    }

    return(
        <div>
            <h1>
                Product Manager
            </h1>
            <form onSubmit={onSubmitHandler}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <label>Price:</label>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
                <label>Description:</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ProductForm;