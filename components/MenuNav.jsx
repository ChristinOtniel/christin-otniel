//import { useTheme } from './ThemeProvider';
import { useLocale } from './LocaleProvider';
import styles from './MenuNav.module.css';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icônes pour le mode sombre et clair
import { MdTranslate } from 'react-icons/md'; // Icône pour la traduction
import { FormattedMessage } from 'react-intl';

import { useTheme } from 'next-themes';

/**
 * Gestion du Menu 
 * @param {setPage} param0 
 * @returns rien
 */
export default function MenuNav() {
    const {theme, setTheme} = useTheme();
    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const [locale, setLocale] = useLocale();
    const handleLocale = () => {
        if (locale === 'fr') {
            setLocale('en');
        } else {
            setLocale('fr');
        }
    }

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.nav__brand}>
                <h1>CODIN</h1>
            </Link>
            <div className={styles.nav__menu + ' ' + styles.nav__active}>
                <div><Link href="/" className={styles.nav__link}><FormattedMessage id='app.header.menu.link1' /></Link></div>
                <div><Link href="/#Services"> <FormattedMessage id='app.header.menu.link3' /> </Link></div>
                <div><Link href="/#Portfolio"><FormattedMessage id='app.header.menu.link4' /></Link></div>
                <div><Link href="/#about"><FormattedMessage id='app.header.menu.link2' /></Link></div>
                <div><Link href="/#Equipe"><FormattedMessage id='app.header.menu.link5' /></Link></div>
                <div><Link href="/Contact"><FormattedMessage id='app.header.menu.link6' /></Link></div>
                <div><Link href="https://calendly.com/sotodonouchristinotniel" target='_blank'><FormattedMessage id='app.header.menu.link7' /></Link></div>
                <div className={styles.nav__icon} onClick={handleLocale}><MdTranslate /></div>
                <div className={styles.nav__icon} onClick={handleTheme}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </div>
            </div>
        </nav>
    );
}
