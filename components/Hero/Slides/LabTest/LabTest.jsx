import Image from 'next/image'
import Lab from '../../../../assets/hero/lab3.png'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './LabTest.module.css'

const LabTest = () => {
    return (
        <div className={`${classes.LabTest} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>
                        PATHOLOGY TEST AT HOME <br /> GET UPTO 40% DISCOUNT
                    </h2>
                    <p>20+ Partner Labs</p>
                    <div>{/* <Image src={Med} width={320} height={300} alt="" /> */}</div>
                    {/* <div>
                        <Searchbar placeholder={'Search tests by name or price'} />
                    </div> */}
                    <button>Book Now!</button>
                </div>
                <div className={classes.search}>
                    {/* <div>
                        <Image src={Lab} width={480} height={450} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LabTest
