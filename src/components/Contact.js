import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({name, email, phone}) => {

    return (
        <div className='card card-body mb-3'>
            <h4>{name}</h4>
            <ul className='list-group'>
                <li className='list-group-item'>Email: {email}</li>
                <li className='list-group-item'>Phone: {phone}</li>
            </ul>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
}