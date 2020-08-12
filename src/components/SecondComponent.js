
import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

class SecondComponent extends React.Component {

    /***  Mounting phase */
    constructor(props) {
        super(props)
        this.state={titleOfComp:"SecondComponent"}
        console.log("Lifecle of component"," constructor :-> ", " props: "+JSON.stringify(props))
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecle of component"," getDerivedStateFromProps :-> ", " props: "+JSON.stringify(props),
         " state: "+JSON.stringify(state))
    }

    changeTitle=()=>{
        this.setState({
        titleOfComp:"FlatList Component"
        })
    }

    render() {
        console.log("Lifecle of component"," render :-> ")
        return <View style={{ flex: .5, backgroundColor: 'cyan' }}>

            <Text onPress={this.changeTitle}>{this.state.titleOfComp}</Text>
            <FlatListComponent flatListItem={dataList} ></FlatListComponent>

        </View>
    }


    componentDidMount(){
        console.log("Lifecle of component"," componentDidMount :-> ")
    }
    /***  Mounting phase */


    /***  Update phase */

    shouldComponentUpdate(nextProps,nextState){
        console.log("Lifecle of component"," shouldComponentUpdate :-> ", " nextProps: "+JSON.stringify(nextProps), " nextState: "+JSON.stringify(nextState))
         if(nextState!==this.state){// this is not a way to compare objects 
            return true
         }else{
             return false
         }
        
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Lifecle of component"," getSnapshotBeforeUpdate :-> ", " prevProps: "+prevProps, " prevState: "+prevState)
        return null
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("Lifecle of component"," getSnapshotBeforeUpdate :-> ", " prevProps: "+prevProps, " prevState: "+prevState+" snapShot: "+snapShot)
        return null
    }

     /***  Update phase */


     // unmounting phase
     componentWillUnmount(){
         console.log("Lifecle of component","componentWillUnmount")

     }

}


let FlatListComponent=(flatListProps)=>{
    return <FlatList data={flatListProps.flatListItem}
                     renderItem={({item})=>  <Item elem={item}></Item>}
                     ItemSeparatorComponent={ItemSeperater}
    /> 
}


const ScrollViewElement = (scrollProps) => {

    return <ScrollView horizontal={false}>

        {scrollProps.scrollItem.map(element=>{
            return <Item elem={element}></Item>
        })}

    </ScrollView>

}

export const ItemSeperater=()=>{
    return <View style={{backgroundColor:'black', height:1}}/>
}

 export const Item = (itemProps) => {
    return <View><View style={{ height:50, flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{alignSelf:'center', fontSize:15}}>{itemProps.elem.name} </Text>
        <Text style={{alignSelf:'center',fontSize:20}}>{itemProps.elem.age}</Text>
    </View>
    </View>

}


let dataList = [{
    name: "JOnh", age: 21
}, {
    name: "JOnhy", age: 20
}, 
{name: "Anna", age: 23}, 
{ name: "Anna", age: 23 }, 
{ name: "Anna", age: 23 }, 
{ name: "Anna", age: 23 }, 
{ name: "Anna", age: 23 }]


export default SecondComponent;