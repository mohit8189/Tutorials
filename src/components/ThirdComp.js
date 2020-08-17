import React from 'react'
import { View, Button } from 'react-native'

const ThirdComp=(props)=>{

    function goToFourth(){
        props.navigation.navigate('Fourth',{ aditionalInfo:{grade:'AAAA',dept:'IT'}})
    }
     
    return <View style={{flex:1 , justifyContent:'center', alignItems:'center', backgroundColor:'yellow'} }> 

    <View>
        <Button title='Go to App' onPress={goToFourth}></Button>
    </View>

    </View>
}

export default ThirdComp