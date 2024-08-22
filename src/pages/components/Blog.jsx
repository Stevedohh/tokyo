import Link from 'next/link';
import React from 'react';

export default function Blog() {
  return (
      <>
        {/* Priorities Start */}
        <div className="container-fluid priorities py-5" style={{ background: '#000000' }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
              <h4
                  className="text-primary"
                  style={{
                    background: 'linear-gradient(135deg, #333333, #000000)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Our priorities
              </h4>
              <h1
                  className="display-4 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #666666, #111111)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                Solve problems quickly and efficiently
              </h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="priority-item rounded p-4" style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid',
                  borderImage: 'linear-gradient(135deg, #FFC300, #FF5733) 1'
                }}>
                  <div className="priority-video mb-3">
                    <video
                        src="/assets/videos/Animation_yellow-2_anubis.mp4"
                        className="img-fluid"
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                  <h4 className="text-light">Speed</h4>
                  <p className="text-light">
                    Our priority is to do the project quickly, but at the same time pay attention to the quality of the final result.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="priority-item rounded p-4" style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid',
                  borderImage: 'linear-gradient(135deg, #FF3CAC, #784BA0) 1'
                }}>
                  <div className="priority-video mb-3">
                    <video
                        src="/assets/videos/Animation_red-2_anubis.mp4"
                        className="img-fluid"
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                  <h4 className="text-light">Creativity</h4>
                  <p className="text-light">
                    An important feature that we adhere to in our work, to bring to the project atypical solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="priority-item rounded p-4" style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid',
                  borderImage: 'linear-gradient(135deg, #00F260, #0575E6) 1'
                }}>
                  <div className="priority-video mb-3">
                    <video
                        src="/assets/videos/Animation_blue-2_anubis.mp4"
                        className="img-fluid"
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                  <h4 className="text-light">Reasonableness</h4>
                  <p className="text-light">
                    There are no random elements in our design for beauty. The main idea is a functional design that must first and foremost solve the user&apos;s problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Priorities End */}

        {/* Blog Start */}
        <div className="container-fluid blog py-5" style={{ background: '#000000' }}>
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
                From Blog
              </h4>
              <h1
                  className="display-4 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #666666, #111111)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
              >
                News And Updates
              </h1>
              <p className="mb-0 text-light">
                Stay updated with the latest trends, insights, and news from the industry. Explore our blog to learn more about our work and innovations.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item bg-dark text-light rounded">
                  <div className="blog-img">
                    <img
                        src="assets/img/125.png"
                        className="img-fluid rounded-top w-100"
                        alt=""
                    />
                    <div className="blog-categiry py-2 px-4 text-light bg-primary">
                      <span>Business</span>
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <div className="blog-comment d-flex justify-content-between mb-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" /> John Doe
                      </div>
                      <div className="small">
                        <span className="fa fa-calendar text-primary" /> 15 Aug 2024
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" /> 12 Comments
                      </div>
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3 text-light">
                      Revolutionizing Web Development with Next.js
                    </a>
                    <p className="mb-3">
                      Explore how NinjaTech is leveraging the power of Next.js to create fast, responsive, and scalable web applications that set new standards in the industry.
                    </p>
                    <Link href="/blog_detail" className="btn p-0 text-primary">
                      Read More <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-item bg-dark text-light rounded">
                  <div className="blog-img">
                    <img
                        src="assets/img/215.png"
                        className="img-fluid rounded-top w-100"
                        alt=""
                    />
                    <div className="blog-categiry py-2 px-4 text-light bg-primary">
                      <span>Project Management</span>
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <div className="blog-comment d-flex justify-content-between mb-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" /> Sarah K.
                      </div>
                      <div className="small">
                        <span className="fa fa-calendar text-primary" /> 10 Jul 2024
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" /> 8 Comments
                      </div>
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3 text-light">
                      Agile Project Management: The NinjaTech Way
                    </a>
                    <p className="mb-3">
                      Learn about our agile project management strategies that help us deliver high-quality projects on time and within budget, every time.
                    </p>
                    <Link href="/blog_detail" className="btn p-0 text-primary">
                      Read More <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-item bg-dark text-light rounded">
                  <div className="blog-img">
                    <img
                        src="assets/img/foto3.png"
                        className="img-fluid rounded-top w-100"
                        alt=""
                    />
                    <div className="blog-categiry py-2 px-4 text-light bg-primary">
                      <span>SEO & Performance</span>
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <div className="blog-comment d-flex justify-content-between mb-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" /> Alex B.
                      </div>
                      <div className="small">
                        <span className="fa fa-calendar text-primary" /> 22 Jun 2024
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" /> 5 Comments
                      </div>
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3 text-light">
                      Boosting Website Performance with Advanced SEO Techniques
                    </a>
                    <p className="mb-3">
                      Discover how NinjaTech&apos;s advanced SEO techniques and performance optimizations are helping clients achieve better rankings and faster load times.
                    </p>
                    <Link href="/blog_detail" className="btn p-0 text-primary">
                      Read More <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        <style jsx>{`
          @media (max-width: 992px) {
            .priority-item, .blog-item {
              margin-bottom: 30px;
            }
          }
          @media (max-width: 768px) {
            .priority-item, .blog-item {
              text-align: center;
            }
            .priority-video, .blog-img {
              margin-bottom: 15px;
            }
            .h4 {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 576px) {
            .priority-item, .blog-item {
              padding: 20px;
            }
            .h4 {
              font-size: 1.25rem;
            }
            .priority-video, .blog-img {
              border-radius: 6px;
            }
          }
        `}</style>
      </>
  );
}
