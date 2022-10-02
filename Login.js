import { View, Text, Dimensions, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import UseAuth from '../api/useAuth';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const statusBarHeight = StatusBar.currentHeight
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    const [email ,setEmail] = useState()
    const [password , setPassword] = useState()

    const {signIn ,signInWithEmail } = UseAuth()

    const navigation = useNavigation()
  return (
    <View style={{flex:1 , marginTop:statusBarHeight , justifyContent:'center' , alignItems:'center' , backgroundColor:'white'}}>
        <View>
            <Text style={{fontWeight:"bold" , fontSize:40}}>Login</Text>
        </View>
        <View style={{marginTop:30 ,paddingLeft:10,width:'90%' ,  height:height*0.07 ,borderWidth:0.1 , borderRadius:50}}>
            <TextInput style={{height:'100%' ,width:"100%"}} placeholder="enter your email"
                onChangeText={(val)=>setEmail(val)}
            />

        </View>

        <View style={{marginTop:30,paddingLeft:10, width:'90%' ,  height:height*0.07  , borderRadius:50 ,borderWidth:0.1}}>
            <TextInput style={{height:'100%' ,width:"100%"}} placeholder="password" secureTextEntry={true}
                onChangeText={(pass)=>{
                    setPassword(pass)
                }}
            />
        </View>
        <View style={{marginTop:height*0.09,width:'90%' , backgroundColor:'#F44336' , height:height*0.07 , borderRadius:50}}>
            <TouchableOpacity 
                onPress={()=>{
                    console.log(email, password)
                    // signInWithEmail(email,password),
                    navigation.navigate("home")
                }}

                style={{width:'100%' , height:'100%' ,borderRadius:20 , alignItems:'center' , justifyContent:'center' }}
            >
                 <Text style={{fontWeight:"700" , color:'white' , paddingLeft :20}}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login