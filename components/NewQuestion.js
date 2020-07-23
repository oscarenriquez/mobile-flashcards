import React from 'react'
import {Button, SafeAreaView, Text, TextInput, View} from "react-native";
import style from "../style";
import {addCard, deleteDeck} from "../actions";
import {connect} from "react-redux";

const NewQuestion = (props) => {
    const {addCard, goBack, deck, navigation} = props
    const {container, title, textBigger, input, button} = style
    const [question, setQuestion] = React.useState('Question');
    const [answer, setAnswer] = React.useState('Answer');

    navigation.setOptions({headerTitle: deck.title, headerTitleAlign: "center"})

    const toAddFlashCard = () => {
        addCard(question, answer)
        goBack()
    }

    return(
        <SafeAreaView style={container}>
            <Text style={[title, textBigger]}>Add Card</Text>
            <View>
                <TextInput
                    style={input}
                    onChangeText={text => setQuestion(text)}
                    value={question}
                />
                <TextInput
                    style={input}
                    onChangeText={text => setAnswer(text)}
                    value={answer}
                />
                <View style={button}>
                    <Button
                        title="Submit"
                        onPress={toAddFlashCard}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state, { route }) => {
    const { deckId } = route.params

    return {
        deckId,
        deck: state[deckId],
    }
}

const mapDispatchToProps = (dispatch, { route, navigation }) => {
    const { deckId } = route.params

    return {
        addCard: (question, answer) => dispatch(addCard(deckId, question, answer)),
        goBack: () => navigation.goBack(),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)( NewQuestion )