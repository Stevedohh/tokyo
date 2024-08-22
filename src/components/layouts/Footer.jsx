import React from 'react';

export default function Footer() {
  return (
      <>
        <style jsx>{`
          /* Фон для футера */
          .footer {
            background-image: url('/assets/img/q-97c536f9.png');
            background-size: cover; /* Масштабирование изображения */
            background-position: center; /* Центровка изображения */
            background-repeat: no-repeat; /* Отключение повторения изображения */
            background-color: #000; /* Запасной цвет фона, если изображение не загрузится */
          }

          /* Анимации для ПК */
          @media (min-width: 768px) {
            .footer-item h4 {
              animation: fadeInDown 1s ease-in-out;
            }

            .footer-instagram img {
              transition: transform 0.3s ease-in-out;
            }

            .footer-instagram img:hover {
              transform: scale(1.1);
            }

            .footer-item a {
              transition: color 0.3s ease-in-out;
            }

            .footer-item a:hover {
              color: #FFD700; /* Жёлтая подсветка при наведении */
            }
          }

          /* Анимации для мобильных устройств */
          @media (max-width: 768px) {
            .footer-item h4 {
              font-weight: bold;
              color: #FFD700; /* Жёлтая обводка текста */
              text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5); /* Тень */
            }

            .footer-instagram img {
              transition: transform 0.3s ease-in-out;
              opacity: 0.9; /* Увеличиваем видимость на мобильных */
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Стили для поля ввода и кнопки */
          .newsletter-input {
            display: flex;
            align-items: center;
            position: relative;
          }

          .newsletter-input input {
            flex-grow: 1;
            border-radius: 25px;
            padding: 0 60px 0 20px;
            background-color: #1A1A1A;
            color: #FFFFFF;
            border: none;
            height: 48px;
          }

          .newsletter-input button {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 0;
          }

          .newsletter-input button i {
            color: #1A73E8; /* Цвет иконки */
            font-size: 24px;
          }
        `}</style>

        {/* Начало футера */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-xl-9">
                <div className="mb-5">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-5">
                      <div className="footer-item">
                        <a href="index.html" className="p-0">
                          <h3 className="text-light">
                            <i className="" /> NinjaTech
                          </h3>
                          <img src="/assets/img/logo.png" alt="Логотип" width={50} height={50} />
                        </a>
                        <p className="text-light mb-4">
                          Компания NinjaTech предоставляет IT-услуги высокого качества, направленные на улучшение бизнес-процессов.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="footer-item">
                        <h4 className="text-light mb-4">Полезные ссылки</h4>
                        <a href="#" className="text-light"><i className="fas fa-angle-right me-2" /> О нас</a><br />
                        <a href="#" className="text-light"><i className="fas fa-angle-right me-2" /> Услуги</a><br />
                        <a href="#" className="text-light"><i className="fas fa-angle-right me-2" /> Связаться с нами</a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="footer-item">
                        <h4 className="mb-4 text-light">Instagram</h4>
                        <div className="row g-3">
                          <div className="col-4">
                            <div className="footer-instagram rounded">
                              <img
                                  src="/assets/img/instagram-footer-1.jpg"
                                  className="img-fluid w-100"
                                  alt=""
                                  width={100}
                                  height={100}
                                  style={{ objectFit: 'cover' }}
                              />
                              <div className="footer-search-icon">
                                <a
                                    href="/assets/img/6.png"
                                    data-lightbox="footerInstagram-1"
                                    className="my-auto"
                                >
                                  <i className="fas fa-link text-light" />
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Остальные изображения */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="row g-4">
                        <div className="col-lg-6 col-xl-4">
                          <div className="d-flex">
                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                              <i className="fas fa-map-marker-alt fa-2x" />
                            </div>
                            <div>
                              <h4 className="text-light">Адрес</h4>
                              <p className="mb-0 text-light">123 улица, Нью-Йорк, США</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <div className="d-flex">
                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                              <i className="fas fa-envelope fa-2x" />
                            </div>
                            <div>
                              <h4 className="text-light">Эл. почта</h4>
                              <p className="mb-0 text-light">info@example.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <div className="d-flex">
                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                              <i className="fa fa-phone-alt fa-2x" />
                            </div>
                            <div>
                              <h4 className="text-light">Телефон</h4>
                              <p className="mb-0 text-light">(+012) 3456 7890</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="footer-item">
                  <h4 className="text-light mb-4">Подписка на новости</h4>
                  <p className="text-light">
                    Получайте свежие новости и обновления от NinjaTech...
                  </p>
                  <div className="newsletter-input w-100 mt-3">
                    <input
                        type="text"
                        placeholder="Ваш Email"
                    />
                    <button type="button">
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
