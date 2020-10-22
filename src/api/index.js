import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


export const fetchData = async () => {
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(url);
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
        console.log(data);

    } catch (error) {

    }
}