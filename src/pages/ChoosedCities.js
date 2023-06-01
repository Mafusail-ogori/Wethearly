import styles from './Home.module.css'
import ContentCard from "../UI/ContentCard";
import background from '../assets/backgrounds/card.svg'
import {useContext} from "react";
import {AuthContext} from "../storage/AuthContext";
import FormCard from "../UI/FormCard";
import stylesLogo from "../components/Header.module.css";

const ChoosedCities = () => {
    const {role} = useContext(AuthContext)
    return<div className={styles.wrapper}>
        <ContentCard backgroundImg = {background} height = "700px">
            {role === 'user' &&  <FormCard>
                <img className={stylesLogo.header_logo} src={require("../assets/icons/weather-icon.png")}
                     alt="Image Not Found"></img>
                <h2>Oops, looks like you did not add anything yet</h2>
            </FormCard>}
            {role === 'none' && <FormCard>
                <img className={stylesLogo.header_logo} src={require("../assets/icons/weather-icon.png")}
                     alt="Image Not Found"></img>
                <h2>You need to register to access this page</h2>
            </FormCard>}
        </ContentCard>
    </div>
}

export default ChoosedCities