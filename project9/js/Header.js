import React from "react"
import { View, Text, Image, TextInput, FlatList, ImageBackground, Button } from "react-native"

const arrayFlatList1 = [
    { titleBig: "How do you create your circle?", nameButton: 'Create', imageBackGround: require('../image/part2/fl1_bg1.png') },
    { titleBig: "How do you create your circle?", nameButton: 'Create', imageBackGround: require('../image/part2/fl1_bg1.png') },
    { titleBig: "How do you create your circle?", nameButton: 'Create', imageBackGround: require('../image/part2/fl1_bg1.png') }

]

const itemFlatList1 = ({ item, index }) => {
    return (

        <View style={{ flexDirection: 'row', marginLeft: 18 }}>
            <ImageBackground
                resizeMode="cover"
                style={{ height: 200, width: 380, borderRadius: 10 }}
                imageStyle={{ borderRadius: 10, width: '100%' }}
                source={item.imageBackGround}>
                <View style={{ flex: 1, marginLeft: 20 }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={2} style={{ width: '50%', fontSize: 20, fontWeight: '500', color: 'black' }}>{item.titleBig}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ backgroundColor: 'black', color: 'white',
                                       width: '20%', textAlign: 'center', 
                                       paddingVertical: 5, borderRadius: 5,
                                        textAlignVertical: 'center' }}>
                            {item.nameButton}
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        </View>


    )
}



const Header = () => {
    return (
        <View style={{ marginHorizontal: 18, marginTop: 10 }}>
            <View >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', flex: 3, color: 'black' }}>Circle</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image resizeMode="contain" style={{}} source={require('../image/part1/Scan.png')} />
                        <Image resizeMode="contain" style={{ marginTop: 3 }} source={require('../image/part1/addIcon.png')} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 36, backgroundColor: '#e6e6e6', borderRadius: 15, marginVertical: 10 }}>
                    <Image resizeMode="contain"
                        style={{ alignSelf: 'center', flex: 1 }}
                        source={require('../image/part1/Search_Small.png')} />
                    <TextInput placeholder="Send the sample" style={{ flex: 5 }}></TextInput>
                    <Image resizeMode="contain"
                        style={{ alignSelf: 'center', marginRight: 10 }}
                        source={require('../image/part1/voice.png')} />

                </View>
            </View>
            <View>
                <FlatList renderItem={itemFlatList1}
                    horizontal={true}
                    data={arrayFlatList1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>

                </FlatList>
            </View>
        </View>
    )
}

export default Header