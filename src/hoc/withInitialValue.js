import React from 'react';

export const withInitialValue = (Component) => {

    return class WithInitialValue extends React.Component {

        componentDidMount() {
            this.props.setInitialValue();
        }

        render() {
            return (
                <Component {...this.props} />
            )
        }
    }
}
