const Dashboard = () => {
  return (
    <>
      <div className="col-9">
        <div className="row">

          <div className="col-md-5 col-lg-4">
            <div className="rounded shadow overflow-hidden sticky-bar">
              <div className="card border-0">
                <img
                  src="../assets/images/bg/bg-profile.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom mt-5">
                
                {/*end process box*/}
                <div className="d-flex align-items-center mt-2 mt-5">
                  <i className="uil uil-user align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Gender</h6>
                  <p className="text-muted mb-0 ms-2">Female</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-envelope align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Birthday</h6>
                  <p className="text-muted mb-0 ms-2">19th January 1995</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-book-open align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Phone No.</h6>
                  <p className="text-muted mb-0 ms-2">+(125) 458-8547</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-italic align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Address</h6>
                  <p className="text-muted mb-0 ms-2">Sydney, Australia</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <i className="uil uil-medical-drip align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Blood Group</h6>
                  <p className="text-muted mb-0 ms-2">B +</p>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card border-0 shadow overflow-hidden">
              <ul
                className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link rounded-0 active"
                    id="overview-tab"
                    data-bs-toggle="pill"
                    href="#pills-overview"
                    role="tab"
                    aria-controls="pills-overview"
                    aria-selected="true"
                  >
                    <div className="text-center pt-1 pb-1">
                      <h4 className="title fw-normal mb-0">Profile</h4>
                    </div>
                  </a>
                  {/*end nav link*/}
                </li>
                {/*end nav item*/}
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link rounded-0"
                    id="experience-tab"
                    data-bs-toggle="pill"
                    href="#pills-experience"
                    role="tab"
                    aria-controls="pills-experience"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    <div className="text-center pt-1 pb-1">
                      <h4 className="title fw-normal mb-0">Profile Settings</h4>
                    </div>
                  </a>
                  {/*end nav link*/}
                </li>
                {/*end nav item*/}
              </ul>
              <div className="tab-content p-4" id="pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="pills-overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <h5 className="mb-0">Introduction:</h5>
                  <p className="text-muted mt-4 mb-0">
                    Web designers to occupy the space which will later be filled
                    with 'real' content. This is required when, for example, the
                    final text is not yet available. Dummy text is also known as
                    'fill text'. Dummy texts have been in use by typesetters since
                    the 16th century.
                  </p>
                  <div className="row">
                    <div className="col-lg-6 col-12 mt-4">
                      <h5>Appointment List</h5>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-heart-pulse-line h3 fw-normal text-primary mb-0" />
                        <div className="flex-1 overflow-hidden ms-2">
                          <h6 className="mb-0">Cardiogram</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Dr. Calvin Carlo
                          </p>
                        </div>
                        <span className="mb-0">10 Dec</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-stethoscope-line h3 fw-normal text-success mb-0" />
                        <div className="flex-1 overflow-hidden ms-2">
                          <h6 className="mb-0">Checkup</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Dr. Cristino Murphy
                          </p>
                        </div>
                        <span className="mb-0">12 Dec</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-virus-line h3 fw-normal text-warning mb-0" />
                        <div className="flex-1 overflow-hidden ms-2">
                          <h6 className="mb-0">Covid Test</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Dr. Alia Reddy
                          </p>
                        </div>
                        <span className="mb-0">13 Dec</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-dossier-line h3 fw-normal text-secondary mb-0" />
                        <div className="flex-1 overflow-hidden ms-2">
                          <h6 className="mb-0">Dentist</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Dr. Toni Kovar
                          </p>
                        </div>
                        <span className="mb-0">15 Dec</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-eye-2-line h3 fw-normal text-info mb-0" />
                        <div className="flex-1 overflow-hidden ms-2">
                          <h6 className="mb-0">Eye Test</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Dr. Jessica McFarlane
                          </p>
                        </div>
                        <span className="mb-0">17 Dec</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <i className="ri-microscope-line h3 fw-normal text-danger mb-0" />
                        <div className="flex-1 overflow-hidden ms-2">
                          <h6 className="mb-0">Orthopedic</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Dr. Elsie Sherman
                          </p>
                        </div>
                        <span className="mb-0">18 Dec</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-4">
                      <h5>Payment List</h5>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0">Cardiogram</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Full bill paid
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes" />
                        </a>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0">Checkup</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Full bill paid
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes" />
                        </a>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0">Covid Test</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Full bill paid
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes" />
                        </a>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0">Dentist</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Full bill paid
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes" />
                        </a>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0">Eye Test</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Full bill paid
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes" />
                        </a>
                      </div>
                      <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3">
                        <div className="flex-1 overflow-hidden">
                          <h6 className="flex-1 mb-0">Orthopedic</h6>
                          <p className="text-muted mb-0 text-truncate small">
                            Full bill paid
                          </p>
                        </div>
                        <a
                          href="#"
                          className="btn btn-icon btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#view-invoice"
                        >
                          <i className="uil uil-clipboard-notes" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-0 mt-4 pt-2">Contact us</h5>
                  <div className="row">
                    <div className="col-md-12 col-lg-6 mt-4">
                      <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                        <div className="icon text-center rounded-lg mx-auto">
                          <i className="uil uil-message align-middle h3" />
                        </div>
                        <div className="card-body p-0 mt-3">
                          <a href="#" className="title text-dark h6 d-block">
                            New Messages
                          </a>
                          <a href="#" className="link">
                            Read more{" "}
                            <i className="ri-arrow-right-line align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-md-12 col-lg-6 mt-4">
                      <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                        <div className="icon text-center rounded-lg mx-auto">
                          <i className="uil uil-envelope-star align-middle h3" />
                        </div>
                        <div className="card-body p-0 mt-3">
                          <a href="#" className="title text-dark h6 d-block">
                            Latest Proposals
                          </a>
                          <a href="#" className="link">
                            View more{" "}
                            <i className="ri-arrow-right-line align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-experience"
                  role="tabpanel"
                  aria-labelledby="experience-tab"
                >
                  <h5 className="mb-0">Personal Information :</h5>
                  <div className="row align-items-center mt-4">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src="../assets/images/client/09.jpg"
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>
                    {/*end col*/}
                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h6 className="">Upload your picture</h6>
                      <p className="text-muted mb-0">
                        For best results, use an image at least 256px by 256px in
                        either .jpg or .png format
                      </p>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-5 col-md-12 text-lg-right text-center mt-4 mt-lg-0">
                      <a href="#" className="btn btn-primary">
                        Upload
                      </a>
                      <a href="#" className="btn btn-soft-primary ms-2">
                        Remove
                      </a>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="First Name :"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            name="name"
                            id="name2"
                            type="text"
                            className="form-control"
                            placeholder="Last Name :"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Your Email</label>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email :"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Phone no.</label>
                          <input
                            name="number"
                            id="number"
                            type="text"
                            className="form-control"
                            placeholder="Phone no. :"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Bio Here</label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control"
                            placeholder="Bio :"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    {/*end row*/}
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                          defaultValue="Save changes"
                        />
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                  {/*end form*/}
                  <div className="mt-4 pt-2">
                    <h5 className="mb-0">Change Password :</h5>
                    <form className="mt-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Old password :</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Old password"
                              required=""
                            />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">New password :</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="New password"
                              required=""
                            />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Re-type New password :
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Re-type New password"
                              required=""
                            />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary">Save password</button>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </form>
                  </div>
                  <div className="mt-4 pt-2">
                    <h5 className="mb-0">Account Notifications :</h5>
                    <div className="d-flex justify-content-between mt-4">
                      <p className="mb-0">When someone mentions me</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="mb-0">When someone follows me</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked1"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="mb-0">When shares my activity</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault2"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="mb-0">When someone messages me</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked3"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <h5 className="mb-0">Marketing Notifications :</h5>
                    <div className="d-flex justify-content-between mt-4">
                      <p className="mb-0">There is a sale or promotion</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked4"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked4"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="mb-0">Company news</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault5"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="mb-0">Weekly jobs</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault6"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="mb-0">Unsubscribe News</p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked7"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked7"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <h5 className="mb-0 text-danger">Delete Account :</h5>
                    <p className="mb-0 mt-4">
                      Do you want to delete the account? Please press below "Delete"
                      button
                    </p>
                    <div className="mt-4">
                      <button className="btn btn-danger">Delete Account</button>
                    </div>
                    {/*end col*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        

    </>
  )
}

export default Dashboard