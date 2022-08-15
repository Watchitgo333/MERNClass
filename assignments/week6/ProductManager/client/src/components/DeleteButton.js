import axios from 'axios';

const DeleteButton = (props) => {
    const {product, callBack} = props


    const deleteProduct = e => {
        axios.delete("http://localhost:8000/api/products/"+product._id)
            .then((res)=>{
                callBack();
            })
            .catch(err=>console.log(err))
    }

    return(
        <button className='m-1' onClick={deleteProduct}>delete</button>  
    )


}

export default DeleteButton;