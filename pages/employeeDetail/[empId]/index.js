import styles from '../../../sass/EmployeeDetail.module.scss'
import {useRouter} from "next/router"
import {useEffect,useState} from "react"
import {useSelector} from "react-redux"
import Image from "next/image";

const EmployeeDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const {employees} = useSelector(state => state.employees);
    const [currentEmp,setCurrentEmp] = useState(false);

    useEffect(()=> {
       console.log(employees.map(emp => console.log(emp)))
    },[])



    return(
        <main className={styles.empDetail}>
            <section className={styles.avatar}>
                <img src={'https://media-exp1.licdn.com/dms/image/C4E03AQFIo2qYqt30Sg/profile-displayphoto-shrink_400_400/0/1651598918579?e=1661990400&v=beta&t=Dfw8Zn0h6TBwWbLmR65SidPCalYLzh878hlK_rprqTo'}/>
                <div>
                    <h2 className={styles.empName}>Eren Emmez</h2>
                    <span className={styles.empVote}> <b className={styles.property}>Oy Sayısı :</b> 12</span>
                </div>
            </section>
            <section className={styles.body}>
                <ul className={styles.empInfo}>
                    <li>
                        <i className={styles.infoHead}>Info</i>
                    </li>
                    <li>
                        <b className={styles.property}>Department : </b>
                        <span className={styles.data}>IT</span>
                    </li>
                    <li>
                        <b className={styles.property}>Team : </b>
                        <span className={styles.data}>Front End</span>
                    </li>
                    <li>
                        <b className={styles.property}>Job : </b>
                        <span className={styles.data}>Front End Developer</span>
                    </li>
                    <li>
                        <i className={styles.infoHead}>Contact</i>
                    </li>
                    <li>
                        <b className={styles.property}>Email : </b>
                        <span className={styles.data}>emmezeren@gmail.com</span>
                    </li>
                    <li>
                        <b className={styles.property}>Phone : </b>
                        <span className={styles.data}>5453860523</span>
                    </li>
                    <li>
                        <b className={styles.property}>Adress : </b>
                        <span className={styles.data}>İstanbul,Turkey</span>
                    </li>
                </ul>





            </section>
        </main>
    )
}
export default EmployeeDetail;
