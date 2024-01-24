// import React from 'react';

import Special from "../Special/Special";

const Myself = ({ ring, children }) => {
    return (
        <div>
            <h2>{children}</h2>
            <section>
                <Special ring={ring} />
            </section>
        </div>
    );
};

export default Myself;
Myself.propTypes = { children: String, ring: String };