import { View, Button,Text } from 'react-native'
import React from 'react'

const FourthComp=(props)=>{

    let info=props.navigation.getParam("aditionalInfo")


    function redirect(){
       // alert(JSON.stringify(props))

      let id=setInterval(()=>{
          console.log("ncjehjhe")
      },1000)

        setTimeout(()=>{
            clearInterval(id)
            props.navigation.navigate('Root')
        },5000)
    }
     
    return <View style={{flex:1 , backgroundColor:'pink', justifyContent:'center', alignItems:'center'} }> 

    <View>
        <Button title='Go to Root' onPress={redirect}></Button>
        <Text>{info.grade}</Text>
        <Text>{info.response.title}</Text>
        <Text>{info.response.movies[0].title}</Text>
    </View>

    </View>
}

export default FourthComp