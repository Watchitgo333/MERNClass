import { useParams } from "react-router-dom";



const WordColors = () => {

    const { word, wordColor, bgColor } = useParams();

    return (
        <div style={{ backgroundColor: bgColor, color: wordColor }}>
            {
                isNaN(+word) ? <h1>The word is {word}</h1> : <h1>Please enter a word not number</h1>
            }
        </div>
    )
}

export default WordColors;