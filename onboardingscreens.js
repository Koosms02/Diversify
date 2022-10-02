import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation} from '@react-navigation/native'


const Onboardingscreens = () => {

  const statusBarHeight = StatusBar.currentHeight
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height

  const navigation = useNavigation()

  const [onBoarding , setOnboarding ] = useState({
    screen1:false,
    screen2:false,
    screen3:false,
  })

  useEffect(() => {
    setOnboarding({...onBoarding , screen1:true})
  
  },[])
  

  function OnBoarding(){
    if( onBoarding.screen1 === true){
        return(
            <View style={[style.onBoardingView ,{height:height*0.7 ,}]}>
                 <Text>secure verification using blockchain technology</Text>
            </View>
       )
    }else if(onBoarding.screen2 === true){
        return(
            <View style={[style.onBoardingView ,{height:height*0.7 ,}]}>
                 <Text> Market place for creator </Text>
            </View>
       )
    }else if(onBoarding.screen3 === true){
            return(
                <View style={[style.onBoardingView ,{height:height*0.7 ,}]}>
                     <Text>content for screen 3</Text>
                </View>
               )
    }
  }
  return (
    <View style={{marginTop:statusBarHeight , flex:1 , justifyContent:'space-between'}}>
      {OnBoarding()}
      <View style={{backgroundColor:"#F44336" , height:height*0.083 , borderRadius:50 , margin:20 ,alignItems:'center' , justifyContent:'center'}}>
        <TouchableOpacity 
            onPress={()=>{
                if(onBoarding.screen1 === true){
                    setOnboarding({...onBoarding , screen1:false})
                    setOnboarding(prev=>({...prev, screen2:true}))
                }else if(onBoarding.screen2 === true){
                    setOnboarding({...onBoarding , screen2:false})
                    setOnboarding(prev=>({...prev, screen3:true}))
                }else if(onBoarding.screen3 === true){
                    navigation.navigate("Login")
                }
            }}
            style={{height:"100%",width:"100%" ,alignItems:'center' ,borderRadius:50, justifyContent:'center'}}>
            {
                (onBoarding.screen1 || onBoarding.screen2)?(
                    <Text style={{fontWeight:'bold' ,fontSize:30 ,color:'white'}}>Next</Text>
                ):(
                    <Text style={{fontWeight:'bold' ,fontSize:30 ,color:'white'}}>Continue</Text>
                )
            }
        </TouchableOpacity>

      </View>
    </View>
  )
}

const style= StyleSheet.create({
    onBoardingView:{
        width:"100%" , 
        
         padding:20 ,
          justifyContent:'center',
           alignItems:'center'
    }
})
export default Onboardingscreens