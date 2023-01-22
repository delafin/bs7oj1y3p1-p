import {configureStore, combineReducers } from '@reduxjs/toolkit';
import { type CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { createWrapper  } from 'next-redux-wrapper';
import { variableApi } from './variableApi'; // rename from `export default variableApi;`

const allReducers = combineReducers({
    [variableApi.reducerPath]: variableApi.reducer
})

// const mainReducer: typeof allReducers = (state, action) => {
//     if (action.type === HYDRATE ) {
//         const nextState = {
//             ...state,
//             ...action.payload,
//         };
//         return nextState;
//     } else {
//         return allReducers(state, action);
//     }
// };

const store = () => {
    return configureStore({
        devTools: process.env.NODE_ENV !== 'production',
        reducer: allReducers, // reducerOne
        middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware().concat(variableApi.middleware) // rdxtqCreateApiU
    })
}

export default store;

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<typeof allReducers>
export type AppDispatch = AppStore['dispatch']

// SSR
// eslint-disable-next-line
export const wrapper = createWrapper<AppStore>(store);