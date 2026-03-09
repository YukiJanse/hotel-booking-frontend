import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function StartPage() {
    const [room, setRoom] = useState("Standard");
    const [checkIn, setCheckInDate] = useState("");
    const [checkOut, setCheckOutDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [touched, setTouched] = useState({
        name: false, email: false, checkIn: false, checkOut: false
    })
    const [searchParams] = useSearchParams();
    const chosenRoomType = searchParams.get("roomType");

    useEffect(() => {
      if (chosenRoomType) {
        setRoom(chosenRoomType);
      }
    });

    const today = new Date().toISOString().split("T")[0];

    const oneDayAfterCheckin = (dateString) => {
        const d = new Date(dateString);
        d.setDate(d.getDate() + 1);
        return d.toISOString().split("T")[0];
    }

    const isCheckInAndOutValid = (checkInDate, checkOutDate) => {
        const checkInDateObj = new Date(checkInDate);
        const checkOutDateObj = new Date(checkOutDate);
        return checkInDateObj < checkOutDateObj;
    }

    const isNameValid = (name) => name.trim().length > 0;

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const isFormValid = 
        isNameValid(name) &&
        isEmailValid(email) &&
        checkIn &&
        room && 
        checkOut && 
        isCheckInAndOutValid(checkIn, checkOut);

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">Hotel Booking</h2>

        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className={`form-control ${
                touched.name ?
                    isNameValid(name) ?
                        "is-valid" :
                        "is-invalid"
                    : ""
            }`}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched({...touched, name: true})}
          />
          {touched.name && !isNameValid(name) && (
            <div className="invalid-feedback">
                Name cannot be empty
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${
                touched.email ?
                    isEmailValid(email) ?
                    "is-valid" :
                    "is-invalid" :
                ""
            }`}
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched({...touched, email: true})}
          />
          {touched.email && !isEmailValid(email) &&
            <div className="invalid-feedback">
                Email cannot be empty or it's wrong format
            </div>
          }
        </div>

        <div className="mb-3">
          <label className="form-label">Select Check-in Date</label>
          <input
            type="date"
            className={`form-control ${
                touched.checkIn && touched.checkOut ?
                    isCheckInAndOutValid(checkIn, checkOut) ?
                    "is-valid" :
                    "is-invalid" :
                ""
            }`}
            min={today}
            value={checkIn}
            onChange={(e) => setCheckInDate(e.target.value)}
            onBlur={() => setTouched({...touched, checkIn: true})}
          />
          {touched.checkIn && touched.checkOut && !isCheckInAndOutValid(checkIn, checkOut) &&
            <div className="invalid-feedback">
                It cannot be empty or Check-out cannot be before check-in
            </div>
          }
        </div>

        <div className="mb-3">
          <label className="form-label">Select Check-out Date</label>
          <input
            type="date"
            className={`form-control ${
                touched.checkIn && touched.checkOut ?
                    isCheckInAndOutValid(checkIn, checkOut) ?
                    "is-valid" :
                    "is-invalid" :
                ""
            }`}
            min={oneDayAfterCheckin(today) || oneDayAfterCheckin(checkIn)}
            value={checkOut}
            onChange={(e) => setCheckOutDate(e.target.value)}
            onBlur={() => setTouched({...touched, checkOut: true})}
          />
          {touched.checkIn && touched.checkOut && !isCheckInAndOutValid(checkIn, checkOut) &&
            <div className="invalid-feedback">
                It cannot be empty or Check-out cannot be before check-in
            </div>
          }
        </div>

        <div className="mb-4">
          <label className="form-label">Room Type</label>
          <select
            className="form-select"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
        </div>

        <div className="d-grid">
          <Link
            to={`booking?room=${room}&firstDate=${checkIn}&lastDate=${checkOut}&name=${name}&email=${email}`}
            className={`btn btn-primary btn-lg ${!isFormValid && "disabled"}`}
          >
            Go to Booking
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StartPage;