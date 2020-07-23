import React from 'react'
import {SafeAreaView, Text, View} from "react-native";
import style from "../style";

const Deck = (props) => {
    const { deck } = props
    const { container, title, caption } = style
    return(
        <SafeAreaView style={container}>
            <View>
                <Text style={title}>{deck?.title}</Text>
                <Text style={caption}>{deck?.questions?.length | 0} questions</Text>
            </View>
        </SafeAreaView>
    )
}

export default Deck