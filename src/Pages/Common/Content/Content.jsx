import React, { Component } from 'react';

class Content extends Component {
    state = {}
    render() {
        return <span className="layout__content">
            {this.props.children}
        </span>;
    }
}

export default Content;