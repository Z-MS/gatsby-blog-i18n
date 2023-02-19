import * as React from 'react'
import { navigate } from 'gatsby'
import { useLocalization } from 'gatsby-theme-i18n'

function LocaleSwitcher() {
  const { locale, defaultLang, config } = useLocalization() // get information from gatsby-theme-i18n
  const switchLocale = event => {
    // Do nothing if the user selects the current locale
    if (event.target.value === locale) {
      return
    }
    // Go to the default locale
    if (event.target.value === defaultLang) {
      navigate("/")
    } else {
      // Go to any other locale
      navigate(`/${event.target.value}`)
    }
  }

  return (
    <div>
      <select value={locale} onChange={switchLocale}>
        {config.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.localName}
          </option>
        ))}
      </select>
    </div>
  )
}
export default LocaleSwitcher