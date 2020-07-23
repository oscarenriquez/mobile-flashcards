import React from 'react'
import style from "../style";
import {Text, Button, SafeAreaView, View} from "react-native";
import {connect} from "react-redux";
import {deleteDeck} from "../actions";

const FlashCard = (props) => {
    const {navigation, goBack, remove, deck, deckId} = props
    const {container, title, caption, button, actions} = style

    navigation.setOptions({headerTitle: deck.title, headerTitleAlign: "center"})

    const toAddQuestion = () => {
        navigation.navigate('NewQuestion',
            { deckId }
        )
    }
    const toQuiz = () => {
        navigation.navigate('Quiz',
            { deckId }
        )
    }

    const deleteDeck = () => {
        remove()
        goBack()
    }

    return(
        <SafeAreaView style={container}>
            <View>
                <Text style={title}>{deck?.title}</Text>
                <Text style={caption}>{deck?.questions?.length | 0} questions</Text>
            </View>
            <View style={actions}>
                <View style={button}>
                    <Button
                        title="Add Card"
                        style={button}
                        onPress={toAddQuestion}
                    />
                </View>
                <View style={button}>
                    <Button
                        title="Start Quiz"
                        style={button}
                        color="#000000"
                        onPress={toQuiz}
                    />
                </View>
                <View style={button}>
                    <Button
                        title="Delete Deck"
                        color="#ff0000"
                        style={button}
                        onPress={deleteDeck}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state, { route }) => {
    console.log(route)
    const { deckId } = route.params

    return {
        deckId,
        deck: state[deckId],
    }
}

const mapDispatchToProps = (dispatch, { route, navigation }) => {
    const { deckId } = route.params

    return {
        remove: () => dispatch(deleteDeck(deckId)),
        goBack: () => navigation.goBack(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( FlashCard )