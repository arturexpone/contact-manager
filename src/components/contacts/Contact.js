import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export const Contact = ({id, name, email, phone, deleteClickHandler}) => {

    const [showState, setShowState] = useState(false);

    return (
        <div className='card card-body mb-3'>
            <h4>{`${name} `}
                <i onClick={() => setShowState(!showState)} className='fas fa-sort-down' />

                <NavLink to={`/contact/edit/${id}`}>
                    <i onClick={() => setShowState(!showState)} className='fas fa-sort-down' />
                </NavLink>

                <i onClick={() => deleteClickHandler(id)} className="fas fa-times"></i>
            </h4>
            {showState
                ? <ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                  </ul>
                : null
            }
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    deleteClickHandler: PropTypes.func,
}