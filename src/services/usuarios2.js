
import api2 from "./api2"

let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      }
    }

export const getUsuarios = async () => {
    const resp = await api2.get('/')
    return resp
}

export const postUsuario = async ({data}) => {
    const resp = await api2.post(api2, {data}, config)
}
