const BookAppointment = () => {
    return (
        <>
        <div className="col-9">
        <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card border-0 shadow rounded overflow-hidden">
          <ul
            className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link rounded-0 active"
                id="clinic-booking"
                data-bs-toggle="pill"
                href="#pills-clinic"
                role="tab"
                aria-controls="pills-clinic"
                aria-selected="true"
              >
                <div className="text-center pt-1 pb-1">
                  <h5 className="fw-medium mb-0">Clinic Appointment</h5>
                </div>
              </a>
              {/*end nav link*/}
            </li>
            {/*end nav item*/}
            <li className="nav-item" role="presentation">
              <a
                className="nav-link rounded-0"
                id="online-booking"
                data-bs-toggle="pill"
                href="#pills-online"
                role="tab"
                aria-controls="pills-online"
                aria-selected="false"
                tabIndex={-1}
              >
                <div className="text-center pt-1 pb-1">
                  <h5 className="fw-medium mb-0">Online Appointment</h5>
                </div>
              </a>
              {/*end nav link*/}
            </li>
            {/*end nav item*/}
          </ul>
          <div className="tab-content p-4" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-clinic"
              role="tabpanel"
              aria-labelledby="clinic-booking"
            >
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Patient Name :"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Departments</label>
                      <select className="form-select form-control">
                        <option value="EY">Eye Care</option>
                        <option value="GY">Gynecologist</option>
                        <option value="PS">Psychotherapist</option>
                        <option value="OR">Orthopedic</option>
                        <option value="DE">Dentist</option>
                        <option value="GA">Gastrologist</option>
                        <option value="UR">Urologist</option>
                        <option value="NE">Neurologist</option>
                      </select>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Doctor</label>
                      <select className="form-select form-control">
                        <option value="CA">Dr. Calvin Carlo</option>
                        <option value="CR">Dr. Cristino Murphy</option>
                        <option value="AL">Dr. Alia Reddy</option>
                        <option value="TO">Dr. Toni Kovar</option>
                        <option value="JE">Dr. Jessica McFarlane</option>
                        <option value="EL">Dr. Elsie Sherman</option>
                        <option value="BE">Dr. Bertha Magers</option>
                        <option value="LO">Dr. Louis Batey</option>
                      </select>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Email <span className="text-danger">*</span>
                      </label>
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone :"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows={4}
                        className="form-control"
                        placeholder="Your Message :"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-12">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Book An Appointment
                      </button>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-online"
              role="tabpanel"
              aria-labelledby="online-booking"
            >
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name2"
                        type="text"
                        className="form-control"
                        placeholder="Patient Name :"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Departments</label>
                      <select className="form-select form-control">
                        <option value="EY">Eye Care</option>
                        <option value="GY">Gynecologist</option>
                        <option value="PS">Psychotherapist</option>
                        <option value="OR">Orthopedic</option>
                        <option value="DE">Dentist</option>
                        <option value="GA">Gastrologist</option>
                        <option value="UR">Urologist</option>
                        <option value="NE">Neurologist</option>
                      </select>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Doctor</label>
                      <select className="form-select form-control">
                        <option value="CA">Dr. Calvin Carlo</option>
                        <option value="CR">Dr. Cristino Murphy</option>
                        <option value="AL">Dr. Alia Reddy</option>
                        <option value="TO">Dr. Toni Kovar</option>
                        <option value="JE">Dr. Jessica McFarlane</option>
                        <option value="EL">Dr. Elsie Sherman</option>
                        <option value="BE">Dr. Bertha Magers</option>
                        <option value="LO">Dr. Louis Batey</option>
                      </select>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        id="email2"
                        type="email"
                        className="form-control"
                        placeholder="Your email :"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone"
                        id="phone2"
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone :"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3" style={{ position: "relative" }}>
                      <label className="form-label"> Date : </label>
                      <input
                        name="date"
                        type="text"
                        className="form-control start"
                        placeholder="Select date :"
                      />
                      <div className="qs-datepicker-container qs-hidden">
                        <div className="qs-datepicker">
                          <div className="qs-controls">
                            <div className="qs-arrow qs-left" />
                            <div className="qs-month-year">
                              <span className="qs-month">December</span>
                              <span className="qs-year">2024</span>
                            </div>
                            <div className="qs-arrow qs-right" />
                          </div>
                          <div className="qs-squares">
                            <div className="qs-square qs-day">Sun</div>
                            <div className="qs-square qs-day">Mon</div>
                            <div className="qs-square qs-day">Tue</div>
                            <div className="qs-square qs-day">Wed</div>
                            <div className="qs-square qs-day">Thu</div>
                            <div className="qs-square qs-day">Fri</div>
                            <div className="qs-square qs-day">Sat</div>
                            <div
                              className="qs-square Sun qs-num"
                              data-direction={0}
                            >
                              1
                            </div>
                            <div
                              className="qs-square Mon qs-num"
                              data-direction={0}
                            >
                              2
                            </div>
                            <div
                              className="qs-square Tue qs-num"
                              data-direction={0}
                            >
                              3
                            </div>
                            <div
                              className="qs-square Wed qs-num"
                              data-direction={0}
                            >
                              4
                            </div>
                            <div
                              className="qs-square Thu qs-num qs-current"
                              data-direction={0}
                            >
                              5
                            </div>
                            <div
                              className="qs-square Fri qs-num"
                              data-direction={0}
                            >
                              6
                            </div>
                            <div
                              className="qs-square Sat qs-num"
                              data-direction={0}
                            >
                              7
                            </div>
                            <div
                              className="qs-square Sun qs-num"
                              data-direction={0}
                            >
                              8
                            </div>
                            <div
                              className="qs-square Mon qs-num"
                              data-direction={0}
                            >
                              9
                            </div>
                            <div
                              className="qs-square Tue qs-num"
                              data-direction={0}
                            >
                              10
                            </div>
                            <div
                              className="qs-square Wed qs-num"
                              data-direction={0}
                            >
                              11
                            </div>
                            <div
                              className="qs-square Thu qs-num"
                              data-direction={0}
                            >
                              12
                            </div>
                            <div
                              className="qs-square Fri qs-num"
                              data-direction={0}
                            >
                              13
                            </div>
                            <div
                              className="qs-square Sat qs-num"
                              data-direction={0}
                            >
                              14
                            </div>
                            <div
                              className="qs-square Sun qs-num"
                              data-direction={0}
                            >
                              15
                            </div>
                            <div
                              className="qs-square Mon qs-num"
                              data-direction={0}
                            >
                              16
                            </div>
                            <div
                              className="qs-square Tue qs-num"
                              data-direction={0}
                            >
                              17
                            </div>
                            <div
                              className="qs-square Wed qs-num"
                              data-direction={0}
                            >
                              18
                            </div>
                            <div
                              className="qs-square Thu qs-num"
                              data-direction={0}
                            >
                              19
                            </div>
                            <div
                              className="qs-square Fri qs-num"
                              data-direction={0}
                            >
                              20
                            </div>
                            <div
                              className="qs-square Sat qs-num"
                              data-direction={0}
                            >
                              21
                            </div>
                            <div
                              className="qs-square Sun qs-num"
                              data-direction={0}
                            >
                              22
                            </div>
                            <div
                              className="qs-square Mon qs-num"
                              data-direction={0}
                            >
                              23
                            </div>
                            <div
                              className="qs-square Tue qs-num"
                              data-direction={0}
                            >
                              24
                            </div>
                            <div
                              className="qs-square Wed qs-num"
                              data-direction={0}
                            >
                              25
                            </div>
                            <div
                              className="qs-square Thu qs-num"
                              data-direction={0}
                            >
                              26
                            </div>
                            <div
                              className="qs-square Fri qs-num"
                              data-direction={0}
                            >
                              27
                            </div>
                            <div
                              className="qs-square Sat qs-num"
                              data-direction={0}
                            >
                              28
                            </div>
                            <div
                              className="qs-square Sun qs-num"
                              data-direction={0}
                            >
                              29
                            </div>
                            <div
                              className="qs-square Mon qs-num"
                              data-direction={0}
                            >
                              30
                            </div>
                            <div
                              className="qs-square Tue qs-num"
                              data-direction={0}
                            >
                              31
                            </div>
                            <div
                              className="qs-square Wed qs-outside-current-month qs-empty"
                              data-direction={1}
                            />
                            <div
                              className="qs-square Thu qs-outside-current-month qs-empty"
                              data-direction={1}
                            />
                            <div
                              className="qs-square Fri qs-outside-current-month qs-empty"
                              data-direction={1}
                            />
                            <div
                              className="qs-square Sat qs-outside-current-month qs-empty"
                              data-direction={1}
                            />
                          </div>
                          <div className="qs-overlay qs-hidden">
                            <div>
                              <input
                                className="qs-overlay-year"
                                placeholder="4-digit year"
                                inputMode="numeric"
                              />
                              <div className="qs-close">✕</div>
                            </div>
                            <div className="qs-overlay-month-container">
                              <div
                                className="qs-overlay-month"
                                data-month-num={0}
                              >
                                Jan
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={1}
                              >
                                Feb
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={2}
                              >
                                Mar
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={3}
                              >
                                Apr
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={4}
                              >
                                May
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={5}
                              >
                                Jun
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={6}
                              >
                                Jul
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={7}
                              >
                                Aug
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={8}
                              >
                                Sep
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={9}
                              >
                                Oct
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={10}
                              >
                                Nov
                              </div>
                              <div
                                className="qs-overlay-month"
                                data-month-num={11}
                              >
                                Dec
                              </div>
                            </div>
                            <div className="qs-submit qs-disabled">Submit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="input-time">
                        Time :{" "}
                      </label>
                      <input
                        name="time"
                        type="text"
                        className="form-control timepicker"
                        id="input-time"
                        placeholder="03:30 PM"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="comments"
                        id="comments2"
                        rows={4}
                        className="form-control"
                        placeholder="Your Message :"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-12">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Book An Appointment
                      </button>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*end col*/}
    </div>
    {/*end row*/}
  </div>
        </div>


        </>
    )
}

export default BookAppointment