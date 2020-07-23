import { AsyncStorage, Alert } from 'react-native'
const FLASH_CARDS_KEY = 'mobileFlashCardsBD'

const initialData = {
    React: {
        title: 'React',
            questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
            questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export const getDecks = async () => {
    try {
        const decks = await AsyncStorage.getItem(FLASH_CARDS_KEY)
        if(!decks) {
            AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(initialData), () => {
                console.log('Fetching initial data')
                Alert.alert('Fetching initial data')
            });
            return initialData
        }
        Alert.alert(decks)
        return JSON.parse(decks)
    } catch (error) {
        Alert.alert(error.message)
    }
}

export const getDeck = async (key) => {
    try {
        const decks = await getDecks()
        if (decks){
            return decks[key]
        }
        Alert.alert(`Unable to fetch data`)
        return null
    } catch (error) {
        Alert.alert(error.message)
    }
}

export const saveDeckTitle = async ({ entry, key }) => {
    return await AsyncStorage.mergeItem(FLASH_CARDS_KEY, JSON.stringify({
        [key]: entry
    }), () => {
        Alert.alert('Deck saved!')
    })
}

export const deleteDeckTitle = async ( key ) => {
    return AsyncStorage.getItem(FLASH_CARDS_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(data), () => {
                Alert.alert('Deck deleted!')
            })
        })
}

export const addCardToDeck = async ({ key, question, answer }) => {
    const deck = await getDeck(key)
    deck.questions = deck.questions.concat([{question, answer}])
    return saveDeckTitle({entry: deck, key})
}