import Image from 'next/image'
import { useState } from 'react'
import TBG from '../../assets/health/t-bg2.png'
import classes from './Hero.module.css'
import Options from './Options/Options'
import { Telemedicine, MedicineOrder, LabTest, HealthRecord } from './Slides'

const Hero = () => {
    const [id, setId] = useState(1)

    return (
        <div className={classes.Hero}>
            <div className={classes.bg1}>
                <Image src={TBG} height={750} width={750} alt="" />
            </div>

            <div className={classes.SlideWrapper}>
                {id === 1 ? <Telemedicine /> : null}
                {id === 2 ? <MedicineOrder /> : null}
                {id === 3 ? <LabTest /> : null}
                {id === 4 ? <HealthRecord /> : null}
            </div>
            <div>
                <Options id={id} setId={setId} />
            </div>
            <div className={classes.bg2}>
                <Image src={TBG} height={540} width={540} alt="" />
            </div>
        </div>
    )
}

export default Hero
