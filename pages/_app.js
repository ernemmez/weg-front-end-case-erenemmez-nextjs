import '../sass/globals.scss'
import {wrapper} from "../redux/store";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setEmployees} from "../redux/employees";
import {useSelector} from "react-redux"


function MyApp({ Component, pageProps }) {
  const dispatch =useDispatch();
  const{employees} =useSelector(state => state.employees)


  useEffect(() => {
    const storageEmployees = JSON.parse(localStorage.getItem('employees'))
    if(storageEmployees){
      dispatch(setEmployees(storageEmployees))
    }else{
      fetch('https://62b8d77803c36cb9b7cc660f.mockapi.io/api/employees')
          .then(res => res.json())
          .then(data => dispatch(setEmployees(data)))
    }
  }, [dispatch]);

  useEffect(()=> {
    const storageEmployees = JSON.parse(localStorage.getItem('employees'))
    if(employees.length < 1){
      if(storageEmployees){
        dispatch(setEmployees(storageEmployees))
      }else{
        fetch('https://62b8d77803c36cb9b7cc660f.mockapi.io/api/employees')
            .then(res => res.json())
            .then(data => dispatch(setEmployees(data)))
      }
    }
  },[dispatch, employees.length])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
