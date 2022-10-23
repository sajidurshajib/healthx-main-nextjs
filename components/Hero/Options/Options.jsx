import {
    faCapsules,
    faChartLine,
    faCheckCircle,
    faCheckToSlot,
    faHandHolding,
    faHeartPulse,
    faPhone,
    faStethoscope,
    faTablet,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Doc from '../../../assets/option/doc.png'
import Med from '../../../assets/option/med.png'
import Record from '../../../assets/option/record.png'
import Test from '../../../assets/option/report.png'
import classes from './Options.module.css'
import Select from './Select/Select'

const Options = ({ id, setId }) => {
    return (
        <div className={classes.Options}>
            <div className={`${classes.OptionsWrapper} ${classes.container}`}>
                <Select number={1} id={id} setId={setId}>
                    <div>
                        {/* <FontAwesomeIcon icon={faStethoscope} height={18} width={18} /> */}
                        <Image src={Doc} width={44} height={40} alt="" />
                        <span>Search Doctor</span>
                    </div>
                    <p>
                        Find The Best Doctors <br /> in Your Area
                    </p>
                </Select>
                <div className={classes.line}></div>
                <Select number={2} id={id} setId={setId}>
                    <div>
                        {/* <FontAwesomeIcon icon={faCapsules} height={18} width={18} /> */}
                        <Image src={Med} width={44} height={40} alt="" />
                        <span>Medicine Delivery</span>
                    </div>
                    <p>
                        Get medicine in 6 hours <br /> with 10% discount
                    </p>
                </Select>
                <div className={classes.line}></div>
                <Select number={3} id={id} setId={setId}>
                    <div>
                        {/* <FontAwesomeIcon icon={faCheckToSlot} height={18} width={18} /> */}
                        <Image src={Test} width={42} height={42} alt="" />
                        <span>Lab Test at Home</span>
                    </div>
                    <p>
                        Blood & Urine Test <br /> Upto 40% Discount
                    </p>
                </Select>
                <div className={classes.line}></div>
                <Select number={4} id={id} setId={setId}>
                    <div>
                        {/* <FontAwesomeIcon icon={faChartLine} height={18} width={18} /> */}
                        <Image src={Record} width={42} height={40} alt="" />
                        <span>Health Records</span>
                    </div>
                    <p>
                        Track Your Own <br /> Personal Health Records
                    </p>
                </Select>
                {/* <Select number={5} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faHeartPulse} height={18} width={18} />
                    <h4>Care Giving</h4>
                </Select>
                <Select number={6} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faCheckCircle} height={18} width={18} />
                    <h4>Health Checkup</h4>
                </Select> */}
            </div>
            {/* <div className={classes.tagLine}>
                <h1>
                    One-stop Digital Healthcare Solution <span>to All Your Health Needs!</span>
                </h1>
            </div> */}
        </div>
    )
}

export default Options
