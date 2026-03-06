import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import StartPage from "./pages/StartPage";
import BookingPage from "./pages/BookingPage";
import MyBooking from "./pages/MyBooking";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/my-booking" element={<MyBooking />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
