import { Children, useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Landing from './pages/landing/Landing'


function App() {
  const [user, setUser] = useState(false)

  const handleUser=(userdata)=>{
    setUser(userdata)
  }
  const ProtectedRoute = ({children})=>{
    if (!user){
      return <Navigate to='/landing'/>
    }
    return children
  }
  return (
    <BrowserRouter basename='/AdobeXD-' >
      <Routes>
        <Route path='/landing' element={<Landing/>} />  
        <Route path='/login' element={<Login user={handleUser}/>} />  
        {/* <Route path='/' element={<Home/>} />   */}
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />  
        <Route path='/register' element={<Register user={handleUser} />} />  
      </Routes>    
    </BrowserRouter>
  )
}

export default App
