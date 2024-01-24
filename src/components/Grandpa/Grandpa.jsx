import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
// export const RingContext = createContext('gold');
export const RingContext = createContext();
export const MoneyContext = createContext();

const Grandpa = () => {
    const ring = "Diamond";
    const [money, setMoney] = useState(0);

    return (
        <div className="grandpa">
            <h2>Grandpa...</h2>
            <p>has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value="Golden Ring">
                    <section className="flex">
                        <Father ring={ring} />
                        <Uncle />
                        <Aunty />
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;