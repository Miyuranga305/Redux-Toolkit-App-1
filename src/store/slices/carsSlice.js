import { createSlice, nanoid } from '@reduxjs/toolkit';


const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        searchTerm: '',
        //cars: [],
        data: [],

    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            // Assumption:
            // action.payload === { name: 'ab', cost: 140}
           // state.cars.push ({
            state.data.push ({
                name: action.payload.name,
                cost: action.payload.cost,
               // id: Math.random()
               id: nanoid(),
            })
        },
        removeCar(state, action){
             // Assumption:
            // action.payload === the id of the car we want to remove
            //const updated = state.cars.filter((car) => {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            });
            //state.cars = updated;
            state.data = updated;

        },
    },
});

/*const store = configureStore({
    reducer: {
        songs: songSlice.reducer
    }
});*/

export const { changeSearchTerm, addCar, removeCar  } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;