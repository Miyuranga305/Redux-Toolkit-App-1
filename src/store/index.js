import { configureStore } from "@reduxjs/toolkit";
import {
    carsReducer,
    addCar,
    removeCar,
    changeSearchTerm
} from './slices/carsSlice';
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlices'

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

/*const store = configureStore({
    reducer: {
        songs: songSlice.reducer
    }
});*/

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
}