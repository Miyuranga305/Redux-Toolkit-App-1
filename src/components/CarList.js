import { useSelector, useDispatch } from "react-redux";
import { removeCar } from '../store';


function CarList() {
    const dispatch = useDispatch();

   /* const cars = useSelector((state) => {
       // return state.cars.cars
       return state.cars.data
    });*/
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm }}) => {
       // return state.cars.cars
       const filteredCars = data.filter((car) => 
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name
      }
    });


    //console.log(cars);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    };


    const rennderedCars = cars.map((car) => {
        //DECIDE IF THIS HOULD BE BOLD
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                   {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        )
    })

    return <div className="car-list">
        {rennderedCars}
        <hr />
    </div>;
}

export default CarList;