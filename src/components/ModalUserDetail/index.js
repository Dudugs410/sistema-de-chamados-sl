
import { FiX } from 'react-icons/fi'
import '../Modal/modal.css';

export default function ModalUserDetail({ usuario, close }){

  console.log(usuario.CODIGO)

  return(
    <div className="modal">
      <div className="container">
        <button className="close" onClick={ close }>
          <FiX size={25} color="#FFF" />
          Voltar
        </button>

        <main>
          <h2>Detalhes do Usuário</h2>

          <div className="row">
            <span>
              Nome: <span className='email info'>{usuario.NOME}</span>
            </span>
          </div>

          <div className="row">
            <span className="info">
              E-mail: <span className='email info'>{usuario.EMAIL}</span>
            </span>
          </div>

          <div className="row">
            <span>
              Data de cadastro: <span className="email info">{usuario.DATAINSERCAO}</span>
            </span>
          </div>

          <div className="row">
            <span>
              Status: { usuario.ATIVO ? <span className="email info">Ativo</span> : <span className="email info">Inativo</span>}
            </span>
          </div>

        </main>
      </div>
    </div>
  )
}