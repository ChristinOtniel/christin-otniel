'use client';

import styles from './About.module.css';
//import Link from 'next/link';
import { FormattedMessage } from 'react-intl';


export default function About() {
  return <section className='section' id='about'>
    <div className={styles.aboutContainer}>
      <div className={styles.header}>
        <h2>About Me</h2>
      </div>
      <div className={styles.content}>

        <div className={styles.bio}>
          <span>Bienvenue sur mon site !</span>

          <h3>I&apos;m SOTODONOU Christin Otniel and <span>Analyst Programmeur</span></h3>
          <p>
            <FormattedMessage id='app.page.About.p' />

          </p>
          <span>Merci de visiter mon site, et j&apos;espère avoir l&apos;occasion de travailler avec vous bientôt !</span>
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <ul>
              <li>Website: <span>www.domain.com</span></li>
              <li>Email: <span>info@gmail.com</span></li>
              <li>Degree: <span>DEC Programmation Informatique</span></li>
              <li>Phone: <span>+1 438-223-7533</span></li>
              <li>City: <span>Canada</span></li>
              <li>Freelance: <span>Disponible</span></li>
              <li>Année d&apos;experience: <span>07+</span></li>
              <li>Poste Actuelle: <span>Manager Developpeur Web chez GSP Echos du Reveil</span></li>
            </ul>
          </div>
          <div className={styles.hireMe}>
            <a href="/CV.pdf" download="CV.pdf">
              <button>Télécharger mon CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

}
