import Backdrop from "../UI/Backdrop";
import {useState} from "react";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";

const Modal = (props) => {
    const [currentModal, setCurrentModal] = useState('modalLogin');

    const openSignUpModal = () => {
        setCurrentModal('modalSignUp')
    }

    const openLogInModal = () => {
        setCurrentModal('modalLogin')
    }

    return <>
        <Backdrop onClick={props.onClose}/>
        {currentModal === 'modalLogin' && (
            <ModalLogin openSignUpModal={openSignUpModal} onClose={props.onClose}/>
        )}
        {currentModal === 'modalSignUp' && (
            <ModalSignUp openLogInModal={openLogInModal} onClose={props.onClose}/>)}
    </>
}

export default Modal