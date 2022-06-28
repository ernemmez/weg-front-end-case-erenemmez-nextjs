import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    employees:[],
}

export const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees:(state,action) => {
                state.employees = action.payload;
                console.log('Employees to be Added to Local Storage Setted');
        },
        increaseVote:(state,action) => {
            const currentEmp = state.employees.find(emp => emp.id === action.payload)
            currentEmp.vote = currentEmp.vote + 1
            console.log(`${currentEmp.name} 1 oy aldı. Şuan oy sayısı :${currentEmp.vote}`)
        }
    }
});
export const {
    setEmployees,
    increaseVote
} = employeeSlice.actions;
export default employeeSlice.reducer;