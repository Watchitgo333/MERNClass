import Card from 'react-bootstrap/Card';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    return(
        <div>
            <Card className="col-4">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </Card>
        </div>
    );
}
export default PersonCard;