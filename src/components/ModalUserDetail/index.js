
import { FiX } from 'react-icons/fi'
import './modal.css';

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
              Nome: {usuario.NOME}
            </span>
          </div>

          <div className="row">
            <span>
              E-mail: {usuario.EMAIL}
            </span>
          </div>

          <div className="row">
            <span>
              Data de cadastro: {usuario.DATAINSERCAO}
            </span>
          </div>

          <div className="row">
            <span>
              Ativo?: { usuario.ATIVO ? 'sim' : 'não'}
            </span>
          </div>

        </main>
      </div>
    </div>
  )
}