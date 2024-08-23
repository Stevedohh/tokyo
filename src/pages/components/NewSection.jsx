import { useTranslation } from "next-i18next";
import React from 'react';
import NewContent from './NewContent';

export default function NewSection() {
  const { t } = useTranslation('new_section');

  return (
    <div className="container mx-auto my-10 relative" style={{ fontFamily: 'Arial, sans-serif' }}>
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
          <span className="block" dangerouslySetInnerHTML={{ __html: t('try_week') }}/>
          <strong className="block">{t('price_week')}</strong>
        </div>

        {/* Нижняя левая картинка */}
        <img
          src="/assets/img/desktop-b.png" // Замените на ваш путь к изображению
          alt="Bottom Left"
          className="corner-image bottom-left"
          loading="lazy"
        />

        <h2 className="pricing-text">
          {t('pricing_text')}
        </h2>
        <div className="features-text">
          {t('features_text')}
        </div>
        <div className="btns">
          <a
            target="_blank"
            rel="nofollow"
            href=""
            className="btn block mx-auto"
            style={{ maxWidth: '200px' }}
          >
            {t('book_call')}
          </a>
        </div>
      </div>

      <div className="referral-block-container">
        <a
          href="#contact"
          className="referral-btn"
        >
          {t('contact_us')}
        </a>
        <div className="referral-block">
          <div className="referral-text">{t('referral_text')}</div>
          <div className="referral-subtext">{t('referral_subtext')}</div>
        </div>
      </div>

      {/* Подключаем новый контент ниже основного блока */}
      <NewContent/>
    </div>
  );
}
