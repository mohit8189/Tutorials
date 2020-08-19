/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
} from 'react-native';

import SectionListComp from './SectionListComp';
import SecondComponent from './SecondComponent';
import { TextInput } from 'react-native-gesture-handler';



class RootComp extends Component {


    constructor(props) {
        super(props)
        this.state = { titleForCOmp: 'Title for Component', name: "Hello World!", age: '30', textMsg: 'Display One', buttonName: "Submit Data" }
    }

    changeText = () => {
        this.setState({ name: "Welcome" }) // states can be modified 
        console.log("name", this.state.name)
    }


    changeTextField = (input) => {
        this.setState({
            textMsg: input
        })
    }

    showAlert = (msg) => {
        Alert.alert("Submit", msg, [{
            text: 'ok', onPress: () => {
                console.log("Ok pressed")
            }
        }, {
            text: 'cancel', onPress: () => {
                console.log("cancel pressed")
            }
        }
        ])
    }


    changeTitleProp = () => {
        this.props.navigation.navigate("Third")
    }




    render() {
        const employer = "Prokarma" // immutable
        return (<View style={styles.container}>

            <View style={styles.designButton}>
                <View style={styles.buttonSize}>
                    <Button title='Click ME' onPress={this.changeTitleProp}></Button>
                </View>
            </View>


            {false ? <SectionListComp style={{ height: 200, flex: .5, backgroundColor: "pink" }} /> :
                <SecondComponent titleForCom={this.state.titleForCOmp} />
            }



            <View style={{ flex: .25, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellow" }}>
                <View style={{ height: 80, width: 200 }}>
                    <TextInput placeholder="type here"
                        style={{ height: 40, width: 100, backgroundColor: 'pink' }}
                        onTextInput={null}
                    ></TextInput>
                    <Text>{this.state.textMsg}</Text>
                </View>
            </View>

        </View>);
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white" },
    designButton: { flex: .25, backgroundColor: "red" },
    buttonSize: { height: 50, width: 150 }
})

export default RootComp;



/**debounce(fn, delay) {
  let timeoutID;
  return function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn();
    }, delay)
  }

}

throttle = (func, delay) => {
  let last = 0
  return () => {
    const now = new Date().getTime()
    if (now - last < delay) {
      return
    }
    last = now
    func();
  }
}*/