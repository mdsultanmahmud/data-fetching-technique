// import QuoteAxios from "./components/axios/QuoteAxios"
// import { Suspense } from "react"
import Quote from "./components/reactQuery/Quote"
import { QueryClient, QueryClientProvider } from 'react-query'
function App() {
  const client = new QueryClient()
  return (
    <>
      <h1>4 Way to Data Feching Method in React APP</h1>
      {/* for swr  */}
      {/* <Suspense fallback={<h1>Data is Loading...</h1>}><Quote/></Suspense> */}
      {/* for fetch and query  */}
      <QueryClientProvider client = {client}>
        <Quote />
        <Quote />
      </QueryClientProvider>
      {/* for axios  */}
      {/* <QuoteAxios/> */}
    </>
  )
}

export default App
