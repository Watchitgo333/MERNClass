import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [ getAge, setAge ] = useState( parseInt(age) )
    return(
        <div>
            <Card className="col-4">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {getAge}</p>
                <p>Hair Color: {hairColor}</p>
                <Button className="btn btn-primary"
                    onClick={ ()=> setAge( getAge + 1 ) }>
                    Birthday Button for {firstName} {lastName}
                </Button>
            </Card>
        </div>
    );
}
export default PersonCard;