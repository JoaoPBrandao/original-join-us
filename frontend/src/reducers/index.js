import { carrinhoReducer } from './carrinhoReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    carrinhoState: carrinhoReducer
});