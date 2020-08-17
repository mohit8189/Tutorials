import { View, Button,Text } from 'react-native'
import React from 'react'

const FourthComp=(props)=>{

    let info=props.navigation.getParam("aditionalInfo")


    function redirect(){
       // alert(JSON.stringify(props))
        props.navigation.navigate('Root')
    }
     
    return <View style={{flex:1 , backgroundColor:'pink', justifyContent:'center', alignItems:'center'} }> 

    <View>
        <Button title='Go to Root' onPress={redirect}></Button>
        <Text>{info.grade}</Text>
        <Text>{info.dept}</Text>
    </View>

    </View>
}

export default FourthComp