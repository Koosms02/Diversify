import { View, Text, StatusBar, Dimensions, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import p1 from "../assets/artFolder/2.jpg"
import p2 from "../assets/artFolder/girl.jpg"
import p3 from "../assets/artFolder/port.jpg"
import p4 from "../assets/artFolder/p.jpg"
import p5 from "../assets/artFolder/s.jpg"


const Home = () => {

    const statusBarHeight = StatusBar.currentHeight
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

   const  Data=[
      {
        id:'1',
        photo:p1,
        description:''
      },
      {
        id:'2',
        photo:p2,
        description:''
      },
      {
        id:'3',
        photo:p3,
        description:''
      },
      {
        id:'4',
        photo:p4,
        description:''
      },
      {
        id:'5',
        photo:p5,
        description:''
      },

      {
        id:'6',
        photo:p1,
        description:''
      },
      {
        id:'7',
        photo:p2,
        description:''
      },
      {
        id:'8',
        photo:p3,
        description:''
      },
      {
        id:'9',
        photo:p4,
        description:''
      },
      {
        id:'10',
        photo:p5,
        description:''
      },
    ]
  return (
    <View style={{marginTop:statusBarHeight , alignItems:'center'}}>
         <View style={{marginTop:10,marginBottom:50,alignItems:'center',justifyContent:'center' , height:height*0.1 , width:'90%' , backgroundcolor:'white' , borderWidth:0.3 , borderRadius:10 }}>
            <Text style={{color:'red' , fontWeight:'bold' , fontSize:20}}> Diversify</Text>
         </View>
        <FlatList
          data={Data}
          keyExtractor={item=>item.id}
          renderItem={({item})=>(
            <View style={{marginTop:10, marginBottom:10,marginLeft:10,marginRight:10, width:'80%' , height:height*0.3}}>
              <TouchableOpacity style={{marginTop:10,width:'100%' , height:'100%'}}>
                <ImageBackground
                  source={item.photo} style={{width:width , height:height*0.4}}
                  resizeMode="cover" 
                >
                  <View style={{width:'100%' , height:'20%' , backgroundColor:'white'}}>
                    <Text> Created by:</Text>
                    <Text>Price:R20</Text>
                  </View>
                  
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}
        />
    </View>
  )
}

export default Home