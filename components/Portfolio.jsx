'use client';
import Projet from '@/components/Projet'
import styles from './Portfolio.module.css';
import JeuConcour from '@/public/img/Jeu Concour.png';
import LivresOnline from '@/public/img/LivresOnline.png';
import Roguelike from '@/public/img/Roguelike.png';
import GoldenBusiness from '@/public/img/GoldenBusiness.png';
import MVVB from '@/public/img/MVVB.png';



export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Projet 1',
      description: 'jsadnfansf fnvnjavn',  
      imageUrl: JeuConcour,
      width: 300,
      height: 50,
      githubUrl: 'https://github.com/ChristinOtniel/Groupe4_LivresOnlines',
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Description du projet 2...',
      imageUrl: Roguelike,
      width: 300,
      height: 50,
      githubUrl: 'https://github.com/kouagnangfr/Roguelike-Jeux_Du_Donjon',
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Description du projet 2...',
      imageUrl: GoldenBusiness,
      width: 300,
      height: 50,
      githubUrl: 'https://github.com/kouagnangfr/EcommerceWebsite-nodeJs-Sqlite-Bootstrap',
    },
    {
      id: 4,
      title: 'Projet 4',
      description: 'Description du projet 2...',
      imageUrl: LivresOnline,
      width: 300,
      height: 50,
      githubUrl: 'https://github.com/kouagnangfr/Laboratoire8-Concours_de_HTML_CSS.git',
    },
    {
      id: 5,
      title: 'Projet 5',
      description: 'Description du projet 2...',
      imageUrl: MVVB,
      width: 300,
      height: 50,
      githubUrl: 'https://sedricouambo.github.io/mvvb-app/',
    },
    
  ];



  return <section className={styles.section} id='Portfolio'>
    <div>
      <h2 className={styles.h2}>Portfolio</h2>
      
      <div className={styles.projects}>
        {projects.map(project => (
          <Projet key={project.id} project={project} />
        ))}
      </div>
     
    </div>
  </section>
}