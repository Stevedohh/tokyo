import React from 'react';
import { FaJs, FaReact, FaPython, FaDocker, FaNode, FaAws, FaFigma, FaSearch, FaHtml5,  } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss } from 'react-icons/si';

export default function Team() {
  return (
      <>
        {/* Team Start */}
        <style>
          {`
        .team-item {
          background: rgba(255, 255, 255, 0.1); /* Transparent background */
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .team-item:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.2); /* Slightly less transparent on hover */
        }
        .team-icon {
          display: flex;
          justify-content: space-around;
          padding-top: 15px;
        }
        .skill-icon {
          text-align: center;
          color: #ffffff;
        }
        .skill-icon i {
          font-size: 2.5rem; /* Increased icon size */
        }
        `}
        </style>
        <div className="container-fluid team pb-5" style={{ background: '#000000' }}>
          <div className="container pb-5">
            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ maxWidth: 800 }}
            >
              <h4
                  className="text-primary"
                  style={{
                    background: 'linear-gradient(135deg, #333333, #000000)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Our Team
              </h4>
              <h1
                  className="display-4 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #666666, #111111)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Meet Our Expert Team Members
              </h1>
              <p className="mb-0 text-light">
                Our team consists of highly skilled professionals dedicated to delivering top-quality work.
                Get to know the key players who bring their expertise to the table.
              </p>
            </div>
            <div className="row g-4">
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.2s"
              >
                <div className="team-item text-light p-4">
                  <div className="team-img">
                    <img
                        src="/assets/img/pr1.png"
                        className="img-fluid rounded-top w-100"
                        alt="David James"
                    />
                  </div>
                  <div className="team-icon">
                    <div className="skill-icon">
                      <FaJs className="text-warning" />
                      <p className="mb-0">JavaScript</p>
                    </div>
                    <div className="skill-icon">
                      <FaReact className="text-info" />
                      <p className="mb-0">React</p>
                    </div>
                    <div className="skill-icon">
                      <SiTailwindcss className="text-blue-400" />
                      <p className="mb-0">Tailwind CSS</p>
                    </div>
                  </div>
                  <div className="team-title p-4">
                    <h4 className="mb-0 text-light">David James</h4>
                    <p className="mb-0 text-light">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.4s"
              >
                <div className="team-item text-light p-4">
                  <div className="team-img">
                    <img
                        src="/assets/img/pr2.png"
                        className="img-fluid rounded-top w-100"
                        alt="Sarah Miller"
                    />
                  </div>
                  <div className="team-icon">
                    <div className="skill-icon">
                      <FaPython className="text-success" />
                      <p className="mb-0">Python</p>
                    </div>
                    <div className="skill-icon">
                      <FaDocker className="text-primary" />
                      <p className="mb-0">Docker</p>
                    </div>
                    <div className="skill-icon">
                      <SiCplusplus className="text-info" />
                      <p className="mb-0">C++</p>
                    </div>
                  </div>
                  <div className="team-title p-4">
                    <h4 className="mb-0 text-light">Sarah Miller</h4>
                    <p className="mb-0 text-light">Backend Developer</p>
                  </div>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.6s"
              >
                <div className="team-item text-light p-4">
                  <div className="team-img">
                    <img
                        src="/assets/img/pr3.png"
                        className="img-fluid rounded-top w-100"
                        alt="Alex Brown"
                    />
                  </div>
                  <div className="team-icon">
                    <div className="skill-icon">
                      <FaNode className="text-success" />
                      <p className="mb-0">Node.js</p>
                    </div>
                    <div className="skill-icon">
                      <FaAws className="text-warning" />
                      <p className="mb-0">AWS</p>
                    </div>
                  </div>
                  <div className="team-title p-4">
                    <h4 className="mb-0 text-light">Alex Brown</h4>
                    <p className="mb-0 text-light">DevOps Engineer</p>
                  </div>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.8s"
              >
                <div className="team-item text-light p-4">
                  <div className="team-img">
                    <img
                        src="/assets/img/pr4.png"
                        className="img-fluid rounded-top w-100"
                        alt="Jessica Lee"
                    />
                  </div>
                  <div className="team-icon">
                    <div className="skill-icon">
                      <FaFigma className="text-pink-500" />
                      <p className="mb-0">Figma</p>
                    </div>
                    <div className="skill-icon">
                      <FaSearch className="text-info" />
                      <p className="mb-0">SEO</p>
                    </div>
                    <div className="skill-icon">
                      <FaHtml5 className="text-orange-600" />
                      <p className="mb-0">HTML5</p>
                    </div>
                  </div>
                  <div className="team-title p-4">
                    <h4 className="mb-0 text-light">Jessica Lee</h4>
                    <p className="mb-0 text-light">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
      </>
  );
}
