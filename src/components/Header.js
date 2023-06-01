import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../assets/icons/weather-icon.png'
import Navbar from "./Navbar";

const Header = () => {
    return <div className={styles.header}>
        <NavLink to='/' className={styles.logo_full}>
            <img className={styles.header_logo} src={logo} alt="Image Not Found"/>
            <p className={styles.header_logo_text}>Weatherly!</p>
        </NavLink>
        <Navbar/>
    </div>
}

export default Header