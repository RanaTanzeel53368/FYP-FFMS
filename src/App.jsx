import { useEffect, useState } from 'react'
import AppProvider from "./context/index"
import './App.css'
import Home from './constainers/appStack/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './constainers/Login'
import Tank1 from './components/Tank1'
import Tank2 from './components/Tank2'
import Tank3 from './components/Tank3'
import Tank4 from './components/Tank4'
import SignUp from './components/SignUp'

function App() {

  // useEffect(()=>{
  //   const authToken = localStorage.getItem("users")
  //   if(authToken){
  //    setIsLoggedIn(true)
  //   }
  // },[])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AppProvider>
      {/* {isLoggedIn ? ( */}
        <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/tank1' element={<Tank1/>}/>
      <Route path='/tank2' element={<Tank2/>}/>
      <Route path='/tank3' element={<Tank3/>}/>
      <Route path='/tank4' element={<Tank4/>}/>

      
    </Routes>
      {/* ):(
      <Navigate to="/" replace/>
      )} */}
    
      
    
    </AppProvider>
  )
}

export default App
