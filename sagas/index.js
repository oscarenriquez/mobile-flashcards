import {put, takeEvery, fork, call, takeLatest} from "redux-saga/effects";
import {ADD_CARD, DELETE_DECK, FETCH_DECKS, SAVE_DECK} from "../constants";
import * as _api from '../api/_FlashCardsAPI'
import {receiveDecks} from "../actions";

/**
 * Saga to fetch decks from the API
 * @returns generator
 */
function* fetchDecksSaga() {
    try {
        const decks = yield call(_api.getDecks);
        yield put(receiveDecks(decks));
    } catch (e) {
        console.warn("[fetchDecksSaga] error fetching decks", e)
        alert("Error fetching decks, please try again later!")
    }
}

/**
 * Saga to delete deck from the API
 * @returns generator
 */
function* deleteDeckSaga(action) {
    try {
        yield call(_api.deleteDeckTitle, action.key);
    } catch (e) {
        console.warn("[deleteDeckSaga] error deleting deck", e)
        alert("Error deleting deck, please try again later!")
    }
}

/**
 * Saga to save deck and fetch the complete list of decks
 * @param action
 * @returns generator
 */
function* saveDeckSaga(action) {
    try {
        yield call(_api.saveDeckTitle, action);
    } catch (e) {
        console.warn("[saveDeckSaga] error ", e)
        alert("Error saving deck, please try again later!")
    }
}

/**
 * Saga to Add and Save a new card
 * @param action
 * @returns generator
 */
function* addCardToDeckSaga(action) {
    try {
        yield call(_api.addCardToDeck, action);
    } catch (e) {
        console.warn("[addCardToDeckSaga] error ", e)
        alert("Error adding new card, please try again later!")
    }
}

function* watchFetchDecks() {
    yield takeLatest(FETCH_DECKS, fetchDecksSaga)
}

function* watchSaveDeck() {
    yield takeEvery(SAVE_DECK, saveDeckSaga)
}

function* watchDeleteDeck() {
    yield takeEvery(DELETE_DECK, deleteDeckSaga)
}

function* watchAddCard() {
    yield takeEvery(ADD_CARD, addCardToDeckSaga)
}

export default function* rootSag() {
    yield fork(watchFetchDecks)
    yield fork(watchSaveDeck)
    yield fork(watchDeleteDeck)
    yield fork(watchAddCard)
}