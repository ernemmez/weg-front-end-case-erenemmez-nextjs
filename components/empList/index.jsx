import styles from "../../sass/EmpList.module.scss";


const EmpList = () => {
    return (
       <section className={styles.section}>
           <h2 className={styles.title}>
               <span>Wingie Enuygun</span> Employee of the Month Ranking
           </h2>
           <div className={styles.empList}>
               
           </div>
       </section>
    )
}
export default EmpList;
