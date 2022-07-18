import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Telemedicine.module.css'

const Telemedicine = () => {
    return (
        <div className={`${classes.Telemedicine} ${classes.container}`}>
            <div className={classes.Wrapper}>
                <h2>Telemedicine Service</h2>
                <p>Consult with Top Doctors Online, 24x7</p>
            </div>
            <form className={classes.wrapperRight}>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faLocation} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="location" />
                </div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faSearch} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="speciality" />
                </div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faSearch} height={10} width={15} />
                    </span>
                    <input type="text" placeholder="Name" />
                </div>
                <div className={classes.Search}>
                    <button>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Telemedicine
