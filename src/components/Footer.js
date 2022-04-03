import styles from '../../styles/Footer.module.scss';
import { Github, Linkedin, Twitter } from '../../utils/icons';
import { IconType } from 'react-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='https://github.com/anirudh357' target='_blank' rel='noreferrer'>
          <b>Anirudh Sharma</b>
        </a>
      </p>
      <div>
        <a href='https://www.linkedin.com/in/anirudh-sharma-33b592189/' className={styles.icon} target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='https://mobile.twitter.com/Anirudh58407662' className={styles.icon} target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/anirudh357' className={styles.icon} target='_blank' rel='noreferrer'>
          <Github />
        </a>
      </div>
    </div>
  );
}