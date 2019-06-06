import React from 'react';

const Error = ({ reason, meta }) => {
    return (
        <div className="ui icon red message">
            <i className="notched circle loading icon"></i>
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