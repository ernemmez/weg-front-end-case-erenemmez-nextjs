import styles from '../../sass/Voting.module.sass'
import EmpList from "../../components/empList"
import {wrapper} from "../../redux/store"
import {setEmployees} from "../../redux/employees"
import {useSelector} from "react-redux"
import {useEffect} from "react"

const Voting = (props) => {
    const {employees} = useSelector(state => state.employees)

    useEffect(() => { //employees her değiştiğinde localStorage'dan da güncelleniyor.
        localStorage.setItem('employees',JSON.stringify(employees));
        console.log('localStorage setted employees');
    }, [employees]);

    return (
        <main className={styles.voting}>
            <section className={styles.votingList}>
                <EmpList/>
            </section>
        </main>
    );
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const response = await fetch('https://62b8d77803c36cb9b7cc660f.mockapi.io/api/employees')
    const data = await response.json()
    store.dispatch(setEmployees(data))
})
export default Voting;