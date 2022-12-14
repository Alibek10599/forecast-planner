import { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [forecasts, setForecast] = useState([]);

  useEffect(() => {
    const data = fetch('https://virtserver.swaggerhub.com/LOL11999333/Planner/1.0.0/findAllForecastPlanerItems')
      .then(response => response.json()
      .then(data => {
        console.log(data)
        setForecast(data);
      }) 
      );
  }, []);
  return (
    <div className="App">
       <table>
      {forecasts.map((forecast) => {
        return (
            <tr>  
              <div key={forecast.id}>
              <h2>{forecast.dateOfSend}</h2>
            {/* <p>{forecast.description}</p> */}
              </div>
          </tr>
        );
        })
      }

</table>
      </div>
  );
}

export default App;
