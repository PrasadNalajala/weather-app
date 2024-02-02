import './index.css';
import React,{ Component } from 'react';
import Weather from '../Weather';
import Now from '../Now';
import FiveDayForecast from '../FiveDayForecast';

const dummyList= [
  {
    "dt": 1661871600,
    "main": {
      "temp": 296.76,
      "feels_like": 296.98,
      "temp_min": 296.76,
      "temp_max": 297.87,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 933,
      "humidity": 69,
      "temp_kf": -1.11
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "visibility": 10000,
    "pop": 0.32,
    "rain": {
      "3h": 0.26
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-08-30 15:00:00"
  },
  {
    "dt": 1661882400,
    "main": {
      "temp": 295.45,
      "feels_like": 295.59,
      "temp_min": 292.84,
      "temp_max": 295.45,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 931,
      "humidity": 71,
      "temp_kf": 2.61
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 96
    },
    "wind": {
      "speed": 1.97,
      "deg": 157,
      "gust": 3.39
    },
    "visibility": 10000,
    "pop": 0.33,
    "rain": {
      "3h": 0.57
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-08-30 18:00:00"
  },
  {
    "dt": 1661893200,
    "main": {
      "temp": 292.46,
      "feels_like": 292.54,
      "temp_min": 290.31,
      "temp_max": 292.46,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 931,
      "humidity": 80,
      "temp_kf": 2.15
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 2.66,
      "deg": 210,
      "gust": 3.58
    },
    "visibility": 10000,
    "pop": 0.7,
    "rain": {
      "3h": 0.49
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2022-08-30 21:00:00"
  },
  {
    "dt": 1662292800,
    "main": {
      "temp": 294.93,
      "feels_like": 294.83,
      "temp_min": 294.93,
      "temp_max": 294.93,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 935,
      "humidity": 64,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 1.14,
      "deg": 17,
      "gust": 1.57
    },
    "visibility": 10000,
    "pop": 0,
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2022-09-04 12:00:00"
  }
]

const weatherList=      
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1661871600,
      "main": {
        "temp": 29.76,
        "feels_like": 296.98,
        "temp_min": 296.76,
        "temp_max": 297.87,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 933,
        "humidity": 69,
        "temp_kf": -1.11
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.62,
        "deg": 349,
        "gust": 1.18
      },
      "visibility": 10000,
      "pop": 0.32,
      "rain": {
        "3h": 0.26
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-30 15:00:00"
    },
    {
      "dt": 1661882400,
      "main": {
        "temp": 295.45,
        "feels_like": 295.59,
        "temp_min": 292.84,
        "temp_max": 295.45,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 931,
        "humidity": 71,
        "temp_kf": 2.61
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 1.97,
        "deg": 157,
        "gust": 3.39
      },
      "visibility": 10000,
      "pop": 0.33,
      "rain": {
        "3h": 0.57
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-30 18:00:00"
    },
    {
      "dt": 1661893200,
      "main": {
        "temp": 292.46,
        "feels_like": 292.54,
        "temp_min": 290.31,
        "temp_max": 292.46,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 931,
        "humidity": 80,
        "temp_kf": 2.15
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.66,
        "deg": 210,
        "gust": 3.58
      },
      "visibility": 10000,
      "pop": 0.7,
      "rain": {
        "3h": 0.49
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-30 21:00:00"
    },
    
    {
      "dt": 1662292800,
      "main": {
        "temp": 294.93,
        "feels_like": 294.83,
        "temp_min": 294.93,
        "temp_max": 294.93,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 935,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 1.14,
        "deg": 17,
        "gust": 1.57
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-09-04 12:00:00"
    }
  ],
  "city": {
    "id": 3163858,
    "name": "Zocca",
    "coord": {
      "lat": 44.34,
      "lon": 10.99
    },
    "country": "IT",
    "population": 4593,
    "timezone": 7200,
    "sunrise": 1661834187,
    "sunset": 1661882248
  }
}
        
    

class Home extends Component{
  state={weather:weatherList,longitude:-0.118092,latitude:51.509865,error:'',cityName:"London",foreCast:dummyList,searchInput:'',isCelcius:true,suggestionList:[]}

  
  fetchWeather=async()=>{
    
    const {isCelcius,latitude,longitude}=this.state
    const units=isCelcius?'metric':'imperial'

    const responseData=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&APPID=d9119b95bb62522f73b0bd06fef7bc99`)
    const jsonData=await responseData.json()
    this.setState({weather:jsonData,foreCast:jsonData.list.slice(0,4),cityName:jsonData.city.name})
  }
  
  submitInput=async()=>{
    const {searchInput,isCelcius,cityName}=this.state
    const units=isCelcius?'metric':'imperial'
    
      const searchvalue=searchInput===''?cityName:searchInput
    
    const responseData=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchvalue}&units=${units}&APPID=d9119b95bb62522f73b0bd06fef7bc99`)
    const jsonData=await responseData.json()
    // console.log(jsonData)
    if (responseData.status===200){
    this.setState({weather:jsonData,foreCast:jsonData.list.slice(0,4),cityName:jsonData.city.name,searchInput:''})
    }

  }
  constructor(props) {
    super(props);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  handleInput=async(event)=>{
    
      if (event.key!=='Enter'){
      this.setState({searchInput:event.target.value})
      
      try{
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/find?q=${event.target.value}&type=like&sort=population&cnt=2&appid=d9119b95bb62522f73b0bd06fef7bc99`
      );
      const data=await response.json()
      this.setState({suggestionList:data.list})
      }catch(e){
        console.log("Got an Eror:",e)
      }
      }
      else{
       
        this.submitInput()
      }
  }
  changetoCelcius=()=>{
      this.setState({isCelcius:true},()=>this.submitInput())
      
  }
  changetoFarenh=()=>{
    this.setState((prev)=>({isCelcius:!prev.isCelcius}),()=>this.submitInput())
    
  }
  onClickSuggestion=(name)=>{
      this.setState({searchInput:name,suggestionList:[]},this.submitInput)
  }
  getLocation=()=>{
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          this.setState({latitude: position.coords.latitude,longitude: position.coords.longitude},()=>this.fetchWeather());

        },
        (error) => {
          this.setState({ error: `Error getting location: ${error.message}` },()=>this.fetchWeather());
        }
      );
    }
  }

  componentDidMount(){
    this.getLocation()
    
    
  }
  render(){
    const {cityName,weather,foreCast,isCelcius,suggestionList,searchInput}=this.state
    const celciusClass=isCelcius?'bolded':''
    const farehn=!isCelcius?'bolded':''
    // console.log(weather)
  return (
    <div className='bg'>
        <div className='card'>
            <div className='section-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" viewBox="0 0 35 19" fill="none" className='search-icon'>
  <path d="M17.5 0C17.7901 0 18.0683 0.115234 18.2734 0.320352C18.4785 0.52547 18.5938 0.803669 18.5938 1.09375V5.46875C18.5938 5.75883 18.4785 6.03703 18.2734 6.24215C18.0683 6.44727 17.7901 6.5625 17.5 6.5625C17.2099 6.5625 16.9317 6.44727 16.7266 6.24215C16.5215 6.03703 16.4062 5.75883 16.4062 5.46875V1.09375C16.4062 0.803669 16.5215 0.52547 16.7266 0.320352C16.9317 0.115234 17.2099 0 17.5 0ZM35 17.5C35 17.7901 34.8848 18.0683 34.6796 18.2734C34.4745 18.4785 34.1963 18.5938 33.9062 18.5938H29.5312C29.2412 18.5938 28.963 18.4785 28.7579 18.2734C28.5527 18.0683 28.4375 17.7901 28.4375 17.5C28.4375 17.2099 28.5527 16.9317 28.7579 16.7266C28.963 16.5215 29.2412 16.4062 29.5312 16.4062H33.9062C34.1963 16.4062 34.4745 16.5215 34.6796 16.7266C34.8848 16.9317 35 17.2099 35 17.5ZM5.46875 18.5938C5.75883 18.5938 6.03703 18.4785 6.24215 18.2734C6.44727 18.0683 6.5625 17.7901 6.5625 17.5C6.5625 17.2099 6.44727 16.9317 6.24215 16.7266C6.03703 16.5215 5.75883 16.4062 5.46875 16.4062H1.09375C0.803669 16.4062 0.52547 16.5215 0.320352 16.7266C0.115234 16.9317 0 17.2099 0 17.5C0 17.7901 0.115234 18.0683 0.320352 18.2734C0.52547 18.4785 0.803669 18.5938 1.09375 18.5938H5.46875ZM29.8747 5.12531C30.0797 5.33042 30.1949 5.60857 30.1949 5.89859C30.1949 6.18862 30.0797 6.46677 29.8747 6.67188L26.7816 9.765C26.6807 9.86946 26.56 9.95279 26.4265 10.0101C26.2931 10.0674 26.1496 10.0976 26.0043 10.0989C25.8591 10.1001 25.7151 10.0725 25.5807 10.0175C25.4463 9.96247 25.3241 9.88125 25.2214 9.77856C25.1187 9.67586 25.0375 9.55374 24.9825 9.41932C24.9275 9.28491 24.8999 9.14088 24.9011 8.99566C24.9024 8.85043 24.9326 8.70691 24.9899 8.57346C25.0472 8.44002 25.1305 8.31933 25.235 8.21844L28.3281 5.12531C28.5332 4.92027 28.8114 4.80508 29.1014 4.80508C29.3914 4.80508 29.6696 4.92027 29.8747 5.12531ZM8.21844 9.765C8.42472 9.96424 8.701 10.0745 8.98778 10.072C9.27456 10.0695 9.54889 9.95447 9.75168 9.75168C9.95447 9.54889 10.0695 9.27456 10.072 8.98778C10.0745 8.701 9.96424 8.42472 9.765 8.21844L6.67188 5.12531C6.57098 5.02085 6.45029 4.93752 6.31685 4.8802C6.18341 4.82288 6.03988 4.79271 5.89466 4.79144C5.74943 4.79018 5.60541 4.81786 5.47099 4.87285C5.33657 4.92785 5.21445 5.00906 5.11176 5.11176C5.00906 5.21445 4.92785 5.33657 4.87285 5.47099C4.81786 5.60541 4.79018 5.74943 4.79144 5.89466C4.79271 6.03989 4.82288 6.18341 4.8802 6.31685C4.93752 6.45029 5.02085 6.57098 5.12531 6.67188L8.21844 9.765ZM17.5 8.75C15.1794 8.75 12.9538 9.67187 11.3128 11.3128C9.67187 12.9538 8.75 15.1794 8.75 17.5C8.75 17.7901 8.86523 18.0683 9.07035 18.2734C9.27547 18.4785 9.55367 18.5938 9.84375 18.5938H25.1562C25.4463 18.5938 25.7245 18.4785 25.9296 18.2734C26.1348 18.0683 26.25 17.7901 26.25 17.5C26.25 15.1794 25.3281 12.9538 23.6872 11.3128C22.0462 9.67187 19.8206 8.75 17.5 8.75ZM17.5 10.9375C19.0512 10.937 20.5525 11.486 21.7374 12.4871C22.9223 13.4882 23.7143 14.8767 23.9728 16.4062H11.025C11.2836 14.8764 12.0759 13.4876 13.2613 12.4864C14.4466 11.4853 15.9484 10.9365 17.5 10.9375Z" fill="#EB6F4C"/>
</svg>
              <p className='para'>WeatherApp</p>
            </div>
            <div className='section-2'>
              <div className='search-container'>
              <input type='search' className='searchInput' onChange={this.handleInput} value={this.state.searchInput}/>
              

              <svg xmlns="http://www.w3.org/2000/svg" width="74" height="40" viewBox="0 0 74 40" fill="none" className='search-icon search' onClick={this.submitInput}>
  <path d="M0.5 0H68.5C71.2614 0 73.5 2.23858 73.5 5V35C73.5 37.7614 71.2614 40 68.5 40H0.5V0Z" fill="#EB6F4C"/>
  <path d="M41.2103 22.6361C42.2996 21.1495 42.7874 19.3063 42.5763 17.4754C42.3652 15.6444 41.4706 13.9607 40.0715 12.7611C38.6725 11.5615 36.8721 10.9345 35.0307 11.0054C33.1892 11.0764 31.4425 11.8401 30.1399 13.1439C28.8372 14.4476 28.0749 16.1951 28.0052 18.0369C27.9356 19.8787 28.5638 21.6788 29.7643 23.0772C30.9647 24.4756 32.6488 25.3691 34.4797 25.579C36.3105 25.7888 38.1531 25.2995 39.6387 24.209H39.6376C39.6713 24.254 39.7073 24.2968 39.7478 24.3384L44.0789 28.6701C44.2898 28.8812 44.576 28.9999 44.8744 29C45.1728 29.0001 45.4591 28.8816 45.6702 28.6707C45.8812 28.4597 45.9999 28.1735 46 27.8751C46.0001 27.5766 45.8817 27.2903 45.6707 27.0792L41.3396 22.7475C41.2994 22.7068 41.2562 22.6692 41.2103 22.635V22.6361ZM41.5005 18.3112C41.5005 19.1238 41.3405 19.9285 41.0295 20.6793C40.7186 21.43 40.2628 22.1122 39.6883 22.6868C39.1138 23.2615 38.4317 23.7173 37.681 24.0283C36.9303 24.3392 36.1258 24.4993 35.3132 24.4993C34.5007 24.4993 33.6961 24.3392 32.9455 24.0283C32.1948 23.7173 31.5127 23.2615 30.9382 22.6868C30.3636 22.1122 29.9079 21.43 29.5969 20.6793C29.286 19.9285 29.126 19.1238 29.126 18.3112C29.126 16.67 29.7778 15.096 30.9382 13.9355C32.0985 12.775 33.6723 12.123 35.3132 12.123C36.9542 12.123 38.528 12.775 39.6883 13.9355C40.8486 15.096 41.5005 16.67 41.5005 18.3112Z" fill="white"/>
</svg>
</div>
{
  suggestionList && suggestionList.length !== 0 && searchInput!=='' ? (
    <div>
      {
        suggestionList.map((each) => (
          <div key={each.id} className='suggestion-item-container' onClick={()=>this.onClickSuggestion(each.name)}>
            <p className='search-item'>{each.name}</p>
            <p className='search-item'>{each.sys.country}</p>
          </div>
        ))
      }
    </div>
  ) : (suggestionList&& suggestionList.length==0 && searchInput!==''?<p className='error-msg'>Keep Searching!</p>:null)
}
          
            </div>
            <div className='degreeParams'>
                <button className={`degreeBtn ${celciusClass}`} onClick={this.changetoCelcius}>°C
                </button>
                <span>
                  
                </span>
                <button className={`degreeBtn ${farehn}`} onClick={this.changetoFarenh}>°F</button>
            </div>
        </div>
        <Weather weather={weather} cityName={cityName} foreCast={foreCast} isCelcius={isCelcius}/>
        <Now weather={weather}/>
        <FiveDayForecast fiveDayForeCast={weather.list.slice(0,5)} weather={weather}/>
    </div>
  );}
}

export default Home;
