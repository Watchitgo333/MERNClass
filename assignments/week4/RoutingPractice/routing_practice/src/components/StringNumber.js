import { useParams } from "react-router-dom";

const StringNumber = (props) => {
    const { strNum } = useParams();

    console.log(isNaN(+strNum))

    return(

        <div>
            <h1>

            </h1>
            {
                isNaN(+strNum) ? <h1>The word is {strNum}</h1> : <h1>The number is {strNum}</h1>
            }
        </div>

    )
}

export default StringNumber;