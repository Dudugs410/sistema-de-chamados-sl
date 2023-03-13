
import api2 from "./api2"

const getUsuarios = async () => {
    const resp = await api2.get('/')
    return resp
}

export default getUsuarios