import styles from '../../../sass/EmployeeDetail.module.sass'

const EmployeeDetail = ({currentEmp}) => {
    return(
        <main className={styles.empDetail}>
            <section className={styles.avatar}>
                <img src={currentEmp.avatar} alt={`${currentEmp.name} ${currentEmp.surname}`} className={styles.avatarImage}/>
                <img src='/enuygun.svg' alt='Enuygun' className={styles.enuygun}/>
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
export const getServerSideProps = async (context) => {
    const { empId } = context.query
    const response = await fetch(process.env.baseAPIUrl +'/'+ empId)
    const currentEmp = await response.json()

    console.log(`Fetched Employee: ${currentEmp.name}`);
    return { props: { currentEmp } };
}
export default EmployeeDetail;