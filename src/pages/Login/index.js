import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import md5 from 'md5'

import getUsuarios from '../../services/usuarios2'

import './login.css'

const Login = () =>{

  const[login, setLogin] = useState('')
  const[senha, setSenha] = useState('')
  const[logado, setLogado] = useState(false)
  const[usuarios, setUsuarios] = useState([])
  const[loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(()=>{
    const loadUsuarios = async () =>{
      const result = await getUsuarios()
      setUsuarios(result)
      setUsuarios(result.data)
      setLoading(false)
    }
    loadUsuarios()
  },[])

  async function logaUsuario(e){
    e.preventDefault()

    console.log(login)
    console.log(usuarios)
        

    usuarios.find((usuarios) => usuarios.LOGIN === login)
    if(usuarios.find((usuarios) => usuarios.LOGIN === login)){
      console.log('usuario encontrado')
      if(usuarios.find((usuarios) => usuarios.SENHA === md5(senha))){
        console.log('Login bem sucedido')
        setLogado(true)
        console.log(logado)
        navigate('/dashboard')
      }else{
        console.log('senha incorreta')
      }
    }else{
      console.log('usuario não encontrado')
    }

  }


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