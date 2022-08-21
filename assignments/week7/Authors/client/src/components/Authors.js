import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import DeleteButton from './DeleteButton';

const Authors = () => {

    const navigate = useNavigate();
    const [authors, setAuthors] = useState([])
    const [gotoPage, setGotoPage] = useState("Add Author");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch((err)=>
            console.log("Error in Authors------", err))

    },[])

    const navEdit = (id) =>{
        navigate('/authors/edit/'+id)
    }

    const removeFromDom = (authorId)=>{
        setAuthors(authors.filter(author=>author._id!==authorId))
    }


  return (
    <div>
        <Navbar gotoPage={gotoPage} setPage={setGotoPage}/>
        <Container maxWidth="md">
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead >
                <TableRow >
                    <TableCell>Author</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        authors.map((author,index)=>{
                            return  <TableRow key={index}>
                                        <TableCell component="th" scope="row">{author.name}</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={()=>navEdit(author._id)}>Edit</Button>
                                            <DeleteButton author={author} callBack={()=>removeFromDom(author._id)}/>
                                        </TableCell>   
                                    </TableRow>
                        })
                    }
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    </div>
  );
}
export default Authors;
