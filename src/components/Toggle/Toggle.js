import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/** Toggle component */
const Toggle = props => {
    const handleClick = e => {
        const radio = e.target;
        if (radio !== undefined) {
            const value = radio.value;
            if (props.onToggle !== undefined)
                props.onToggle(props.name, value);
        }
    };

    const { items, checked, disabled } = props;

    const radioItems = items.map((item, i) => {
        let value;
        let label;

        if (typeof item === 'string') {
            value = item.toUpperCase();
            label = value;
        } else {
            value = item.value.toUpperCase();
            label = item.label.toUpperCase();
        }

        const isChecked = value === (checked ? checked.toUpperCase() : '');

        return (
            <label key={i} className={classNames('control-label', { active: isChecked, 'radio-toggle-indicator': isChecked })}>
                <input type="radio" onClick={handleClick} disabled={disabled} value={value} />
                <span>{label}</span>
            </label>
        );
    });

    return (
        <div className={classNames('radio-toggle', { disabled })}>
            {radioItems}
        </div>
    );
};

Toggle.propTypes = {
    /** HTML ID for associated input */
    htmlId: PropTypes.string.isRequired,

    /** Name */
    name: PropTypes.string,
    
    /** Items */
    items: PropTypes.array.isRequired,
    
    /** Checked */
    checked: PropTypes.string,
    
    /** Is control disabled */
    disabled: PropTypes.bool,
    
    /** Function to call onToggle */
    onToggle: PropTypes.func
};

export default Toggle;