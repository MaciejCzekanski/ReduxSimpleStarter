import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import PropTypes from 'prop-types';
import GoogleMap from "../components/google-map";

class WeatherList extends Component {

    static propTypes = {
        weather: PropTypes.array.isRequired
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat }  = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td>
                    <Chart data={temps} color="orange" units="'C" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);