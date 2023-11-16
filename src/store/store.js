import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from './slice/weather';
import timeReducer from './slice/time';

export const store = configureStore({
    reducer : {
        weather : weatherReducer,
        time : timeReducer,
    }
})