import { Route, Routes } from 'react-router-dom'
import React from 'react'

import SignIn from '../pages/SignIn'

import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Customers from '../pages/Customers'
import New from '../pages/New'
import Users from '../pages/Users'

import Login from '../pages/Login'
import Dashboard2 from '../pages/Dashboard2'
import Profile2 from '../pages/Profile2'
import Users2 from '../pages/Users2'
import Chamados from '../pages/Chamados'

//import Teste from '../pages/Teste'

import Private from './Private'

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <SignIn/> } />
      <Route path="/register" element={ <SignUp/> } />
      <Route path="/login" element={ <Login/> } />

      <Route path="/dashboard" element={ <Private><Dashboard/></Private> } />
      <Route path="/profile" element={ <Private><Profile/></Private>}/>
      <Route path="/customers" element={ <Private><Customers/></Private>}/>

      <Route path="/new" element={ <Private><New/></Private>}/>
      <Route path="/new/:id" element={ <Private><New/></Private>}/>
      <Route path="/users" element={<Private><Users/></Private>}/>
      
      
      <Route path="/dashboard2" element={<Private><Dashboard2/></Private>}/>
      <Route path="/profile2" element={ <Private><Profile2/></Private>}/>
      <Route path="/users2" element={<Private><Users2/></Private>}/>
      <Route path="/chamados" element={<Private><Chamados/></Private>}/>
    </Routes>
  )
}

export default RoutesApp