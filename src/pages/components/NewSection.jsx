import React from 'react';
import NewContent from './NewContent'; // Импортируем новый компонент

export default function NewSection() {
    return (
        <div className="container mx-auto my-10 relative" style={{ fontFamily: 'Arial, sans-serif' }}>
            <style>
                {`
                .hover-zoom {
                    transition: transform 0.3s ease;
                }

                .hover-zoom:hover {
                    transform: scale(1.1);
                }

                .btn {
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                    padding: 12px 24px;
                    font-size: 1.25rem;
                    border-radius: 50px;
                    background-color: #000;
                    color: #fff;
                    text-transform: uppercase;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                }

                .btn:hover {
                    background-color: #333;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
                }

                .background-block {
                    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.9159313383556548) 100%);
                    color: #000000;
                    border-radius: 20px;
                    position: relative;
                    overflow: hidden;
                    padding: 40px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Легкая тень для всего текста */
                }

                .corner-image {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    object-fit: contain;
                }

                .corner-image.top-right {
                    top: -20px;
                    right: -20px;
                }

                .corner-image.bottom-left {
                    bottom: -20px;
                    left: -20px;
                }

                .pricing-text {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Тень для заголовка */
                }

                .features-text {
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                    color: #000;
                    font-weight: bold;
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Тень для текста особенностей */
                }

                .try-circle {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background-color: #DCFC17;
                    border-radius: 50%;
                    padding: 30px;
                    width: 150px;
                    height: 150px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 14px;
                    color: #000;
                    font-weight: bold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Тень для круга */
                    transform: translate(0, 0);
                }

                .referral-block-container {
                    background: linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7058473047422094) 100%);
                    padding: 20px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 20px;
                }

                .referral-block {
                    text-align: right;
                    color: #ffffff;
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                }

                .referral-text {
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .referral-subtext {
                    font-size: 1.2rem;
                    margin-top: 10px;
                }

                .referral-btn {
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                    padding: 12px 24px;
                    font-size: 1rem;
                    border-radius: 50px;
                    background-color: #ffffff;
                    color: #000;
                    text-transform: uppercase;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    margin-right: 20px;
                }

                .referral-btn:hover {
                    background-color: #e0e0e0;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
                }

                /* Скрыть элемент try-circle на мобильных устройствах */
                @media (max-width: 640px) {
                    .try-circle {
                        display: none;
                    }
                }
                `}
            </style>

            <div className="background-block text-center">
                {/* Верхняя правая картинка */}
                <img
                    src="/assets/img/desktop-t.png" // Замените на ваш путь к изображению
                    alt="Top Right"
                    className="corner-image top-right"
                    loading="lazy"
                />

                {/* Круглый элемент "Попробуйте неделю за $1,990" */}
                <div className="try-circle">
                    <span className="block">Попробуйте<br/>неделю за</span>
                    <strong className="block">$1,990</strong>
                </div>

                {/* Нижняя левая картинка */}
                <img
                    src="/assets/img/desktop-b.png" // Замените на ваш путь к изображению
                    alt="Bottom Left"
                    className="corner-image bottom-left"
                    loading="lazy"
                />

                <h2 className="pricing-text">
                    Pricing $5,990/mo
                </h2>
                <div className="features-text">
                    Unlimited tasks | Unlimited revisions | Fast delivery
                </div>
                <div className="btns">
                    <a
                        target="_blank"
                        rel="nofollow"
                        href=""
                        className="btn block mx-auto"
                        style={{ maxWidth: '200px' }}
                    >
                        Book a call
                    </a>
                </div>
            </div>

            <div className="referral-block-container">
                <a
                    href="#contact"
                    className="referral-btn"
                >
                    Contact us
                </a>
                <div className="referral-block">
                    <div className="referral-text">Refer a friend and earn 5%</div>
                    <div className="referral-subtext">Earn 5% monthly recurring commissions for each referral</div>
                </div>
            </div>

            {/* Подключаем новый контент ниже основного блока */}
            <NewContent />
        </div>
    );
}
