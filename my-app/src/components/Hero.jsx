import { useLanguage } from '../i18n/LanguageContext'
function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero">
      <p className="hero-label"></p>
      <h1 className="hero-title">{t('Jaemin Kim')}</h1>
      <p className="hero-sub">
        {t("Master's student at The University of Tokyo")}
        <br />
        {t('Data Visualization · Mathematics · Arts')}
      </p>
    </section>
  )
}

export default Hero

