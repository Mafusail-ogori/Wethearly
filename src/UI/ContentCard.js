import styles from './ContentCard.module.css'
const ContentCard = (props) => {
    return <div className={styles.container} style = {{backgroundImage: `url("${props.backgroundImg}")`, height: props.height}} onSubmit={props.onSubmit}>
        {props.children}
    </div>
}

export default ContentCard