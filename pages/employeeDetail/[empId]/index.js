import styles from '../../../sass/EmployeeDetail.module.scss'
import {useRouter} from "next/router"
import {useEffect,memo} from "react";
import {useDispatch, useSelector} from "react-redux"
import {setEmployee} from "../../../redux/employees";

const EmployeeDetail = ({movies}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { empId } = router.query
    const {employee} = useSelector(state => state.employees)

    useEffect(()=>{
        fetch(`https://62b8d77803c36cb9b7cc660f.mockapi.io/api/employees/${empId}`)
            .then(res => res.json())
            .then(data => dispatch(setEmployee(data)))
    },[dispatch, empId])

    return(
        <main className={styles.empDetail}>
            <section className={styles.avatar}>
                <img src={employee.avatar} alt={`${employee.name} ${employee.surname}`} className={styles.avatarImage}/>
                <img src='/enuygun.svg' alt='Enuygun' className={styles.enuygun}/>
                <div>
                    <h2 className={styles.empName}>{`${employee.name} ${employee.surname}`}</h2>
                    <span className={styles.empVote}> <b className={styles.property}>Oy Sayısı :</b>{employee.vote}</span>
                </div>
            </section>
            <section className={styles.body}>
                <ul className={styles.empInfo}>
                    <li>
                        <i className={styles.infoHead}>Info</i>
                    </li>
                    <li>
                        <b className={styles.property}>Department : </b>
                        <span className={styles.data}>{employee.department}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Team : </b>
                        <span className={styles.data}>{employee.team}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Job : </b>
                        <span className={styles.data}>{employee.job}</span>
                    </li>
                    <li>
                        <i className={styles.infoHead}>Contact</i>
                    </li>
                    <li>
                        <b className={styles.property}>Email : </b>
                        <span className={styles.data}>{employee.email}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Phone : </b>
                        <span className={styles.data}>{employee.phone}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Adress : </b>
                        <span className={styles.data}>{employee.adress}</span>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default memo(EmployeeDetail);
