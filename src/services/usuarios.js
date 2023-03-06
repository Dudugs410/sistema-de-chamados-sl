
import api from "./api"

const getUsuarios = async () => {
    const resp = await api.get('/usuarios')

    return resp
}

export default getUsuarios