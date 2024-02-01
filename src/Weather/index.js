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



// console.log(fourHoursList)
    return(
        <div className='card-2 '>
            <div className>
                <h1 className='cityName'>
                    {cityName}
                </h1>
                <p className='time'>{formattedDateTime}</p>
                <div>
                    <h1 className='degree'>{Math.floor(foreCast[0].main.temp)}{scale}</h1>
                </div>
            </div>
            <div className='weather-details'>
                {
                    

                    foreCast.map(each=>{
                        // console.log(each)
                        const date = new Date(each.dt_txt);
                        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12:false });
                        return(
                        <div className='day-details'>
                    <p className='time-sm'>
                        {formattedTime}
                    </p>{
                        each.weather[0].main==='Rain'?(
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="56" viewBox="0 0 59 56" fill="none">
  <path d="M15.3145 40.6631C15.5443 40.7398 15.7569 40.861 15.9399 41.0198C16.1229 41.1787 16.2728 41.372 16.381 41.5888C16.4893 41.8056 16.5537 42.0417 16.5707 42.2834C16.5876 42.5251 16.5568 42.7678 16.4799 42.9976L14.6359 48.5296C14.468 48.976 14.1337 49.34 13.7031 49.5451C13.2726 49.7503 12.7793 49.7807 12.3268 49.6298C11.8743 49.479 11.4979 49.1587 11.2765 48.7363C11.0552 48.3138 11.0061 47.822 11.1397 47.3642L12.9837 41.8322C13.1378 41.3681 13.4699 40.9843 13.907 40.765C14.3441 40.5458 14.8503 40.5091 15.3145 40.6631ZM37.4422 40.6631C37.6721 40.7398 37.8847 40.861 38.0677 41.0198C38.2507 41.1787 38.4006 41.372 38.5088 41.5888C38.617 41.8056 38.6815 42.0417 38.6984 42.2834C38.7154 42.5251 38.6845 42.7678 38.6076 42.9976L36.7637 48.5296C36.5958 48.976 36.2615 49.34 35.8309 49.5451C35.4003 49.7503 34.907 49.7807 34.4546 49.6298C34.0021 49.479 33.6257 49.1587 33.4043 48.7363C33.183 48.3138 33.1339 47.822 33.2675 47.3642L35.1115 41.8322C35.2655 41.3681 35.5977 40.9843 36.0348 40.765C36.4719 40.5458 36.9781 40.5091 37.4422 40.6631ZM24.5344 46.1951C24.7643 46.2717 24.9768 46.3929 25.1598 46.5518C25.3428 46.7106 25.4927 46.904 25.6009 47.1208C25.7092 47.3376 25.7736 47.5736 25.7906 47.8153C25.8075 48.0571 25.7767 48.2998 25.6998 48.5296L23.8558 54.0615C23.6879 54.5079 23.3536 54.8719 22.923 55.0771C22.4925 55.2822 21.9992 55.3126 21.5467 55.1618C21.0942 55.011 20.7178 54.6907 20.4965 54.2682C20.2751 53.8458 20.2261 53.354 20.3596 52.8961L22.2036 47.3642C22.3577 46.9001 22.6898 46.5162 23.1269 46.297C23.564 46.0777 24.0703 46.0411 24.5344 46.1951ZM46.6622 46.1951C46.892 46.2717 47.1046 46.3929 47.2876 46.5518C47.4706 46.7106 47.6205 46.904 47.7287 47.1208C47.8369 47.3376 47.9014 47.5736 47.9184 47.8153C47.9353 48.0571 47.9045 48.2998 47.8276 48.5296L45.9836 54.0615C45.9141 54.2996 45.7973 54.5213 45.6402 54.7132C45.4831 54.9052 45.2889 55.0634 45.0692 55.1786C44.8494 55.2937 44.6088 55.3633 44.3615 55.3832C44.1143 55.4031 43.8655 55.373 43.6302 55.2946C43.3949 55.2161 43.1778 55.091 42.992 54.9267C42.8062 54.7624 42.6554 54.5623 42.5487 54.3384C42.442 54.1145 42.3816 53.8713 42.371 53.6235C42.3605 53.3757 42.4001 53.1283 42.4874 52.8961L44.3314 47.3642C44.4855 46.9001 44.8176 46.5162 45.2547 46.297C45.6918 46.0777 46.198 46.0411 46.6622 46.1951ZM49.4171 14.8548C48.6512 10.994 46.6704 7.4796 43.7642 4.82525C40.8579 2.17091 37.1788 0.515891 33.2647 0.102186C29.3505 -0.31152 25.4067 0.537784 22.0098 2.52592C18.6129 4.51406 15.9411 7.53674 14.3851 11.152C12.6401 10.951 10.8724 11.1083 9.1903 11.6142C7.50818 12.1201 5.94702 12.964 4.60239 14.0942C3.25776 15.2244 2.15797 16.6172 1.37035 18.1873C0.582724 19.7574 0.123843 21.4717 0.0217999 23.2253C-0.080243 24.9788 0.176699 26.7348 0.776896 28.3856C1.37709 30.0364 2.30791 31.5474 3.51237 32.826C4.71682 34.1045 6.16956 35.1238 7.78165 35.8214C9.39373 36.519 11.1312 36.8802 12.8878 36.883H47.9234C50.7304 36.8862 53.4336 35.8224 55.4856 33.907C57.5375 31.9917 58.7847 29.3681 58.9746 26.5676C59.1645 23.767 58.2829 20.999 56.5083 18.8242C54.7336 16.6495 52.1987 15.2305 49.4171 14.8548ZM31.3276 3.69128C34.9564 3.69053 38.4582 5.02732 41.1633 7.44605C43.8685 9.86478 45.5872 13.1957 45.9909 16.802C46.0411 17.2551 46.2573 17.6736 46.5978 17.9766C46.9383 18.2797 47.3791 18.4459 47.8349 18.4431H47.9234C49.8797 18.4431 51.7558 19.2202 53.139 20.6035C54.5223 21.9868 55.2994 23.8629 55.2994 25.8191C55.2994 27.7753 54.5223 29.6514 53.139 31.0346C51.7558 32.4179 49.8797 33.195 47.9234 33.195H12.8878C11.5825 33.1944 10.2923 32.9166 9.10237 32.38C7.91248 31.8435 6.85008 31.0604 5.98544 30.0826C5.12081 29.1047 4.47364 27.9545 4.08676 26.7079C3.69988 25.4613 3.5821 24.1467 3.74122 22.8512C3.90033 21.5556 4.33271 20.3087 5.00976 19.1927C5.6868 18.0768 6.59308 17.1173 7.66863 16.3778C8.74419 15.6382 9.96451 15.1355 11.2489 14.9028C12.5332 14.6702 13.8524 14.7129 15.119 15.0281C15.5709 15.1408 16.0487 15.0783 16.4564 14.8533C16.8641 14.6282 17.1716 14.2572 17.317 13.8147C18.2917 10.8687 20.1701 8.3048 22.6853 6.48742C25.2005 4.67004 28.2245 3.69164 31.3276 3.69128Z" fill="#343A40"/>
</svg>):each.weather[0].main==='Clouds'?(<svg xmlns="http://www.w3.org/2000/svg" width="59" height="56" viewBox="0 0 59 56" fill="none">
  <g>
    <path d="M15.3145 40.6631C15.5443 40.7398 15.7569 40.861 15.9399 41.0198C16.1229 41.1787 16.2728 41.372 16.381 41.5888C16.4893 41.8056 16.5537 42.0417 16.5707 42.2834C16.5876 42.5251 16.5568 42.7678 16.4799 42.9976L14.6359 48.5296C14.468 48.976 14.1337 49.34 13.7031 49.5451C13.2726 49.7503 12.7793 49.7807 12.3268 49.6298C11.8743 49.479 11.4979 49.1587 11.2765 48.7363C11.0552 48.3138 11.0061 47.822 11.1397 47.3642L12.9837 41.8322C13.1378 41.3681 13.4699 40.9843 13.907 40.765C14.3441 40.5458 14.8503 40.5091 15.3145 40.6631ZM37.4422 40.6631C37.6721 40.7398 37.8847 40.861 38.0677 41.0198C38.2507 41.1787 38.4006 41.372 38.5088 41.5888C38.617 41.8056 38.6815 42.0417 38.6984 42.2834C38.7154 42.5251 38.6845 42.7678 38.6076 42.9976L36.7637 48.5296C36.5958 48.976 36.2615 49.34 35.8309 49.5451C35.4003 49.7503 34.907 49.7807 34.4546 49.6298C34.0021 49.479 33.6257 49.1587 33.4043 48.7363C33.183 48.3138 33.1339 47.822 33.2675 47.3642L35.1115 41.8322C35.2655 41.3681 35.5977 40.9843 36.0348 40.765C36.4719 40.5458 36.9781 40.5091 37.4422 40.6631ZM24.5344 46.1951C24.7643 46.2717 24.9768 46.3929 25.1598 46.5518C25.3428 46.7106 25.4927 46.904 25.6009 47.1208C25.7092 47.3376 25.7736 47.5736 25.7906 47.8153C25.8075 48.0571 25.7767 48.2998 25.6998 48.5296L23.8558 54.0615C23.6879 54.5079 23.3536 54.8719 22.923 55.0771C22.4925 55.2822 21.9992 55.3126 21.5467 55.1618C21.0942 55.011 20.7178 54.6907 20.4965 54.2682C20.2751 53.8458 20.2261 53.354 20.3596 52.8961L22.2036 47.3642C22.3577 46.9001 22.6898 46.5162 23.1269 46.297C23.564 46.0777 24.0703 46.0411 24.5344 46.1951ZM46.6622 46.1951C46.892 46.2717 47.1046 46.3929 47.2876 46.5518C47.4706 46.7106 47.6205 46.904 47.7287 47.1208C47.8369 47.3376 47.9014 47.5736 47.9184 47.8153C47.9353 48.0571 47.9045 48.2998 47.8276 48.5296L45.9836 54.0615C45.9141 54.2996 45.7973 54.5213 45.6402 54.7132C45.4831 54.9052 45.2889 55.0634 45.0692 55.1786C44.8494 55.2937 44.6088 55.3633 44.3615 55.3832C44.1143 55.4031 43.8655 55.373 43.6302 55.2946C43.3949 55.2161 43.1778 55.091 42.992 54.9267C42.8062 54.7624 42.6554 54.5623 42.5487 54.3384C42.442 54.1145 42.3816 53.8713 42.371 53.6235C42.3605 53.3757 42.4001 53.1283 42.4874 52.8961L44.3314 47.3642C44.4855 46.9001 44.8176 46.5162 45.2547 46.297C45.6918 46.0777 46.198 46.0411 46.6622 46.1951ZM49.4171 14.8548C48.6512 10.994 46.6704 7.4796 43.7642 4.82525C40.8579 2.17091 37.1788 0.515891 33.2647 0.102186C29.3505 -0.31152 25.4067 0.537784 22.0098 2.52592C18.6129 4.51406 15.9411 7.53674 14.3851 11.152C12.6401 10.951 10.8724 11.1083 9.1903 11.6142C7.50818 12.1201 5.94702 12.964 4.60239 14.0942C3.25776 15.2244 2.15797 16.6172 1.37035 18.1873C0.582724 19.7574 0.123843 21.4717 0.0217999 23.2253C-0.080243 24.9788 0.176699 26.7348 0.776896 28.3856C1.37709 30.0364 2.30791 31.5474 3.51237 32.826C4.71682 34.1045 6.16956 35.1238 7.78165 35.8214C9.39373 36.519 11.1312 36.8802 12.8878 36.883H47.9234C50.7304 36.8862 53.4336 35.8224 55.4856 33.907C57.5375 31.9917 58.7847 29.3681 58.9746 26.5676C59.1645 23.767 58.2829 20.999 56.5083 18.8242C54.7336 16.6495 52.1987 15.2305 49.4171 14.8548ZM31.3276 3.69128C34.9564 3.69053 38.4582 5.02732 41.1633 7.44605C43.8685 9.86478 45.5872 13.1957 45.9909 16.802C46.0411 17.2551 46.2573 17.6736 46.5978 17.9766C46.9383 18.2797 47.3791 18.4459 47.8349 18.4431H47.9234C49.8797 18.4431 51.7558 19.2202 53.139 20.6035C54.5223 21.9868 55.2994 23.8629 55.2994 25.8191C55.2994 27.7753 54.5223 29.6514 53.139 31.0346C51.7558 32.4179 49.8797 33.195 47.9234 33.195H12.8878C11.5825 33.1944 10.2923 32.9166 9.10237 32.38C7.91248 31.8435 6.85008 31.0604 5.98544 30.0826C5.12081 29.1047 4.47364 27.9545 4.08676 26.7079C3.69988 25.4613 3.5821 24.1467 3.74122 22.8512C3.90033 21.5556 4.33271 20.3087 5.00976 19.1927C5.6868 18.0768 6.59308 17.1173 7.66863 16.3778C8.74419 15.6382 9.96451 15.1355 11.2489 14.9028C12.5332 14.6702 13.8524 14.7129 15.119 15.0281C15.5709 15.1408 16.0487 15.0783 16.4564 14.8533C16.8641 14.6282 17.1716 14.2572 17.317 13.8147C18.2917 10.8687 20.1701 8.3048 22.6853 6.48742C25.2005 4.67004 28.2245 3.69164 31.3276 3.69128Z" fill="#343A40"/>
  </g>
</svg>

):(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="yellow">
<g>
  <circle cx="12" cy="12" r="5" />
  <line x1="12" y1="1" x2="12" y2="3" />
  <line x1="12" y1="21" x2="12" y2="23" />
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
  <line x1="1" y1="12" x2="3" y2="12" />
  <line x1="21" y1="12" x2="23" y2="12" />
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</g>
</svg>
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