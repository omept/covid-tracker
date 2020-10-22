import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
//style
import style from './App.module.css';

//asset
import coronaImg from './images/coronavirus_logo.jpg'
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        try {
            const fetch_data = await fetchData(this.state.country);
            this.setState({
                data: fetch_data
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleCountryChange = async (country) => {

        const fetch_data = await fetchData(country);
        this.setState({
            data: fetch_data,
            country: country,
        });
        //fetch data
        //set country
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={style.container}>
                <img className={style.covidImg} src={coronaImg} alt="Covid Image" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }

}

export default App