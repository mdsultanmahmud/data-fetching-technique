import { useQuery } from "react-query";
import getQuote from "./getQuote";

const Quote = () => {
    const {data, isLoading, isError} = useQuery("quote", () => getQuote())
    

console.log(isError)
    if(isLoading){
        return <h1>Data is Loading...</h1>
    }
    return (
        <div>
            <h1>Api fetching with react-query method!!</h1>
            {data?.content && <h3>content: {data?.content}</h3>}
        </div>
    );
};

export default Quote;