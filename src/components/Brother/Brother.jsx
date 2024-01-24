// import React from 'react';

import Special from "../Special/Special";

const Brother = ({ ring, children }) => {
    return (
        <div>
            <h2>{children}</h2>
            <section>
                <Special hasSpecial={true} ring={ring} />
            </section>
        </div>
    );
};

export default Brother;
Brother.propTypes = { children: String, ring: String };