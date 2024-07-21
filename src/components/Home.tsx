import ProfilePic from "../assets/img/demos/me.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="custom-perspective bg-secondary border-0 p-0 m-0 text-center p-relative"
      >
        <div className="container-fluid">
          <div className="row min-vh-100 align-items-center">
            <div className="col">
              <div className="row py-3 py-lg-0 custom-border-bottom-1">
                <div className="col">
                  <div
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="6"
                  >
                    <strong className="custom-hero-font-1 text-dark">
                    Full
                    </strong>
                  </div>
                </div>
              </div>
              <div className="row py-3 custom-border-bottom-1">
                <div className="col">
                  <div
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-5"
                  >
                    <div className="d-lg-flex justify-content-center align-items-center">
                      <strong className="custom-hero-font-1 text-dark custom-stroke-text-effect-1">
                        Stack
                      </strong>
                      <p className="custom-hero-text-1 text-start text-center text-lg-start d-block pb-2 pb-lg-0">
                        <i>هاي</i>, I am{" "}
                        <strong className="text-dark">Firdaus</strong>
                        {". "}I am passionate about learning and constantly
                        seeking opportunities to enhance my skills and
                        knowledge.  My goal is to leverage my abilities to make a meaningful impact and contribute to innovative projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-3 py-lg-0">
                <div className="col">
                  <div
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="3"
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={ ProfilePic }
                        className="img-fluid rounded-circle custom-hero-img-1"
                      />
                      <strong className="custom-hero-font-1 text-dark">
                        Developer
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#projects"
          data-hash
          className="btn btn-link-effect-1 text-3 mt-3 btn-link-underline-1 px-0 py-0 bg-transparent bg-color-before-dark border-0 text-color-dark font-weight-semi-bold text-decoration-none p-absolute bottom-30 transform3dx-n50 left-50pct"
        >
          Find Out More{" "}
        </a>
      </section>
    </>
  );
};

export default Home;
