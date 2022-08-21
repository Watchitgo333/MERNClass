import {useNavigate} from 'react-router-dom';
import Authors from "../components/Authors";
import AuthorForm from "../components/AuthorForm";
import {useState} from 'react';
import EditForm from '../components/EditForm';
import axios from 'axios';

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
  
    const createAuthor = (authorParam) => {
      axios.post('http://localhost:8000/api/authors', authorParam) 
        .then((res)=>{
            navigate('/')
          // console.log(res)
            setAuthors([...authors, res.data])
      })
      .catch((err)=>{
          console.log("Error in AuthorForm-----------------", err)
          setErrors(err.response.data.error)
      })

  
  }

  return (
    <div>
        <AuthorForm onSubmitProp={createAuthor} heading="Add Author" errors={errors} setErrors={setErrors} initialName=""/>
    </div>
  )
}
export default Main;