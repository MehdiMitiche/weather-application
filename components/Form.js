import React , {Component} from 'react';
import './Form.css';

class Form extends Component{

    componentDidMount(){

    }




    render(){
        return(
            <div>
                <form>
                    <input
                        placeholder = "City"
                        type = "text"
                        onChange = {this.props.onChangeCityInput}
                        value= {this.props.cityInput}
                    />

                    <input
                        placeholder = "Country"
                        type = "text"
                        onChange = {this.props.onChangeCountryInput}
                        value= {this.props.countryInput}
                    />
                    <input
                        type = "submit"
                        onClick = {this.props.getWeather}
                        value = "Get Weather"
                        className="ui inverted button"
                        style = {{marginTop : 20}}
                    />

                </form>
            </div>
        )
    }
}

export default Form;