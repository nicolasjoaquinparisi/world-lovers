import Index from "./components/routes/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> } />
      </Routes>
    </BrowserRouter>
  )
}
 
export default App