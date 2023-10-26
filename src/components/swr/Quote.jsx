import useSWR from "swr";

const fetcher = async(...args) =>{
    const res = await fetch(...args)
    const data = await res.json()
    return data 
}
const Quote = () => {
    const {data} = useSWR("https://api.quotable.io/random", fetcher, {
        suspense: true
    })
    return (
        <div>
            <h1>Api fetching with SWR method!!</h1>
            {data?.content && <h3>content: {data?.content}</h3>}
        </div>
    );
};

export default Quote;