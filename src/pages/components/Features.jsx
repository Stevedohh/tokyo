import React from 'react';

export default function Features() {
  return (
      <>
        {/* Feature Start */}
        <div
            className="container-fluid feature py-5"
            style={{
              background: 'linear-gradient(135deg, #0D0D0D, #000000)',  // Легкий градиент вместо чистого черного
            }}
        >
          <div className="container py-5">
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
                Our Features
              </h4>
              <h1
                  className="display-4 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #666666, #111111)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Insurance Provide you a Better Future
              </h1>
              <p className="mb-0 text-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                adipisci facilis cupiditate recusandae aperiam temporibus corporis
                itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
                obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="row g-4">
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.2s"
              >
                <div
                    className="feature-item p-4 pt-0"
                    style={{
                      background: 'linear-gradient(135deg, #1F1F1F, #0D0D0D)',
                      color: '#CCCCCC',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                  <div className="feature-icon p-4 mb-4">
                    <i className="far fa-handshake fa-3x text-light" />
                  </div>
                  <h4
                      className="mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #777777, #222222)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                      }}
                  >
                    Trusted Company
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    hic laborum odit pariatur...
                  </p>
                  <a
                      className="btn btn-outline-light rounded py-2 px-4"
                      href="#"
                      style={{
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1A73E8';
                        e.target.style.borderColor = '#1A73E8';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#FFFFFF';
                        e.target.style.color = '#FFFFFF';
                      }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.4s"
              >
                <div
                    className="feature-item p-4 pt-0"
                    style={{
                      background: 'linear-gradient(135deg, #1F1F1F, #0D0D0D)',
                      color: '#CCCCCC',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                  <div className="feature-icon p-4 mb-4">
                    <i className="fa fa-dollar-sign fa-3x text-light" />
                  </div>
                  <h4
                      className="mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #777777, #222222)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                      }}
                  >
                    Anytime Money Back
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    hic laborum odit pariatur...
                  </p>
                  <a
                      className="btn btn-outline-light rounded py-2 px-4"
                      href="#"
                      style={{
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1A73E8';
                        e.target.style.borderColor = '#1A73E8';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#FFFFFF';
                        e.target.style.color = '#FFFFFF';
                      }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.6s"
              >
                <div
                    className="feature-item p-4 pt-0"
                    style={{
                      background: 'linear-gradient(135deg, #1F1F1F, #0D0D0D)',
                      color: '#CCCCCC',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                  <div className="feature-icon p-4 mb-4">
                    <i className="fa fa-bullseye fa-3x text-light" />
                  </div>
                  <h4
                      className="mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #777777, #222222)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                      }}
                  >
                    Flexible Plans
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    hic laborum odit pariatur...
                  </p>
                  <a
                      className="btn btn-outline-light rounded py-2 px-4"
                      href="#"
                      style={{
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1A73E8';
                        e.target.style.borderColor = '#1A73E8';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#FFFFFF';
                        e.target.style.color = '#FFFFFF';
                      }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.8s"
              >
                <div
                    className="feature-item p-4 pt-0"
                    style={{
                      background: 'linear-gradient(135deg, #1F1F1F, #0D0D0D)',
                      color: '#CCCCCC',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                  <div className="feature-icon p-4 mb-4">
                    <i className="fa fa-headphones fa-3x text-light" />
                  </div>
                  <h4
                      className="mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #777777, #222222)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                      }}
                  >
                    24/7 Fast Support
                  </h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    hic laborum odit pariatur...
                  </p>
                  <a
                      className="btn btn-outline-light rounded py-2 px-4"
                      href="#"
                      style={{
                        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1A73E8';
                        e.target.style.borderColor = '#1A73E8';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#FFFFFF';
                        e.target.style.color = '#FFFFFF';
                      }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
      </>
  );
}
