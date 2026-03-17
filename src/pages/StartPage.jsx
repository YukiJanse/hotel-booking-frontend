import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function StartPage() {
  const [form, setForm] = useState({
    room: "Standard",
    checkIn: "",
    checkOut: "",
    name: "",
    email: "",
  });

  const [touched, setTouched] = useState({
      name: false, email: false, checkIn: false, checkOut: false
  })
  const isDateTouched = touched.checkIn && touched.checkOut;

  const [searchParams] = useSearchParams();
  const chosenRoomType = searchParams.get("roomType");

  // ===== Effects =====
  useEffect(() => {
    if (chosenRoomType) {
      setForm((prev) => ({
        ...prev,
        room: chosenRoomType
      }))
    }
  }, [chosenRoomType]);

  // ===== Helpers =====
  const today = new Date().toISOString().split("T")[0];

  const oneDayAfter = (dateString) => {
      const d = new Date(dateString);
      d.setDate(d.getDate() + 1);
      return d.toISOString().split("T")[0];
  };

  const validators = {
    name: (v) => v.trim().length > 0,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    dates: (inDate, outDate) =>
      inDate && outDate && new Date(inDate) < new Date(outDate),
  };

  // ===== Derived state =====
  const isValid = {
    name: validators.name(form.name),
    email: validators.email(form.email),
    dates: validators.dates(form.checkIn, form.checkOut),
  };

  const isFormValid = 
      isValid.name &&
      isValid.email &&
      isValid.dates &&
      form.room;

  // ===== Handler =====
  const handleChange = (field) =>  (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleBlur = (field) => () => {
  setTouched((prev) => ({
    ...prev,
    [field]: true
  }));
};

  const inputClass = (isTouched, valid) => 
    `form-control ${
      isTouched ? (valid ? "is-valid" : "is-invalid") : ""
    }`;


  return (
    <div className="container py-5" >
    <div className="d-flex justify-content-center">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
      >
        <h2 className="text-center mb-4">Hotel Booking</h2>

        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className={inputClass(touched.name, isValid.name)}
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          {touched.name && !isValid.name && (
            <div className="invalid-feedback">
                Name cannot be empty
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={inputClass(touched.email, isValid.email)}
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {touched.email && !isValid.email &&
            <div className="invalid-feedback">
                Email cannot be empty or it's wrong format
            </div>
          }
        </div>

        <div className="mb-3">
          <label className="form-label">Select Check-in Date</label>
          <input
            type="date"
            className={inputClass(isDateTouched, isValid.dates)}
            min={today}
            value={form.checkIn}
            onChange={handleChange("checkIn")}
            onBlur={handleBlur("checkIn")}
          />
          {touched.checkIn && touched.checkOut && !isValid.dates &&
            <div className="invalid-feedback">
                It cannot be empty or Check-out cannot be before check-in
            </div>
          }
        </div>

        <div className="mb-3">
          <label className="form-label">Select Check-out Date</label>
          <input
            type="date"
            className={inputClass(isDateTouched, isValid.dates)}
            min={oneDayAfter(form.checkIn || today)}
            value={form.checkOut}
            onChange={handleChange("checkOut")}
            onBlur={handleBlur("checkOut")}
          />
          {touched.checkIn && touched.checkOut && !isValid.dates &&
            <div className="invalid-feedback">
                It cannot be empty or Check-out cannot be before check-in
            </div>
          }
        </div>

        <div className="mb-4">
          <label className="form-label">Room Type</label>
          <select
            className="form-select"
            value={form.room}
            onChange={handleChange("room")}
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
        </div>

        <div className="d-grid">
          <Link
            to={`booking?room=${form.room}&firstDate=${form.checkIn}&lastDate=${form.checkOut}&name=${form.name}&email=${form.email}`}
            className={`btn btn-primary btn-lg ${!isFormValid && "disabled"}`}
          >
            Go to Booking
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default StartPage;