import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductForm = () => {

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
                <input type="text" onChange={(e)=>setTitle(e.target.value)} />
                <label>Price:</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} />
                <label>Description:</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ProductForm;