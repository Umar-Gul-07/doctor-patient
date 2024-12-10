import { Link, useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Logout function
    const handleLogout = () => {
        // Remove the token from local storage (or sessionStorage or cookies)
        localStorage.removeItem('authToken'); // Or wherever your token is stored

        // Optionally, remove any user-related information
        localStorage.removeItem('userInfo'); // For example, remove user data as well

        // Redirect to the login page after logout
        navigate('/login');
    };
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                <div className="rounded shadow overflow-hidden sticky-bar">
                    <div className="card border-0">
                        <img
                            src="../assets/images/doctors/profile-bg.jpg"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                        <img
                            src="../assets/images/doctors/01.jpg"
                            className="rounded-circle shadow-md avatar avatar-md-md"
                            alt=""
                        />
                        <h5 className="mt-3 mb-1"> Calvin Carlo</h5>
                        <p className="text-muted mb-0">Pain</p>
                    </div>
                    <ul className="list-unstyled sidebar-nav mb-0">
                        <li className="navbar-item">
                            <Link to="/doctor/dashboard" className="navbar-link">
                                <i className="ri-airplay-line align-middle navbar-icon" />{" "}
                                Dashboard
                           </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/doctor/appointment" className="navbar-link">
                                <i className="ri-calendar-check-line align-middle navbar-icon" />{" "}
                                Appointment
                           </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/doctor/scheduletiming" className="navbar-link">
                                <i className="ri-timer-line align-middle navbar-icon" />{" "}
                                Schedule Timing
                           </Link>
                        </li>
            
        
                        <li className="navbar-item">
                            <Link to="/doctor/profile-setting" className="navbar-link">
                                <i className="ri-user-settings-line align-middle navbar-icon" />{" "}
                                Profile Settings
                           </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/doctor/patient" className="navbar-link">
                                <i className="ri-empathize-line align-middle navbar-icon" />{" "}
                                Patients
                           </Link>
                        </li>
                    
                        <li className="navbar-item">
                            <Link to="/doctor/chat" className="navbar-link">
                                <i className="ri-chat-voice-line align-middle navbar-icon" />{" "}
                                Chat
                           </Link>
                        </li>
                        <li className="navbar-item">
                {/* Call handleLogout on click */}
                <button onClick={handleLogout} className="navbar-link" style={{ border: 'none', background: 'none' }}>
                    <i className="ri-login-circle-line align-middle navbar-icon" />
                    Logout
                </button>
            </li>
                      
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar