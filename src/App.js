import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'
import React from 'react'
import AuthProvider from './contexts/auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import api from './services/api2'

axios.interceptors.request.use(
  config => {
    const { origin } = new URL (config.url)
    const allowedOrigins = [api]
    const token = localStorage.getItem('token')

    if(allowedOrigins.includes(origin)){
      config.headers.Authorization = `Bearer
      ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000}/>
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
