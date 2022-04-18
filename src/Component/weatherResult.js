import React from 'react'
import { Consumer } from './Context'



const weatherResult = () => {
  return (
    
      <Consumer>

      {
          ({data}) =>{
            const {name,main,weather,wind} = data 
             
            return(
              
             <div className='weather'>
                <h2 className='city'>{name}</h2>
                {main? <h1 className='temp'>{`${main.temp} °C`}</h1> : null}

                <div className='flex'>
                  {weather ? <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} className='icon' /> : null}
                  {weather? <p className='description'> {weather[0].description} </p> : null}
                </div>

                {main ? <p className='humidity'> {`humidity : ${main.humidity}%`}</p> : null}
                { wind ? <p className='wind'> {`Wind speed : ${wind.speed} m/s`}</p> :null}
                
            </div>
            )
            
          }
      }
           
        </Consumer>
  )

}

export default weatherResult