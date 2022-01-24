import Home from './components/routes/Home'
import Login from './components/auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}
 
export default App