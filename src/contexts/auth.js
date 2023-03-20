import { React, createContext, useEffect, useState } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUsuarios } from '../services/usuarios2'

import md5 from 'md5'


export const AuthContext = createContext({})

function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userCod, setUserCod] = useState('')
  const [codUsuario, setCodUsuario] = useState('')
  const [logado, setLogado] = useState(false)
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  
  const[usuarios, setUsuarios] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    async function loadUser(){
      const storageUser = localStorage.getItem('@userData')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }

      setLoading(false)
    }

    loadUser()
  },[])

  useEffect(()=>{
    console.log(logado)
    if(logado){
      navigate('/dashboard2')
    }
    const loadUsuarios = async () =>{
      const result = await getUsuarios()
      setUsuarios(result)
      setUsuarios(result.data)
      setLoading(false)
    }
    loadUsuarios()
  },[])

  async function signIn(email, password){
    setLoadingAuth(true)

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value)=> {
        let uid = value.user.uid

        const docRef = doc(db, 'users', uid)
        const docSnap = await getDoc(docRef)

        let data = {
          uid: uid,
          nome: docSnap.data().nome,
          email: value.user.email,
          avatarUrl: docSnap.data().avatarUrl
        }
      
        setUser(data)
        storageUser(data)
        setLoadingAuth(false)
        toast.success('Bem-vindo(a) de volta!')
        navigate('/dashboard')
      })

      .catch((error) => {
        console.log(error)
        setLoadingAuth(false)
        toast.error('Erro ao fazer login')
        alert('erro')
      })
  }


  // Cadastrar um novo user
  async function signUp(email, password, name){
    setLoadingAuth(true)

    await createUserWithEmailAndPassword(auth, email, password)
      .then( async (value) => {
        let uid = value.user.uid

        await setDoc(doc(db, 'users', uid), {
          nome: name,
          avatarUrl: null
        })
          .then( () => {

            let data = {
              uid: uid,
              nome: name,
              email: value.user.email,
              avatarUrl: null
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success('Bem vindo ao sistema')
            navigate('/dashboard')
          
          })

      })
      .catch((error) => {
        console.log(error)
        setLoadingAuth(false)
      })

  }

  function storageUser(data){
    localStorage.setItem('@userData', JSON.stringify(data))

  }

  async function logout(){
    await signOut(auth)
    localStorage.removeItem('@userData')
    setUser(null)

  }
  //////////////////////////////////////////////////////////////////

  async function logaUsuario(e){
    e.preventDefault()

    console.log(login)
    console.log(usuarios)
        

    usuarios.find((usuarios) => usuarios.LOGIN === login)
    if(usuarios.find((usuarios) => usuarios.LOGIN === login)){
      console.log('usuario encontrado')
      if(usuarios.find((usuarios) => usuarios.SENHA === md5(senha))){
        console.log('Login bem sucedido')
        console.log('antes do set:', logado)
        setLogado(true)
        console.log('depois do set:', logado)
        setUserCod(usuarios.CODIGO)
        console.log(logado)
        navigate('/dashboard2')
      }else{
        console.log('senha incorreta')
      }
    }else{
      console.log('usuario não encontrado')
    }

  }

  return(
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser,
        logaUsuario,
        codUsuario,
        setCodUsuario,
        setLogin,
        setSenha,
        logado
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider