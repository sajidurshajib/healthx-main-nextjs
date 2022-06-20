import classes from './Options.module.css'

const Options = ({ setId }) => {
    return (
        <div className={classes.Options}>
            <div className={classes.OptionsWrapper}>
                <div onClick={() => setId(1)}>
                    <p>Telemedicine</p>
                </div>
                <div onClick={() => setId(2)}>
                    <p>Medicine Delivery</p>
                </div>
                {/* <div onClick={() => setId(1)}>
                    <p>Telemedicine</p>
                </div>
                <div onClick={() => setId(2)}>
                    <p>Medicine Delivery</p>
                </div>
                <div onClick={() => setId(1)}>
                    <p>Telemedicine</p>
                </div>
                <div onClick={() => setId(2)}>
                    <p>Medicine Delivery</p>
                </div> */}
            </div>
        </div>
    )
}

export default Options
