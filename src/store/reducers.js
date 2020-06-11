import React from "react";
import {Constance} from './constance';

const initialState = [
    {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
    },
    {
        id: 2,
        name: 'Karen Smith',
        email: 'karen@gmail.com',
        phone: '333-333-3333',
    },
    {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '111-111-2222',
    },

];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constance.DELETE_CONTACT:
            return state.filter(c => c.id !== action.payload);
        case Constance.ADD_CONTACT:
            return [...state,
                {...action.payload,
                 id: state[state.length - 1].id + 1
                }];
        default:
            return state;
    }
}