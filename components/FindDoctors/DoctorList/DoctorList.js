import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Doc from '../../../assets/doctor/doc.png'
import classes from './DoctorList.module.css'
import Popup from './Popup/Popup'

const DoctorList = ({ api, doctors }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classes.DoctorList}>
            {doctors[1] &&
                doctors[1].map((doctor, i) => (
                    <div className={classes.doctor} key={i}>
                        <div>
                            <Link href={`/${doctor?.User?.id}`}>
                                <a>
                                    <div className={classes.doctorPic}>
                                        <Image
                                            src={
                                                doctor?.Doctor?.images.length !== 0
                                                    ? `${api}/images/profile/${doctor?.Doctor?.images[0]?.image_string}`
                                                    : Doc
                                            }
                                            width={140}
                                            height={120}
                                            alt=""
                                        />
                                        <span>BMDC: {doctor?.Doctor?.bmdc}</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={classes.nameContainer}>
                            <p className={classes.name}>
                                <Link href={`/${doctor?.User?.id}`}>
                                    <a>{`${doctor?.Doctor?.dr_title || ''} ${doctor?.User?.name || ''}`}</a>
                                </Link>
                            </p>
                            <p className={classes.qualification}>{doctor?.DoctorQualification?.qualification}</p>
                            <p className={classes.speciality}> {doctor?.DoctorSpeciality?.speciality}</p>
                            {/* <p className={classes.designation}>Assistant Professor</p>
                            <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p> */}
                        </div>
                        <div>
                            <div className={classes.fees}>
                                <p>
                                    ৳
                                    {doctor?.Doctor?.online_fees !== null
                                        ? doctor?.Doctor?.online_fees > 499
                                            ? doctor?.Doctor?.online_fees + 100
                                            : doctor?.Doctor?.online_fees + doctor?.Doctor?.online_fees * (20 / 100)
                                        : ''}
                                    <span> (Inc. VAT)</span>
                                </p>
                                <span>Consultation Fee</span>
                            </div>
                            <p>
                                {doctor?.Doctor?.exp_year !== null
                                    ? `${doctor?.Doctor?.exp_year}+ Years of Experience`
                                    : ''}
                                {/* 5+ Years of Experience */}
                            </p>
                            {/* <span>
                                Ratings(1) 5.0
                                <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '12px' }} />
                            </span> */}
                        </div>
                        <div>
                            <p onClick={() => setIsOpen(i)}>Book Appoinment</p>
                            <button>
                                <Link href={`/${doctor?.User?.id}`}>
                                    <a>View Profile</a>
                                </Link>
                            </button>
                        </div>
                        {isOpen === i && <Popup setIsOpen={setIsOpen} doctor={doctor} index={i} />}
                    </div>
                ))}
        </div>
    )
}

export default DoctorList
