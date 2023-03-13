import { React, useEffect, useState } from 'react'

import Title from '../../components/Title'
import Header from '../../components/Header'
import ModalNewUser2 from '../../components/ModalNewUser2'

import getUsuarios from '../../services/usuarios2'

import { FiUserPlus } from 'react-icons/fi'

const Users = () => {

  ////////////////////////////////////////////////////////////////////
  const [usuarios, setUsuarios] = useState([])
  const [showPostModal2, setShowPostModal2] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const loadUsuarios = async () =>{
      const result = await getUsuarios()
      console.log(result)
      setUsuarios(result.data)
      setLoading(false)
    }
    loadUsuarios()
  }, [])
    
  ////////////////////////////////////////////////////////////////////
  


  ////////////////////////////////////////////////////////////////////

  if(loading){
    return(
      <div>
        <Header/>
        <Title/>
        <div className="container content">
          <h1>Lista de usuários</h1>
        </div>
        <span className='loading'>Buscando usuários...</span>
      </div>
    )
  }
  return(
    <div>
      <Header/>
      <Title/>
      <div className='container content'>
          
        <h1>Lista de usuários</h1>
        
      </div>

      <button className="new" onClick={setShowPostModal2}><FiUserPlus color={'#FFF'} size={25}/>Adicionar Usuário timmit</button>

      <div className='content'>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Código</th>
              <th scope="col">Data de Inserção</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuarios)=>{
              return(
                <tr key={usuarios.CODIGO}>
                  <td>{usuarios.NOME}</td>
                  <td>{usuarios.CODIGO}</td>
                  <td>{usuarios.DATAINSERCAO}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
        
      {showPostModal2 && (
        <ModalNewUser2
          close={ () => setShowPostModal2(!showPostModal2) }
        />
      )}

    </div>  
  )

}

export default Users