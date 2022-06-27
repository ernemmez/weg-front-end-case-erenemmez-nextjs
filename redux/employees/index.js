import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    employees:[]
}

export const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
       setEmployees:(state,action) => {
          const storageEmployees = JSON.parse(localStorage.getItem('employees'))
           if(state.employees.length > 0){
               //emp'ler state'de var
           }else if(storageEmployees){ //statede yok local storage'da var
               state.employees = storageEmployees;
           }else{ //hem state içinde hemde storage'da yok
               state.employees = action.payload;
               localStorage.setItem('employees',JSON.stringify(action.payload))
           }
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
    increaseVote,
} = employeeSlice.actions;
export default employeeSlice.reducer;