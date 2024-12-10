import { Helmet } from "react-helmet"

function Home() {
    return (
        <>
            <Helmet><title>Home</title></Helmet>
            <section
                className="bg-half-260 d-table w-100"
                style={{ background: 'url("../assets/images/bg/01.jpg") center' }}
            >
                <div className="bg-overlay bg-overlay-dark" />
                <div className="container">
                    <div className="row mt-5 mt-lg-0">
                        <div className="col-12">
                            <div className="heading-title">
                                <img src="../assets/images/logo-icon.png" height={50} alt="" />
                                <h4 className="display-4 fw-bold text-white title-dark mt-3 mb-4">
                                    Meet The <br /> Best Doctor
                                </h4>
                                <p className="para-desc text-white-50 mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                                <div className="mt-4 pt-2">
                                    <a href="booking-appointment.html" className="btn btn-primary">
                                        Make Appointment
                                    </a>
                                    <p className="text-white-50 mb-0 mt-2">
                                        T&amp;C apply. Please read{" "}
                                        <a href="#" className="text-white-50">
                                            Terms and Conditions{" "}
                                            <i className="ri-arrow-right-line align-middle" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="features-absolute bg-white shadow rounded overflow-hidden card-group">
                                <div className="card border-0 bg-light p-4">
                                    <i className="ri-heart-pulse-fill text-primary h2 mb-0" />
                                    <h5 className="mt-1">Emergency Cases</h5>
                                    <p className="text-muted mt-2">
                                        This is required when, for example, the is not yet available.
                                        Dummy text is also known as 'fill text'.
                                    </p>
                                    <a href="departments.html" className="text-primary">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                                <div className="card border-0 p-4">
                                    <i className="ri-dossier-fill text-primary h2 mb-0" />
                                    <h5 className="mt-1">Doctors Timetable</h5>
                                    <p className="text-muted mt-2">
                                        This is required when, for example, the is not yet available.
                                        Dummy text is also known as 'fill text'.
                                    </p>
                                    <a href="departments.html" className="text-primary">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                                <div className="card border-0 bg-light p-4">
                                    <i className="ri-time-fill text-primary h2 mb-0" />
                                    <h5 className="mt-1">Opening Hours</h5>
                                    <ul className="list-unstyled mt-2">
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Monday - Friday</p>
                                            <p className="text-primary mb-0">8.00 - 20.00</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Saturday</p>
                                            <p className="text-primary mb-0">8.00 - 18.00</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Sunday</p>
                                            <p className="text-primary mb-0">8.00 - 14.00</p>
                                        </li>
                                    </ul>
                                    <a href="departments.html" className="text-primary">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="position-relative">
                                <img
                                    src="../assets/images/about/about-2.png"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="play-icon">
                                    <a
                                        href="#!"
                                        data-type="youtube"
                                        data-id="yba7hPeTSjk"
                                        className="play-btn lightbox video-play-icon"
                                    >
                                        <i className="mdi mdi-play text-primary rounded-circle shadow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                            <div className="ms-lg-4">
                                <div className="section-title">
                                    <h4 className="title mb-4">About Our Treatments</h4>
                                    <p className="text-muted para-desc">
                                        Great doctor if you need your family member to get effective
                                        immediate assistance, examination, emergency treatment or a simple
                                        consultation. Thank you.
                                    </p>
                                    <p className="text-muted para-desc mb-0">
                                        The most well-known dummy text is the 'Lorem Ipsum', which is said
                                        to have originated in the 16th century. Lorem Ipsum is composed in
                                        a pseudo-Latin language which more or less corresponds to 'proper'
                                        Latin. It contains a series of real Latin words.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <a href="aboutus.html" className="btn btn-primary">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge rounded-pill bg-soft-primary mb-3">
                                    Departments
                                </span>
                                <h4 className="title mb-4">Our Medical Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-eye-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Eye Care
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-psychotherapy-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Psychotherapy
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-stethoscope-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Primary Care
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-capsule-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Dental Care
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-microscope-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Orthopedic
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-pulse-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Cardiology
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-empathize-fill h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Gynecology
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-md-4 col-12 mt-5">
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <i className="ri-mind-map h3 mb-0" />
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <a href="departments.html" className="title text-dark h5">
                                        Neurology
                                    </a>
                                    <p className="text-muted mt-3">
                                        There is now an abundance of readable dummy texts required purely
                                        to fill a space.
                                    </p>
                                    <a href="departments.html" className="link">
                                        Read More <i className="ri-arrow-right-line align-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <span className="badge rounded-pill bg-soft-primary mb-3">
                                    Availability
                                </span>
                                <h4 className="title mb-4">Doctors Time Table</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-4 pt-2">
                            <div className="table-responsive shadow rounded">
                                <table className="table table-center table-bordered bg-white mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-center py-4" style={{ minWidth: 120 }}>
                                                Time Table
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Monday
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Tuesday
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Wednesday
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Thursday
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Friday
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Saturday
                                            </th>
                                            <th className="text-center py-4" style={{ minWidth: 200 }}>
                                                Sunday
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Start */}
                                        <tr>
                                            <th className="text-center py-5">09:00AM</th>
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/01.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                                                        <small className="text-muted">Eye Care</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    09:00AM - 10:00AM
                                                </small>
                                            </td>
                                            <td />
                                            <td />
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/03.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Alia Reddy</h6>
                                                        <small className="text-muted">Psychotherapy</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    09:00AM - 01:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td />
                                        </tr>
                                        <tr>
                                            <th className="text-center py-5">11:00AM</th>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/02.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">
                                                            Cristino Murphy
                                                        </h6>
                                                        <small className="text-muted">Gynecology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    11:00AM - 04:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/05.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">
                                                            Jennifer Ballance
                                                        </h6>
                                                        <small className="text-muted">Cardiology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    11:00AM - 12:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/04.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                        <small className="text-muted">Orthopedic</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    09:00AM - 10:00AM
                                                </small>
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <th className="text-center py-5">02:00PM</th>
                                            <td />
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/06.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Tara Arrington</h6>
                                                        <small className="text-muted">Neurology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    02:00PM - 04:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/05.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">
                                                            Jennifer Ballance
                                                        </h6>
                                                        <small className="text-muted">Cardiology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    11:00AM - 12:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td />
                                        </tr>
                                        <tr>
                                            <th className="text-center py-5">04:00PM</th>
                                            <td />
                                            <td />
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/06.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Tara Arrington</h6>
                                                        <small className="text-muted">Neurology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    04:00PM - 05:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/06.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Tara Arrington</h6>
                                                        <small className="text-muted">Neurology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    04:30PM - 06:00PM
                                                </small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-center py-5">06:00PM</th>
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/03.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Alia Reddy</h6>
                                                        <small className="text-muted">Psychotherapy</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    06:00PM - 09:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/04.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                        <small className="text-muted">Orthopedic</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    07:00PM - 08:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/05.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">
                                                            Jennifer Ballance
                                                        </h6>
                                                        <small className="text-muted">Cardiology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    06:00PM - 07:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/03.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Alia Reddy</h6>
                                                        <small className="text-muted">Psychotherapy</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    06:00PM - 07:00PM
                                                </small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-center py-5">09:00PM</th>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/04.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                        <small className="text-muted">Orthopedic</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    09:00PM - 10:00PM
                                                </small>
                                            </td>
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/05.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">
                                                            Jennifer Ballance
                                                        </h6>
                                                        <small className="text-muted">Cardiology</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    09:00PM - 10:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td>
                                                <div className="d-flex mb-3">
                                                    <img
                                                        src="../assets/images/doctors/04.jpg"
                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                        alt=""
                                                    />
                                                    <div className="ms-3">
                                                        <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                        <small className="text-muted">Orthopedic</small>
                                                    </div>
                                                </div>
                                                <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">
                                                    09:00PM - 10:00PM
                                                </small>
                                            </td>
                                            <td />
                                            <td />
                                        </tr>
                                        {/* End */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container-fluid*/}
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-4">Doctors</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="card team border-0 rounded shadow overflow-hidden">
                                <div className="team-img position-relative">
                                    <img
                                        src="../assets/images/doctors/01.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <ul className="list-unstyled team-social mb-0">
                                        <li>
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook icons"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin icons"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-github icons"
                                                >
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-twitter icons"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body content text-center">
                                    <a
                                        href="doctor-team-one.html"
                                        className="title text-dark h5 d-block mb-0"
                                    >
                                        Calvin Carlo
                                    </a>
                                    <small className="text-muted speciality">Eye Care</small>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="card team border-0 rounded shadow overflow-hidden">
                                <div className="team-img position-relative">
                                    <img
                                        src="../assets/images/doctors/02.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <ul className="list-unstyled team-social mb-0">
                                        <li>
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook icons"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin icons"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-github icons"
                                                >
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-twitter icons"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body content text-center">
                                    <a
                                        href="doctor-team-one.html"
                                        className="title text-dark h5 d-block mb-0"
                                    >
                                        Cristino Murphy
                                    </a>
                                    <small className="text-muted speciality">Gynecology</small>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="card team border-0 rounded shadow overflow-hidden">
                                <div className="team-img position-relative">
                                    <img
                                        src="../assets/images/doctors/03.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <ul className="list-unstyled team-social mb-0">
                                        <li>
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook icons"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin icons"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-github icons"
                                                >
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-twitter icons"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body content text-center">
                                    <a
                                        href="doctor-team-one.html"
                                        className="title text-dark h5 d-block mb-0"
                                    >
                                        Alia Reddy
                                    </a>
                                    <small className="text-muted speciality">Psychotherapy</small>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
                            <div className="card team border-0 rounded shadow overflow-hidden">
                                <div className="team-img position-relative">
                                    <img
                                        src="../assets/images/doctors/04.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <ul className="list-unstyled team-social mb-0">
                                        <li>
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-facebook icons"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-linkedin icons"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-github icons"
                                                >
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="#" className="btn btn-icon btn-pills btn-soft-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-twitter icons"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body content text-center">
                                    <a
                                        href="doctor-team-one.html"
                                        className="title text-dark h5 d-block mb-0"
                                    >
                                        Toni Kovar
                                    </a>
                                    <small className="text-muted speciality">Orthopedic</small>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-12 mt-4 pt-2 text-center">
                            <a href="doctor-team-one.html" className="btn btn-primary">
                                See More
                            </a>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>

            <section className="section pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div
                                className="video-solution-cta position-relative"
                                style={{ zIndex: 1 }}
                            >
                                <div className="position-relative">
                                    <img
                                        src="../assets/images/bg/01.jpg"
                                        className="img-fluid rounded-md shadow-lg"
                                        alt=""
                                    />
                                    <div className="play-icon">
                                        <a
                                            href="#!"
                                            data-type="youtube"
                                            data-id="yba7hPeTSjk"
                                            className="play-btn lightbox video-play-icon"
                                        >
                                            <i className="mdi mdi-play text-primary rounded-circle bg-white title-bg-dark shadow-lg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="row" id="counter">
                                        <div className="col-md-4 mt-4 pt-2">
                                            <div className="counter-box text-center">
                                                <h1 className="mt-3 text-white title-dark">
                                                    <span className="counter-value" data-target={99}>
                                                        10
                                                    </span>
                                                    %
                                                </h1>
                                                <h5 className="counter-head text-white title-dark mb-1">
                                                    Positive feedback
                                                </h5>
                                                <p className="text-white-50 mb-0">From Doctors</p>
                                            </div>
                                            {/*end counter box*/}
                                        </div>
                                        {/*end col*/}
                                        <div className="col-md-4 mt-4 pt-2">
                                            <div className="counter-box text-center">
                                                <h1 className="mt-3 text-white title-dark">
                                                    <span className="counter-value" data-target={25}>
                                                        2
                                                    </span>
                                                    +
                                                </h1>
                                                <h5 className="counter-head text-white title-dark mb-1">
                                                    Experienced Clinics
                                                </h5>
                                                <p className="text-white-50 mb-0">High Qualified</p>
                                            </div>
                                            {/*end counter box*/}
                                        </div>
                                        {/*end col*/}
                                        <div className="col-md-4 mt-4 pt-2">
                                            <div className="counter-box text-center">
                                                <h1 className="mt-3 text-white title-dark">
                                                    <span className="counter-value" data-target={1251}>
                                                        95
                                                    </span>
                                                    +
                                                </h1>
                                                <h5 className="counter-head text-white title-dark mb-1">
                                                    Questions &amp; Answers
                                                </h5>
                                                <p className="text-white-50 mb-0">Your Questions</p>
                                            </div>
                                            {/*end counter box*/}
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row */}
                    <div className="feature-posts-placeholder bg-primary" />
                </div>
                {/*end container*/}
            </section>

            <section className="section">
            
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <span className="badge rounded-pill bg-soft-primary mb-3">
                                    Read News
                                </span>
                                <h4 className="title mb-4">Latest News &amp; Blogs</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                <img
                                    src="../assets/images/blog/01.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="card-body p-4">
                                    <ul className="list-unstyled mb-2">
                                        <li className="list-inline-item text-muted small me-3">
                                            <i className="uil uil-calendar-alt text-dark h6 me-1" />
                                            20th November, 2020
                                        </li>
                                        <li className="list-inline-item text-muted small">
                                            <i className="uil uil-clock text-dark h6 me-1" />5 min read
                                        </li>
                                    </ul>
                                    <a href="blog-detail.html" className="text-dark title h5">
                                        You can easily connect to doctor and make a treatment
                                    </a>
                                    <div className="post-meta d-flex justify-content-between mt-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0">
                                                <a href="#" className="text-muted like">
                                                    <i className="mdi mdi-heart-outline me-1" />
                                                    33
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="text-muted comments">
                                                    <i className="mdi mdi-comment-outline me-1" />
                                                    08
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="blog-detail.html" className="link">
                                            Read More <i className="mdi mdi-chevron-right align-middle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                <img
                                    src="../assets/images/blog/02.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="card-body p-4">
                                    <ul className="list-unstyled mb-2">
                                        <li className="list-inline-item text-muted small me-3">
                                            <i className="uil uil-calendar-alt text-dark h6 me-1" />
                                            20th November, 2020
                                        </li>
                                        <li className="list-inline-item text-muted small">
                                            <i className="uil uil-clock text-dark h6 me-1" />5 min read
                                        </li>
                                    </ul>
                                    <a href="blog-detail.html" className="text-dark title h5">
                                        Lockdowns lead to fewer people seeking medical care
                                    </a>
                                    <div className="post-meta d-flex justify-content-between mt-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0">
                                                <a href="#" className="text-muted like">
                                                    <i className="mdi mdi-heart-outline me-1" />
                                                    33
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="text-muted comments">
                                                    <i className="mdi mdi-comment-outline me-1" />
                                                    08
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="blog-detail.html" className="link">
                                            Read More <i className="mdi mdi-chevron-right align-middle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                <img
                                    src="../assets/images/blog/03.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="card-body p-4">
                                    <ul className="list-unstyled mb-2">
                                        <li className="list-inline-item text-muted small me-3">
                                            <i className="uil uil-calendar-alt text-dark h6 me-1" />
                                            20th November, 2020
                                        </li>
                                        <li className="list-inline-item text-muted small">
                                            <i className="uil uil-clock text-dark h6 me-1" />5 min read
                                        </li>
                                    </ul>
                                    <a href="blog-detail.html" className="text-dark title h5">
                                        Emergency medicine research course for the doctors
                                    </a>
                                    <div className="post-meta d-flex justify-content-between mt-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0">
                                                <a href="#" className="text-muted like">
                                                    <i className="mdi mdi-heart-outline me-1" />
                                                    33
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="text-muted comments">
                                                    <i className="mdi mdi-comment-outline me-1" />
                                                    08
                                                </a>
                                            </li>
                                        </ul>
                                        <a href="blog-detail.html" className="link">
                                            Read More <i className="mdi mdi-chevron-right align-middle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>

            <section className="py-4 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                            <img
                                src="../assets/images/client/amazon.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                            <img
                                src="../assets/images/client/google.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                            <img
                                src="../assets/images/client/lenovo.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                            <img
                                src="../assets/images/client/paypal.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                            <img
                                src="../assets/images/client/shopify.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                            <img
                                src="../assets/images/client/spotify.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>

        </>
    )
}

export default Home