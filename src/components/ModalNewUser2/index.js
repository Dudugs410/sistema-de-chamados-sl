import { useState } from "react"
import { FiX } from 'react-icons/fi'
import { toast } from "react-toastify"
import api from "../../services/api2"
import '../Modal/modal.css'
import getUsuarios from "../../services/usuarios2"


export default function ModalNewUser2({ close }){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const novoUsuario = {
        sedcodigo: 2,
        grucodigo: 4,
        usunome: nome,
        usuemail: email,
        usulogin: login,
        ususenha: senha,
        usucontabloqueada: false,
        usunecessitatrocarsenha: false,
        usuariomodificacao: 2,
        datamodificacao: new Date(),
        usuarioinsercao: 2,
        datainsercao: new Date(),
        ativo: true,
        grucodigoNavigation: null
    }


    function addUser(e){
        e.preventDefault()
        console.log(nome)
        console.log(email)
        console.log(login)
        console.log(senha)
        api.post('/', {novoUsuario})
        .then((response)=>{
            console.log(response)
            let usuarios = []
            usuarios = getUsuarios()
            toast.success('Usuário cadastrado com sucesso! Código:' + usuarios[usuarios.length])
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

            <span>usuario timmit</span>
  
            <form className='form-profile' onSubmit={addUser}>
                <input type='text' placeholder="nome" onChange={(e) => setNome(e.target.value)}/>
                <input type='text' placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <input type='text' placeholder="login" onChange={(e) => setLogin(e.target.value)}/>
                <input type='text' placeholder="senha" onChange={(e) => setSenha(e.target.value)}/>

                <button className="btn btn-primary" type='submit'>Salvar</button>
            </form>
  
          </main>
        </div>
      </div>
    )
  }