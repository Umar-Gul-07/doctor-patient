const Appointment=()=>{
    return(
        <>
        <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
  <div className="row">
    <div className="col-xl-9 col-lg-6 col-md-4">
      <h5 className="mb-0">Appointment</h5>
    </div>
    {/*end col*/}
    <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
      <div className="justify-content-md-end">
        <form>
          <div className="row justify-content-between align-items-center">
            <div className="col-sm-12 col-md-5">
              <div className="mb-0 position-relative">
                <select className="form-select form-control">
                  <option value="EY">Today</option>
                  <option value="GY">Tomorrow</option>
                  <option value="PS">Yesterday</option>
                </select>
              </div>
            </div>
            {/*end col*/}
            <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
              <div className="d-grid">
                <a
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#appointmentform"
                >
                  Appointment
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </form>
        {/*end form*/}
      </div>
    </div>
    {/*end col*/}
  </div>
  {/*end row*/}
  <div className="row">
    <div className="col-12 mt-4">
      <div className="table-responsive bg-white shadow rounded">
        <table className="table mb-0 table-center">
          <thead>
            <tr>
              <th className="border-bottom p-3" style={{ minWidth: 50 }}>
                #
              </th>
              <th className="border-bottom p-3" style={{ minWidth: 180 }}>
                Name
              </th>
              <th className="border-bottom p-3">Age</th>
              <th className="border-bottom p-3">Gender</th>
              <th className="border-bottom p-3">Department</th>
              <th className="border-bottom p-3" style={{ minWidth: 150 }}>
                Date
              </th>
              <th className="border-bottom p-3">Time</th>
              <th className="border-bottom p-3" style={{ minWidth: 220 }}>
                Doctor
              </th>
              <th className="border-bottom p-3">Fees</th>
              <th className="border-bottom p-3" style={{ minWidth: 150 }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-3">1</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/01.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Howard Tanner</span>
                  </div>
                </a>
              </td>
              <td className="p-3">25</td>
              <td className="p-3">Male</td>
              <td className="p-3">Cardiology</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/01.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Calvin Carlo</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">2</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/02.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Wendy Filson</span>
                  </div>
                </a>
              </td>
              <td className="p-3">28</td>
              <td className="p-3">Female</td>
              <td className="p-3">Gynecology</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/02.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Cristino Murphy</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">3</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/03.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Faye Bridger</span>
                  </div>
                </a>
              </td>
              <td className="p-3">28</td>
              <td className="p-3">Female</td>
              <td className="p-3">Psychotherapy</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/03.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Alia Reddy</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">4</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/04.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Ronald Curtis</span>
                  </div>
                </a>
              </td>
              <td className="p-3">25</td>
              <td className="p-3">Male</td>
              <td className="p-3">Orthopedic</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/04.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Toni Kovar</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">5</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/05.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Melissa Hibner</span>
                  </div>
                </a>
              </td>
              <td className="p-3">28</td>
              <td className="p-3">Female</td>
              <td className="p-3">Dental</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/05.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Jessica McFarlane</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">6</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/06.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Randall Case</span>
                  </div>
                </a>
              </td>
              <td className="p-3">25</td>
              <td className="p-3">Male</td>
              <td className="p-3">Orthopedic</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/04.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Toni Kovar</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">7</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/07.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Jerry Morena</span>
                  </div>
                </a>
              </td>
              <td className="p-3">25</td>
              <td className="p-3">Male</td>
              <td className="p-3">Dentist</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/05.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Jessica McFarlane</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">8</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/08.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Lester McNally</span>
                  </div>
                </a>
              </td>
              <td className="p-3">25</td>
              <td className="p-3">Male</td>
              <td className="p-3">Gastrology</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/06.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Elsie Sherman</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">9</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/09.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Christopher Burrell</span>
                  </div>
                </a>
              </td>
              <td className="p-3">28</td>
              <td className="p-3">Female</td>
              <td className="p-3">Urology</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/07.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Bertha Magers</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
            <tr>
              <th className="p-3">10</th>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/client/10.jpg"
                      className="avatar avatar-md-sm rounded-circle shadow"
                      alt=""
                    />
                    <span className="ms-2">Mary Skeens</span>
                  </div>
                </a>
              </td>
              <td className="p-3">28</td>
              <td className="p-3">Female</td>
              <td className="p-3">Neurology</td>
              <td className="p-3">20th Dec 2020</td>
              <td className="p-3">11:00AM</td>
              <td className="p-3">
                <a href="#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <img
                      src="../assets/images/doctors/08.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <span className="ms-2">Dr. Louis Batey</span>
                  </div>
                </a>
              </td>
              <td className="p-3">$50/Patient</td>
              <td className="text-end p-3">
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#viewappointment"
                >
                  <i className="uil uil-eye" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-success"
                  data-bs-toggle="modal"
                  data-bs-target="#acceptappointment"
                >
                  <i className="uil uil-check-circle" />
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-pills btn-soft-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#cancelappointment"
                >
                  <i className="uil uil-times-circle" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {/*end row*/}
  <div className="row text-center">
    {/* PAGINATION START */}
    <div className="col-12 mt-4">
      <div className="d-md-flex align-items-center text-center justify-content-between">
        <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
        <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
          <li className="page-item">
            <a
              className="page-link"
              href="javascript:void(0)"
              aria-label="Previous"
            >
              Prev
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="javascript:void(0)">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0)">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="javascript:void(0)">
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="javascript:void(0)"
              aria-label="Next"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/*end col*/}
    {/* PAGINATION END */}
  </div>
  {/*end row*/}
</div>

        </>
    )
}

export default Appointment