import { React, useEffect, useState} from 'react'

import Title from '../../components/Title'
import Header from '../../components/Header'
import ModalNewUser2 from '../../components/ModalNewUser2'
import ModalUserDetail from '../../components/ModalUserDetail'

import getUsuarios from '../../services/usuarios2'

import { FiUserCheck, FiUserPlus, FiZoomIn } from 'react-icons/fi'

const Users = () => {

  ////////////////////////////////////////////////////////////////////
  const [usuarios, setUsuarios] = useState([])
  const [currentUsuario, setCurrentUsuario] = useState({})
  const [showPostModal2, setShowPostModal2] = useState(false)
  const [showModalUserDetail, setShowModalUserDetail] = useState(false)
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
        <div className="container content">
          <Title name="Lista de Usuários">
            <FiUserCheck size={25} />
          </Title>
        </div>
        <span className='loading'>Buscando usuários...</span>
      </div>
    )
  }

  const handleCurrentUsuario = (index) => {
    setCurrentUsuario(usuarios[index])
    setShowModalUserDetail(true)
  }

  return(
    <div>
      <Header/>
      
      <div className='content'>
      <Title name="Lista de Usuários">
            <FiUserCheck size={25} />
          </Title>
        
      </div>

      <button className="new" onClick={setShowPostModal2}><FiUserPlus color={'#FFF'} size={25}/>Adicionar Usuário timmit</button>

      <div className='content'>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Código</th>
              <th scope="col">Data de Inserção</th>
              <th scope="col">info</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index)=>{
              return(
                <tr key={usuario.CODIGO}>
                  <td>{usuario.NOME}</td>
                  <td>{usuario.CODIGO}</td>
                  <td>{usuario.DATAINSERCAO}</td>
                  <td><button className='new2' onClick={() => handleCurrentUsuario(index)}><FiZoomIn color={'#FFF'} size={25}/></button></td>
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

      {showModalUserDetail && (
        <ModalUserDetail
            usuario={currentUsuario}
            close={ () => setShowModalUserDetail(!showModalUserDetail) }/>
      )}

    </div>  
  )

}

export default Users