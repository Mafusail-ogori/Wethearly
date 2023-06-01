import styles from './Home.module.css'
import ContentCard from "../UI/ContentCard";
import cardBack from '../assets/backgrounds/card.svg'
import secondCardBack from '../assets/backgrounds/back2.svg'
import thirdCardBack from '../assets/backgrounds/Back3.svg'
import FormCard from "../UI/FormCard";
import logo from "../assets/icons/weather-icon.png";
import classes from '../components/Header.module.css'
import HourForecastCard from "../UI/HourForecastCard";
import {DataContext} from "../storage/DataStorage";
import {useContext} from "react";
import {AuthContext} from "../storage/AuthContext";
import Button from "../UI/Button";


const Home = () => {
    const {data} = useContext(DataContext)
    const{role} = useContext(AuthContext)
    console.log('Here', data)
    return <div className={styles.wrapper}>
        <ContentCard backgroundImg = {cardBack} height = "700px">
            <FormCard>
                <img className={classes.header_logo} src={logo} alt="Image Not Found"/>
                <p className={styles.title_text}>Today's forecast </p>
                <h1>{data.city.name} {data.list[0].main.temp_max}°C</h1>
                <div className={styles.hour_forecast_container}>
                    {data.list.slice(0, 8).map((hourForecast) => {
                        return <HourForecastCard temperature = {hourForecast.main.temp_max} hour = {hourForecast.dt_txt.split(' ')[1]} weatherState = {hourForecast.weather[0].description} windSpeed = {hourForecast.wind.speed}/>
                    })}
                </div>
                {role  === 'user' && <Button text = "Add to favourites"/>}
            </FormCard>
        </ContentCard>
        <ContentCard backgroundImg = {secondCardBack} height = "800px">
            <FormCard>
                <img className={classes.header_logo} src={logo} alt="Image Not Found"/>
                <p className={styles.title_text}>Deep details</p>
                <div style = {{display: "flex", flexDirection: "row", gap: "20px"}}>
                    <div style = {{display: "flex", flexDirection: "column", gap: "40px"}}>
                        <div className={styles.deep_info_container}>
                            <h2>Feels Like</h2>
                            <h3 className={styles.h3}>{data.list[0].main.feels_like}°C</h3>
                        </div>
                        <div className={styles.deep_info_container}>
                            <h2>Humidity</h2>
                            <h3 className={styles.h3}>{data.list[0].main.humidity}%</h3>
                        </div>
                    </div>
                    <div className={styles.deep_info_container}>
                        <h2>Visibility</h2>
                        <h3 className={styles.h3}>{data.list[0].visibility / 100} Metres</h3>
                        <p>Visibility on roads is
                            crucial for ensuring the safety of motorists, pedestrians,
                            and cyclists, as it allows for timely detection of obstacles, traffic
                            signals, and other road users.</p>
                    </div>
                </div>
            </FormCard>
        </ContentCard>
        <ContentCard backgroundImg = {thirdCardBack} height = "700px">
            <FormCard>
                <img className={classes.header_logo} src={logo} alt="Image Not Found"/>
                <p className={styles.title_text}>Four-day Forecast</p>
                <div className={styles.hour_forecast_container}>
                    <HourForecastCard temperature = {data.list[11].main.temp_max} date = {data.list[8].dt_txt.split(' ')[0]} weatherState = {data.list[8].weather[0].description} windSpeed = {data.list[8].wind.speed}/>
                    <HourForecastCard temperature = {data.list[19].main.temp_max} date = {data.list[8].dt_txt.split(' ')[0]} weatherState = {data.list[8].weather[0].description} windSpeed = {data.list[8].wind.speed}/>
                    <HourForecastCard temperature = {data.list[27].main.temp_max} date = {data.list[8].dt_txt.split(' ')[0]} weatherState = {data.list[8].weather[0].description} windSpeed = {data.list[8].wind.speed}/>
                    <HourForecastCard temperature = {data.list[35].main.temp_max} date = {data.list[8].dt_txt.split(' ')[0]} weatherState = {data.list[8].weather[0].description} windSpeed = {data.list[8].wind.speed}/>
                </div>
            </FormCard>
        </ContentCard>
    </div>
}

export default Home