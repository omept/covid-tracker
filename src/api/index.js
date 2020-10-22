import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) => {
    try {
        let fetUrl = country && country != 'global' ? `${url}/countries/${country}` : url;
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(fetUrl);
        const response = {
            confirmed, deaths, recovered, lastUpdate
        };

        return response;
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data.map((entry) => ({
            confirmed: entry.confirmed.total,
            deaths: entry.deaths.total,
            date: entry.reportDate,
        }));
    } catch (error) {

    }
}


export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map((entry) => entry.name);

    } catch (error) {

    }
}