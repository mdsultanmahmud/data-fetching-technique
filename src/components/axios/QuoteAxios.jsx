import axios from "axios";
import { useEffect, useState } from "react";

const QuoteAxios = () => {
    const [quote, setQuote] = useState(null)
    useEffect(() => {
        const getQuote = async () => {
            try {
                const res = await axios.get(`https://api.quotable.io/random`)
                setQuote(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getQuote()
    }, [])
    return (
        <div>
            <h1>Api fetching with axios fetch method!!</h1>
            {quote?.content && <h3>content: {quote?.content}</h3>}
        </div>
    );
};

export default QuoteAxios;