import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';

// VERVANG DEZE API KEY DOOR JOUW API KEY:
const apiKey = 'd85e6256cb39361faf2b9dacc4eb33f4';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData() {
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar/>

          <span className="location-details">
            {weatherData &&
              <>
                <h2>{weatherData.weather[0].description}</h2>
                <h3>{weatherData.name}</h3>
                <h1>{weatherData.main.temp}</h1>
              </>
            }
            <button
              type="button"
              onClick={fetchData}
            >
              Haal data op!
            </button>
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;
