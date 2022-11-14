import './App.css'
import CarsList from './component/CarsList'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CarsForm from './component/CarsForm';

const App = () => {
    const [carsApi, setCarsApi] = useState([])
    const [carsSelected, setCarsSelected] = useState(null);

    useEffect(()=>{
      axios.get('http://cars-crud.academlo.tech/cars/')
      .then(res => setCarsApi(res.data))
    },[])

    const getCarsApi = () =>{
      axios.get('http://cars-crud.academlo.tech/cars/')
      .then(res => setCarsApi(res.data))
    }

    const selectCars = (cars) =>{
      setCarsSelected(cars)
    }

    const deselectCars = () =>{
      setCarsSelected(null)
    }

    const deleteCars = (id) =>{
      axios.delete(`http://cars-crud.academlo.tech/cars/${id}/`)
      .then(() => getCarsApi())
    }

  
  return (
    <div className="App">
      <CarsForm getCarsApi={getCarsApi} carsSelected={carsSelected} deselectCars={deselectCars}/>
      <CarsList carsApi={carsApi} selectCars={selectCars} deleteCars={deleteCars}/>
    </div>
  )
}

export default App
