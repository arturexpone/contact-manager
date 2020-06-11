import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const TextInputGroup = (props) => {
    const {label, name, value, placeholder, type, onChange, error} = props;
    return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name='name'
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': error,
                    })}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error &&
                <div className='invalid-feedback'>
                    {error}
                </div>}

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
    error: PropTypes.string,
}