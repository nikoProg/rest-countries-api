import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Where in the world?</h1>
            <div className="links">
                <Link to="/">DARK MODE PLACEHOLDER</Link>
            </div>
        </nav>
    );
}
 
export default Navbar