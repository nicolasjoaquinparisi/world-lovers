import Home from './components/routes/Home'
import Login from './components/auth/Login'
import Activities from './components/routes/Acitivities'
import Flights from './components/routes/Flights'
import Hotels from './components/routes/Hotels'
import Offerts from './components/routes/Offerts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/activities' element={ <Activities /> } />
        <Route path='/flights' element={ <Flights /> } />
        <Route path='/hotels' element={ <Hotels /> } />
        <Route path='/offerts' element={ <Offerts /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}
 
export default App