import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [inputcity,Setinputcity]=useState("")
  const Apikey = "2f21af8f08f28713cfca36c368ed3fe8";
  const [Data, SetData] = useState({});
  const getWeatherDetails = (cityname) => {
    if (!cityname) return;
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${Apikey}`;

    axios
      .get(ApiUrl)
      .then((res) => {
        console.log("response is " + res.data);
        SetData(res.data);
      })
      .catch((e) => {
        console.log("error is " + e);
      });
  };


const changeinput=(e)=>{

Setinputcity(e.target.value)

}


const searchbtn=()=>{

  getWeatherDetails(inputcity)

}

  useEffect(() => {
    getWeatherDetails("Patna");
    
  }, []);

  return (
    <>
      <div className="col-md-12">
        <div className="weather-bg">
          <h1>Rakesh Weather App</h1>

          <div className="d-grid col-4 mt-4 gap-3">
            <input type="text" className="form-control" onChange={changeinput}  value={inputcity}/>
            <button className="btn btn-primary" type="button" onClick={searchbtn}>
              Search
            </button>
          </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded WeatherResultbox">
            <img
              className="Cloud-icon"
              src="https://w7.pngwing.com/pngs/1005/263/png-transparent-weather-forecasting-logo-weather-blue-game-cloud-thumbnail.png"
            />

            <h5 className="weather-city">{Data?.name}</h5>
            <h6 className="weather-temprature">{((Data?.main?.temp)-273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
