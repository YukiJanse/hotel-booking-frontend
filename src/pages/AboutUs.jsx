function AboutUs() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div
                className="card shadow-lg border-0 p-4"
                style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
            >
                <h3 className="mb-4 text-center">About Us</h3>

                <p>
                    Welcome to our hotel booking platform! Our goal is to make finding
                    and booking the perfect stay simple, fast, and reliable.
                </p>

                <p>
                    We created this service to help travelers explore different room
                    options, compare availability, and make reservations without
                    unnecessary complexity. Whether you are planning a relaxing
                    vacation, a business trip, or a weekend getaway, our platform is
                    designed to help you find accommodation that suits your needs.
                </p>

                <p className="fw-bold mt-3">Our core values:</p>

                <ul className="list-unstyled">
                    <li>
                        <strong>Simplicity</strong> – Booking a room should be easy and
                        intuitive.
                    </li>
                    <li className="mt-2">
                        <strong>Reliability</strong> – Accurate information about room
                        availability and bookings.
                    </li>
                    <li className="mt-2">
                        <strong>Comfort</strong> – Helping guests find relaxing and
                        enjoyable accommodations.
                    </li>
                </ul>

                <p className="mt-3">
                    This project was created as part of a web development learning
                    journey, combining modern technologies to build a functional and
                    user-friendly booking experience.
                </p>

                <p className="text-center mt-4">
                    Thank you for visiting our platform!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;