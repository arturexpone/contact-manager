import {Constance} from './constance';
import axios from 'axios';

export const setData = (data) => ({type: Constance.SET_DATA, payload: data});

export const addContact = (contact) => (dispatch) => {
    dispatch({type: Constance.ADD_CONTACT, payload: contact});
    // axios.post('https://jsonplaceholder.typicode.com/users', contact)
    //     .then(res => dispatch({type: Constance.ADD_CONTACT, payload: res.data}))
};


export const deleteClickHandler = (id) => (dispatch) => {
    dispatch({type: Constance.DELETE_CONTACT, payload: id});
    // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res => {dispatch({type: Constance.DELETE_CONTACT, payload: id})})
};
