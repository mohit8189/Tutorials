import React from 'react'
import { SectionList } from 'react-native'
import { Item, ItemSeperater } from './SecondComponent'
import { View, Text } from 'react-native'

const SectionListComp = (props) => {

    let sectionListData = [{ title: 'First Section', data: dataList },
    { title: 'Second Section', data: dataList },
    { title: 'Third Section', data: dataList },
    { title: 'Four Section', data: dataList }]
    

    return <SectionList sections={sectionListData}
        ItemSeparatorComponent={ItemSeperater}
        renderItem={({ item }) => <Item elem={item}></Item>}
        renderSectionHeader={({ section }) => <View style={{ height: 50, backgroundColor: 'pink' }}><Text>{section.title}</Text></View>}
    >

    </SectionList>

}

export default SectionListComp;

const dataList = [{
    name: "JOnh", age: 21
}, {
    name: "JOnhy", age: 20
},
{ name: "Anna", age: 23 },
{ name: "Anna", age: 23 },
{ name: "Anna", age: 23 },
{ name: "Anna", age: 23 },
{ name: "Anna", age: 23 }]


