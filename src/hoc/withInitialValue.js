import React from 'react';

export const withInitialValue = (Component) => {

    return class WithInitialValue extends React.Component {

        componentDidUpdate(){
            this.props.setInitialValue();
        }

        render() {
            
            return (
                <Component {...this.props} />
            )
        }
    }
}
