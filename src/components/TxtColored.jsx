import { useParams } from "react-router";


const TxtColored = (props) => {
    const { word,backgroundColor,color } = useParams();
    return (
        <h1 style={{backgroundColor:backgroundColor,color:color}}>The word is {word}</h1>
        );
    }
    export default TxtColored;