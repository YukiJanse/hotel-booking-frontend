import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-dark text-white p-3 d-flex flex-row">
            <h1>Hotel Booking</h1>
            <nav className="navbar align-items-center ms-auto">
                <ul className="list-unstyled d-flex flex-row">
                    <li><Link className="navbar-brand text-white" to="/">Top</Link></li>
                    <li><Link className="navbar-brand text-white" to="/my-booking">My booking</Link></li>
                    <li><Link className="navbar-brand text-white" to="/">Room list</Link></li>
                    <li><Link className="navbar-brand text-white" to="/">About us</Link></li>
                    <li><Link className="navbar-brand text-white" to="/">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;