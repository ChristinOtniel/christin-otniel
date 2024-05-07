'use client';

import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Image from 'next/image'
import Otniel from '@/public/img/otniel4 .jpg';
import { FormattedMessage } from 'react-intl';


export default function Home() {
    const [name, setName] = useState('Sotodonou Otniel');
    const [profession, setProfession] = useState('');
    const professions = ['Web Developer', 'Software Engineer', 'UI/UX Designer'];

    useEffect(() => {
        let currentIndex = 0;

        // Fonction pour changer la profession
        const changeProfession = () => {
            setProfession(professions[currentIndex]);
            currentIndex = (currentIndex + 1) % professions.length; // Passer à la profession suivante de manière circulaire
        };

        changeProfession(); // Appeler une fois immédiatement pour définir la première profession

        // Créer un intervalle pour changer la profession toutes les 3 secondes
        const intervalId = setInterval(changeProfession, 3000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId);
    }, []); // Le tableau vide signifie que cet effet s'exécute après le premier rendu et à la désinscription

    return (
        <section className={styles.section}>
            <div className={styles.container}>


                <div className={styles.container2}>
                    <p className={styles.container5}><FormattedMessage id='app.page.Home.p1' /> <span className={styles.container4}>{name}</span></p>
                    <p className={styles.container5}><FormattedMessage id='app.page.Home.p2' /> <span className={styles.container6}>{profession}</span></p>

                </div>

                <div className={styles.card}>
                    <Image src={Otniel} alt='Otniel-photo' />

                </div>
            </div>


        </section >
    );
}