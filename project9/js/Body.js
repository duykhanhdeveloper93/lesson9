
import { FlatList, Text, View, Image } from "react-native"
import React from "react"

const arrayFlatList2 = [
    { titleImage: "Golden retriever", imageIcon: require('../image/part3/fl2_dog1.png') },
    { titleImage: "Back of the head", imageIcon: require('../image/part3/fl2_dog1.png') },
    { titleImage: "Adopt", imageIcon: require('../image/part3/fl2_dog1.png') },
    { titleImage: "Labrador Peninsula", imageIcon: require('../image/part3/fl2_dog1.png') },
    { titleImage: "Ball troll", imageIcon: require('../image/part3/fl2_dog1.png') }

]

const Body = () => {


    const renderItemFlatList2 = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginRight: 13, width: 100 }}>
                <View >
                    <Image source={item.imageIcon} resizeMode="cover" style={{ height: 80, width: 80 }}></Image>
                    <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', paddingTop: 8, alignSelf: 'center' }} >{item.titleImage}</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={{ marginHorizontal: 18 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Popular circle</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400', paddingTop: 8 }}>More</Text>
            </View>
            <FlatList
                style={{marginTop: 10 }}
                horizontal={true}
                data={arrayFlatList2}
                renderItem={renderItemFlatList2}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >

            </FlatList>
        </View>
    )
}

export default Body