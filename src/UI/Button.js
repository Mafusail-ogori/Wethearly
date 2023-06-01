import styles from './Button.module.css'
const Button = (props) =>{
    return<button className={`${styles.submit_button} ${props.className}`} onClick={props.onClick} type = {props.type} style={{height: props.height}}>
        {props.text}
    </button>
}

export default Button