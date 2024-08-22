import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

export default function Navbar() {
  const { t } = useTranslation('common');

  return (
      <>
        {/* Верхняя панель Начало */}
        <div className="container-fluid topbar px-0 px-lg-4" style={{ backgroundColor: "#000000", padding: "0.5rem 0" }}>
          <div className="container">
            <div className="row gx-0 align-items-center">
              <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                <div className="ps-3">
                  <a href="mailto:example@gmail.com" className="text-muted small" style={{ color: "#D3D3D3" }}>
                    <i className="fas fa-envelope text-primary me-2" />
                    {t('email')}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <div className="dropdown ms-3">
                  <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown">
                    <small>
                      <i className="fas fa-globe-europe text-primary me-2" />{" "}
                      {t('language')}
                    </small>
                  </a>
                  <div className="dropdown-menu rounded bg-dark">
                    <Link href="/" locale="en" className="dropdown-item text-light">English</Link>
                    <Link href="/" locale="ru" className="dropdown-item text-light">Русский</Link>
                    <Link href="/" locale="uk" className="dropdown-item text-light">Українська</Link>
                    <Link href="/" locale="es" className="dropdown-item text-light">Español</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Верхняя панель Конец */}

{/* Навбар и Герой Начало */}
        <div
            className="container-fluid nav-bar px-0 px-lg-4 py-lg-0"
            style={{ backgroundColor: "#000000" }}
        >
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a href="#" className="navbar-brand d-flex align-items-center p-0">
                <Image
                    src="/assets/img/logo.png"
                    alt="Логотип"
                    width={40}
                    height={40}
                    className="me-2"
                />
                <h1 className="mb-0 text-primary">NinjaTech</h1>
              </a>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-0 mx-lg-auto align-items-center">
                  <Link href="/" className="nav-item nav-link text-light">
                    {t('home')}
                  </Link>
                  <Link href="/about" className="nav-item nav-link text-light text-nowrap">
                    {t('about')}
                  </Link>
                  <Link href="/services" className="nav-item nav-link text-light">
                    {t('services')}
                  </Link>
                  <Link href="/blog" className="nav-item nav-link text-light">
                    {t('blog')}
                  </Link>
                  <div className="nav-item dropdown">
                    <a
                        href="#"
                        className="nav-link text-light"
                        data-bs-toggle="dropdown"
                    >
                      <span className="dropdown-toggle">{t('pages')}</span>
                    </a>
                    <div className="dropdown-menu bg-dark">
                      <Link href="/feature" className="dropdown-item text-light">
                        {t('features')}
                      </Link>
                      <Link href="/team" className="dropdown-item text-light">
                        {t('team')}
                      </Link>
                      <Link href="/testimonial" className="dropdown-item text-light">
                        {t('testimonials')}
                      </Link>
                      <Link href="/faqs" className="dropdown-item text-light">
                        {t('faqs')}
                      </Link>
                      <Link href="*" className="dropdown-item text-light">
                        {t('404')}
                      </Link>
                    </div>
                  </div>
                  <Link href="/contact" className="nav-item nav-link text-light">
                    {t('contact')}
                  </Link>
                  <div className="nav-btn px-3">
                    <a
                        href="#"
                        className="btn btn-outline-primary rounded py-2 px-4 ms-3 flex-shrink-0 custom-btn"
                    >
                      {t('consultation')}
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Навбар и Герой Конец */}

        <style jsx>{`
          .nav-link,
          .btn {
            transition: all 0.3s ease-in-out;
          }

          .nav-link:hover,
          .btn:hover {
            color: #1a73e8 !important;
            transform: scale(1.1);
          }

          .btn {
            background-color: transparent;
            border: 2px solid #1a73e8;
            color: #ffffff;
            font-weight: bold;
          }

          .custom-btn {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }

          .custom-btn:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(26, 115, 232, 0.2);
            transition: all 0.4s ease-in-out;
            transform: translate(-50%, -50%) scale(0);
            border-radius: 50%;
            z-index: -1;
          }

          .custom-btn:hover:before {
            transform: translate(-50%, -50%) scale(1);
          }

          .custom-btn:hover {
            color: #ffffff;
            transform: translateY(-2px);
          }

          .navbar-toggler {
            transition: all 0.3s ease-in-out;
          }

          .navbar-toggler:focus {
            transform: rotate(90deg);
          }

          .dropdown-menu {
            transition: all 0.3s ease-in-out;
          }

          .dropdown-menu.show {
            opacity: 1;
            transform: translateY(0);
          }

          .dropdown-menu {
            opacity: 0;
            transform: translateY(-20%);
          }

          .text-nowrap {
            white-space: nowrap;
          }

          /* Адаптивные стили */
          @media (max-width: 1200px) {
            .navbar-brand h1 {
              font-size: 1.5rem;
            }

            .custom-btn {
              font-size: 0.875rem;
              padding: 0.5rem 1rem;
            }
          }

          @media (max-width: 992px) {
            .navbar-nav {
              text-align: center;
            }

            .nav-btn {
              margin-top: 1rem;
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .navbar-brand h1 {
              font-size: 1.25rem;
            }

            .custom-btn {
              font-size: 0.75rem;
              padding: 0.4rem 0.8rem;
            }

            .nav-item {
              margin: 0.5rem 0;
            }

            .nav-btn {
              margin-top: 1rem;
            }
          }

          @media (max-width: 576px) {
            .navbar-brand h1 {
              font-size: 1rem;
            }

            .custom-btn {
              font-size: 0.625rem;
              padding: 0.3rem 0.6rem;
            }

            .nav-item {
              margin: 0.3rem 0;
            }

            .navbar-collapse {
              text-align: center;
            }
          }
        `}</style>
      </>
  );
}
