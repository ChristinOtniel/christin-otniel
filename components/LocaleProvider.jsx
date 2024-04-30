'use client'

import { createContext, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import englishData from '@/i18n/en.json'
import frenchData from '@/i18n/fr.json'

const translations = {
    en: englishData,
    fr: frenchData
}

const LocaleContext = createContext();

export function LocaleProvider({children}) {
    const [locale, setLocale] = useState('fr');

    return <LocaleContext.Provider value={[locale, setLocale]}>
        <IntlProvider locale={locale} messages={translations[locale]}>
            {children}
        </IntlProvider>
    </LocaleContext.Provider>
}

export function useLocale() {
    const [locale, setLocale] = useContext(LocaleContext);
    return [locale, setLocale];
}
