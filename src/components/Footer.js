import styles from './Footer.module.css'
const Footer = () => {
    return <footer className={styles.footer}>
        <p className={styles.footer_logo_text}>WEATHERLY © 2023</p>
        <p className={styles.footer_text}>Всі права захищено</p>
    </footer>
}

export default Footer