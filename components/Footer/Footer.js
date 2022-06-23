import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from '../../assets/img/hx-whitex.png'
import classes from './Footer.module.css'

const Footer = () => {
    let hx = ['About', 'Blog', 'Contact Us', 'News & Media', 'Our Partners']

    let forPatients = [
        'My Health Portal',
        'Search doctors',
        'Search clinics',
        'Search hospitals',
        'Pathology Test',
        'Full Body Checkup',
        'Health articles',
    ]
    let forDoctors = ['Smart doctor']

    let forClinics = ['Ray by Healthx', 'Healthx Reach', 'Ray Tab', 'Healthx Pro']

    let forHospitals = ['Insta By Healthx', 'Qikwell by Healthx', 'Healthx Profile', 'Healthx Reach', 'Healthx Drive']

    let forCorporates = ['Wellness Plans']

    let more = ['Help', 'Developers', 'Privacy Policy', 'Terms & Condition', 'Healthcare Directory', 'Healthx Wiki']

    return (
        <div>
            <footer className={classes.Footer}>
                <div className={classes.footerWrapper}>
                    <div className={classes.footerContent}>
                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>Healthx</div>
                            <div className={classes.Item}>
                                {hx.map((menu, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            &#10137; {menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>For patients</div>
                            <div className={classes.Item}>
                                {forPatients.map((service, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            &#10137; {service}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>For Doctors</div>
                            <div className={classes.Item}>
                                {forDoctors.map((service, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            &#10137; {service}
                                        </a>
                                    )
                                })}
                            </div>

                            <div className={classes.Heading}>For Clinics</div>
                            <div className={classes.Item}>
                                {forClinics.map((service, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            &#10137; {service}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>For Hospitals</div>
                            <div className={classes.Item}>
                                {forHospitals.map((service, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            &#10137; {service}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>More</div>
                            <div className={classes.Item}>
                                {more.map((service, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            &#10137; {service}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumnLast}>
                            <div className={classes.headerSocial}>Follow Us</div>
                            <div className={classes.Media}>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerCopyright}>
                        <div className={classes.Logo}>
                            <Image src={logo} height="50px" width="160px" alt="logo" />
                        </div>
                        <span>Copyright &#169; 2022, Healthx. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer
