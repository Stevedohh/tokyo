import React from "react";
import Banner from "./components/Banner";

export default function AboutUs() {
  return (
      <>
        <Banner page="О нас" header="О нашей компании" />
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className="single-post">
                  <div className="mb-5 text-center animate__animated animate__fadeInDown">
                    <h2 className="text-3xl font-bold mt-2 text-gray-100">
                      Опыт и профессионализм в создании сайтов
                    </h2>
                    <div className="text-gray-400 mt-4">
                    <span className="text-sm uppercase tracking-wide mr-3">
                      Наша компания
                    </span>
                      <span className="text-sm uppercase tracking-wide">
                      Основана в 2010 году
                    </span>
                    </div>
                    <div
                        className="relative mt-5 h-96 overflow-hidden bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                        style={{ backgroundImage: "url('assets/img/company.jpg')" }}
                    >
                      <div className="absolute inset-0 bg-black opacity-70"></div>
                      <h2 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10">
                        Опыт и профессионализм
                      </h2>
                    </div>
                  </div>
                  <div className="animate__animated animate__fadeInUp">
                    <div className="text-lg text-gray-300">
                      <p className="mb-6">
                        С момента основания в 2010 году наша компания зарекомендовала себя как лидер в сфере создания сайтов. Мы имеем более 14 лет опыта в веб-разработке, работая с клиентами из различных отраслей по всему миру. Наши специалисты создают сайты, которые не только выглядят впечатляюще, но и обеспечивают высокую производительность и удобство использования.
                      </p>
                      <h2 className="text-2xl font-bold mb-4 text-gray-100">
                        Почему выбирают нас?
                      </h2>
                      <p className="mb-6">
                        Наши клиенты выбирают нас благодаря высокому качеству услуг, вниманию к деталям и инновационному подходу. Мы предоставляем полный спектр услуг, начиная от дизайна и разработки, до поддержки и продвижения сайтов. Мы работаем с самыми современными технологиями и постоянно совершенствуем наши навыки, чтобы соответствовать требованиям рынка.
                      </p>
                      <blockquote className="border-l-4 border-blue-500 pl-4 mb-6">
                        <p className="text-xl italic font-semibold text-gray-300">
                          "Создавать сайты - это искусство, и мы являемся художниками в этой области."
                        </p>
                      </blockquote>

                      <h2 className="text-2xl font-bold mb-4 text-gray-100">
                        Наши достижения
                      </h2>
                      <ul className="list-disc list-inside mb-6 text-gray-400">
                        <li className="mb-2">Более 500 успешно завершенных проектов.</li>
                        <li className="mb-2">Клиенты из более чем 20 стран мира.</li>
                        <li className="mb-2">Победители множества отраслевых наград в сфере веб-разработки.</li>
                        <li className="mb-2">97% клиентов остаются довольны и продолжают работать с нами.</li>
                      </ul>

                      <h3 className="text-xl font-bold mb-4 text-gray-100">
                        Кейсы успешных проектов
                      </h3>
                      <div className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
                        <h4 className="font-bold text-gray-100">
                          Проект: Разработка eCommerce платформы
                        </h4>
                        <p className="text-gray-400">
                          Задача: Создать платформу для интернет-магазина с высокой нагрузкой.
                        </p>
                        <p className="text-gray-400">
                          Решение: Мы разработали надежную eCommerce платформу с адаптивным дизайном и интеграцией платежных систем.
                        </p>
                        <p className="text-gray-400">
                          Результат: Увеличение продаж на 50% в течение первых трех месяцев после запуска.
                        </p>
                      </div>
                      <div className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
                        <h4 className="font-bold text-gray-100">
                          Проект: Корпоративный сайт для международной компании
                        </h4>
                        <p className="text-gray-400">
                          Задача: Создать многоязычный корпоративный сайт с интеграцией CRM.
                        </p>
                        <p className="text-gray-400">
                          Решение: Мы разработали сайт с функцией автоматической локализации и интеграцией с CRM системой клиента.
                        </p>
                        <p className="text-gray-400">
                          Результат: Повышение конверсии на 35% и упрощение управления клиентскими данными.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex my-5 animate__animated animate__fadeIn">
                  <div className="mr-4">
                    <img
                        alt=""
                        src="./assets/img/avatar3.webp"
                        className="rounded-full w-20 h-20 border-4 border-gray-700"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-100 mb-2">
                      Наша команда
                    </h4>
                    <p className="text-gray-400">
                      Наша команда состоит из опытных разработчиков, дизайнеров и маркетологов, каждый из которых является профессионалом в своей области. Мы работаем вместе, чтобы создавать проекты, которые действительно выделяются на фоне конкурентов.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="sidebar sidebar-right mt-5">
                  <div className="sidebar-wrap p-4 bg-gray-800 shadow-lg rounded-lg">
                    <div className="text-center mb-5">
                      <img
                          src="assets/img/user.jpg"
                          alt="user"
                          className="rounded-full mx-auto w-36 h-36 border-4 border-gray-700"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-100 mb-4">
                      Наши Услуги
                    </h4>
                    <p className="text-gray-400 mb-4">
                      Мы предлагаем полный спектр услуг по созданию сайтов, включая:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-400">
                      <li className="mb-2">Дизайн и разработка</li>
                      <li className="mb-2">SEO-оптимизация</li>
                      <li className="mb-2">Поддержка и обслуживание</li>
                      <li className="mb-2">Контент-менеджмент</li>
                    </ul>
                  </div>
                  {/* Дополнительный контент можно добавить здесь, если необходимо */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
