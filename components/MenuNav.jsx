'use client'
import { useState } from 'react';
import { useLocale } from './LocaleProvider';
import styles from './MenuNav.module.css';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icônes pour le mode sombre et clair
import { MdTranslate } from 'react-icons/md'; // Icône pour la traduction
import { FaBars } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { useTheme } from 'next-themes';

/**
 * Gestion du Menu 
 * @param {setPage} param0 
 * @returns rien
 */
export default function MenuNav() {

    const [toggleIcon, setToggleIcon] = useState(false);
    const [active, setActive] = useState(false);

    const navToggle = () => {
        setToggleIcon(!toggleIcon);
        setActive(!active);
    }


    const { theme, setTheme } = useTheme();
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
            <div className={styles.nav__menu + ' ' + (active ? styles.nav__active : '')}>
                <div>
                    <Link href="/" className={styles.menu_color }>
                        <FormattedMessage id='app.header.menu.link1' />
                    </Link></div>
                <div>
                    <Link href="#Services" className={styles.menu_color }>
                        <FormattedMessage id='app.header.menu.link3' />
                    </Link></div>
                <div>
                    <Link href="#Portfolio" className={styles.menu_color }>
                        <FormattedMessage id='app.header.menu.link4' />
                    </Link></div>
                <div>
                    <Link href="#about" className={styles.menu_color }>
                        <FormattedMessage id='app.header.menu.link2' />
                    </Link></div>
                <div>
                    <Link href="#Equipe" className={styles.menu_color }>
                        <FormattedMessage id='app.header.menu.link5' />
                    </Link></div>
                <div>
                    <Link href="/Contact" className={styles.menu_color }>
                        <FormattedMessage id='app.header.menu.link6' />
                    </Link></div>
                <div>
                    <Link href="https://calendly.com/sotodonouchristinotniel" target='_blank'>
                        <FormattedMessage id='app.header.menu.link7' />
                    </Link></div>
                <div className={styles.nav__icon} onClick={handleLocale}><MdTranslate /></div>
                <div className={styles.nav__icon} onClick={handleTheme}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </div>
            </div>
            <div onClick={navToggle} className={styles.nav__toggler}>{toggleIcon ? <FaTimes /> : <FaBars />}</div>
        </nav>
    );
}
