import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring, hasSpecial }) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            {hasSpecial && <p><small>Ring: {ring}</small></p>}
            {hasSpecial && <p><small>Ring: {angti}</small></p>}
        </div>
    );
};

export default Special;
Special.propTypes = { ring: String, hasSpecial: Boolean };