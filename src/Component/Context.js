import React, { Component, createContext } from 'react'

const Context = React.createContext();

export class Provider extends Component {
   
    state= {
        weatherData : {},
        lat : '',
        lon : '',
        isLoading : true
    }


    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success,this.error)
    }
     
    // if ( geo ){
        
    // }

    success = (loc)=>{
        this.setState({lat:loc.coords.latitude, lon : loc.coords.longitude})
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.apiKey}&units=metric`)
            .then(res=>res.json())
            .then(weather=>{
                this.setState({isLoading:false, weatherData: weather})
            })
    }

    error=()=>{
    console.log('we out')
    }

    

    apiKey = '0b4c014ee8fe662a65325848cf6f9519';

    performSearch = (city)=>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${this.apiKey}`)
        .then(res=>res.json())
        .then(data=>this.setState({lat : data[0].lat,lon : data[0].lon}))

        .then(()=>{
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.apiKey}&units=metric`)
            .then(response=>response.json())
            .then(weather=>this.setState({isLoading:false, weatherData: weather}))
        })
           
    }

    render(){
        const value = {
            isLoading : this.state.isLoading,
            lon : this.state.lon,
            lat : this.state.lat,
            data : this.state.weatherData,
            action : {
                onSearch : this.performSearch
            }
        }

        return ( 
            <Context.Provider value={ value }>
                {this.props.children} 
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;