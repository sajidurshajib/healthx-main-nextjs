import { useState } from 'react'
import classes from './Hero.module.css'
import Options from './Options/Options'
import MedicineOrder from './Slides/MedicineOrder/MedicineOrder'
import Telemedicine from './Slides/Telemedicine/Telemedicine'

const Hero = () => {
    const [id, setId] = useState(1)

    return (
        <div className={classes.Hero}>
            <div className={classes.SlideWrapper}>
                {id === 1 ? <Telemedicine /> : null}
                {id === 2 ? <MedicineOrder /> : null}
            </div>
            <Options id={id} setId={setId} />
        </div>
    )
}

export default Hero
