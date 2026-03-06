import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function BookingPage() {
    const [searchParams] = useSearchParams();
    const room = searchParams.get("room");
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const firstDate = searchParams.get("firstDate");
    const lastDate = searchParams.get("lastDate");

    const [isBooked, setIsBooked] = useState(false);

    const handleBooking = () => {
        const bookingData = {room, firstDate, lastDate, name, email}
        localStorage.setItem("booking", JSON.stringify(bookingData))
        setIsBooked(true);
    }

    return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
      >
        {isBooked ? (
          <div className="text-center">
            <h2 className="text-success mb-3">✔ Bokningen är bekräftad</h2>
            <p className="text-muted">
              Tack {name}! Du har bokat från {firstDate} till {lastDate}.
            </p>
            <a href="./my-booking">Check your booking</a>
          </div>
        ) : (
          <>
            <h3 className="mb-4 text-center">Booking Information</h3>

            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Room</span>
                <strong>{room}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Name</span>
                <strong>{name}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Email</span>
                <strong>{email}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Check in</span>
                <strong>{firstDate}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Check out</span>
                <strong>{lastDate}</strong>
              </li>
            </ul>

            <div className="d-grid">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleBooking}
              >
                Confirm Booking
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingPage;