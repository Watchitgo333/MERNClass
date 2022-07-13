import {useState} from 'react';
import Form from 'react-bootstrap/Form';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const createUser  = (e) => {
        e.preventDefault();

        const newUser = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : password,
            confirmpassword : confirmpassword
        };

    };

    return(
        <div className="container">
            <div className="d-flex flex-column">
                <h1>Enter your user Info:</h1>
                <Form onSubmit={ createUser }>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setFirstname(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setLastname(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setEmail(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setPassword(e.target.value) }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setConfirmpassword(e.target.value) }/>
                    </Form.Group>
                </Form>
            </div>
            <div className="d-flex flex-column">
                <h1>Your Form Data</h1>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    )
}

export default UserForm;