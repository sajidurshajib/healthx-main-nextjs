import Image from 'next/image'
import Med from '../../../../assets/hero/lab2.png'
import classes from './LabTest.module.css'

const LabTest = () => {
    return (
        <div className={`${classes.LabTest} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>Lab Test</h2>
                    <p>Lab Test</p>
                    <div>{/* <Image src={Med} width={320} height={300} alt="" /> */}</div>
                </div>
            </div>
        </div>
    )
}

export default LabTest
