const getQuote = async () => {
    try {
        const res = await fetch(`https://api.quotable.io/random`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default getQuote