import React from 'react';
import Switch from 'ps-react/Switch';

/** Switch */
export default class ExampleSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
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
            rounded={false}
            onSwitch={this.onSwitch}
        />
        )
    }
}