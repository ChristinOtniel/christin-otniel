import { createContext, useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import englishData from '@/i18n/en.json';
import frenchData from '@/i18n/fr.json';

const translations = {
    en: englishData,
    fr: frenchData
}

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState('fr');

    // Effet pour récupérer la langue stockée dans localStorage au chargement de l'application
    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        // Utilisation de || pour garantir que storedLocale n'est pas null ou undefined
        setLocale(storedLocale || 'fr');
    }, []);


    // Fonction pour changer la langue avec stockage dans localStorage
    const setLocaleWithStorage = (newLocale) => {
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale: setLocaleWithStorage }}>
            <IntlProvider locale={locale} messages={translations[locale]}>
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const { locale, setLocale } = useContext(LocaleContext);
    return [locale, setLocale];
}
