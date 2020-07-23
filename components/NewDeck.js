import React from 'react'
import {SafeAreaView, Text, View, TextInput, Button} from "react-native";
import style from "../style";
import {deleteDeck, saveDeck} from "../actions";
import {connect} from "react-redux";

const NewDeck = (props) => {
    const {addDeck, goBack, navigation} = props
    const {container, title, textBigger, input, button} = style
    const [value, onChangeText] = React.useState('Title of your deck');

    navigation.setOptions({title: 'Add New Deck'})

    const toAddDeck = () => {
        addDeck(value)
        goBack()
    }

    return(
        <SafeAreaView style={container}>
            <Text style={[title, textBigger]}>What is the title of your new deck?</Text>
            <View>
                <TextInput
                    style={input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <View style={button}>
                    <Button
                        title="Create Deck"
                        onPress={toAddDeck}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const mapDispatchToProps = (dispatch, { navigation }) => {
    return {
        addDeck: (title) => dispatch(saveDeck({title, questions: []})),
        goBack: () => navigation.goBack(),
    }
}


export default connect(null, mapDispatchToProps)( NewDeck )