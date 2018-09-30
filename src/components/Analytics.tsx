import React from 'react';
//
let Analytics = {};
if (typeof document !== 'undefined') {
    Analytics = require('react-router-ga').default;
}

// @ts-ignore
export default ({ children, ...rest }) => {
    if (typeof document !== 'undefined') {
        // @ts-ignore
        return <Analytics {...rest}>{children}</Analytics>;
    }

    return children;
};
