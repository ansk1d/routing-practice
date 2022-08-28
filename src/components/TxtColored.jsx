import { useParams } from "react-router";


const TxtColored = (props) => {
    const { word,backgroundColor,color } = useParams();
    return (
        <div>
            {
                isNaN(word)?
                <h1 style={{backgroundColor:backgroundColor,color:color}}>The Word is {word}</h1>:
                <h1 style={{backgroundColor:backgroundColor,color:color}}>The Number is {word}</h1>
            }
        </div>
    )
    }
    export default TxtColored;