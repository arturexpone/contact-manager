import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {deleteClickHandler, setData} from '../../store/ac';
import {Contact} from './Contact';

const Contacts = (props) => {

    const {data, deleteClickHandler, setData} = props;

    const users = data.map((c, i) => <Contact key={i+1} {...c} deleteClickHandler={() => deleteClickHandler(c.id)}/>);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data));
    }, [])

    return (
        <>
            <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>
                List
            </h1>
            {users}
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
});

export const ContactsProvider = connect(mapStateToProps, {deleteClickHandler, setData})(Contacts);
