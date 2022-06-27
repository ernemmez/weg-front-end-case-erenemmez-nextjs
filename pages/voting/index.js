import styles from '../../sass/Voting.module.scss'
import EmpList from "../../components/empList"
import {memo} from "react";

const Voting = (props) => {
    return (
        <main className={styles.voting}>
            <section className={styles.votingList}>
                <EmpList/>
            </section>
        </main>
    );
}


export default memo(Voting);