import styles from "./Modal.module.css";
import stylesLogo from "../components/Header.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import {useState} from "react";
import axios from "axios";

const ModalSignUp = (props) => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [status, setStatus] = useState(true)
    const [success, setSuccess] = useState(false)
    const mailInputHandler = (event) => {
        setMail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginInputHandler = (event) => {
        setLogin(event.target.value)
    }

    const addUserHandler = async () => {
        await axios.post('http://localhost:8080/user/sign-up', {
            mail: mail,
            password: password,
            login: login
        })
            .then((res) => {
                if (res.message === 'Found same user') {
                    setStatus(false)
                    setSuccess(false)
                } else {
                    setStatus(true)
                    setSuccess(true)
                }
            })
            .catch((e) => {
                console.log(e)
                setStatus(false)
                setSuccess(false)
            })
    }

    return <form className={styles.modal_signUp} onSubmit={(e) => {
            e.preventDefault()
        }}>
            <img className={stylesLogo.header_logo} src={require("../assets/icons/weather-icon.png")}
                 alt="Image Not Found"></img>
            <p className={status ? styles.hidden : styles.failure}>Помилка створення, такий акаунт вже існує, або вказані не
                всі дані</p>
            <p className={success ? styles.success : styles.hidden}>Дані успішно додані,поверніться назад аби увійти в
                акаунт! </p>
            <p>Створюй!</p>

            <Input height="50px" placeholder="Електронна пошта" type="email" fontSize="15px"
                   handler={mailInputHandler}
                   status={status} label = "Електронна Пошта"/>
            <Input height="50px" placeholder="Логін" type="text" fontSize="15px" handler={loginInputHandler}
                   status={status} label = "Логін користувача"/>
            <Input height="50px" placeholder="Пароль" type="password" fontSize="15px" handler={passwordInputHandler}
                   label="Пароль" status={status}/>
            <p className={styles.modal_signUp_text}>Ви вже у спільноті? Поверніться <a
                onClick={props.openLogInModal} className={styles.link}>НАЗАД!</a></p>
            <Button text="ПІДТВЕРДИТИ" onClick={addUserHandler}/>
        </form>


}

export default ModalSignUp