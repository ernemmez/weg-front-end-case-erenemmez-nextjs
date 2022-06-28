import styles from "../../sass/EmpList.module.sass"
import EmpCard from "../empCard"
import {useSelector,useDispatch} from "react-redux"
import {useState,useEffect,memo} from "react";


const EmpList = (props) => {
    const dispatch = useDispatch();
    const {employees} = useSelector(state => state.employees);
    const [sortedEmp,setSortedEmp] = useState([]);

    useEffect(() => {
        setSortedEmp(employees.slice().sort((e1,e2) => e2.vote - e1.vote ))
        console.log('Employees Listed')
    }, [employees]);

    return (
       <section className={styles.section}>
           <h2 className={styles.title}>
               <span>Wingie Enuygun</span> Employee of the Month Ranking
           </h2>
           <div className={styles.empList}>
               {sortedEmp.map((emp,index) => <EmpCard key={index} index={index} id={emp.id}/> )}
           </div>
       </section>
    )
}
export default memo(EmpList);


