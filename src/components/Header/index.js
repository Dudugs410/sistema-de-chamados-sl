import { React, useContext, useState } from 'react'
import avatarImg from '../../assets/avatar.png'
import { Link } from 'react-router-dom'


import { AuthContext } from '../../contexts/auth'
import {FiHome, FiMoon, FiSettings, FiSun, FiUser, FiUsers} from 'react-icons/fi'

import './header.css'
import DarkMode from '../DarkMode'


export default function Header(){
  const { user } = useContext(AuthContext)

  const [dark, setDark] = useState(false)

  return(
    <div className="sidebar">
      <div>
        <img src={ user.avatarUrl === null ? avatarImg : user.avatarUrl } alt="Foto do usuario" />
      </div>

      <Link to ='/dashboard'><FiHome color="#FFF" size={24}/>Chamados</Link>
            
      <Link to ='/customers'><FiUser color="#FFF" size={24}/>Clientes</Link>
            
      <Link to ='/profile2'><FiSettings color="#FFF" size={24}/>Perfil</Link>

      <Link to='/users2'><FiUsers color="#FFF" size={24}/>Usuários Timmit</Link>

      <Link to='/chamados'><FiUsers color="#FFF" size={24}/>Chamados</Link>

      

    </div>
  )
}