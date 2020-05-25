import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    );
}

MyComponent.propTypes = {
    children: PropTypes.array
}

export default Content;