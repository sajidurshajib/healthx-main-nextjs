import { useState } from 'react'
import classes from './Hero.module.css'
import Options from './Options/Options'
import { Telemedicine, MedicineOrder, LabTest, HealthPlan, CareGiving, HealthCheckup } from './Slides'

const Hero = () => {
    const [id, setId] = useState(1)

    return (
        <div className={classes.Hero}>
            <div className={classes.SlideWrapper}>
                {id === 1 ? <Telemedicine /> : null}
                {id === 2 ? <MedicineOrder /> : null}
                {id === 3 ? <LabTest /> : null}
                {id === 4 ? <HealthPlan /> : null}
                {id === 5 ? <CareGiving /> : null}
                {id === 6 ? <HealthCheckup /> : null}
            </div>
            <Options id={id} setId={setId} />
        </div>
    )
}

export default Hero
