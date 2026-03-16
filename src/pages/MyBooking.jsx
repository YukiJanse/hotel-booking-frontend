import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function MyBooking() {
    const [bookingData, setBookingData] = useState(
        JSON.parse(localStorage.getItem("booking"))
    );

    const cancelBooking = () => {
        setBookingData(null);
        localStorage.removeItem("booking");
    }

    if (!bookingData) {
        return <div
        className="d-flex justify-content-center align-items-center py-5">
            <div
            className="card shadow-lg border-0 p-4"
            style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
            >
                <h3 className="mb-4 text-center">Booking Information</h3>

                <p className="text-center">No booking data found</p>
            </div>
        </div>
        
        
    }

    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div
            className="card shadow-lg border-0 p-4"
            style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
            >
                <h3 className="mb-4 text-center">Booking Information</h3>

                <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="text-muted">Room</span>
                    <strong>{bookingData.room}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="text-muted">Name</span>
                    <strong>{bookingData.name}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="text-muted">Email</span>
                    <strong>{bookingData.email}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="text-muted">Check in</span>
                    <strong>{bookingData.firstDate}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="text-muted">Check out</span>
                    <strong>{bookingData.lastDate}</strong>
                </li>
                </ul>
                <button className="btn btn-primary" onClick={ cancelBooking }>Cancel the booking</button>
            </div>
        </div>
    );
}

export default MyBooking;