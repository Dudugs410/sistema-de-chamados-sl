import { useContext, useEffect, useState, Component } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

import { getUsuarios, postUsuario } from '../../services/usuarios2'

import './login.css'

const Login = () =>{

  const[loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { logaUsuario } = useContext(AuthContext)
  const { login } = useContext(AuthContext)
  const { senha } = useContext(AuthContext)
  const { setLogin } = useContext(AuthContext)
  const { setSenha } = useContext(AuthContext)

  return(
    <div className="container-center">
      <div className="login">
        <div className="login-area">
        </div>
    
        <form onSubmit={logaUsuario}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder="Login"
            value={login}
            onChange={ (e) => setLogin(e.target.value) }
          />
    
          <input 
            type="password" 
            placeholder="********"
            value={senha}
            onChange={ (e) => setSenha(e.target.value) }
          />
    
          <button type="submit">Entrar</button>
        </form>
    
      </div>
    </div>
  )
}

export default Login