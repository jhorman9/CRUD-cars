import './CarsList.css'

const CarsList = ({carsApi, selectCars, deleteCars}) => {

    return (
      <div className="movie--list">
        {
            carsApi.map(car => (
                <div className='car--content' key={car.id}>
                    <div className='car--info'>
                        <h2 className='car--brand'>{car.brand}</h2>
                        <p className='car--model'>model: {car.model}</p>
                        <p className='car--color'>color: {car.color}</p>
                        <p className='car--year'>year: {car.year}</p>
                        <p className='car--price'>price: {car.price}</p>
                    </div>
                    <div className="btn">
                        <button className='btn--style select' onClick={() => selectCars(car)}>Select</button>
                        <button className='btn--style delete' onClick={() => deleteCars(car.id)}>Delete</button>
                    </div>
                </div>
            ))
        }
      </div>
    )
};

export default CarsList;