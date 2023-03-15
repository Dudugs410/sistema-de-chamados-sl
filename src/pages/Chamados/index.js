import { useEffect, useState } from "react"
import apiChamados from "../../services/apiChamados"
import getChamados from "../../services/chamados"
import postChamado from "../../services/postChamado"
import Modal from "../../components/Modal"

import { FiZoomIn, FiCheckSquare } from "react-icons/fi"
import Header from "../../components/Header"
import Title from "../../components/Title"
import './chamados.css'

import { FiMessageSquare, FiSearch } from "react-icons/fi"

const Chamados = () =>{

    const [loading, setLoading] = useState(true)
    const [chamados, setChamados] = useState([])
    const [showPostModal, setShowPostModal] = useState(false)


   /* useEffect(()=>{
        const loadChamados = async () =>{
            const result = await getChamados()
            console.log(result)
            setChamados(result.data)
            setLoading(false)
          }
        loadChamados()
    })
    
    */

    function toggleModal(){
        setShowPostModal(!showPostModal)
      }

    return(
        <>
            <Header/>

            <div className="content">
                <Title name="Chamados">
                    <FiMessageSquare size={24}/>
                </Title>

                <button className="new"><FiCheckSquare color="#FFF" size={24}/>Novo Chamado</button>
            </div>

            <div className="content">
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Assunto</th>
                            <th scope="col">Status</th>
                            <th scope="col">Data de Criação</th>
                            <th scope="col">Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
        
                        <tr>
                            <td data-label="Cliente">place_holder</td>
                            <td data-label="Assunto">place_holder</td>
                            <td data-label="Status">place_holder</td>
                            <td data-label="Data de Criação">place_holder</td>
                            <td data-label="Detalhes"><button className="action" style={{ backgroundColor: '#3583f6' }} onClick={ () => toggleModal()}>
                            <FiSearch color='#FFF' size={17}/>
                          </button></td>
                        </tr>
                    </tbody>
            </table>
                                
            </div>
            
        {showPostModal && (
            <Modal
                conteudo={{teste: 'teste'}}
            close={ () => setShowPostModal(!showPostModal) }
        />
      )}
        </>
    )
}

export default Chamados