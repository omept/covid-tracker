import React, {useState, useEffect}  from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api'
import styles from './CountryPicker';

const CountryPicker = ({handleCountryChange}) =>{

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
      (async()=> setCountries(await fetchCountries()))()  
    },[])

   
    

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="global" onChange={(e)=>{handleCountryChange(e.target.value)}}>
            <option value='global'> Global</option>
             {countries.map((entry, i) => (<option key={i}  value={entry}> {entry}</option>) )}
            </NativeSelect>
        </FormControl>
    );
}


export default CountryPicker;