import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Add Some Products...</p>
    } else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            {
                cart.length > 2
                    ? <span className='purple'>Aaro kino...</span>
                    : <span>Fokira...</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 3 && <p>Bonas...</p>
            }
            {
                cart.length === 4 || <p>Charta to Hoilo na...</p>
            }
        </div>
    );
};

export default Cart;
Cart.propTypes = { cart: Object, handleRemoveFromCart: Node };