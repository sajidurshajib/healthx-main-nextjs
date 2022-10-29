import classes from './ProfessionalInfo.module.css'

const ProfessionalInfo = ({ workingHistory }) => {
    return (
        <>
            <div className={classes.professionalInfo}>
                {workingHistory.map((history) => (
                    <div className={classes.Category}>
                        <div>
                            <h2>{history.institute}</h2>

                            <ul>
                                <li>
                                    <div>
                                        <h3>{history.position}</h3>
                                        <p>
                                            {history.start_date.slice(0, 4)} -{' '}
                                            {history.end_date !== null ? history.end_date.slice(0, 4) : 'Working'}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProfessionalInfo
