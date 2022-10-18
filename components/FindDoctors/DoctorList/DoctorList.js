import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import img3 from '../../../assets/doctor/docstock.jpg'
import classes from './DoctorList.module.css'

const DoctorList = ({ doctors }) => {
    return (
        <div className={classes.DoctorList}>
            {doctors &&
                doctors.map((doctor, i) => (
                    <div className={classes.doctor} key={i}>
                        <div>
                            <Link href={`/${doctor?.id}`}>
                                <a>
                                    <div className={classes.doctorPic}>
                                        <Image src={img3} width={140} height={120} alt="" />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={classes.nameContainer}>
                            <p className={classes.name}>
                                <Link href={`/${doctor?.id}`}>
                                    <a>{doctor?.name}</a>
                                </Link>
                            </p>
                            {/* <p className={classes.qualification}>{doctor?.DoctorQualification?.qualification}</p> */}
                            <p className={classes.speciality}> {doctor?.specialities[0]?.speciality}</p>
                            {/* <p className={classes.designation}>Assistant Professor</p>
                            <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p> */}
                        </div>
                        <div>
                            <p>
                                {/* {doctor?.Doctor?.exp_year !== null ? doctor?.Doctor?.exp_year : 0} */}
                                5+ Years of Experience
                            </p>
                            <span>
                                Ratings(1) 5.0
                                <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '12px' }} />
                            </span>
                        </div>
                        <div>
                            <p>BDT {doctor?.Doctor?.online_fees}</p>
                            <button>
                                <Link href={`/${doctor?.id}`}>
                                    <a>Book Appointment</a>
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DoctorList
