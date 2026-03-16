import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

function RoomList() {
    return (
        <div className="container mt-5">
            <div className="row g-4">
                <div className="card pt-3 col-12 col-md-6 col-lg-4 shadow-lg border-0 p-4">
                    <img src="https://picsum.photos/300/200" alt="room image photo" />
                    <div className="card-body">
                        <h3 className="card-title">Suite</h3>
                        <p className="card-text">Exemple text about the room. Exemple text about the room. Exemple text about the room.Exemple text about the room.</p>
                        <Link to="/?roomType=Suite" className='btn btn-primary'>
                            Boka rummet
                        </Link>
                    </div>
                </div>
                <div className="card pt-3 col-12 col-md-6 col-lg-4 shadow-lg border-0 p-4">
                    <img src="https://picsum.photos/300/200" alt="room image photo" />
                    <div className="card-body">
                        <h3 className="card-title">Deluxe</h3>
                        <p className="card-text">Exemple text about the room. Exemple text about the room. Exemple text about the room.Exemple text about the room.</p>
                        <Link to="/?roomType=Deluxe" className='btn btn-primary'>
                            Boka rummet
                        </Link>
                    </div>
                </div>
                <div className="card pt-3 col-12 col-md-6 col-lg-4 shadow-lg border-0 p-4">
                    <img src="https://picsum.photos/300/200" alt="room image photo" />
                    <div className="card-body">
                        <h3 className="card-title">Standard</h3>
                        <p className="card-text">Exemple text about the room. Exemple text about the room. Exemple text about the room.Exemple text about the room.</p>
                        <Link to="/?roomType=Standard" className='btn btn-primary'>
                            Boka rummet
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default RoomList;