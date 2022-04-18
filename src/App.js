import { Consumer } from "./Component/Context";
import Loading from "./Component/Loading";
import SearchCity from "./Component/SearchCity";
import WeatherResult from './Component/weatherResult';

function App() {

 
  return (
    <Consumer>

  { 
    (value)=>{
      
      return( 

       <div className="App">
      <div className="card">
        <SearchCity />
        { value.isLoading ? <Loading/> : <WeatherResult /> }
      </div>
    </div>
      )
    }
  }

    </Consumer>
  );
}

export default App;
