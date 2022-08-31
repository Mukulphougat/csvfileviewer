import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    csvList: []
}

const csvSlice = createSlice({
    name: 'csv',
    initialState,
    reducers: {
        saveCsv: (state, action) => {
            console.log(action.payload);
            state.csvList.push(action.payload);
        },
        deleteCsv: (state, action) => {
            state.csvList = state.csvList.filter(item => item.name !== action.payload);
        },
        updateCsv: (state, action) => {
            state.csvList = state.csvList.map(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name;
                    item.modifiedAt = action.payload.date;
                }
                return item;
            }
            );
        }
    }
})


export const {saveCsv, deleteCsv, updateCsv} = csvSlice.actions;
export const selected = (state) => state.csv.csvList;
export default csvSlice.reducer;