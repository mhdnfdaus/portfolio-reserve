import reactImg from "../assets/img/react.png";
import typescriptImg from "../assets/img/typescript.png";
import swiftImg from "../assets/img/swift.png";
import laravelImg from "../assets/img/laravel.png";
import javaImg from "../assets/img/java.png";
import pythonImg from "../assets/img/python.png";
import tailwindCssImg from "../assets/img/tailwind-css.png";
import materialUIImg from "../assets/img/material-ui.png";
import gitImg from "../assets/img/git.png";
import githubImg from "../assets/img/github.png";
import sourcetreeImg from "../assets/img/sourcetree.png";
import vercelImg from "../assets/img/vercel.png";
import netlifyImg from "../assets/img/netlify.png";
import figmaImg from "../assets/img/figma.png";

const Skill = () => {
  const frontEndSkills = [
    { name: "React", imgSrc: reactImg },
    { name: "Typescript", imgSrc: typescriptImg },
    { name: "SwiftUI", imgSrc: swiftImg },
  ];

  const backEndSkills = [
    { name: "Laravel", imgSrc: laravelImg },
    { name: "Java", imgSrc: javaImg },
    { name: "Python", imgSrc: pythonImg },
  ];

  const stylingSkills = [
    { name: "Tailwind CSS", imgSrc: tailwindCssImg },
    { name: "Material UI", imgSrc: materialUIImg },
  ];

  const otherSkills = [
    { name: "Git", imgSrc: gitImg },
    { name: "Github", imgSrc: githubImg },
    { name: "Sourcetree", imgSrc: sourcetreeImg },
    { name: "Vercel", imgSrc: vercelImg },
    { name: "Netlify", imgSrc: netlifyImg },
    { name: "Figma", imgSrc: figmaImg },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              data-scroll
              data-scroll-speed="-1.5"
              data-scroll-offset="-100%"
              className="align-item-center text-align-center"
            >
              <h2 className="custom-hero-font-2 line-height-4 font-weight-regular text-light">
                Tech Stack
              </h2>
              <h2 className="text-6 line-height-4 mb-2 font-weight-semi-bold text-color-light">
                Front End Stack
              </h2>
              <div className="row">
                {frontEndSkills.map((frontEndSkills, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center"
                  >
                    <div className="skill-card text-center">
                      <div className="circle-container">
                        <img
                          src={frontEndSkills.imgSrc}
                          alt={frontEndSkills.name}
                          className="skill-img"
                        />
                      </div>
                      <p className="mt-2 text-light">{frontEndSkills.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-6 line-height-4 mb-2 font-weight-semi-bold text-color-light">
                Back End Stack
              </h2>
              <div className="row">
                {backEndSkills.map((backEndSkills, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center"
                  >
                    <div className="skill-card text-center">
                      <div className="circle-container">
                        <img
                          src={backEndSkills.imgSrc}
                          alt={backEndSkills.name}
                          className="skill-img"
                        />
                      </div>
                      <p className="mt-2 text-light">{backEndSkills.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-6 line-height-4 mb-2 font-weight-semi-bold text-color-light">
                Styling Stack
              </h2>
              <div className="row">
                {stylingSkills.map((stylingSkills, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center"
                  >
                    <div className="skill-card text-center">
                      <div className="circle-container">
                        <img
                          src={stylingSkills.imgSrc}
                          alt={stylingSkills.name}
                          className="skill-img"
                        />
                      </div>
                      <p className="mt-2 text-light">{stylingSkills.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-6 line-height-4 mb-2 font-weight-semi-bold text-color-light">
                Other Stack
              </h2>
              <div className="row">
                {otherSkills.map((otherSkills, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center"
                  >
                    <div className="skill-card text-center">
                      <div className="circle-container">
                        <img
                          src={otherSkills.imgSrc}
                          alt={otherSkills.name}
                          className="skill-img"
                        />
                      </div>
                      <p className="mt-2 text-light">
                        {otherSkills.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
