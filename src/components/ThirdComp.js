import React, { useState, useEffect } from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'



let input = ''
const ThirdComp = (props) => {

    const [isAnimating, setAnimation] = useState(false)

    const [textInput, setTextInput] = useState("props.value")


    AsyncStorage.getItem('textInput').then((value)=>{
                 console.log("saved",value)
                 if(value){
                    setTextInput(value)
                 }           
    })

    let goToFourth = (data) => {

        setAnimation(true)

        /**  const axios = require('axios');
         axios.get("https://reactnative.dev/movies.json")
             .then((response) => {
                 props.navigation.navigate('Fourth', props.navigation.navigate('Fourth',
                     { aditionalInfo: { grade: data, dept: 'IT', response: response.data } }))
             }).catch((error) => {
                 setAnimation(false)
                 console.log(error)
             })  */

        fetch("https://reactnative.dev/movies.json").
            then((response) => response.json()).
            then((data) => {
                setAnimation(false)
                console.log("saving",textInput)
                AsyncStorage.setItem("textInput",textInput)
                props.navigation.navigate('Fourth', { aditionalInfo: { grade: "AAAA", dept: 'IT', response: data } })
            }).
            catch((error) => {
                setAnimation(false)
                console.log(error)
            })

    }



    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>

        <View>
            <TextInput
                value={textInput}
                onChangeText={(text) => {
                    //alert(text)
                    setTextInput(text);
                }}
                style={{ height: 50, width: 100, fontSize: 15 }}
                placeholder='Type here'></TextInput>
            <Button title='Go to Fourth' onPress={goToFourth.bind(props, input)}></Button>
        </View>

        <View style={{ flex: 1 }}>
            <ActivityIndicator animating={isAnimating} size="large" color="#ff0000" />
        </View>

    </View>
}


export default ThirdComp