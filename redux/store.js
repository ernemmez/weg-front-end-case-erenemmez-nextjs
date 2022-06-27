import { configureStore,combineReducers } from "@reduxjs/toolkit"
import {createWrapper} from 'next-redux-wrapper'
import employees from './employees'

const combineReducer = combineReducers({
    employees,
})

export const makeStore = () => configureStore({reducer:combineReducer})

export const wrapper = createWrapper(makeStore)