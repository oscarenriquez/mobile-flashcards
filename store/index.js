import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import logger from "../utils/logger";

/**
 * Configure Redux Store
 * @returns {Store<unknown, Action>}
 */
export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware, logger)
        )
    );
    sagaMiddleware.run(rootSaga)
    return store;
}