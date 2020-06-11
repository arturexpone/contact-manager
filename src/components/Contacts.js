import React from 'react';
import {Contact} from './Contact';
import {deleteClickHandler} from '../store/ac';
import {connect} from "react-redux";

const Contacts = (props) => {

    const {data, deleteClickHandler} = props;

    const users = data.map((c, i) => <Contact key={i+1} {...c} deleteClickHandler={() => deleteClickHandler(c.id)}/>);

    return (
        <>
            {users}
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
});

export const ContactsProvider = connect(mapStateToProps, {deleteClickHandler})(Contacts);
