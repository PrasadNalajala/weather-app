import './index.css'

const FiveDayForecast=(props)=>{
    const {fiveDayForeCast,weather}=props
    //console.log(weather)
    let formattedForecast=[]
if (weather.list) {
    
    const weatherList = weather.list;
  
   
    const uniqueForecast = {};
  
   
    weatherList.forEach(entry => {
      const entryDate = new Date(entry.dt_txt).toLocaleDateString();
  
      
      if (!uniqueForecast[entryDate]) {
        uniqueForecast[entryDate] = {
          day: new Date(entry.dt_txt).toLocaleDateString('en-US', { weekday: 'long' }),
          chanceOfRain: entry.pop * 100, 
          humidity: entry.main.humidity,
          wind: {
            speed: entry.wind.speed,
            direction: entry.wind.deg, 
          },
          temperature: entry.main.temp,
        };
      }
    });
  
    formattedForecast = Object.values(uniqueForecast);
  
    // console.log(formattedForecast);
  } else {
    console.error("Invalid data format. 'list' property not found.");
  }
  

    return(
        <div className='card-4'>
            <div className='card-details'>
                <div className='forecast-container'>
                    <h1 className='forecast-h1 day'>DAY</h1>
                    <h1 className='forecast-h1'>CHANCE OF RAIN</h1>
                    <h1 className='forecast-h1'>HUMIDITY</h1>
                    <h1 className='forecast-h1'>WIND</h1>
                    <h1 className='forecast-h1'>TEMPARETURE</h1>
                </div>
              
            </div>
            <hr/>

            {formattedForecast.length !== 0 ? (
  formattedForecast.map((each, index) => (
    <div key={index} className='card-details'>
      <div className='forecast-container'>
        <p className='forecast-p day day-p'>{each.day}</p>
        <p className='forecast-p'>{Math.floor(each.chanceOfRain)}%</p>
        <p className='forecast-p'>{each.humidity}%</p>
        <p className='forecast-p'>{each.wind.speed}km/h</p>
        <p className='forecast-p'>{each.temperature}</p>
      </div>
    </div>
  ))
) : (
  <div className='card-details'>
    <div className='forecast-container'>
      <p className='forecast-p day day-p'>Monday</p>
      <p className='forecast-p'>9%</p>
      <p className='forecast-p'>57%</p>
      <p className='forecast-p'>10km/h</p>
      <p className='forecast-p'>19</p>
    </div>
  </div>
)}

            
            <hr/>
        </div>
    )
}

export default FiveDayForecast