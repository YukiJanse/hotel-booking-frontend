import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-dark text-white">
            <div className="container d-flex flex-wrap align-items-center py-3">
                <h1 className="h5 me-auto">Hotel Booking</h1>
                
                <button
                    className="btn btn-outline-light d-md-none"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <nav
                    className={`w-100 d-md-flex flex-md-row justify-content-end mt-2 mt-md-0 ${
                        isOpen ? "d-block" : "d-none d-md-flex"
                    }`}
                >
                    <ul className="list-unstyled d-flex flex-column flex-md-row mb-0">
                        <li className="mx-2 my-1 my-md-0">
                            <Link className="text-white text-decoration-none" to="/">Top</Link>
                        </li>
                        <li className="mx-2 my-1 my-md-0">
                            <Link className="text-white text-decoration-none" to="/my-booking">My booking</Link>
                        </li>
                        <li className="mx-2 my-1 my-md-0">
                            <Link className="text-white text-decoration-none" to="/room-list">Room list</Link>
                        </li>
                        <li className="mx-2 my-1 my-md-0">
                            <Link className="text-white text-decoration-none" to="/about-us">About us</Link>
                        </li>
                        <li className="mx-2 my-1 my-md-0">
                            <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;