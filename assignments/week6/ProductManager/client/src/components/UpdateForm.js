import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateForm = (props) => {
    
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res=>{
                setTitle(res.data.title);
                setPrice(res.data.price.$numberDecimal);
                setDescription(res.data.description);
                // console.log(res.data.price)
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                navigate("/products")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Edit Product</h1>
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

export default UpdateForm;