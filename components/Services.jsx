'use client';
import { useState } from 'react';
import styles from './Services.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function Services() {

   const [frontendOpen, setFrontendOpen] = useState(false);
   const [backendOpen, setBackendOpen] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);
   const [desktopOpen, setDesktopOpen] = useState(false);

   const toggleFrontend = () => {
      setFrontendOpen(!frontendOpen);
   };

   const toggleBackend = () => {
      setBackendOpen(!backendOpen);
   };

   const toggleMobile = () => {
      setMobileOpen(!mobileOpen);
   };

   const toggleDesktop = () => {
      setDesktopOpen(!desktopOpen);
   };

   const {theme} = useTheme()


   return <section className={styles.section} id='Services'>
      <h2>Services</h2>
      <div className={styles.content }>
         <div className={styles.service }>
            <p></p>
            <h3 onClick={toggleFrontend}>
               <span>Développeur Frontend</span>
               {frontendOpen ? <FaChevronUp /> : <FaChevronDown />}
            </h3>
            {frontendOpen && (
               <div className={styles.languages}>
                  <p>HTML</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
                  <p>CSS</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
                  <p>JavaScript</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
                  <p>React.js</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
                  <p>Handlebars</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
               </div>
            )}
         </div>

         <div className={styles.service }>
            <p></p>
            <h3 onClick={toggleBackend}>
               <span>Développeur Backend</span>
               {backendOpen ? <FaChevronUp /> : <FaChevronDown />}
            </h3>
            {backendOpen && (
               <div className={styles.languages}>
                  <p>Node.js (Express framework)</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
                  <p>C#</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '85%' }}></div>
                  </div>
                  <p>Next.js (React framework)</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '90%' }}></div>
                  </div>
               </div>
            )}
         </div>

         <div className={styles.service }>
            <p></p>
            <h3 onClick={toggleMobile}>
               <span>Développeur d&apos;Application Mobile</span>
               {mobileOpen ? <FaChevronUp /> : <FaChevronDown />}
            </h3>
            {mobileOpen && (
               <div className={styles.languages}>

                  <p>iOS (Swift/Story board)</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '85%' }}></div>
                  </div>
                  <p>Java</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '80%' }}></div>
                  </div>
               </div>
            )}
         </div>

         <div className={styles.service }>
            <p></p>
            <h3 onClick={toggleDesktop}>
               <span>Développeur d&apos;Application de Bureau</span>
               {desktopOpen ? <FaChevronUp /> : <FaChevronDown />}
            </h3>
            {desktopOpen && (
               <div className={styles.languages}>

                  <p>C#</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '85%' }}></div>
                  </div>
                  <p>Java</p>
                  <div className={styles.progress}>
                     <div className={styles.progressBar} style={{ width: '80%' }}></div>
                  </div>
               </div>
            )}
         </div>
      </div>


   </section>


}
