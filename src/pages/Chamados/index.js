import { useEffect, useState } from "react"
import apiChamados from "../../services/apiChamados"
import getChamados from "../../services/chamados"
import postChamado from "../../services/postChamado"


import Header from "../../components/Header"
import Title from "../../components/Title"

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

            <div className="container">
                                
            </div>
            
        </>
    )
}

export default Chamados