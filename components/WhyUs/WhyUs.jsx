import Image from 'next/image'
import CountUp from 'react-countup'
import doctor from '../../assets/why-icons/doctors.png'
import hospital from '../../assets/why-icons/hospital.png'
import patients from '../../assets/why-icons/patient.png'
import services from '../../assets/why-icons/services.png'
import classes from './WhyUs.module.css'

const WhyUs = () => {
    return (
        <div>
            <div className={classes.whyContainer}>
                <div>
                    <Image src={services} height={50} width={50}></Image>
                    <br />
                    <CountUp start={10} end={100} duration={5} useEasing={true} className={classes.Counter} />
                    <p>Services</p>
                </div>
                <div>
                    <Image src={hospital} height={50} width={50}></Image>
                    <br />
                    <CountUp start={0} end={30} duration={5} useEasing={true} className={classes.Counter} />
                    <p>Hospitals</p>
                </div>

                <div>
                    <Image src={doctor} height={50} width={50}></Image>
                    <br />
                    <CountUp start={10} end={50} duration={5} useEasing={true} className={classes.Counter} />
                    <p>Doctors</p>
                </div>
                <div>
                    <Image src={patients} height={50} width={50}></Image>
                    <br />
                    <CountUp start={10} end={1000} duration={5} useEasing={true} className={classes.Counter} />
                    <p>Patients</p>
                </div>
            </div>
        </div>
    )
}
export default WhyUs
