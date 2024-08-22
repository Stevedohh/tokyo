import React from 'react';
import NewSection from './NewSection'; // Импорт нового компонента

export default function About() {
  return (
      <>
        <style jsx>{`
        .bg-services {
          background-image: url('/assets/img/services-desktop.png');
          background-size: cover;
          background-position: right center;
          background-repeat: no-repeat;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
          position: relative;
          overflow: hidden;
          border: 3px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(135deg, #ff0080, #ff8c00);
        }

        .bg-services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .bg-services h1,
        .bg-services .lead,
        .bg-services .badge,
        .bg-services .btn {
          position: relative;
          z-index: 2;
        }

        .bg-services h1 {
          font-weight: bold;
          color: #ffffff;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        }

        .bg-services .lead {
          color: #cccccc;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        }

        .bg-services .badge {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-size: 1rem;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
          transition: background-color 0.3s, color 0.3s;
        }

        .bg-services .badge:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .bg-services .btn {
          border-radius: 30px;
          padding: 10px 30px;
          background-color: #ffffff;
          color: #000000;
          font-weight: bold;
          transition: background-color 0.3s, color 0.3s;
          text-shadow: none;
        }

        .bg-services .btn:hover {
          background-color: #dddddd;
          color: #000000;
        }

        @media (max-width: 768px) {
          .bg-services {
            background-image: url('/assets/img/services-mobile.png');
            background-position: center center;
            border-image-source: linear-gradient(135deg, #ff0080, #ff8c00);
            padding: 20px;
          }

          .bg-services h1, .bg-services .lead, .bg-services .badge {
            font-weight: bolder;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
            color: #ffffff;
            -webkit-text-stroke: 1px black;
          }

          .bg-services .badge {
            background-color: rgba(255, 255, 255, 0.3);
            font-size: 0.9rem;
          }

          .bg-services .btn {
            padding: 8px 25px;
          }
        }
      `}</style>

        {/* Новый контент, интегрированный в About.js */}
        <NewSection />

        {/* Секция услуг Start */}
        <div className="container-fluid bg-dark text-white py-5 bg-services">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold">Наши услуги</h1>
                <p className="lead">
                  Мы с радостью поможем вам, если вам нужны профессиональные результаты в следующих областях:
                </p>
                <div className="d-flex flex-wrap mb-4">
                  <span className="badge m-2 p-3">Айдентика</span>
                  <span className="badge m-2 p-3">UX/UI Дизайн</span>
                  <span className="badge m-2 p-3">Дизайн Приложений</span>
                  <span className="badge m-2 p-3">Веб-дизайн</span>
                  <span className="badge m-2 p-3">Анимация</span>
                  <span className="badge m-2 p-3">3D</span>
                  <span className="badge m-2 p-3">Иллюстрации</span>
                  <span className="badge m-2 p-3">Презентации</span>
                  <span className="badge m-2 p-3">Визуализация для Соцсетей</span>
                </div>
                <a href="#" className="btn btn-light btn-lg">
                  Смотреть цены
                </a>
              </div>
              <div className="col-lg-6">
                {/* Пустая колонка для сбалансированного размещения фонового изображения */}
              </div>
            </div>
          </div>
        </div>
        {/* Секция услуг End */}

        {/* Секция "О нас" Start */}
        <div className="container-fluid about pb-5" style={{ background: '#000000' }}>
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-item-content rounded p-5 h-100" style={{background: '#1A1A1A'}}>
                  <h4 className="text-primary">О нашей компании</h4>
                  <h1 className="display-4 mb-4"
                      style={{color: '#FFFFFF', fontWeight: '700', fontSize: '2.5rem', letterSpacing: '1px'}}>
                    Широкий спектр защитных мер
                  </h1>
                  <p style={{color: '#CCCCCC', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                    В <span
                      style={{color: '#FF8C00', fontWeight: 'bold', textDecoration: 'underline'}}>NinjaTech</span> мы
                    обеспечиваем высококачественную защиту вашего цифрового пространства, предлагая
                    передовые решения для безопасности, адаптированные под ваши потребности. Наши специалисты обладают
                    глубокими знаниями и многолетним опытом, что позволяет нам гарантировать надежную защиту ваших
                    данных.
                  </p>
                  <p style={{color: '#CCCCCC', fontSize: '1.2rem', lineHeight: '1.8'}}>
                    Мы стремимся предоставить нашим клиентам максимальный уровень безопасности и уверенности, защищая их
                    от современных киберугроз. Независимо от того, являетесь ли вы малым бизнесом или крупной
                    корпорацией, мы разработаем для вас индивидуальный план защиты, учитывающий все аспекты вашей
                    цифровой инфраструктуры.
                  </p>

                  <p className="text-light">
                    <i className="fa fa-check text-primary me-3"/>
                    Мы можем сэкономить ваши деньги.
                  </p>
                  <p className="text-light">
                    <i className="fa fa-check text-primary me-3"/>
                    Производство или торговля товарами
                  </p>
                  <p className="text-light mb-4">
                    <i className="fa fa-check text-primary me-3"/>
                    Наше страхование жизни гибкое
                  </p>
                  <a className="btn btn-primary rounded py-3 px-5" href="#"
                     style={{background: 'linear-gradient(135deg, #444, #222)', color: '#fff'}}>
                    Подробнее
                  </a>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="rounded p-5 h-100" style={{background: '#1A1A1A'}}>
                  <div className="row g-4 justify-content-center">
                    <div className="col-12">
                      <div className="rounded bg-light">
                        <img
                            src="assets/img/abouttt.jpg"
                            className="img-fluid rounded w-100"
                            alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{background: '#333333'}}>
                        <div className="counter-counting">
                        <span
                            className="text-primary fs-2 fw-bold"
                            data-toggle="counter-up"
                        >
                          129
                        </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>Страховые Полисы</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                        <span
                            className="text-primary fs-2 fw-bold"
                            data-toggle="counter-up"
                        >
                          99
                        </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>Награды</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                        <span
                            className="text-primary fs-2 fw-bold"
                            data-toggle="counter-up"
                        >
                          556
                        </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>Квалифицированные Агенты</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                        <span
                            className="text-primary fs-2 fw-bold"
                            data-toggle="counter-up"
                        >
                          967
                        </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>Члены Команды</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Секция "О нас" End */}
      </>
  );
}
