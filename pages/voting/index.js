import styles from '../../sass/Voting.module.sass'
import EmpList from "../../components/empList"
import {wrapper} from "../../redux/store"
import {setEmployees} from "../../redux/employees"
import {useSelector} from "react-redux"
import {useEffect} from "react"
import Head from "next/head";

const Voting = (props) => {
    const {employees} = useSelector(state => state.employees)

    useEffect(() => { //employees her değiştiğinde localStorage'dan da güncelleniyor.
        localStorage.setItem('employees',JSON.stringify(employees));
        console.log('localStorage setted employees');
    }, [employees]);

    return (
      <>
          <Head>
              <title>Vote Employee | Eren Emmez | WEG Front End Case</title>
              <meta name="description" content="Bu proje Eren Emmez tarafından WEG Front End Developer Case için hazırlanmıştır" />
          </Head>
          <main className={styles.voting}>
              <section className={styles.votingList}>
                  <EmpList/>
              </section>
          </main>
      </>
    );
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const response = await fetch(process.env.baseAPIUrl) //https://62b8d77803c36cb9b7cc660f.mockapi.io/api/employees
    const data = await response.json()
    store.dispatch(setEmployees(data))
})
export default Voting;