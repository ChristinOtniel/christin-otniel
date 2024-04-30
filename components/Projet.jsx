'use client'
import React from 'react';
import styles from './Projet.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Projet({ project }) {
  const { title, description, imageUrl, githubUrl } = project;

  return (
    <div className={styles.project}>
      <div className={styles.projectCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={githubUrl} target="_blank">
          <Image src={imageUrl} alt={title}/>
        </Link>
        <div className={styles.links}>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</Link>
        </div>

      </div >
    </div>
  );
}
