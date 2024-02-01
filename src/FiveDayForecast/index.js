import './index.css'

const FiveDayForecast=()=>{
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
            <div className='card-details'>
                <div className='forecast-container'>
                    <p className='forecast-p day day-p'>Monday</p>
                    <p className='forecast-p'>9%</p>
                    <p className='forecast-p'>57%</p>
                    <p className='forecast-p'>10km/h</p>
                    <p className='forecast-p'>19</p>
                </div>
              
            </div>
            <hr/>
        </div>
    )
}

export default FiveDayForecast