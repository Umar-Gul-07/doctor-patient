const Chat = () => {
    return (
        <>
            <div className="col-xl-9 col-lg-8 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-5 col-md-5 col-12">
                        <div className="card border-0 rounded shadow">
                            <div className="text-center p-4 border-bottom">
                                <img
                                    src="../assets/images/doctors/01.jpg"
                                    className="avatar avatar-md-md rounded-pill shadow"
                                    alt=""
                                />
                                <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
                                <p className="text-muted mb-0">Orthopedic</p>
                            </div>
                            <div
                                className="p-2 chat chat-list"
                                data-simplebar="init"
                                style={{ maxHeight: 450 }}
                            >
                                <div className="simplebar-wrapper" style={{ margin: "-8px" }}>
                                    <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                    </div>
                                    <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                            <div
                                                className="simplebar-content-wrapper"
                                                tabIndex={0}
                                                role="region"
                                                aria-label="scrollable content"
                                                style={{ height: "auto", overflow: "hidden scroll" }}
                                            >
                                                <div className="simplebar-content" style={{ padding: 8 }}>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list active p-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/09.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">
                                                                    Christopher
                                                                </h6>
                                                                <small className="text-muted">10 Min</small>
                                                            </div>
                                                            <div className="text-muted text-truncate">Hello</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/doctors/02.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">
                                                                    Dr. Cristino
                                                                </h6>
                                                                <small className="text-muted">20 Min</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-dark h6 mb-0 text-truncate">
                                                                    Hi, How are you?
                                                                </div>
                                                                <span className="badge rounded-pill bg-soft-danger">
                                                                    2
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/03.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Faye</h6>
                                                                <small className="text-muted">30 Min</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">Heyy</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/04.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Ronald</h6>
                                                                <small className="text-muted">2 Hours</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    Hey, How are you sir?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/05.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Melissa</h6>
                                                                <small className="text-muted">3 Hours</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    Good Afternoon
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/doctors/06.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Dr. Elsie</h6>
                                                                <small className="text-muted">10 Hours</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    Good Morning sir, how can i help you?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/07.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Jerry</h6>
                                                                <small className="text-muted">16 Hours</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    Please give me appointment
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/doctors/08.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Dr. Louis</h6>
                                                                <small className="text-muted">1 Days</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">Hii</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/06.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Randall</h6>
                                                                <small className="text-muted">2 Days</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    Hello Sir
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/10.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Mary</h6>
                                                                <small className="text-muted">3 Days</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    How are you sir?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex chat-list p-2 mt-2 rounded position-relative"
                                                    >
                                                        <div className="position-relative">
                                                            <img
                                                                src="../assets/images/client/08.jpg"
                                                                className="avatar avatar-md-sm rounded-circle border shadow"
                                                                alt=""
                                                            />
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                        </div>
                                                        <div className="overflow-hidden flex-1 ms-2">
                                                            <div className="d-flex justify-content-between">
                                                                <h6 className="text-dark mb-0 d-block">Lester</h6>
                                                                <small className="text-muted">4 Days</small>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-muted text-truncate">
                                                                    Hello please give me answer.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="simplebar-placeholder"
                                        style={{ width: "auto", height: 785 }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-horizontal"
                                    style={{ visibility: "hidden" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{ width: 0, display: "none" }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-vertical"
                                    style={{ visibility: "visible" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{
                                            height: 257,
                                            transform: "translate3d(0px, 0px, 0px)",
                                            display: "block"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xl-9 col-lg-7 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="card chat chat-person border-0 shadow rounded">
                            <div className="d-flex justify-content-between border-bottom p-4">
                                <div className="d-flex">
                                    <img
                                        src="../assets/images/doctors/02.jpg"
                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                        alt=""
                                    />
                                    <div className="overflow-hidden ms-3">
                                        <a href="#" className="text-dark mb-0 h6 d-block text-truncate">
                                            Cristino Murphy
                                        </a>
                                        <small className="text-muted">
                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />{" "}
                                            Online
                                        </small>
                                    </div>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    <li className="dropdown dropdown-primary list-inline-item">
                                        <button
                                            type="button"
                                            className="btn btn-icon btn-pills btn-primary dropdown-toggle p-0"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="mdi mdi-magnify" />
                                        </button>
                                        <div
                                            className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0"
                                            style={{ width: 200 }}
                                        >
                                            <form>
                                                <input
                                                    type="text"
                                                    id="text1"
                                                    name="name"
                                                    className="form-control border bg-white"
                                                    placeholder="Search..."
                                                />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-primary list-inline-item">
                                        <button
                                            type="button"
                                            className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="uil uil-ellipsis-h" />
                                        </button>
                                        <div className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3">
                                            <a className="dropdown-item text-dark" href="#">
                                                <span className="mb-0 d-inline-block me-1">
                                                    <i className="uil uil-user align-middle h6" />
                                                </span>{" "}
                                                Profile
                                            </a>
                                            <a className="dropdown-item text-dark" href="#">
                                                <span className="mb-0 d-inline-block me-1">
                                                    <i className="uil uil-setting align-middle h6" />
                                                </span>{" "}
                                                Profile Settings
                                            </a>
                                            <a className="dropdown-item text-dark" href="#">
                                                <span className="mb-0 d-inline-block me-1">
                                                    <i className="uil uil-trash align-middle h6" />
                                                </span>{" "}
                                                Delete
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul
                                className="p-4 list-unstyled mb-0 chat"
                                data-simplebar="init"
                                style={{
                                    background: 'url("../assets/images/bg/bg-chat.png") center center',
                                    maxHeight: 500
                                }}
                            >
                                <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
                                    <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                    </div>
                                    <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                            <div
                                                className="simplebar-content-wrapper"
                                                tabIndex={0}
                                                role="region"
                                                aria-label="scrollable content"
                                                style={{ height: "auto", overflow: "hidden scroll" }}
                                            >
                                                <div className="simplebar-content" style={{ padding: 24 }}>
                                                    <li>
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative">
                                                                    <img
                                                                        src="../assets/images/doctors/02.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Hey Calvin
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        59 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="chat-right">
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative chat-user-image">
                                                                    <img
                                                                        src="../assets/images/doctors/01.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Hello Cristino
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        45 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="chat-right">
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative chat-user-image">
                                                                    <img
                                                                        src="../assets/images/doctors/01.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        How can i help you?
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        44 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative">
                                                                    <img
                                                                        src="../assets/images/doctors/02.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Nice to meet you
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        42 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative">
                                                                    <img
                                                                        src="../assets/images/doctors/02.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Hope you are doing fine?
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        40 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="chat-right">
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative chat-user-image">
                                                                    <img
                                                                        src="../assets/images/doctors/01.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        I'm good thanks for asking
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        45 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative">
                                                                    <img
                                                                        src="../assets/images/doctors/02.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        I am intrested to know more about your prices and
                                                                        services you offer
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        35 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="chat-right">
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative chat-user-image">
                                                                    <img
                                                                        src="../assets/images/doctors/01.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Sure please check below link to find more useful
                                                                        information{" "}
                                                                        <a
                                                                            href="https://1.envato.market/doctris-template"
                                                                            target="_blank"
                                                                            className="text-primary"
                                                                        >
                                                                            https://shreethemes.in/Doctris/
                                                                        </a>
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        25 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative">
                                                                    <img
                                                                        src="../assets/images/doctors/02.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Thank you 😊
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        20 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="chat-right">
                                                        <div className="d-inline-block">
                                                            <div className="d-flex chat-type mb-3">
                                                                <div className="position-relative chat-user-image">
                                                                    <img
                                                                        src="../assets/images/doctors/01.jpg"
                                                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                                                        alt=""
                                                                    />
                                                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                                                </div>
                                                                <div className="chat-msg" style={{ maxWidth: 500 }}>
                                                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">
                                                                        Welcome
                                                                    </p>
                                                                    <small className="text-muted msg-time">
                                                                        <i className="uil uil-clock-nine me-1" />
                                                                        18 min ago
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="simplebar-placeholder"
                                        style={{ width: "auto", height: 848 }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-horizontal"
                                    style={{ visibility: "hidden" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{ width: 0, display: "none" }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-vertical"
                                    style={{ visibility: "visible" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{
                                            height: 294,
                                            transform: "translate3d(0px, 0px, 0px)",
                                            display: "block"
                                        }}
                                    />
                                </div>
                            </ul>
                            <div className="p-2 rounded-bottom shadow">
                                <div className="row">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control border"
                                            placeholder="Enter Message..."
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="btn btn-icon btn-primary">
                                            <i className="uil uil-message" />
                                        </a>
                                        <a href="#" className="btn btn-icon btn-primary">
                                            <i className="uil uil-smile" />
                                        </a>
                                        <a href="#" className="btn btn-icon btn-primary">
                                            <i className="uil uil-paperclip" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
                <div className="row">
                    <div className="col-xl-3 col-md-6 mt-4">
                        <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                            <div className="icon text-center rounded-lg mx-auto">
                                <i className="uil uil-message align-middle h3 mb-0" />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <a href="#" className="title text-dark h5">
                                    New Messages
                                </a>
                                <p className="text-muted my-2">
                                    Due to its wide spread use as filler text
                                </p>
                                <a href="#" className="link">
                                    Read more <i className="ri-arrow-right-line align-middle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xl-3 col-md-6 mt-4">
                        <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                            <div className="icon text-center rounded-lg mx-auto">
                                <i className="uil uil-envelope-star align-middle h3 mb-0" />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <a href="#" className="title text-dark h5">
                                    Latest Proposals
                                </a>
                                <p className="text-muted my-2">
                                    Due to its wide spread use as filler text
                                </p>
                                <a href="#" className="link">
                                    View more <i className="ri-arrow-right-line align-middle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xl-3 col-md-6 mt-4">
                        <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                            <div className="icon text-center rounded-lg mx-auto">
                                <i className="uil uil-hourglass align-middle h3 mb-0" />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <a href="#" className="title text-dark h5">
                                    Package Expiry
                                </a>
                                <p className="text-muted my-2">
                                    Due to its wide spread use as filler text
                                </p>
                                <a href="#" className="link">
                                    Check here <i className="ri-arrow-right-line align-middle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xl-3 col-md-6 mt-4">
                        <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                            <div className="icon text-center rounded-lg mx-auto">
                                <i className="uil uil-heart align-middle h3 mb-0" />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <a href="#" className="title text-dark h5">
                                    Saved Items
                                </a>
                                <p className="text-muted my-2">
                                    Due to its wide spread use as filler text
                                </p>
                                <a href="#" className="link">
                                    View items <i className="ri-arrow-right-line align-middle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>

        </>
    )
}

export default Chat