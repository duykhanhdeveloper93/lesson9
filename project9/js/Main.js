import React from "react"
import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import LastFooter from "./LastFooter"
import { View } from "react-native"


const Main = () => {
    return (
        <View style={{flex: 1}}>
            <View  style={{flex: 5}}><Header /></View>
            <View  style={{flex: 3, marginTop: 30}}><Body /></View>
            <View  style={{flex: 3}}><Footer /></View>
            <View  style={{flex: 1 ,marginTop: 30, alignContent: 'flex-end'}}><LastFooter /></View>

        </View>
    )    
}

export default Main