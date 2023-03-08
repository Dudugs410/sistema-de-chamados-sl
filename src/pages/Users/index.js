import { React, useEffect, useState } from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';
import ModalNewUser from '../../components/ModalNewUser';

import getUsuarios from '../../services/usuarios';

import { FiUserPlus } from 'react-icons/fi';

const Users = () => {

    ////////////////////////////////////////////////////////////////////
  const [usuarios, setUsuarios] = useState([])
  const [showPostModal, setShowPostModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const loadUsuarios = async () =>{
      const result = await getUsuarios()
      console.log(result)
      setUsuarios(result.data)
      setLoading(false)
    }
    loadUsuarios()
  }, []);
    
    ////////////////////////////////////////////////////////////////////
  

    ////////////////////////////////////////////////////////////////////

    if(loading){
      return(
        <div>
          <Header/>
          <Title/>
          <div className="container content">
            <h1>Lista de usuários</h1>
            <span>Buscando usuários...</span>
          </div>
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

        <button className="new" onClick={setShowPostModal}><FiUserPlus color={'#FFF'} size={25}/>Adicionar Usuário</button>

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
                <tr key={usuarios.usucodigo}>
                    <td>{usuarios.usunome}</td>
                    <td>{usuarios.usucodigo}</td>
                    <td>{usuarios.datainsercao}</td>
                  </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        
        {showPostModal && (
          <ModalNewUser
            close={ () => setShowPostModal(!showPostModal) }
          />
        )}

      </div>  
    )

}

export default Users;