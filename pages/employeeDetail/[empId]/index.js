import styles from '../../../sass/EmployeeDetail.module.scss'
import {useRouter} from "next/router"
import {useState,useEffect,memo} from "react";
import {useSelector} from "react-redux"

const EmployeeDetail = () => {
    const router = useRouter()
    const {employees} = useSelector(state => state.employees)
    const { empId } = router.query
    const [currentEmp,setCurrentEmp] = useState(employees.find(emp => emp.id === empId))

    return(
        <main className={styles.empDetail}>
            <section className={styles.avatar}>
                <img src={currentEmp.avatar} alt={`${currentEmp.name} ${currentEmp.surname}`}/>
                <div>
                    <h2 className={styles.empName}>{`${currentEmp.name} ${currentEmp.surname}`}</h2>
                    <span className={styles.empVote}> <b className={styles.property}>Oy Sayısı :</b>{currentEmp.vote}</span>
                </div>
            </section>
            <section className={styles.body}>
                <ul className={styles.empInfo}>
                    <li>
                        <i className={styles.infoHead}>Info</i>
                    </li>
                    <li>
                        <b className={styles.property}>Department : </b>
                        <span className={styles.data}>{currentEmp.department}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Team : </b>
                        <span className={styles.data}>{currentEmp.team}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Job : </b>
                        <span className={styles.data}>{currentEmp.job}</span>
                    </li>
                    <li>
                        <i className={styles.infoHead}>Contact</i>
                    </li>
                    <li>
                        <b className={styles.property}>Email : </b>
                        <span className={styles.data}>{currentEmp.email}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Phone : </b>
                        <span className={styles.data}>{currentEmp.phone}</span>
                    </li>
                    <li>
                        <b className={styles.property}>Adress : </b>
                        <span className={styles.data}>{currentEmp.adress}</span>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default memo(EmployeeDetail);
