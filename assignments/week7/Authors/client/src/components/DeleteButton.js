import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const DeleteButton = (props) => {
    const {author, callBack} = props

    const deleteAuthor = (e) => {
        axios.delete("http://localhost:8000/api/authors/"+author._id)
            .then((res)=>{
                callBack();
            })
            .catch((err)=>{
                console.log("Error in DeleteButton----", err)
            })
    }

    return(
        <Button startIcon={<DeleteIcon/>} onClick={deleteAuthor}>Delete</Button>
    )

}

export default DeleteButton;