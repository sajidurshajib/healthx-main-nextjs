import classes from './HealthPlan.module.css'

const HealthPlan = () => {
    return (
        <div className={`${classes.HealthPlan} ${classes.container}`}>
            <div className={classes.Wrapper}>
                <h2>Health Plan</h2>
                <p>Consult with Top Doctors Online, 24x7</p>
            </div>
        </div>
    )
}

export default HealthPlan
