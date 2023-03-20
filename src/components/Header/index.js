import { React, useContext, useState } from 'react'
import avatarImg from '../../assets/avatar.png'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'
import {FiHome, FiSettings, FiUser, FiUsers, FiCheckSquare} from 'react-icons/fi'

import './header.css'

export default function Header(){
  const { user } = useContext(AuthContext)

  return(
    <div className="sidebar">
      <div>
        <img src={ user.avatarUrl === null ? avatarImg : user.avatarUrl } alt="Foto do usuario" />
      </div>

      <Link to ='/dashboard'><FiHome color="#FFF" size={24}/>Home</Link>
            
      <Link to ='/customers'><FiUser color="#FFF" size={24}/>Clientes</Link>
            
      <Link to ='/profile2'><FiSettings color="#FFF" size={24}/>Perfil</Link>

      <Link to='/users2'><FiUsers color="#FFF" size={24}/>Usuários</Link>

      <Link to='/chamados'><FiCheckSquare color="#FFF" size={24}/>Chamados</Link>
      
    </div>
  )
}