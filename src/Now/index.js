import './index.css'

const Now=()=>{
    return(
        <div className='card-3'>
            
            <h1 className='now'>Now</h1>
            <div className='day-details-container'>
            <div className='day-details1'>
                <p className='measure'>Chance of Rain</p>
                <h1 className='value'>12%</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Humidity</p>
                <h1 className='value'>60%</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Wind Speed</p>
                <h1 className='value'>10 k/ph</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Visibility</p>
                <h1 className='value'>1000km</h1>
            </div>
            <div className='day-details1'>
                <p className='measure'>Pressure</p>
                <h1 className='value'>1015 hPa</h1>
            </div>
            </div>
        </div>
    )
}

export default Now