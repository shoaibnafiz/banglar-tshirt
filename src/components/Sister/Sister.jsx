// import React from 'react';

const Sister = ({ children }) => {
    return (
        <div>
            <h2>{children}</h2>
        </div>
    );
};

export default Sister;
Sister.propTypes = { children: String };