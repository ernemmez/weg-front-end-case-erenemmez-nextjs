import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    employees:[],
    employee:{
        adress: "",
        avatar: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg",
        department: "",
        email: "",
        id: "",
        job: "",
        name: "",
        phone: "",
        surname: "",
        team: "",
        vote: 0
    }
}

export const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
       setEmployees:(state,action) => {
          const storageEmployees = JSON.parse(localStorage.getItem('employees'))
           if(storageEmployees){
               state.employees = storageEmployees;
               console.log('Employees Added to State');
           }else{
               state.employees = action.payload;
               localStorage.setItem('employees',JSON.stringify(action.payload))
               console.log('Employees to be Added to Local Storage Setted');
           }
       },
        increaseVote:(state,action) => {
            const currentEmp = state.employees.find(emp => emp.id === action.payload)
            currentEmp.vote = currentEmp.vote + 1
            console.log(`${currentEmp.name} 1 oy aldı. Şuan oy sayısı :${currentEmp.vote}`)
        },
        setEmployee:(state, action) => {
           state.employee = action.payload;
        }
    }
});
export const {
    setEmployees,
    increaseVote,
    setEmployee
} = employeeSlice.actions;
export default employeeSlice.reducer;