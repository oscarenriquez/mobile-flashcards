import React from 'react'
import {FlatList, SafeAreaView, TouchableOpacity, View, Text} from "react-native";
import Deck from "./Deck";
import style from "../style";
import {connect} from "react-redux";
import {fetchDecks} from "../actions";

const DeckList = React.memo((props) => {

    const { container, caption } = style
    const { navigation, decks, dispatch } = props

    React.useEffect(()=> {
        if(!decks || decks.length === 0) {
            dispatch(fetchDecks)
        }
    })

    const touchableDeck = ({item, style}) => {
        return (
            <TouchableOpacity onPress={() => toFlashCard(item)} style={style}>
                <Deck deck={item} />
            </TouchableOpacity>
        )
    }

    const toFlashCard = (deck) => {
        navigation.navigate('FlashCard',
            {deckId: deck.title}
        )
    }

    if (!decks) {
        return (
            <View style={container}>
                <Text style={caption}>Loading...</Text>
            </View>
        )
    }

    return(
        <SafeAreaView style={container}>
            <FlatList
                data={decks}
                renderItem={touchableDeck}
                keyExtractor={item => item.title}
            />
        </SafeAreaView>
    )
})

const mapStateToProps = (state) => ({
    decks: Object.keys(state).map((key) => {
        return {
            ...state[key]
        }
    })
})

export default connect(mapStateToProps)( DeckList )