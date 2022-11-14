import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './CarsForm.css'

const CarsForm = ({getCarsApi, carsSelected, deselectCars}) => {

    const { handleSubmit, register, reset} = useForm();

    const initialValue = {
        brand:"",
        model:"",
        color:"",
        year:"",
        price:""
    }

    useEffect(()=>{
        if(carsSelected){
            reset(carsSelected) //Si no es null
        }else{
            reset(initialValue); //Si es null
        }
    },[carsSelected])

    const submit = (data) =>{
        if(carsSelected){
            axios.put(`http://cars-crud.academlo.tech/cars/${carsSelected.id}/`, data) //Actualiza
            .then(() => {
                getCarsApi()
                deselectCars()
            })
            .catch(error => console.log(error.response?.data))
        }else{
            axios.post('http://cars-crud.academlo.tech/cars/', data) //Añade
            .then(() => getCarsApi())
            .catch(error => console.log(error.response?.data))
            reset(null)
        }
    }   

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="input--container" >
                <label htmlFor="brand">brand</label>
                <input {...register("brand")} type="text" id='brand' placeholder='write text' autoComplete='off' required/>
            </div>
            <div className="input--container">
                <label htmlFor="model">model</label>
                <input {...register("model")} type="text" id='model' placeholder='write text' autoComplete='off' required />
            </div>
            <div className="input--container">
                <label htmlFor="color">color</label>
                <input {...register("color")} type="text" id='color' placeholder='write text' autoComplete='off' required />
            </div>
            <div className="input--container">
                <label htmlFor="year">year</label>
                <input {...register("year")} type="number" id='year' autoComplete='off' placeholder='write number' required />
            </div>
            <div className="input--container">
                <label htmlFor="price">price</label>
                <input {...register("price")} type="number" id='price' placeholder='write number' autoComplete='off' required/>
            </div>
            <button className='btn--style'>Submit</button>
        </form>
    );
};

export default CarsForm;