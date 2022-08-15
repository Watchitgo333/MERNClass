import {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            title,
            price,
            description
        })

        setTitle("")
        setPrice("")
        setDescription("")

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