import React from 'react';
import PropTypes from 'prop-types';


const Button = ({buttonCSS, buttonType, buttonText, dataTest, onClick}) => {
    return (
        <button data-test={`${dataTest}-button`} className={`btn btn-${buttonType} ${buttonCSS}`} onClick={onClick}>{buttonText}</button>
    )
}

Button.defaultProps = {
    buttonCSS: 'app-button',
    buttonType: 'light',
    buttonText: 'Button',
    dataTest: 'app',
    onClick: () => { console.log('button clicked') }
}

Button.propTypes = {
    buttonCSS: PropTypes.string,
    buttonType: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;