import { useState } from "react"
import { FiX } from 'react-icons/fi'
import api from "../../services/api"
import axios from "axios"
import '../Modal/modal.css'

export default function ModalNewUser({ close }){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const novoUsuario = {
        nome: nome,
        email: email,
        login: login,
        senha: senha,
        dataAtual: new Date()
    }

    function addUser(){
        axios.post(api, {novoUsuario})
        .then((response)=>{
            console.log(response)
        }, (error) => {
            console.log(error)
        })
    }
      

    return(
        
      <div className="modal">
        <div className="container">
          <button className="close" onClick={ close }>
            <FiX size={25} color="#FFF" />
            Voltar
          </button>
  
          <main className="content">
            <h2>Novo Usuário</h2>
  
            <form className='form-profile' onSubmit={addUser}>
                <input type='text' placeholder="nome" onChange={(e) => setNome(e.value)}/>
                <input type='text' placeholder="e-mail" onChange={(e) => setEmail(e.value)}/>
                <input type='text' placeholder="login" onChange={(e) => setLogin(e.value)}/>
                <input type='text' placeholder="senha" onChange={(e) => setSenha(e.value)}/>

                <button className="btn btn-primary" type='submit'>Salvar</button>
            </form>
  
          </main>
        </div>
      </div>
    )
  }