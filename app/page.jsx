import About from '@/components/About';
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Equipe from "@/components/Equipe";




/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Accueil CODIN',
  description: 'Page d\'accueil du site personnel de christin ',
  openGraph: {
    title: 'Accueil CODIN',
    description: 'Page d\'accueil du site personnel de christin ',

  }
}

export default function Accueil() {


  return <>
    <About />
    <Services />
    <Portfolio />
    <Equipe />
  </>
}