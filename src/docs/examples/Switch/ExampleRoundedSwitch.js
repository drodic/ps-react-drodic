import React from 'react';
import Switch from 'ps-react/Switch';

/** Rounded Switch */
export default class ExampleRoundedSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true
        };
    }

    onSwitch = (propsName, value) => {
        debugger;
        this.setState({ checked: value })
    }

    render() {
        return (
        <Switch
            htmlId="example-switch"
            name="hasValue"
            checked={this.state.checked}
            onSwitch={this.onSwitch}
        />
        )
    }
}