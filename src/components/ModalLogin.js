import styles from "../Modal.module.css"
import stylesLogo from "../../../../../RGR/Wetherly/src/components/Header.module.css"
import Input from "../../UI/Input"
import Button from "../../UI/Button"
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import localStorage from "localStorage";
import {useContext, useState} from "react";
import {AuthContext} from "../../storage/AuthContext";

const ModalLogin = (props) => {

    const [status, setStatus] = useState(true)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const navigation = useNavigate()
    const {setRole} = useContext(AuthContext)

    const validateUser = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:8080/user/log-in', {
            login: login,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.data.message) {
                    localStorage.setItem('token', res.data.message)
                    localStorage.setItem('role', 'user')
                    setStatus(true)
                    navigation('/')
                    setRole('user')
                    props.onClose()
                }
            })
            .catch((e) => {
                console.log(e)
                setStatus(false)
            })
    }

    return <form className={styles.modal_login} onSubmit={validateUser}>
        <img className={stylesLogo.header_logo} src={require("../assets/icons/weather-icon.png")}
             alt="Image Not Found"></img>
        <p className={status ? styles.hidden : styles.failure}>Помилка реєстрації, помилковий логін або пароль</p>
        <p style={{textAlign: "left"}}>З поверненням !</p>
        <Input height="50px" placeholder="Логін або електронна пошта" type="text" fontSize="15px"
               status={status} handler={loginInputHandler} label = "Логін або електронна пошта"/>
        <Input height="50px" placeholder="Пароль" type="password" fontSize="15px"
               status={status} handler={passwordInputHandler} label = "Пароль"/>
        <p className={styles.modal_signUp_text}>Немаєте акаунту? Ви завжди можете створити новий <a
            onClick={props.openSignUpModal} className={styles.link}>ТУТ!</a></p>
        <Button type="submit" text="ПІДТВЕРДИТИ"/>
        <p className={styles.modal_signUp_text}>Бажаєте увійти як компанія? Перейдіть
            <NavLink onClick={props.onClose} to='/create-company'
                     className={styles.link}> СЮДИ!</NavLink>
        </p>
    </form>
}

export default ModalLogin