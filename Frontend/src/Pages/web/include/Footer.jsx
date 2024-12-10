import { Link } from "react-router-dom"

function Footer() {

    return (
        <>
            <footer className="">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
                            <Link to="#" className="logo-footer">
                                <img src="../assets/images/logo-light.png" height={22} alt="" />
                            </Link>
                            <p className="mt-4 me-xl-5">
                                Great doctor if you need your family member to get effective immediate
                                assistance, emergency treatment or a simple consultation.
                            </p>
                        </div>
                        {/*end col*/}
                        <div className="col-xl-7 col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                    <li>
                                            <Link to="/doctor" className="text-foot">
                                                <i className="mdi mdi-chevron-right me-1" /> Doctors
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/pharmacy" className="text-foot">
                                                <i className="mdi mdi-chevron-right me-1" /> Pharmacy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us" className="text-foot">
                                                <i className="mdi mdi-chevron-right me-1" /> About Us
                                            </Link>
                                        </li>
                        
                                        <li>
                                            <Link to="/contact-us" className="text-foot">
                                                <i className="mdi mdi-chevron-right me-1" /> Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/login" className="text-foot">
                                                <i className="mdi mdi-chevron-right me-1" /> Login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/*end col*/}
                               
                                {/*end col*/}
                                <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Contact us</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li className="d-flex align-items-center">
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
                                                className="feather feather-mail fea icon-sm text-foot align-middle"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                            <Link to="mailto:contact@example.com" className="text-foot ms-2">
                                                contact@example.com
                                            </Link>
                                        </li>
                                        <li className="d-flex align-items-center">
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
                                                className="feather feather-phone fea icon-sm text-foot align-middle"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            <Link to="tel:+152534-468-854" className="text-foot ms-2">
                                                +152 534-468-854
                                            </Link>
                                        </li>
                                        <li className="d-flex align-items-center">
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
                                                className="feather feather-map-pin fea icon-sm text-foot align-middle"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx={12} cy={10} r={3} />
                                            </svg>
                                            <Link to="javascript:void(0)"
                                                className="video-play-icon text-foot ms-2"
                                            >
                                                View on Google map
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled social-icon footer-social mb-0 mt-4">
                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded-pill">
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
                                                    className="feather feather-facebook fea icon-sm fea-social"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded-pill">
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
                                                    className="feather feather-instagram fea icon-sm fea-social"
                                                >
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded-pill">
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
                                                    className="feather feather-twitter fea icon-sm fea-social"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded-pill">
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
                                                    className="feather feather-linkedin fea icon-sm fea-social"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
                <div className="container mt-5">
                    <div className="pt-4 footer-bar">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-start text-center">
                                    <p className="mb-0">
                                        2024 © Doctris. Design with{" "}
                                        <i className="mdi mdi-heart text-danger" /> by{" "}
                                        <Link to="https://shreethemes.in/"
                                            target="_blank"
                                            className="text-reset"
                                        >
                                            Shreethemes
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-sm-6 mt-4 mt-sm-0">
                                <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                                    <li className="list-inline-item">
                                        <Link to="terms.html" className="text-foot me-2">
                                            Terms
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="privacy.html" className="text-foot me-2">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="aboutus.html" className="text-foot me-2">
                                            About
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="contact.html" className="text-foot me-2">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                </div>
                {/*end container*/}
            </footer>


        </>
    )
}

export default Footer