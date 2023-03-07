
import api from "./api"

const getUsuarios = async () => {
    const resp = await api.get('/')
    return resp
}

export default getUsuarios