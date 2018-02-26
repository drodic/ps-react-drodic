import React from 'react';
import Toggle from 'ps-react/Toggle';

/** Optional TextBox */
export default class ExampleToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: 'YES'
        };
    }

    onToggle = (propsName, value) => {
        this.setState({ checked: value })
    }

    render() {
        return (
        <Toggle
            htmlId="example-toggle"
            name="hasValue"
            items={[ "YES", "NO" ]}
            checked={this.state.checked}
            onToggle={this.onToggle}
        />
        )
    }
}