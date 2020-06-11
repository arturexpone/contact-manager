import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({name, email, phone}) => {

    return (
        <div>
            <h4>{name}</h4>
            <ul>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
            </ul>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
}