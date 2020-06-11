import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const Contact = ({name, email, phone}) => {

    const [state, setState] = useState(false);


    return (
        <div className='card card-body mb-3'>
            <h4>{`${name} `}
                <i onClick={() => setState(!state)} className='fas fa-sort-down' />
            </h4>
            {state
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
}