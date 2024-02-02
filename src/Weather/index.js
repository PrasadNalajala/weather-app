import { useEffect, useState } from 'react'
import './index.css'

const Weather=(props)=>{
    const {weather,foreCast,cityName,isCelcius}=props
    
    const timestamp = foreCast[0].dt; 
const date = new Date(timestamp * 1000);
const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit',hour12:false });

const scale=isCelcius?'°C':'°F'
const formattedDateTime = `${dayOfWeek} ${formattedTime}`;




    return(
        <div className='card-2 '>
            <div className='card-sm'>
                <h1 className='cityName'>
                    {cityName}
                </h1>
                <p className='time'>{formattedDateTime}</p>
                <div>
                    <h1 className='degree'>{Math.floor(foreCast[0].main.temp)}{scale}</h1>
                </div>
                <p className='error-msg'>{weather.list[0].weather[0].description}</p>
            </div>
            <div className='weather-details'>
                {
                    

                    foreCast.map(each=>{
                        const date = new Date(each.dt_txt);
                        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12:false });
                        return(
                        <div className='day-details'>
                    <p className='time-sm'>

                        {formattedTime}
                    </p>
                    {
                            each.weather[0].main==='Rain'?(
                            <>
                            <div style={{ paddingTop: '100.000%', position: 'relative' }}>
                                <iframe
                                src="https://gifer.com/embed/Ma7"
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 ,pointerEvents:'none'}}
                                frameBorder="0"
                                allowFullScreen
                                ></iframe>
                            </div>
                            </>
                        ):each.weather[0].main==='Clouds'?(<><div style={{ paddingTop: '100.000%', position: 'relative' }}><iframe src="https://gifer.com/embed/68J" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0,pointerEvents:'none' }} frameBorder="0" allowFullScreen></iframe></div><p></p></>)
                          :(<>
                            <div style={{ paddingTop: '100.000%', position: 'relative' }}>
                              <iframe
                                src="https://gifer.com/embed/1f"
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0,pointerEvents:'none' }}
                                frameBorder="0"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </>
                          
                          
)
                    }
                    <p className='degree-sm'>
                        {each.main.temp}
                    </p>
                </div>)
                    })
                }
             
                
            </div>
        </div>
    )
}

export default Weather