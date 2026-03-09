import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1 py-4 px-3">
                <div className="container-fluid">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;