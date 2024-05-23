import Contact from '@/components/Contact.jsx';


/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Contactez Christin',
    description: 'Page  de contact',
    openGraph: {
        title: 'Contactez Christin',
        description: 'Page  de contact ',
        images: ['https://christinotniel.github.io/christin-otniel/img/logo_couleur.jpg']
    }
}


/**
 * Page du contenu de la page de contact
 * @returns Contact
 */
export default function Contact2() {
    return <>
        <Contact />
    </>
}