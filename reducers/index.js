import {ADD_CARD, DELETE_DECK, FETCH_DECKS, RECEIVE_DECKS, SAVE_DECK} from "../constants";

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case FETCH_DECKS:
            return {
                ...state
            }
        case SAVE_DECK:
            return {
                ...state,
                [action.entry.title]: action.entry
            }
        case DELETE_DECK:
            state[action.key] = undefined
            delete state[action.key]
            return {
                ...state
            }
        case ADD_CARD:
            return {
                ...state,
                [action.key]: {
                    ...state[action.key],
                    questions: state[action.key].questions.concat([{question: action.question, answer: action.answer}])
                }
            }
        default:
            return state
    }
}