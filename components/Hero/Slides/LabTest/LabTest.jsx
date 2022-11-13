import Image from 'next/image'
import Link from 'next/link'
import Lab from '../../../../assets/hero/lab3.png'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './LabTest.module.css'

const LabTest = () => {
    return (
        <div className={`${classes.LabTest} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>
                        LAB TEST AT HOME <br /> GET UPTO 40% DISCOUNT
                    </h2>
                    <p>Pathology Test From 20+ Partner Labs & Hospitals</p>
                    {/* <div>
                        <Searchbar placeholder={'Search tests by name or price'} />
                    </div> */}
                    <Link href="medicine-delivery">
                        <a>
                            <button>Call +8801322658481 for Booking!</button>
                        </a>
                    </Link>
                </div>
                <div className={classes.search}>
                    <div>
                        <Image src={Lab} width={380} height={400} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabTest
