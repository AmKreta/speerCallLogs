import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import callInfoReducer from './callInfo.reducer';

export const store = configureStore({
    devTools: true,
    middleware: [logger, thunk],
    reducer: combineReducers({
        callInfo: callInfoReducer
    }),
});