import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/orderReview'>Order Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>contact</Link>
        </nav>
    );
};

export default Header;