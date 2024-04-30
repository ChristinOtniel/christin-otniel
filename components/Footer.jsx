'use client';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaArrowUp } from "react-icons/fa";
import styles from './Footer.module.css';
//import { useTheme } from './ThemeProvider'
import { useTheme } from 'next-themes';


export default function Footer() {
    // Fonction pour scroller vers le haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const {theme} = useTheme()

    return <footer className={styles.footer 
        + (theme === 'dark' ? ' ' + styles.dark : '')
    }>
            <div className={`${styles.container} container`}>
                <div className={styles.row1}>
                    {/* column1 */}
                    <div className={`${styles.col} ${styles.footer__mvvb}`}>
                        <div>CODIN</div>
                        <p>SOTODONOU Christin Otniel</p>
                    </div>
                    <div className={styles.footer_social}>
                        <a href="#"><FaFacebookF className={styles.icon} /></a>
                        <a href="#"><FaTwitter className={styles.icon} /></a>
                        <a href="#"><FaInstagram className={styles.icon} /></a>
                    </div>
                </div>

                <div className={styles.separator}></div>

                <div className={styles.row}>
                    &copy; CODIN. Tout droit reservé
                </div>
            </div>
            <div className={styles.scrollToTop} onClick={scrollToTop}>
                <FaArrowUp />
            </div>
        </footer>

}