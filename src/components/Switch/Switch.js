import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Switch component */
const Switch = props => {
    const handleChange = e => {
        const radio = e.target;
        if (radio !== undefined) {
            const value = radio.checked;
            if (props.onSwitch !== undefined)
                props.onSwitch(props.name, value);
        }
    };

    const { htmlId, name, checked, disabled, rounded } = props;

    return (
        <label className="switch">
            <input id={htmlId} name={name} type="checkbox" onChange={handleChange} disabled={disabled} checked={checked}></input>
            <span className={classNames('slider', { 'round': rounded })}></span>
        </label>
    );
};

Switch.propTypes = {
    /** HTML ID for associated input */
    htmlId: PropTypes.string.isRequired,

    /** Name */
    name: PropTypes.string,
        
    /** Checked */
    checked: PropTypes.bool,
    
    /** Is control disabled */
    disabled: PropTypes.bool,
    
    /** Is control rounded */
    rounded: PropTypes.bool,

    /** Function to call onSwitch */
    onSwitch: PropTypes.func
};

Switch.defaultProps = {
    checked: false,
    disabled: false,
    rounded: true
}

export default Switch;