import { useEffect, useState } from "react"
import apiChamados from "../../services/apiChamados"
import getChamados from "../../services/chamados"
import postChamado from "../../services/postChamado"

import { FiZoomIn } from "react-icons/fi"
import Header from "../../components/Header"
import Title from "../../components/Title"
import './chamados.css'

import { FiCalendar } from "react-icons/fi"

const Chamados = () =>{

    const [loading, setLoading] = useState(true)
    const [chamados, setChamados] = useState([])


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

    return(
        <>
            <Header/>

            <div className="content">
                <Title name="Chamados">
                    <FiCalendar size={24}/>
                </Title>
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
                            <td>place_holder</td>
                            <td>place_holder</td>
                            <td>place_holder</td>
                            <td>place_holder</td>
                            <td><button className='new2'><FiZoomIn color={'#FFF'} size={25}/></button></td>
                        </tr>
                    </tbody>
            </table>
                                
            </div>
            
        </>
    )
}

export default Chamados