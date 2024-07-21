const Footer = () => {
  return (
    <>
      <section
        id="footer"
        className="custom-perspective bg-light border-0 p-0 m-0 text-center p-relative"
      >
        <div className="container-fluid">
          <div className="row min-vh-100 align-items-center">
            <div className="col">
              <div className="row">
                <div className="col">
                  <div
                    className="custom-disable-scroll-mobile-1"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="5"
                  >
                    <div className="d-flex justify-content-center align-items-center text-start">
                      <img
                        src="img/demos/personal-portfolio-2/generic/generic-2.jpg"
                        className="img-fluid rounded-circle custom-footer-img-1 p-relative bottom-10"
                      />
                      <strong className="custom-footer-font-1 text-dark">
                        Let's Talk{" "}
                        <em className="text-light bg-dark mt-5 mt-lg-0 d-inline-block">
                          Say Hi
                        </em>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div
                    className="custom-disable-scroll-mobile-1"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-5"
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <div className="overflow-hidden">
                            <div
                              className="appear-animation"
                              data-appear-animation="maskUp"
                              data-appear-animation-delay="0"
                            >
                              <a
                                href="mailto:me@domain.com"
                                target="_blank"
                                className="btn btn-link-effect-1 btn-link-underline-1 px-3 py-2 bg-transparent bg-color-before-dark text-4-5 border-0 text-color-dark text-4-5 font-weight-semi-bold text-decoration-none"
                              >
                                ME@DOMAIN.COM
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="overflow-hidden">
                            <div
                              className="appear-animation"
                              data-appear-animation="maskUp"
                              data-appear-animation-delay="100"
                            >
                              <a
                                href="tel:12345"
                                target="_blank"
                                className="btn btn-link-effect-1 btn-link-underline-1 px-3 py-2 bg-transparent bg-color-before-dark text-4-5 border-0 text-color-dark text-4-5 font-weight-semi-bold text-decoration-none"
                              >
                                555 123 4567
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="list-inline-item">
                          <div className="overflow-hidden">
                            <div
                              className="appear-animation"
                              data-appear-animation="maskUp"
                              data-appear-animation-delay="200"
                            >
                              <a
                                href="http://www.instagram.com"
                                target="_blank"
                                className="btn btn-link-effect-1 btn-link-underline-1 px-3 py-2 bg-transparent bg-color-before-dark text-4-5 border-0 text-color-dark text-4-5 font-weight-semi-bold text-decoration-none"
                              >
                                INSTAGRAM
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="overflow-hidden">
                            <div
                              className="appear-animation"
                              data-appear-animation="maskUp"
                              data-appear-animation-delay="300"
                            >
                              <a
                                href="http://www.behance.com"
                                target="_blank"
                                className="btn btn-link-effect-1 btn-link-underline-1 px-3 py-2 bg-transparent bg-color-before-dark text-4-5 border-0 text-color-dark text-4-5 font-weight-semi-bold text-decoration-none"
                              >
                                BEHANCE
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="overflow-hidden">
                            <div
                              className="appear-animation"
                              data-appear-animation="maskUp"
                              data-appear-animation-delay="400"
                            >
                              <a
                                href="http://www.linkedin.com"
                                target="_blank"
                                className="btn btn-link-effect-1 btn-link-underline-1 px-3 py-2 bg-transparent bg-color-before-dark text-4-5 border-0 text-color-dark text-4-5 font-weight-semi-bold text-decoration-none"
                              >
                                LINKEDIN
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-absolute bottom-30 w-100 text-center">
          <p>© Copyright 2024. All Rights Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
