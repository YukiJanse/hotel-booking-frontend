import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 min-vw-100 bg-light">
            <Header />
            <main className="container d-flex flex-grow-1 pt-3 justify-content-center align-items-center py-4">
                <div className="w-100" style={{ maxWidth: "600px" }}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;