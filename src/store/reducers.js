import React from "react";
import {Constance} from './constance';

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constance.SET_DATA:
            return [...state, ...action.payload];
        case Constance.DELETE_CONTACT:
            return state.filter(c => c.id !== action.payload);
        case Constance.ADD_CONTACT:
            return [{...action.payload, id: state[state.length - 1].id + 1}, ...state];
        default:
            return state;
    }
}