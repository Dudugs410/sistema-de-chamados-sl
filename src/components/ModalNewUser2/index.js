import { useState } from "react"
import { FiX } from 'react-icons/fi'
import { toast } from "react-toastify"
import axios from "axios"

import '../Modal/modal.css'
import './modalNewUser2.css'


import { getUsuarios, postUsuario } from "../../services/usuarios2"
import { config } from "../../services/api2"


export default function ModalNewUser2({ close }){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [sedcodigo, setSedcodigo] = useState('')
    const [grucodigo, setGrucodigo] = useState('')
    const [usuContaBloqueada, setUsuContaBloqueada] = useState(false)
    const [usuNecessitatrocarsenha, setUsunecessitatrocarsenha] = useState(false)
    const [ativo, setAtivo] = useState(true)
    const [grucodgigoNavigation, setGrucodigoNavigation] = useState(null)
    
    const novoUsuario = {
        
        GRUCODIGO: grucodigo,
        SEDCODIGO: sedcodigo,
        NOME: nome,
        EMAIL: email,
        LOGIN: login,
        SENHA: senha,
        NECESSITATROCASENHA: usuNecessitatrocarsenha,
        CONTABLOQUEADA: usuContaBloqueada,
        USUARIOINSERCAO: 2,
        DATAINSERCAO: new Date(),
        USUARIOMODIFICACAO: 2,
        DATAMODIFICACAO: new Date(),
        ATIVO: ativo,
    }

    function addUser(e){
        e.preventDefault()
        console.log('function addUser...')
        console.log('usuario a ser adicionado: ')
        console.log(novoUsuario)
       
    }

    const handleAtivo = (e) => {
      setAtivo(!e.target.checked)
      console.log('ativo: ' + ativo)
    }

    const handleBloqueado = (e) => {
      setAtivo(!e.target.checked)
      console.log('bloqueado? : ' + ativo)
    }
      

    return(
        
      <div className="modal">
        <div className="container dropShadow">
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

                <div className='div-selects'>
                  <div className='div-dropdown'>
                    <select defaultValue = '' onChange={ (e) => setSedcodigo(Number(e.target.value))} className='form-select select-cadastro'>SedCodigo:
                      <option defaultValue>SedCodigo</option>
                      <option value = '1'>1</option>
                      <option value = '2'>2</option>
                      <option value = '3'>3</option>
                      <option value = '4'>4</option>
                    </select>

                    <select defaultValue = '' onChange={ (e) => setGrucodigo(Number(e.target.value))} className = 'form-select select-cadastro'  placeholder="GruCodigo">GruCodigo:
                      <option defaultValue>GruCodigo</option>
                      <option value = '1'>1</option>
                      <option value = '2'>2</option>
                      <option value = '3'>3</option>
                      <option value = '4'>4</option>
                    </select>
                  </div>
                </div>
              
                <div className='div-flags'>
                  <div className='flag-line'>
                    <label className='label-cadastro'>usuContaBloqueada:</label><input type='checkbox' className='checkbox-cadastro' onChange={handleBloqueado}></input>
                  </div>
                  
                  <div className='flag-line'>
                    <label className='label-cadastro'>ativo:</label><input type='checkbox' className='checkbox-cadastro' onChange={handleAtivo}></input>
                  </div>
                  
                  <div className='flag-line'>
                    <label className='hidden span-cadastro'>usuNecessitatrocarsenha</label>
                  </div>
                </div>

                
                <button className=" outline-btn" type='submit'>Salvar</button>
            </form>
  
          </main>
        </div>
      </div>
    )
  }