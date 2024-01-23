import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import './Home.css'
import { useState } from "react";
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast("Tou have already added this t-shirt");
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    };

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(tshirt => tshirt._id !== id);
        setCart(remainingCart);
    };

    return (
        <div className="home-container">
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default Home;