import { faBone, faHandDots, faHeartbeat, faKitMedical, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Tele from '../../../../assets/hero/tele.png'
import Searchbar from '../../Searchbar/Searchbar'
import DoctorSearch from './DoctorSearch/DoctorSearch'
import classes from './Telemedicine.module.css'

const Telemedicine = () => {
    return (
        <>
            {/* <DoctorSearch /> */}
            <div className={`${classes.Telemedicine} ${classes.container}`}>
                <div className={classes.grid}>
                    <div className={classes.Wrapper}>
                        <h2>FIND THE BEST DOCTORS</h2>
                        <p>FROM THE LARGEST DOCTOR PORTAL OF THE COUNTRY</p>
                        <div>
                            <Image src={Tele} width={480} height={450} alt="" />
                        </div>
                    </div>
                    <div className={classes.search}>
                        <h4>
                            <FontAwesomeIcon icon={faStethoscope} /> Search Doctors
                        </h4>
                        <div>
                            <Searchbar placeholder={'Search doctors by specialty, area or name'} />
                        </div>
                        <div>
                            <h5>
                                <FontAwesomeIcon icon={faKitMedical} /> Family Medicine
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon={faBone} /> Orthopedics
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon={faHeartbeat} /> Cardiology
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon={faHandDots} /> Dermatology
                            </h5>
                        </div>
                        <div>
                            <p>Popular Searches: </p>
                            <span>medines, vd, skin, kidney</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Telemedicine
