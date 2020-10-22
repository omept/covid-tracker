import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
//style
import style from './App.module.css';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        try {
            const fetch_data = await fetchData();
            this.setState({
                data: fetch_data
            });

        } catch (error) {
            console.error(error);
        }



    }

    render() {
        const { data } = this.state;
        return (
            <div className={style.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }

}

export default App