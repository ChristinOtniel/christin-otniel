import Appointment from '@/components/Appointment.jsx';


/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Prendre Rdv Avec Christin',
    description: 'Page de prise de rdv avec christin',
    openGraph: {
        title: 'Prendre Rdv Avec Christin',
        description: 'Page de prise de rdv avec christin',
        images: ['./logo_couleur.jpg']
    }
}


/**
 * Page du contenu de la page de contact
 * @returns Contact
 */
export default function Appointment2() {
    return <>
        <Appointment />
    </>
}