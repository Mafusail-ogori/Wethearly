import styles from './NavbarItem.module.css'
import {Link, NavLink} from "react-router-dom";


const NavbarItem = (props) => {

    return <NavLink tag={Link} to={props.link} className={styles.navbar_item_link}>
        <button className={styles.navbar_item_wrapper} onClick={props.buttonClickHandler}>
            <i className={props.className}/>
            <p>{props.title}</p>
        </button>
    </NavLink>
}

export default NavbarItem;