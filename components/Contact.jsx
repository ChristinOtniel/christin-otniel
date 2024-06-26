'use client'
import { useState } from 'react';
import styles from '@/components/Contact.module.css';
import { FaInstagram, FaFacebookF, FaBlenderPhone, FaWhatsapp, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser"
import Link from 'next/link';

/**
 * Page du contenu de la page de contact
 * @returns Contact
 */
export default function Contact() {
    const [erreurname, setErreurName] = useState('');
    const [erreuremail, setErreurEmail] = useState('');
    const [erreurphone, setErreurPhone] = useState('');
    const [erreurmessage, setErreurMessage] = useState('');
    const [erreurobject, setErreurObject] = useState('');
    const [infosresults, setInfosResults] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        let erreur = false;
        if (!formData.get('name')) {
            setErreurName('Veuillez remplir ce champ');
            erreur = true;
        }
        else { setErreurName(''); }

        if (!formData.get('email') || !emailRegex.test(formData.get('email'))) {
            setErreurEmail('L\'adresse email est invalide');
            erreur = true;
        }
        else { setErreurEmail(''); }

        if (!formData.get('phone') || !phoneRegex.test(formData.get('phone'))) {
            setErreurPhone('Le numéro de téléphone est invalide');
            erreur = true;
        } else { setErreurPhone(''); }

        if (!formData.get('object')) {
            setErreurObject('Veuillez spécifier l\'objet de votre message');
            erreur = true;
        }
        else { setErreurObject(''); }

        if (!formData.get('message')) {
            setErreurMessage('Veuillez écrire un message');
            erreur = true;
        }
        else { setErreurMessage(''); }

        //S'il n'y a pas d'erreur, on envoie le mail
        if (!erreur) {
            const templateParams = {
                name: formData.get('name'),
                subject: formData.get('object'),
                email: formData.get('email'),
                message: formData.get('message'),
            }
            emailjs.send(
                'service_gsibgkn',      //SERVICE ID
                'template_m7dfkbn',     //TEMPLATE ID
                templateParams,
                'NzG8J-4rJ6eqNuzRi'     //USER PUBLIC KEY
            ).then(
                (response) => {
                    console.log("ok")
                    setInfosResults('Votre message a été envoyé avec succès. Nous vous reviendrons très bientôt.')
                    form.reset();
                },
                (error) => {
                    setInfosResults('Message non envoyé.')
                }
            );
        }
    }

    return <>
    <h2  className={styles.h2} >Contact</h2>
        <div className={styles.container__contact}>
            <div className={styles.form__info}>
                <div className={styles.contact_info_contact}>
                    <p className={styles.title}>Au plaisir de discuter avec vous!!</p>
                    <p className={styles.text}>
                        Vous souhaitez nous contactez, avoir davantages d&apos;informations
                        sur CODIN , Nous sommes joignables
                        par téléphone, WhatsApp ou email.
                    </p>

                    <div className={styles.info}>
                        <div className={styles.information}>
                            <Link href="tel:+18193199747" target="_blank" className={styles.contact__information}>
                                <FaBlenderPhone className={styles.icon} />
                                <p>+1 1111111111</p>
                            </Link>
                        </div>
                        <div className={styles.information}>
                            <Link href="https://wa.me/+1 4382237533" target="_blank" className={styles.contact__information}>
                                <FaWhatsapp className={styles.icon} />
                                <p>Whatsapp</p>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.social__media}>
                        <p>Nous sommes aussi ici:</p>
                        <div className={styles.social_icons_container}>
                            <a href="#" target="_blank" aria-label="Facebook"> <FaFacebookF className={styles.icon} /> </a>
                            <a href="#" target="_blank" aria-label="Twitter"> <FaTwitter className={styles.icon} /></a>
                            <a href="#" target="_blank" aria-label="Instagram"><FaInstagram className={styles.icon} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.contact_form}>
                    <span className={styles.circle + ' ' + styles.one}></span>
                    <span className={styles.circle + ' ' + styles.two}></span>

                    <form onSubmit={handleSubmit}>
                        <p className={styles.title}>Envoyer un email</p>
                        <p className={styles.subtitle}>Nous reviendrons vers vous dans les brefs delais. Promis!</p>

                        <div>
                            <input type="text" name="name" placeholder='Votre nom' />
                            {erreurname && <span>{erreurname}</span>}
                        </div>
                        <div>
                            <input type="text" name="email" placeholder='Votre email' />
                            {erreuremail && <span>{erreuremail}</span>}
                        </div>
                        <div>
                            <input type="tel" name="phone" placeholder='Votre N° de téléphone' />
                            {erreurphone && <span>{erreurphone}</span>}</div>
                        <div>
                            <input type="text" name="object" placeholder='Objet de votre message' id='subject' />
                            {erreurobject && <span>{erreurobject}</span>}
                        </div>
                        <div>
                            <textarea name="message" placeholder='Votre message' id='message'></textarea>
                            {erreurmessage && <span>{erreurmessage}</span>}
                        </div>
                        <div className={styles.btn_bloc}>
                            <input type="reset" value="Effacer" className={styles.button + ' ' + styles.btn} />
                            <input type="submit" value="Envoyer" className={styles.button + ' ' + styles.btn} />
                        </div>
                        <div className={styles.infos_results}>
                            {infosresults && <div>{infosresults}</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}