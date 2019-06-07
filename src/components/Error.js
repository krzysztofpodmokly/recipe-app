import React from 'react';

const Error = ({ reason, meta }) => {
    const style = { height: "100vh", borderRadius: 0 }

    return (
        <div style={ style } className="ui icon red message">
            <div className="content">
                <div className="header">
                    { reason }
                </div>
                <p>{ meta }</p>
            </div>
        </div>
    );
};

export default Error;