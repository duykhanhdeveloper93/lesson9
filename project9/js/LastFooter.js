
import React from "react"
import { View, Image } from "react-native"


const LastFooter = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18 }}>
                <Image resizeMode="contain"
                    style={{ alignSelf: 'center' }}
                    source={require('../image/part4/house.png')} />
                <Image resizeMode="contain"
                    style={{ alignSelf: 'center' }}
                    source={require('../image/part4/Subtract.png')} />
                <Image resizeMode="contain"
                    style={{ alignSelf: 'center' }}
                    source={require('../image/part4/addIcon1.png')} />
                <Image resizeMode="contain"
                    style={{ alignSelf: 'center' }}
                    source={require('../image/part4/comment.png')} />
                <Image resizeMode="contain"
                    style={{ alignSelf: 'center' }}
                    source={require('../image/part4/user.png')} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Image resizeMode="contain"
                    style={{ alignSelf: 'center' }}
                    source={require('../image/part4/backHome.png')} />
            </View>
        </View>

    )
}

export default LastFooter