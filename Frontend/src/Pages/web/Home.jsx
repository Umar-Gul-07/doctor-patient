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