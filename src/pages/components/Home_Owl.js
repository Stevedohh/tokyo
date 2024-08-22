import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home_Owl = () => {
    useEffect(() => {
        const loadCarousel = async () => {
            if (typeof window !== "undefined") {
                const $ = (await import("jquery")).default;
                await import("owl.carousel");

                $(document).ready(function () {
                    $(".slider-carousel1").owlCarousel({
                        items: 2,
                        loop: true,
                        nav: true,
                        dots: false,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        animateOut: "fadeOut",
                        animateIn: "fadeIn",
                        navText: [
                            '<i class="bi bi-arrow-right"></i>',
                            '<i class="bi bi-arrow-left"></i>'
                        ],
                        responsiveClass: true,
                        responsive: {
                            0:{
                                items:1
                            },
                            576:{
                                items:1
                            },
                            768:{
                                items:1
                            },
                            992:{
                                items:2
                            },
                            1200:{
                                items:2
                            }
                        }
                    });
                });
            }
        };

        loadCarousel();
    }, []);

    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
            </Head>
            <style>
                {`
          .slider-carousel1 .owl-next{
              position: absolute !important;
              right: 0 !important;
              top: -58px !important;
              color: #fff !important;
              background: var(--button-color) !important;
              border-radius: 10px !important;
              padding: 5px 26px !important;
              transition: 0.5s !important;
              font-size: 22px !important;
          }  
          .slider-carousel1 .owl-next i{
              margin: 5px 26px !important;
              font-weight: 900 !important;
          }
          .slider-carousel1 .owl-prev i{
              margin: 5px 26px !important;
              font-weight: 900 !important;
          }
          .slider-carousel1 .owl-prev{
              position: absolute !important;
              top: -58px !important;
              left: 0 !important;
              background: var(--button-color) !important;
              color:#fff  !important;
              padding: 5px 26px !important;
              border-radius: 10px !important;
              transition: 0.5s !important;
              font-size: 22px !important;
          }
          .slider-item {
              background-color: rgba(0, 0, 0, 0.5) !important; /* Полупрозрачный черный фон */
              backdrop-filter: blur(10px); /* Применение блюра к фону */
              -webkit-backdrop-filter: blur(10px); /* Для поддержки Safari */
              color: #FFFFFF; /* Белый текст */
              border-radius: 15px;
              padding: 20px;
          }
          .slider-item p, .slider-item h4 {
              opacity: 0.9; /* Небольшая прозрачность для текста */
          }
        `}
            </style>
            <div className="container-fluid slider pb-5">
                <div className="container pb-5 d-block">
                    <div className="owl-carousel slider-carousel1">
                        <div className="slider-item rounded me-4">
                            <div className="row g-0">
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="h-100">
                                        <img
                                            src="assets/img/testimonial-1.jpg"
                                            className="img-fluid h-100 rounded"
                                            style={{ objectFit: "cover" }}
                                            alt="Slide 1"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-8 col-lg-8 col-xl-9">
                                    <div className="d-flex flex-column my-auto text-start p-4">
                                        <h4 className="mb-0">John Doe</h4>
                                        <p className="mb-3">CEO, Tech Innovations</p>
                                        <div className="d-flex text-primary mb-3">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p className="mb-0">
                                            &quot;NinjaTech предоставила нам невероятное решение, которое значительно улучшило наши внутренние процессы. Работа с ними была настоящим удовольствием!&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item rounded me-4">
                            <div className="row g-0">
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="h-100">
                                        <img
                                            src="assets/img/testimonial-2.jpg"
                                            className="img-fluid h-100 rounded"
                                            style={{ objectFit: "cover" }}
                                            alt="Slide 2"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-8 col-lg-8 col-xl-9">
                                    <div className="d-flex flex-column my-auto text-start p-4">
                                        <h4 className="mb-0">Jane Smith</h4>
                                        <p className="mb-3">CTO, Creative Solutions</p>
                                        <div className="d-flex text-primary mb-3">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                        <p className="mb-0">
                                            &quot;Команда NinjaTech продемонстрировала высокий уровень профессионализма и внимания к деталям. Мы получили продукт, который полностью соответствует нашим ожиданиям.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item rounded me-4">
                            <div className="row g-0">
                                <div className="col-md-4 col-lg-4 col-xl-3">
                                    <div className="h-100">
                                        <img
                                            src="assets/img/testimonial-3.jpg"
                                            className="img-fluid h-100 rounded"
                                            style={{ objectFit: "cover" }}
                                            alt="Slide 3"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-8 col-lg-8 col-xl-9">
                                    <div className="d-flex flex-column my-auto text-start p-4">
                                        <h4 className="mb-0">Michael Brown</h4>
                                        <p className="mb-3">COO, NextGen Software</p>
                                        <div className="d-flex text-primary mb-3">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                        <p className="mb-0">
                                            &quot;NinjaTech создала для нас веб-приложение, которое значительно повысило уровень взаимодействия с нашими клиентами. Очень рекомендую эту команду!&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="/assets/lib/owlcarousel/owl.carousel.min.js"
                strategy="afterInteractive"
            />
        </>
    );
};

export default Home_Owl;
