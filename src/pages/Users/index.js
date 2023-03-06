import { React, useEffect, useState } from 'react';

import Title from '../../components/Title';
import Header from '../../components/Header';


import api from '../../services/api';
import axios from 'axios';

const Users = () => {

    ////////////////////////////////////////////////////////////////////
    
    
    
    ////////////////////////////////////////////////////////////////////
    

    return(
      
      

      <div>
        <Header/>
        <Title/>

        
        
        <div className='container'>
          
          <h1>Lista de usuários</h1>
        
        </div>

        <div>
        <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Código</th>
            <th scope="col">Data de Inserção</th>
          </tr>
        </thead>
        <tbody >
         
            
              <tr>
                <td>teste</td>
                <td>teste</td>
                <td>teste</td>
              </tr>
              
         
        </tbody>
      </table>
        </div>
        
      </div>  
    )

}

export default Users;