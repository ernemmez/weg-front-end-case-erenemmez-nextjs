import { configureStore,combineReducers } from "@reduxjs/toolkit"
import {HYDRATE,createWrapper} from 'next-redux-wrapper'
import employees from './employees'

const combineReducer = combineReducers({
    employees,
})

const masterReducer = (state,action) => {
    if(action.type === HYDRATE){
        const nextState = {
            ...state, //previous state
            employees:{
                employees:[...action.payload.employees.employees],
            }
        }
        return nextState;
    }else{
        return combineReducer(state,action)
    }
}

export const makeStore = () => configureStore({reducer:masterReducer})

export const wrapper = createWrapper(makeStore,{debug:true})