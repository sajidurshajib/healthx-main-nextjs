import Image from 'next/image'
// import labTest from '../../../../assets/sliderImage/labTest'
import labTest from '../../../../assets/sliderImage/labTest.png'
import classes from './LabTest.module.css'

const LabTest = () => {
    return (
        <div className={`${classes.LabTest} ${classes.container}`}>
            <div className={classes.Wrapper}>
                <h2>Lab Test</h2>
                <p>Lab Test</p>
            </div>

            <div className={classes.imgWrapper}>
                <Image src={labTest} width={500} height={330} />
            </div>
        </div>
    )
}

export default LabTest
