import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
        .then(response =>{
            setCountries(response.data)
        }).catch(error =>{
            console.log(error);
        })
    },[])
  return (
    <div className="flex flex-wrap justify-center">
      {countries.map(country => (
        <div key={country.name} className="bg-white w-80 sm:w-96 md:w-1/3 rounded-lg shadow-md mx-2 my-2">
          <img src={country.flag} alt={country.name} className="h-48 w-full object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{country.name}</h2>
            <p className="mt-2 text-gray-500">{country.region}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home