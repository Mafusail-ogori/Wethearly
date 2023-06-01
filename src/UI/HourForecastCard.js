import styles from '../UI/HourForecastCard.module.css'

const HourForecastCard = (props) => {
    return <div className={styles.hour_forecast_container}>
        <p className={styles.hour_forecast_temperature}>{props.date}</p>
        <p className={styles.hour_forecast_temperature}>{props.hour}</p>
        {(props.weatherState === 'overcast clouds' || props.weatherState === 'broken clouds' || props.weatherState === 'few clouds' || props.weatherState === 'scattered clouds') && <i className={"fa-solid fa-cloud"}/>}
        {(props.weatherState === 'light rain' || props.weatherState === 'shower rain' || props.weatherState === 'rain') && <i className={"fa-solid fa-cloud-rain"}/>}
        {props.weatherState === 'clear sky' && <i className={"fa-solid fa-sun"}/>}
        {props.weatherState === 'thunderstorm' && <i className={"fa-solid fa-bolt-lightning"}/>}
        <p className={styles.hour_forecast_temperature}>{props.temperature}°C</p>
        <p className={styles.hour_forecast_text}>{props.windSpeed} km/h</p>
        <i className="fa-solid fa-wind"></i>
    </div>
}

export default HourForecastCard