
import { FlatList, Text, View, Image } from "react-native"
import React from "react"

const arrayFlatList3 = [
    { titleImage: "Golden retriever", imageIcon: require('../image/part3/fl2_dog1.png'), countMember : 547 },
    { titleImage: "Back of the head", imageIcon: require('../image/part3/dog2FlatList2.png'), countMember : 1547 },
    { titleImage: "Adopt", imageIcon: require('../image/part3/fl2_dog1.png'), countMember : 2547 },
    { titleImage: "Labrador Peninsula", imageIcon: require('../image/part3/fl2_dog1.png'), countMember : 47 },
    { titleImage: "Ball troll", imageIcon: require('../image/part3/fl2_dog1.png'), countMember : 647 }

]

const Footer = () => {


    const renderItemFlatList3 = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <View>
                    <Image source={item.imageIcon} resizeMode="cover" style={{ height: 80, width: 80 }}></Image>
                </View>
                <View style={{ marginLeft: 8, justifyContent: 'center'}}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400' }}>{item.titleImage}</Text>
                    <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>{item.countMember + " Members"}</Text>
                </View>
                <View style={{flex: 1}}>

                </View>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={{ fontSize: 12, color: 'black',
                      color: 'white',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      borderRadius: 5,
                      width: 70,
                      height: 28,
                      fontWeight: '400', 
                      backgroundColor: '#FA6650' }}>Joined</Text>
                    
                </View>
            </View>
        )
    }


    return (
        <View style={{ marginHorizontal: 18, marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>The circle to join</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400', paddingTop: 8 }}>More</Text>
            </View>
            <FlatList
                style={{marginTop: 10 , height: '90%'}}
                data={arrayFlatList3}
                renderItem={renderItemFlatList3}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >

            </FlatList>
        </View>
    )
}

export default Footer