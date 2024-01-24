// import React from 'react';

import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ ring }) => {
    return (
        <div>
            <h2>Father...</h2>
            <section className="flex">
                <Brother ring={ring} >Dihan</Brother>
                <Myself ring={ring} >Shahrukh</Myself>
                <Sister >Nihal</Sister>
            </section>
        </div>
    );
};

export default Father;
Father.propTypes = { ring: String };