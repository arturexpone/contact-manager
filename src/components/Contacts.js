import React, {useState} from 'react';
import {Contact} from "./Contact";

export const Contacts = () => {

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
    const [state, setState] = useState(initialState);

    const deleteClickHandler = (id) => {
        const newState = state.filter(c => c.id !== id);
        setState(newState);
    }

    const users = state.map((c, i) => <Contact key={i+1} {...c} deleteClickHandler={deleteClickHandler}/>);

    return (
        <>
            {users}
        </>
    )
}
