import React from 'react';
import{ Cards, Chart, CountryPicker} from './components'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1> Hello George</h1>
                <CountryPicker />
                <Cards />
                <Chart />
            </div>
        );
    }
}

export default App