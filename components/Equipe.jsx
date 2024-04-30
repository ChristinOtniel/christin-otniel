'use client'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import styles from './Equipe.module.css'
import Link from 'next/link';
import Image from 'next/image'
import sedric_photo from '@/public/img/Sedric.png'
import otniel_photo from '@/public/img/Otniel.jpg'
import gladice_photo from '@/public/img/Gladice.png';
import invite_photo from '@/public/img/Invite.png';



/**
 * 
 * @returns Section des intervenants
 */
export default function Intervenants() {



    return <section className={styles.section} id='Equipe'>
        <h1 className='title'> Equipes</h1>
        <div className='texte'> "CODIN, dispose d'une équipe de professionnels hautement qualifiés et bien formés, prêts à relever tous les défis dans le domaine de la programmation informatique. Avec une expérience étendue et une expertise approfondie dans divers domaines de développement logiciel, notre équipe est parfaitement équipée pour répondre aux besoins uniques de chaque projet.

            Nous comprenons l'importance de livrer des solutions de haute qualité, dans les délais impartis et conformément aux exigences spécifiques de nos clients. Notre approche centrée sur le client et notre engagement envers l'excellence nous permettent de garantir la satisfaction de nos clients à chaque étape du processus de développement.

            Que ce soit pour la conception et le développement d'applications web, mobiles ou d'entreprise, la création de sites web dynamiques et réactifs, ou la mise en œuvre de solutions logicielles sur mesure, notre équipe est prête à fournir des résultats exceptionnels à chaque projet.

            Faites confiance à CODIN pour vous fournir une expertise technique de premier ordre, un service client exceptionnel et des solutions logicielles innovantes qui dépassent vos attentes. Ensemble, nous pouvons réaliser vos projets informatiques les plus ambitieux."
        </div>
        <div className={styles.grid + ' ' + 'container'}>
            {/* Intervenant1 */}
            <div className={styles.card}>
                <Image src={sedric_photo} alt='Sedric-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Sedric Ouambo</h2>
                    <h3>Analyst-Programmeur</h3>
                </div>
                <Link href="https://sedricouambo.github.io/sedric-portfolio" target="_blank">web site: https://sedricouambo.github.io/sedric-portfolio</Link>

                <div className={styles.Intervenant_social_media}>
                    <Link href="#" target="_blank" aria-label="Twitter"  ><FaTwitter className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Facebook" ><FaFacebookF className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                </div>
            </div>

            {/* Intervenant2 */}
            <div className={styles.card}>
                <Image src={otniel_photo} alt='Otniel-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Christin Otniel</h2>
                    <h3>Analyst-Programmeur</h3>
                </div>
                <h2>web site:</h2>
                <div className={styles.Intervenant_social_media}>
                    <Link href="#" target="_blank" aria-label="Twitter"  ><FaTwitter className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Facebook" ><FaFacebookF className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                </div>
            </div>

            {/* Intervenant3 */}
            <div className={styles.card}>
                <Image src={gladice_photo} alt='Gladice-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Franck Kouagnang</h2>
                    <h3>Analyst-Programmeur</h3>
                </div>
                <h2>web site: </h2>
                <div className={styles.Intervenant_social_media}>
                    <Link href="#" target="_blank" aria-label="Twitter"  ><FaTwitter className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Facebook" ><FaFacebookF className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                </div>
            </div>

            {/* Intervenant4 */}
            <div className={styles.card}>
                <Image src={invite_photo} alt='Invite-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Membre</h2>
                    <h3>Analyst-Programmeur</h3>
                </div>
                <h2>web site:</h2>
                <div className={styles.Intervenant_social_media}>
                    <Link href="#" target="_blank" aria-label="Twitter"  ><FaTwitter className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Facebook" ><FaFacebookF className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                </div>
            </div>

            {/* Intervenant5 */}
            <div className={styles.card}>
                <Image src={invite_photo} alt='Invite-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Membre</h2>
                    <h3>Analyst-Programmeur</h3>
                </div>
                <h2>web site:</h2>
                <div className={styles.Intervenant_social_media}>
                    <Link href="#" target="_blank" aria-label="Twitter"  ><FaTwitter className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Facebook" ><FaFacebookF className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                </div>
            </div>

            {/* Intervenant6 */}
            <div className={styles.card}>
                <Image src={invite_photo} alt='Invite-photo' />
                <div className={styles.Intervenant_title}>
                    <h2>Membre</h2>
                    <h3>Analyst-Programmeur</h3>
                </div>
                <h2>web site:</h2>
                <div className={styles.Intervenant_social_media}>
                    <Link href="#" target="_blank" aria-label="Twitter"  ><FaTwitter className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Facebook" ><FaFacebookF className={styles.icon} /></Link>
                    <Link href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></Link>
                </div>
            </div>
        </div>

    </section>
}