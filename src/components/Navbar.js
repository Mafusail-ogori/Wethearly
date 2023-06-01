import styles from './Navbar.module.css'
import NavbarItem from "./NavbarItem";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../storage/AuthContext";
import Input from "../UI/Input";
import axios from "axios";
import {DataContext} from "../storage/DataStorage";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import userLogo from '../assets/icons/userIcon.png'
import classes from '../components/Header.module.css'

const Navbar = () => {
    const {role, setRole} = useContext(AuthContext)
    const {setData} = useContext(DataContext)
    const [cityInput, setCityInput] = useState('Solonka')
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=77e230f514ebb9ddb88bcac8cfdc9f74&units=metric`;

    const [isModal, setIsModal] = useState(false);
    const buttonClickHandler = () => {
        setIsModal(true);
    }

    const onClick = (event) => {
        setIsModal(false);
    }

    const logOutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        setRole("none");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data)
                console.log(response.data);
                setCityInput("");
            } catch (e) {
                console.log(e)
            }
        };
        fetchData();
    }, []);

    const searchLocation = async (event) => {
        console.log(event.key);
        if (event.key === "Enter") {
            try {
                const response = await axios.get(url);
                setData(response.data)
                console.log(response.data);
                setCityInput('');
            } catch (error) {
                console.log(error)
            }
        }
    };

    const cityInputHandler = (event) => {
        setCityInput(event.target.value)
    }

    return <div className={styles.navbar}>
        {isModal && ReactDOM.createPortal(<Modal onClose={onClick}/>,
            document.getElementById("modal"))}

        {role === 'none' && <>
            <Input height="45px" placeholder="Пошук" type="text" fontSize="15px"
                   status={true} handler ={cityInputHandler} value = {cityInput} onKeyPress = {searchLocation}/>
            <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Liked" link="/choosed"/>
            <NavbarItem className={"fa-solid fa-user navbar_item_icon"}
                        title="LogIn" buttonClickHandler={buttonClickHandler}/>
        </>}
        {role === 'user' && <>
            <Input height="45px" placeholder="Пошук" type="text" fontSize="15px"
                   status={true} handler = {cityInputHandler} value = {cityInput} onKeyPress = {searchLocation}/>
            <NavbarItem className={"fa-solid fa-heart navbar_item_icon"} title="Liked" link="/choosed"/>
            <img src = {userLogo} style = {{width : '45px', height: '45px'}}/>
            <NavbarItem className={"ffa-sharp fa-solid fa-arrow-right-from-bracket navbar_item_icon"}
                        title="SignOut" buttonClickHandler={logOutHandler}/>
        </>}
    </div>
}

export default Navbar