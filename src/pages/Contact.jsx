import { useState } from "react";



function Contact() {
    const [isSubmited, setIsSubmited] = useState(false);
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div
            className="card shadow-lg border-0 p-4"
            style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
            >
                {isSubmited ? (
                    <div>
                        <p>Thank you for your message! It will take least 3 work days to response.</p>
                    </div>
                ) : (
                    <div className="row justify-content-center">
                        <div className="">
                            <h2>Contact Us</h2>
                            <form>
                                <label className="form-label" htmlFor="name">Name:</label>
                                <input type="text" id="name" className="form-control" />
                                <label className="form-label" htmlFor="email">Email:</label>
                                <input type="email" id="email" className="form-control" required />
                                <label className="form-label" htmlFor="message">Message:</label>
                                <textarea id="message" className="form-control" required></textarea>
                                <button type="submit" className="btn btn-primary mt-3"
                                    onClick={() => setIsSubmited(true)}>Submit</button>
                            </form>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Contact;