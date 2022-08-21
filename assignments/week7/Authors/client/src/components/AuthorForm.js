import { FormLabel, Paper } from '@mui/material';
import { Typography, Input } from '@mui/material';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { useState } from 'react';
import Navbar from './Navbar';


const AuthorForm = (props) => {
    const {initialName, errors, setErrors, heading, onSubmitProp} = props;
    const [name, setName] = useState(initialName)
    const [gotoPage, setGotoPage] = useState("Home");


    const submitHandler = (e) => {
        e.preventDefault()

        onSubmitProp({
            name
        })

    }
    
    return(
        <div>
            <Navbar gotoPage={gotoPage} setPage={setGotoPage}/>
            <Container maxWidth="sm">
                <Paper elevation={3}>
                    <Typography className='m-1' variant="h5">{heading}</Typography>
                    <form onSubmit={submitHandler}>
                        <FormLabel>Name: </FormLabel>
                        <Input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                        {errors.name ? <span className='text-danger'>{errors.name.message}</span>:null}
                        <Button className='m-2' margin="normal" variant="contained" type="submit">Submit</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default AuthorForm;