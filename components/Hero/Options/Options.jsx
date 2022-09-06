import {
    faCapsules,
    faChartLine,
    faCheckCircle,
    faCheckToSlot,
    faHandHolding,
    faHeartPulse,
    faPhone,
    faTablet,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Options.module.css'
import Select from './Select/Select'

const Options = ({ id, setId }) => {
    return (
        <div className={classes.Options}>
            <div className={`${classes.OptionsWrapper} ${classes.container}`}>
                <Select number={1} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faPhone} height={18} width={18} />
                    <h4>Tele Health</h4>
                    <p>HEALTHx connects you with GP & specialize doctors 24x7</p>
                </Select>
                <Select number={2} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faCapsules} height={18} width={18} />
                    <h4>Medicine Delivery</h4>
                    <p>Get your medicine within 4 hours with 7% discount</p>
                </Select>
                <Select number={3} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faCheckToSlot} height={18} width={18} />
                    <h4>Lab Test</h4>
                    <p>Book safe and hygienic lab tests From approved labs</p>
                </Select>
                <Select number={4} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faChartLine} height={18} width={18} />
                    <h4>Health Plan</h4>
                    <p>Choose the best health plan for your family</p>
                </Select>
                <Select number={5} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faHeartPulse} height={18} width={18} />
                    <h4>Care Giving</h4>
                    <p>Get trusted & quality caregiving at home</p>
                </Select>
                <Select number={6} id={id} setId={setId}>
                    <FontAwesomeIcon icon={faCheckCircle} height={18} width={18} />
                    <h4>Health Checkup</h4>
                    <p>Do regular health checkup, Stay Healthy at Home</p>
                </Select>
            </div>
        </div>
    )
}

export default Options
