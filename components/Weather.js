import React , {Component} from 'react';
import './Weather.css';

class Weather extends Component{

    constructor(){
        super();
        let tempConverted = 0;
    }

    componentDidMount(){
        if(this.props.temperature !== ''){
            this.tempConverted = this.props.temperature - 273.15
        }

    }


    render(){
        return(
            <div> 
             <ul className="collection container">
                <li style={{backgroundColor: 'rgb(0,0,0,0.6)'}} className="collection-item  white-text"><span>Location : </span> <span className="info">{this.props.location}</span></li>
                <li style={{backgroundColor: 'rgb(0,0,0,0.6)'}} className="collection-item white-text "><span>Tempirature : </span><span className="info">{this.tempConverted}</span></li>
                <li style={{backgroundColor: 'rgb(0,0,0,0.6)'}} className="collection-item white-text"><span>Weather : </span><span className="info">{this.props.weather}</span></li>
                <li style={{backgroundColor: 'rgb(0,0,0,0.6)'}} className="collection-item white-text"><span>Humidity : </span><span className="info">{this.props.humidity}</span></li>
                <li style={{backgroundColor: 'rgb(0,0,0,0.6)'}} className="collection-item white-text"><span>Wind speed : </span><span className="info">{this.props.windSpeed}</span></li>
             </ul>
            </div>
        )
    }
}

export default Weather;