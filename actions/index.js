import {ADD_CARD, DELETE_DECK, FETCH_DECK, FETCH_DECKS, RECEIVE_DECKS, SAVE_DECK} from "../constants";

export const fetchDecks = {
    type: FETCH_DECKS
}

export const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
})

export const fetchDeck = (key) => ({
    type: FETCH_DECK,
    key
})

export const saveDeck = (entry) => ({
    type: SAVE_DECK,
    key: entry.title,
    entry
})

export const deleteDeck = (key) => ({
    type: DELETE_DECK,
    key
})

export const addCard = (key, question, answer) => ({
  type: ADD_CARD,
  key,
  question,
  answer
})