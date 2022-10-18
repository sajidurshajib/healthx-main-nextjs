import { faBone, faCartArrowDown, faHandDots, faHeartbeat, faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Med from '../../../../assets/hero/med.png'
import Searchbar from '../../Searchbar/Searchbar'
import classes from './MedicineOrder.module.css'

const MedicineOrder = () => {
    return (
        <div className={`${classes.MedicineOrder} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>
                        ORDER MEDICINE <br /> GET 7% CASHBACK
                    </h2>
                    <p>
                        Medicine Delivered from 500+ Govt. approved Model Pharmacy <br /> Medicine Delivery Charge FREE
                        in DHAKA*
                    </p>
                    <div>
                        <Searchbar placeholder={'Search medicines by name, generic or price'} />
                    </div>
                    <button>Order Now!</button>
                    {/* <h4>
                        <FontAwesomeIcon icon={faCartArrowDown} /> Search Medicines
                    </h4> */}
                    {/* <div>
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
                    </div> */}
                    {/* <div>
                        <p>Popular Searches: </p>
                        <span>napa extra, ace plus, pantonix</span>
                    </div> */}
                </div>
                <div className={classes.search}>
                    <div>
                        <Image src={Med} width={480} height={380} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicineOrder
