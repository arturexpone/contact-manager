import React from 'react';

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