import styles from './FormCard.module.css'
const FormCard = (props) => {
    return <form className={styles.container} style = {{backgroundImage: `url("${props.backgroundImg}")`, height: props.height}} onSubmit={props.onSubmit}>
        {props.children}
    </form>
}

export default FormCard