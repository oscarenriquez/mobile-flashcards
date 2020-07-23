import React from 'react'
import {SafeAreaView, Text, View, Button} from "react-native";
import style from "../style";
import {connect} from "react-redux";

const Quiz = React.memo((props) => {
    const {deck, goBack, navigation} = props
    const {questions} = deck
    const {container, title, caption, actions, button, textBigger} = style
    const [currentQuestion, setCurrentQuestion] = React.useState(null)
    const [fakeAnswer, setFakeAnswer] = React.useState('')
    const [totalQuestions, setTotalQuestions] = React.useState(0)
    const [indexQuestion, setIndexQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [showResult, setShowResult] = React.useState(false)

    navigation.setOptions({title: deck.title, headerTitleAlign: "center", headerTitle: "Quiz"})

    const getRandomAnswer = () => {
        const index = Math.floor(Math.random() * totalQuestions)
        setFakeAnswer( questions[index].answer )
    }

    React.useEffect(() => {
        if (questions && questions.length > 0) {
            setCurrentQuestion(questions[indexQuestion])
            setTotalQuestions(questions.length - 1)
            getRandomAnswer()
        }
    })

    if (!questions || questions.length === 0) {
        return(
            <SafeAreaView style={container}>
                <Text style={title}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
            </SafeAreaView>
        )
    }

    if (!currentQuestion) {
        return (
            <View style={container}>
                <Text style={caption}>Loading...</Text>
            </View>
        )
    }

    const gotNextQuestion = () => {
        if (indexQuestion < totalQuestions) {
            setIndexQuestion(indexQuestion+1)
            setCurrentQuestion(questions[indexQuestion])
            setShowResult(false)
            getRandomAnswer()
        }
    }

    const answerFalse = () => {
        if (fakeAnswer !== currentQuestion.answer) {
            setScore(score+1)
        }
        setShowResult(true)
    }

    const answerTrue = () => {
        if (fakeAnswer === currentQuestion.answer) {
            setScore(score+1)
        }
        setShowResult(true)
    }

    if (showResult) {
        return (
            <SafeAreaView style={container}>
                <View>
                    <Text style={title}>
                        Correct Answer: {currentQuestion?.answer}
                    </Text>

                    <Text style={[caption, textBigger]}>
                        {indexQuestion == totalQuestions && 'Final '}
                        Score: {score}/{totalQuestions + 1}
                    </Text>

                    <View style={actions}>
                        {
                            indexQuestion < totalQuestions ?
                                <View style={button}>
                                    <Button
                                        title="Next"
                                        style={button}
                                        color="#00ff00"
                                        onPress={gotNextQuestion}
                                    />
                                </View> : null
                        }

                        <View style={button}>
                            <Button
                                title="Close"
                                color="#ff0000"
                                style={button}
                                onPress={goBack}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>)
    } else {
        return (
            <SafeAreaView style={container}>
                <View>
                    <Text style={title}>
                        Question: {currentQuestion?.question}
                    </Text>

                    <Text style={caption}>
                        Answer: {fakeAnswer}
                    </Text>

                    <View style={actions}>
                        <View style={button}>
                            <Button
                                title="TRUE"
                                style={button}
                                color="#00ff00"
                                onPress={answerTrue}
                            />
                        </View>
                        <View style={button}>
                            <Button
                                title="FALSE"
                                color="#ff0000"
                                style={button}
                                onPress={answerFalse}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

})

const mapStateToProps = (state, { route }) => {
    const { deckId } = route.params

    return {
        deckId,
        deck: state[deckId],
    }
}

const mapDispatchToProps = (dispatch, { navigation }) => {
    return {
        goBack: () => navigation.goBack(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Quiz )