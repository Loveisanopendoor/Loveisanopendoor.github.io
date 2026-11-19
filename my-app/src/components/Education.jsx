import { useLanguage } from '../i18n/LanguageContext'
function Education() {
  const { t } = useLanguage()
  const items = [
    {
      school: 'The University of Tokyo',
      detail: 'Graduate School of Interdisciplinary Information Studies',
      degree: 'M.A. Student · Cultural and Human Information Studies',
      period: '2026 - Present',
    },
    {
      school: 'The University of Osaka',
      detail: 'Faculty of Science, Department of Mathematics',
      degree: 'B.Sc. in Mathematics · Machine Learning & Optimization Lab',
      period: '2022 - 2026',
    },
  ]

  return (
    <section className="education" id="education">
      <h2>{t('Education')}</h2>
      <div className="edu-list">
        {items.map((e, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-left">
              <p className="edu-school">{t(e.school)}</p>
              <p className="edu-detail">{t(e.detail)}</p>
              <p className="edu-degree">{t(e.degree)}</p>
            </div>
            <span className="edu-period">{t(e.period)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education