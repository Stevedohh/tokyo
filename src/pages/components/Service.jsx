import React from 'react';
import Head from 'next/head';

export default function Portfolio() {
  return (
      <>
        <Head>
          <link
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
              rel="stylesheet"
          />
        </Head>
        {/* Portfolio Start */}
        <div
            className="container-fluid portfolio py-5"
            style={{ background: '#000000' }}
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
                Our Portfolio
              </h4>
              <h1
                  className="display-4 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #666666, #111111)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                We&apos;ve Created Beautiful Solutions
              </h1>
              <p className="mb-0 text-light">
                Take a look at some of our recent work that demonstrates our
                expertise and creativity. From website design to app development,
                we&apos;ve got it covered.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              <div
                  className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.2s"
              >
                <div className="portfolio-item bg-dark text-light rounded shadow-sm">
                  <div className="portfolio-img position-relative">
                    <video
                        src="/assets/videos/13.mp4"
                        className="img-fluid rounded-top w-100"
                        autoPlay
                        muted
                        loop
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                    />
                  </div>
                  <div className="portfolio-content p-4">
                    <h4 className="mb-3 text-light">Project Name 1</h4>
                    <p className="mb-4 text-light">
                      A brief description of the project and its impact.
                    </p>
                    <a
                        className="btn btn-outline-light rounded py-2 px-4"
                        href="#"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.4s"
              >
                <div className="portfolio-item bg-dark text-light rounded shadow-sm">
                  <div className="portfolio-img position-relative">
                    <video
                        src="/assets/videos/12.mp4"
                        className="img-fluid rounded-top w-100"
                        autoPlay
                        muted
                        loop
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                    />
                  </div>
                  <div className="portfolio-content p-4">
                    <h4 className="mb-3 text-light">Project Name 2</h4>
                    <p className="mb-4 text-light">
                      A brief description of the project and its impact.
                    </p>
                    <a
                        className="btn btn-outline-light rounded py-2 px-4"
                        href="#"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div
                  className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.6s"
              >
                <div className="portfolio-item bg-dark text-light rounded shadow-sm">
                  <div className="portfolio-img position-relative">
                    <video
                        src="/assets/videos/11.mp4"
                        className="img-fluid rounded-top w-100"
                        autoPlay
                        muted
                        loop
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                    />
                  </div>
                  <div className="portfolio-content p-4">
                    <h4 className="mb-3 text-light">Project Name 3</h4>
                    <p className="mb-4 text-light">
                      A brief description of the project and its impact.
                    </p>
                    <a
                        className="btn btn-outline-light rounded py-2 px-4"
                        href="#"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.8s">
                <a className="btn btn-outline-light rounded py-3 px-5" href="#">
                  View More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio End */}
        <style jsx>{`
          .portfolio-item:hover {
            transform: translateY(-10px);
            transition: all 0.3s ease-in-out;
          }
          @media (max-width: 768px) {
            .portfolio-content h4 {
              font-size: 1.5rem;
            }
            .portfolio-content p {
              font-size: 0.875rem;
            }
          }
          @media (max-width: 576px) {
            .portfolio-content h4 {
              font-size: 1.25rem;
            }
            .portfolio-content p {
              font-size: 0.75rem;
            }
            .portfolio-content .btn {
              padding: 0.5rem 1rem;
              font-size: 0.875rem;
            }
          }
        `}</style>
      </>
  );
}
