import Image from 'next/image'
import Med from '../../../../assets/hero/lab2.png'
import classes from './LabTest.module.css'

const LabTest = () => {
    return (
        <div className={`${classes.LabTest} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>PATHOLOGY TEST AT HOME - GET UPTO 40% DISCOUNT</h2>
                    <p>20+ Partner Labs</p>
                    <div>{/* <Image src={Med} width={320} height={300} alt="" /> */}</div>
                </div>
            </div>
        </div>
    )
}

export default LabTest
