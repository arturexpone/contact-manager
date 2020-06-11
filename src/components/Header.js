import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({branding}) => {
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    )
}

Header.propTypes = {
    branding: PropTypes.string.isRequired,
}
