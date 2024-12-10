const Pharmacy = () => {
    return (
        <>
            <section className="home-slider position-relative">
                <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <div
                                className="bg-half-260 d-table align-items-center w-100"
                                style={{
                                    background: 'url("../assets/images/bg/slider01.jpg") center center'
                                }}
                            >
                                <div className="bg-overlay bg-overlay-dark" />
                                <div className="container">
                                    <div className="row justify-content-center mt-5">
                                        <div className="col-lg-12 text-center">
                                            <div className="heading-title">
                                                <p className="text-white-50">Trusted Care</p>
                                                <h1 className="fw-bold text-white title-dark mb-4">
                                                    Provide Genuine medicine
                                                </h1>
                                                <p className="para-desc mx-auto text-white-50 mb-0">
                                                    Great doctor if you need your family member to get effective
                                                    immediate assistance, emergency treatment or a simple
                                                    consultation.
                                                </p>
                                                <div className="mt-4 pt-2">
                                                    <a href="#" className="btn btn-primary">
                                                        Shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end container*/}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <div
                                className="bg-half-260 d-table align-items-center w-100"
                                style={{
                                    background: 'url("../assets/images/bg/slider02.jpg") center center'
                                }}
                            >
                                <div className="bg-overlay bg-overlay-dark" />
                                <div className="container">
                                    <div className="row justify-content-center mt-5">
                                        <div className="col-lg-12 text-center">
                                            <div className="heading-title">
                                                <p className="text-light title-dark">
                                                    Comprohensive Information
                                                </p>
                                                <h1 className="fw-bold text-white title-dark mb-4">
                                                    Know your medicines
                                                </h1>
                                                <p className="para-desc mx-auto text-white-50 mb-0">
                                                    Great doctor if you need your family member to get effective
                                                    immediate assistance, emergency treatment or a simple
                                                    consultation.
                                                </p>
                                                <div className="mt-4 pt-2">
                                                    <a href="#" className="btn btn-primary">
                                                        Shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end container*/}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div
                                className="bg-half-260 d-table align-items-center w-100"
                                style={{
                                    background: 'url("../assets/images/bg/slider03.jpg") center center'
                                }}
                            >
                                <div className="bg-overlay bg-overlay-dark" />
                                <div className="container">
                                    <div className="row justify-content-center mt-5">
                                        <div className="col-lg-12 text-center">
                                            <div className="heading-title">
                                                <p className="text-light title-dark">Available Everywhare</p>
                                                <h1 className="fw-bold text-white title-dark mb-4">
                                                    Delivering in 100+ Cities
                                                </h1>
                                                <p className="para-desc mx-auto text-white-50 mb-0">
                                                    Great doctor if you need your family member to get effective
                                                    immediate assistance, emergency treatment or a simple
                                                    consultation.
                                                </p>
                                                <div className="mt-4 pt-2">
                                                    <a href="#" className="btn btn-primary">
                                                        Shop now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                </div>
                                {/*end container*/}
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleInterval"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleInterval"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </section>


            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Browse medicines &amp; health products</h4>
                                <p className="text-muted para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/skin.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Skin</span>
                                        <br />
                                        Care
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/sexual.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Sexual</span>
                                        <br />
                                        Wallness
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/weight.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Weight</span>
                                        <br />
                                        Management
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/pain.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Pain</span>
                                        <br />
                                        Relief
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/heart.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Heart</span>
                                        <br />
                                        Health
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/cough.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Cough</span>
                                        <br /> &amp; Cold
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/diabetes.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Diabetes</span>
                                        <br />
                                        Care
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 mt-4 pt-2">
                            <a
                                href="#"
                                className="card pharpachy-categories border-0 rounded overflow-hidden"
                            >
                                <img
                                    src="../assets/images/pharmacy/cancer.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="category-title">
                                    <span className="text-dark title-white">
                                        <span className="h5">Cancer</span>
                                        <br />
                                        Care
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mt-4 pt-2">
                            <a href="#" className="btn btn-primary">
                                See More
                            </a>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-4">Franchise Process</h4>
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
                        <div className="col-12 mt-4 pt-2">
                            <div className="col-md-12">
                                <div className="tns-outer" id="tns2-ow">
                                    <div
                                        className="tns-liveregion tns-visually-hidden"
                                        aria-live="polite"
                                        aria-atomic="true"
                                    >
                                        slide <span className="current">2 to 5</span> of 6
                                    </div>
                                    <div id="tns2-mw" className="tns-ovh">
                                        <div className="tns-inner" id="tns2-iw">
                                            <div
                                                className="slider-range-four tiny-timeline  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                                id="tns2"
                                                style={{ transform: "translate3d(-16.6667%, 0px, 0px)" }}
                                            >
                                                <div
                                                    className="tiny-slide text-center tns-item"
                                                    id="tns2-item0"
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                >
                                                    <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                        <i className="uil uil-airplay h4 text-primary" />
                                                        <h6 className="mt-1 mb-0">Registration</h6>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tiny-slide text-center tns-item tns-slide-active"
                                                    id="tns2-item1"
                                                >
                                                    <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                        <i className="uil uil-location-pin-alt h4 text-primary" />
                                                        <h6 className="mt-1 mb-0">Store Location</h6>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tiny-slide text-center tns-item tns-slide-active"
                                                    id="tns2-item2"
                                                >
                                                    <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                        <i className="uil uil-briefcase h4 text-primary" />
                                                        <h6 className="mt-1 mb-0">Agreement</h6>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tiny-slide text-center tns-item tns-slide-active"
                                                    id="tns2-item3"
                                                >
                                                    <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                        <i className="uil uil-file-check h4 text-primary" />
                                                        <h6 className="mt-1 mb-0">Documentation</h6>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tiny-slide text-center tns-item tns-slide-active"
                                                    id="tns2-item4"
                                                >
                                                    <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                        <i className="uil uil-store-alt h4 text-primary" />
                                                        <h6 className="mt-1 mb-0">Store Execution</h6>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tiny-slide text-center tns-item"
                                                    id="tns2-item5"
                                                    aria-hidden="true"
                                                    tabIndex={-1}
                                                >
                                                    <div className="card border-0 p-4 item-box mb-1 shadow rounded">
                                                        <i className="uil uil-award-alt h4 text-primary" />
                                                        <h6 className="mt-1 mb-0">Inauguration</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tns-nav" aria-label="Carousel Pagination">
                                        <button
                                            type="button"
                                            data-nav={0}
                                            aria-controls="tns2"
                                            style={{}}
                                            aria-label="Carousel Page 1 (Current Slide)"
                                            className="tns-nav-active"
                                        />
                                        <button
                                            type="button"
                                            data-nav={1}
                                            aria-controls="tns2"
                                            style={{}}
                                            aria-label="Carousel Page 2"
                                            className=""
                                            tabIndex={-1}
                                        />
                                        <button
                                            type="button"
                                            data-nav={2}
                                            tabIndex={-1}
                                            aria-controls="tns2"
                                            style={{ display: "none" }}
                                            aria-label="Carousel Page 3"
                                        />
                                        <button
                                            type="button"
                                            data-nav={3}
                                            tabIndex={-1}
                                            aria-controls="tns2"
                                            style={{ display: "none" }}
                                            aria-label="Carousel Page 4"
                                        />
                                        <button
                                            type="button"
                                            data-nav={4}
                                            tabIndex={-1}
                                            aria-controls="tns2"
                                            style={{ display: "none" }}
                                            aria-label="Carousel Page 5"
                                        />
                                        <button
                                            type="button"
                                            data-nav={5}
                                            tabIndex={-1}
                                            aria-controls="tns2"
                                            style={{ display: "none" }}
                                            aria-label="Carousel Page 6"
                                        />
                                    </div>
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
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-4">Our Trusted Customers</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
                            <img
                                src="../assets/images/client/amazon.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
                            <img
                                src="../assets/images/client/google.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
                            <img
                                src="../assets/images/client/lenovo.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
                            <img
                                src="../assets/images/client/paypal.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
                            <img
                                src="../assets/images/client/shopify.png"
                                className="avatar avatar-client"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2">
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
                <div className="container mt-100 mt-60">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="#" className="section-title">
                                <p className="text-primary">Introducing consultation desk</p>
                                <h4 className="text-dark">
                                    Don’t self medicate. Talk to an expert. Consult a doctor in 2
                                    minutes.
                                </h4>
                                <div className="card mt-4 pharpachy-categories border-0 rounded-md overflow-hidden">
                                    <img
                                        src="../assets/images/pharmacy/doctor.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="category-title">
                                        <span className="text-white title-dark">
                                            Chat with a <br />
                                            <span className="h4">Doctor</span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <a href="#" className="section-title">
                                <p className="text-primary">Introducing fast delivery</p>
                                <h4 className="text-dark">
                                    Tired of waiting in a queue? Too weak to go down and buy medicines?
                                </h4>
                                <div className="card mt-4 pharpachy-categories border-0 rounded-md overflow-hidden">
                                    <img
                                        src="../assets/images/pharmacy/delivery.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="category-title">
                                        <span className="text-white title-dark">
                                            Home delivery in <br />
                                            <span className="h4">2 Hours</span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <div className="tns-outer" id="tns1-ow">
                                <div
                                    className="tns-liveregion tns-visually-hidden"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >
                                    slide <span className="current">2</span> of 6
                                </div>
                                <div id="tns1-mw" className="tns-ovh">
                                    <div className="tns-inner" id="tns1-iw">
                                        <div
                                            className="client-review-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                                            id="tns1"
                                            style={{ transform: "translate3d(-16.6667%, 0px, 0px)" }}
                                        >
                                            <div
                                                className="tiny-slide text-center tns-item"
                                                id="tns1-item0"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                            >
                                                <p className="text-muted fw-normal fst-italic">
                                                    " It seems that only fragments of the original text remain
                                                    in the Lorem Ipsum texts used today. The most well-known
                                                    dummy text is the 'Lorem Ipsum', which is said to have
                                                    originated in the 16th century. "
                                                </p>
                                                <img
                                                    src="../assets/images/client/01.jpg"
                                                    className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                                                    alt=""
                                                />
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                </ul>
                                                <h6 className="text-primary">
                                                    - Thomas Israel <small className="text-muted">C.E.O</small>
                                                </h6>
                                            </div>
                                            {/*end customer testi*/}
                                            <div
                                                className="tiny-slide text-center tns-item tns-slide-active"
                                                id="tns1-item1"
                                            >
                                                <p className="text-muted fw-normal fst-italic">
                                                    " The advantage of its Latin origin and the relative
                                                    meaninglessness of Lorum Ipsum is that the text does not
                                                    attract attention to itself or distract the viewer's
                                                    attention from the layout. "
                                                </p>
                                                <img
                                                    src="../assets/images/client/02.jpg"
                                                    className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                                                    alt=""
                                                />
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                </ul>
                                                <h6 className="text-primary">
                                                    - Carl Oliver <small className="text-muted">P.A</small>
                                                </h6>
                                            </div>
                                            {/*end customer testi*/}
                                            <div
                                                className="tiny-slide text-center tns-item"
                                                id="tns1-item2"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                            >
                                                <p className="text-muted fw-normal fst-italic">
                                                    " There is now an abundance of readable dummy texts. These
                                                    are usually used when a text is required purely to fill a
                                                    space. These alternatives to the classic Lorem Ipsum texts
                                                    are often amusing and tell short, funny or nonsensical
                                                    stories. "
                                                </p>
                                                <img
                                                    src="../assets/images/client/03.jpg"
                                                    className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                                                    alt=""
                                                />
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                </ul>
                                                <h6 className="text-primary">
                                                    - Barbara McIntosh <small className="text-muted">M.D</small>
                                                </h6>
                                            </div>
                                            {/*end customer testi*/}
                                            <div
                                                className="tiny-slide text-center tns-item"
                                                id="tns1-item3"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                            >
                                                <p className="text-muted fw-normal fst-italic">
                                                    " According to most sources, Lorum Ipsum can be traced back
                                                    to a text composed by Cicero in 45 BC. Allegedly, a Latin
                                                    scholar established the origin of the text by compiling all
                                                    the instances of the unusual word 'consectetur' he could
                                                    find "
                                                </p>
                                                <img
                                                    src="../assets/images/client/04.jpg"
                                                    className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                                                    alt=""
                                                />
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                </ul>
                                                <h6 className="text-primary">
                                                    - Christa Smith{" "}
                                                    <small className="text-muted">Manager</small>
                                                </h6>
                                            </div>
                                            {/*end customer testi*/}
                                            <div
                                                className="tiny-slide text-center tns-item"
                                                id="tns1-item4"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                            >
                                                <p className="text-muted fw-normal fst-italic">
                                                    " It seems that only fragments of the original text remain
                                                    in the Lorem Ipsum texts used today. The most well-known
                                                    dummy text is the 'Lorem Ipsum', which is said to have
                                                    originated in the 16th century. "
                                                </p>
                                                <img
                                                    src="../assets/images/client/05.jpg"
                                                    className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                                                    alt=""
                                                />
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                </ul>
                                                <h6 className="text-primary">
                                                    - Dean Tolle <small className="text-muted">Developer</small>
                                                </h6>
                                            </div>
                                            {/*end customer testi*/}
                                            <div
                                                className="tiny-slide text-center tns-item"
                                                id="tns1-item5"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                            >
                                                <p className="text-muted fw-normal fst-italic">
                                                    " It seems that only fragments of the original text remain
                                                    in the Lorem Ipsum texts used today. One may speculate that
                                                    over the course of time certain letters were added or
                                                    deleted at various positions within the text. "
                                                </p>
                                                <img
                                                    src="../assets/images/client/06.jpg"
                                                    className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                                                    alt=""
                                                />
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <i className="mdi mdi-star text-warning" />
                                                    </li>
                                                </ul>
                                                <h6 className="text-primary">
                                                    - Jill Webb <small className="text-muted">Designer</small>
                                                </h6>
                                            </div>
                                            {/*end customer testi*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="tns-nav" aria-label="Carousel Pagination">
                                    <button
                                        type="button"
                                        data-nav={0}
                                        aria-controls="tns1"
                                        style={{}}
                                        aria-label="Carousel Page 1"
                                        className=""
                                        tabIndex={-1}
                                    />
                                    <button
                                        type="button"
                                        data-nav={1}
                                        aria-controls="tns1"
                                        style={{}}
                                        aria-label="Carousel Page 2 (Current Slide)"
                                        className="tns-nav-active"
                                    />
                                    <button
                                        type="button"
                                        data-nav={2}
                                        aria-controls="tns1"
                                        style={{}}
                                        aria-label="Carousel Page 3"
                                        className=""
                                        tabIndex={-1}
                                    />
                                    <button
                                        type="button"
                                        data-nav={3}
                                        aria-controls="tns1"
                                        style={{}}
                                        aria-label="Carousel Page 4"
                                        className=""
                                        tabIndex={-1}
                                    />
                                    <button
                                        type="button"
                                        data-nav={4}
                                        aria-controls="tns1"
                                        style={{}}
                                        aria-label="Carousel Page 5"
                                        className=""
                                        tabIndex={-1}
                                    />
                                    <button
                                        type="button"
                                        data-nav={5}
                                        aria-controls="tns1"
                                        style={{}}
                                        aria-label="Carousel Page 6"
                                        className=""
                                        tabIndex={-1}
                                    />
                                </div>
                            </div>
                            {/*end carousel*/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-12">
                            <img
                                src="../assets/images/pharmacy/download.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        {/*end col*/}
                        <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <div className="alert alert-light alert-pills" role="alert">
                                    <span className="badge bg-primary rounded-pill me-1">Apps</span>
                                    <span className="content">
                                        Download now{" "}
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
                                            className="feather feather-chevron-right fea icon-sm align-middle"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="title mb-3">
                                    Available for your <br /> Smartphones
                                </h4>
                                <p className="text-muted para-desc mb-0">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                                <div className="mt-3 mb-4">
                                    <a href="#" className="btn btn-lg btn-dark mt-2 me-2">
                                        <i className="mdi mdi-apple" /> App Store
                                    </a>
                                    <a href="#" className="btn btn-lg btn-dark mt-2">
                                        <i className="mdi mdi-google-play" /> Play Store
                                    </a>
                                </div>
                                <div className="d-inline-block">
                                    <div className="pt-4 d-flex align-items-center border-top">
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
                                            className="feather feather-smartphone fea icon-md me-2 text-primary"
                                        >
                                            <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                                            <line x1={12} y1={18} x2="12.01" y2={18} />
                                        </svg>
                                        <div className="content">
                                            <h6 className="mb-0">Install app now on your cellphones</h6>
                                            <a href="#" className="text-primary">
                                                Learn More <i className="mdi mdi-arrow-right" />
                                            </a>
                                        </div>
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

        </>
    )
}

export default Pharmacy