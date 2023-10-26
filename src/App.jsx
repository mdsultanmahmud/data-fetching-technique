// import QuoteAxios from "./components/axios/QuoteAxios"
import { Suspense } from "react"
import Quote from "./components/swr/Quote"

function App() {
  
  return (
    <>
      <h1>4 Way to Data Feching Method in React APP</h1>
      <Suspense fallback={<h1>Data is Loading...</h1>}><Quote/></Suspense>
      {/* <QuoteAxios/> */}
    </>
  )
}

export default App
