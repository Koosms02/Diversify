import { View, Text } from 'react-native'
import React, { createContext, useContext, useMemo , useState } from 'react'
import { gProvider ,auth , db } from '../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import {getAuth} from 'firebase/auth'

const AuthContext = createContext({})
export const  AuthProvider = ({children}) => {
  const [user , setUser ] = useState(null)
 
  const signIn=()=>{
    signInWithPopup(auth,gProvider)
        .then((res)=>{
            setUser(res.user)
        }).catch((error)=>{
            console.log("hello world")
        })

  }

  async function signInWithEmail(email , password){
        await signInWithEmailAndPassword(auth , email , password).error((error)=>{
            console.log(error)
        })
  }


  const memoed = useMemo(()=>({
    user,
    setUser,
    signIn,
    signInWithEmail
  }),[user])
  return (
     <AuthContext.Provider
        value = {memoed}
     >
        {children}
     </AuthContext.Provider>
  )
}

export default function UseAuth(){
    return useContext(AuthContext)
}