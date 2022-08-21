import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import Navbar from "./Navbar";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAdd from "@mui/icons-material/PersonAdd";

const EditForm = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState({})
    const [loaded, setLoaded] = useState(false);
    const [gotoPage, setGotoPage] = useState("Home");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
            .then((res)=>{
                setAuthor(res.data)
                console.log(author)
                setLoaded(true)
            })
            .catch((err)=>{
                console.log("Error in EditForm------", err.response.data.message)
                setErrors(err.response.data)
            })
    },[])

    const onSubmitHandler = (authorParam) => {
        axios.put("http://localhost:8000/api/authors/"+id, authorParam)
            .then((res)=>{
                navigate("/")
                console.log(res)
            })
            .catch((err)=>{
                console.log("Error in EditForm-----", err)
                setErrors(err.response.data.error)
            })

    }

    const navAddAuthor = () =>{
        navigate("/authors/create")

    }

    return(
        <div>
            {errors.message ? 
                <div>
                    <Navbar gotoPage={gotoPage} setPage={setGotoPage}/>
                    <h5 className='text-danger'>{errors.message}</h5>
                    <Button onClick={navAddAuthor} startIcon={<PersonAddIcon/>}>YES!</Button>
                </div>:null}
            {
                loaded && <AuthorForm heading="Edit Author" onSubmitProp={onSubmitHandler} errors={errors} initialName={author.name}/>
            }
        </div>
    )
}

export default EditForm;