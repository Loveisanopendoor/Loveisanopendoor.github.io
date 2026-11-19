import { useLanguage } from '../i18n/LanguageContext'
function Navbar() {
  const { t, language, changeLanguage } = useLanguage()
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'International', href: '#international' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <span className="navbar-name">{t('Jaemin Kim')}</span>
      <div className="navbar-links">
        {links.map((link, i) => (
          <a key={i} href={link.href}>{t(link.label)}</a>
        ))}
      </div>
      <div className="language-switch" role="group" aria-label="Language / 言語">
        {[['en', 'EN'], ['ja', 'JP']].map(([code, label]) => (
          <button key={code} type="button" lang={code} aria-pressed={language === code} onClick={() => changeLanguage(code)}>{label}</button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar