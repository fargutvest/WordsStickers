import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs/Tabs';


class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <Tabs passRef={this.props.passRef} shared_var={this.props.shared_var} ShareSpreedSheetId={this.props.ShareSpreedSheetId} />
            </div>
        );
    }
}

export default Content;