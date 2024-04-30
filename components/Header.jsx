'use client';

//import { useTheme } from './ThemeProvider'
import { useTheme } from 'next-themes';


import MenuNav from './MenuNav';
import styles from './Header.module.css';
/**
 * Entete
 * @param {setPage} param0 
 * @returns 
 */
export default function Header() {

    const {theme} = useTheme()

    return <header className={styles.header  + (theme === 'dark' ? ' ' + styles.dark : '')}>
        <MenuNav />
    </header>
}