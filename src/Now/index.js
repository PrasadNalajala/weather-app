import './index.css'

const Now=(props)=>{
    const {weather}=props
    const firstWeatherItem = weather.list[0];

// Extracting relevant fields
const chanceOfRain = firstWeatherItem.pop; // Probability of precipitation
const humidity = firstWeatherItem.main.humidity;
const windSpeed = firstWeatherItem.wind.speed;
const visibility = firstWeatherItem.visibility;
const pressure = firstWeatherItem.main.pressure;
    return(
        <div className='card-3'>
            
            
            <div className='day-details-container'>
            <div className='day-details1'>
                <p className='measure'>Chance of Rain</p>
                <h1 className='value'>{chanceOfRain}%</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Humidity</p>
                <h1 className='value'>{humidity}%</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Wind Speed</p>
                <h1 className='value'>{windSpeed}k/ph</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Visibility</p>
                <h1 className='value'>{visibility}km</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Pressure</p>
                <h1 className='value'>{pressure} hPa</h1>
            </div>
            </div>
        </div>
    )
}

export default Now