import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import StartPage from "./pages/StartPage";
import BookingPage from "./pages/BookingPage";
import MyBooking from "./pages/MyBooking";
import RoomList from "./pages/RoomList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/room-list" element={<RoomList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
