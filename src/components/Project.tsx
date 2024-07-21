import Skill from "./Skill";

const Project = () => {
  return (
    <>
      <section
        id="#projects"
        className="section custom-perspective border-0 m-0 bg-dark text-light"
      >
        <div className="container-fluid">
          <div className="row min-vh-100 align-items-center">
            <div className="col pt-5 mt-5">
                <Skill/>
              {/* <div className="row pt-5">
                <div className="col-12 text-center pt-5">
                  <h2
                    className="font-weight-bold text-13 ws-nowrap text-uppercase custom-stroke-text-effect-2 positive-ls-2 mb-0"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="8"
                  >
                    <span data-clone-element="10">Featured Projects - </span>
                  </h2>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9 pb-5">
                    <div
                      data-scroll
                      data-scroll-direction="horizontal"
                      data-scroll-speed="1"
                    >
                      <a href="portfolio-single-wide-slider.html">
                        <div className="overlay overlay-show overlay-gradient-bottom-content">
                          <img
                            className="horizontal-scroller-image img-fluid border-radius-0"
                            src={ProfilePic}
                            alt=""
                          />
                          <div className="p-absolute bottom-0 left-0 p-5 w-100 d-none d-lg-block">
                            <h4 className="text-7 line-height-4 mb-0 font-weight-semi-bold text-uppercase text-color-light p-relative z-index-10">
                              Project Name 1
                            </h4>
                            <p className="text-color-light text-3 p-relative z-index-10">
                              <span className="opacity-6 d-inline-block pe-2">
                                -2023
                              </span>{" "}
                              Frontend Development / Digital Design
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
