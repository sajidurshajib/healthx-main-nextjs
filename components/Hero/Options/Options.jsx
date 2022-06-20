import classes from './Options.module.css'
import Select from './Select/Select'

const Options = ({id, setId }) => {
    return (
        <div className={classes.Options}>
            <div className={`${classes.OptionsWrapper} ${classes.container}`}>
                <Select number={1} id={id} setId={setId}>
                    <h4>Telemedicine</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, libero?</p>
                </Select>
                <Select number={2} id={id} setId={setId}>
                    <h4>Medicine Delivery</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, libero?</p>
                </Select>
                <Select number={3} id={id} setId={setId}>
                    <h4>Telemedicine</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, libero?</p>
                </Select>
                <Select number={4} id={id} setId={setId}>
                    <h4>Medicine Delivery</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, libero?</p>
                </Select>
                <Select number={5} id={id} setId={setId}>
                    <h4>Telemedicine</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, libero?</p>
                </Select>
                <Select number={6} id={id} setId={setId}>
                    <h4>Medicine Delivery</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, libero?</p>
                </Select>
            </div>
        </div>
    )
}

export default Options
