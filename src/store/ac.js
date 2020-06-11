import {Constance} from './constance';

export const deleteClickHandler = (id) => ({type: Constance.DELETE_CONTACT, payload: id});
export const addContact = (contact) => ({type: Constance.ADD_CONTACT, payload: contact});