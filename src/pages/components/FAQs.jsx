import React from 'react';
import Image from 'next/image';

export default function FAQs() {
  return (
      <>
        {/* FAQs Start */}
        <div className="container-fluid faq-section py-5" style={{ background: '#000000' }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
              <h1 className="display-4 mb-0 text-white">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingOne">
                  <button
                      className="accordion-button bg-dark text-light border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                  >
                    What reasons are there for not hiring a full-time designer?
                  </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show active"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    Hiring a full-time designer might not be cost-effective for smaller companies or startups with limited budgets. Utilizing external resources allows for greater flexibility and access to a wider range of expertise.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                      className="accordion-button bg-dark text-light collapsed border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                  >
                    What design types are you able to create?
                  </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    We specialize in creating web designs, UI/UX interfaces, mobile app designs, branding, and marketing materials, ensuring a cohesive and attractive visual presence across all platforms.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingThree">
                  <button
                      className="accordion-button bg-dark text-light collapsed border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                  >
                    How does the onboarding process for signing up for a subscription work?
                  </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    The onboarding process is straightforward: once you sign up, we’ll connect with you to understand your requirements, set up your account, and start working on your first project within a few days.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingFour">
                  <button
                      className="accordion-button bg-dark text-light collapsed border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                  >
                    Which tools do you utilize for design creation?
                  </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    We use industry-leading tools such as Adobe Creative Suite, Figma, Sketch, and InVision for design creation, ensuring the highest quality output for your projects.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingFive">
                  <button
                      className="accordion-button bg-dark text-light collapsed border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                  >
                    How do you ensure the security of my data?
                  </button>
                </h2>
                <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    We implement strict security protocols, including data encryption, secure servers, and regular audits, to ensure your data is protected at all times.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingSix">
                  <button
                      className="accordion-button bg-dark text-light collapsed border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                  >
                    What is your approach to project management?
                  </button>
                </h2>
                <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    We follow an agile methodology, using tools like Jira and Trello to manage projects efficiently, keeping you updated at every stage of the process.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-dark border-0">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                      className="accordion-button bg-dark text-light collapsed border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                  >
                    How can I track the progress of my project?
                  </button>
                </h2>
                <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-light">
                    You can track the progress of your project through our project management tool, where we provide regular updates, milestones, and feedback loops.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs End */}
      </>
  );
}
