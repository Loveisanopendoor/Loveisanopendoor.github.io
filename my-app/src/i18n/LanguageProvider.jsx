import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { supportedLanguages, translations } from './translations'

function initialLanguage() {
  const requested = new URLSearchParams(window.location.search).get('lang')
  return supportedLanguages.includes(requested) ? requested : 'en'
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = translations['Jaemin Kim']?.[language] ?? 'Jaemin Kim'
  }, [language])

  useEffect(() => {
    const onPopState = () => setLanguage(initialLanguage())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const changeLanguage = (next) => {
    if (!supportedLanguages.includes(next)) return
    setLanguage(next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.pushState({}, '', url)
  }

  const t = (text) => translations[text]?.[language] ?? text

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
