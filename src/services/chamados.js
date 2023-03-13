import apiChamados from "./apiChamados"

const getChamados = async () => {
    const resp = await apiChamados.get('../../mock/chamados')
    return resp
}

export default getChamados

