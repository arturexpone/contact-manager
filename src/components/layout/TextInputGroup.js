import React from 'react';
import PropTypes from 'prop-types';

export const TextInputGroup = (props) => {
    const {label, name, value, placeholder, type, onChange} = props;
    return (
        <div>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name='name'
                    className='form-control form-control-lg'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

TextInputGroup.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
}