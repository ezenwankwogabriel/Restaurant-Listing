import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";


const AppText = ({appTextExtraCSS, size, text, children}) => {
    return (
        <p data-testid="app-text" className={`${appTextExtraCSS} ${size}`}>{children || text}</p>
    )
}

AppText.defaultProps = {
    appTextExtraCSS: 'app-text',
    size: 'medium',
    text: 'App text content',
}

AppText.propTypes = {
    appTextExtraCSS: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default AppText;