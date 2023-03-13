import apiChamados from './apiChamados'
import axios from 'axios'

const postChamado = (chamado) => {

  axios.post(apiChamados, chamado)
    .then(function(response){
      console.log(response)
    })
    .catch(function (error){
      console.log(error)
    })
}

export default postChamado