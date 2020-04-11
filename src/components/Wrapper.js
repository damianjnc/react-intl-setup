import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'

import Spanish from '../languages/es-MX.json'
import English from '../languages/en-US.json'

export const Context = React.createContext()

const local = navigator.language

let language
if (local === 'en-US') {
  language = English
} else {
  language = Spanish
}

const Wrapper = ({ children }) => {
  const [locale, setLocale] = useState(local)
  const [messages, setMessages] = useState(language)

  const selectLanguage = (e) => {
    const newLocale = e.target.value
    setLocale(newLocale)
    if (newLocale === 'es-MX') {
      setMessages(Spanish)
    } else {
      setMessages(English)
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export default Wrapper
