import React, { Component } from 'react';
import s from './ErrorBar.module.css';


class ErrorBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.errorBar}>
                <p align="center">
                    {this.props.error}
                </p>
            </div>
        );
    }
}

export default ErrorBar;