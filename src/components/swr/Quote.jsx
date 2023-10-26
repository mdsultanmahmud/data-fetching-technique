import { useEffect, useState } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState(null)
    useEffect(() =>{
        const getQuote = async() =>{
            try{
                const res = await fetch(`https://api.quotable.io/random`)
                const data = await res.json()
                setQuote(data)
            }catch(error){
                console.log(error)
            }
        }
        getQuote()
    },[])
    return (
        <div>
            <h1>Api fetching with SWR method!!</h1>
            {quote?.content && <h3>content: {quote?.content}</h3>}
        </div>
    );
};

export default Quote;