import styles from '../../sass/EmpCard.module.sass'
import Avatar from '@mui/material/Avatar'
import {FaVoteYea} from 'react-icons/fa'
import Link from 'next/link'
import {useSelector,useDispatch} from "react-redux"
import {increaseVote} from '../../redux/employees'
import {useState,useEffect,memo} from "react";


const EmpCard = (props) => {
    const dispatch = useDispatch();
    const {employees} = useSelector(state => state.employees)
    const [currentEmp,setCurrentEmp] = useState(employees.find(emp => emp.id === props.id))

    useEffect(()=>{
        setCurrentEmp(employees.find(emp => emp.id === props.id))
    },[employees, props.id])

    const handleVote = () => {
        dispatch(increaseVote(currentEmp.id));
    }

    return (
        <div className={styles.empCard} style={props.index === 0 ? {backgroundColor:'#2BD361C0'} : null}>
            <div className={styles.emp}>
                <Link href={`/employeeDetail/${props.id}`}>
                    <a>
                        <Avatar alt={`Enuygun,Emp Name`} src={currentEmp.avatar} />
                        <span className={styles.empName}>
                            {`${currentEmp.name} ${currentEmp.surname}`}
                            {props.index === 0 ? '  ⭐️' : null}
                        </span>
                    </a>
                </Link>
            </div>
            <div className={styles.job}>
                {currentEmp.job}
            </div>
            <button className={styles.vote} onClick={handleVote}>
                <FaVoteYea/> {currentEmp.vote}
            </button>
        </div>
    );
}

export default memo(EmpCard);