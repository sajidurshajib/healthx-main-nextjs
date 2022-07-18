import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from '../../assets/img/hx-white.png'
import classes from './Footer.module.css'

const Footer = () => {
    let hx = [
        { menu: 'About', link: '#' },
        { menu: 'Blog', link: '#' },
        { menu: 'News & Media', link: '#' },
        { menu: 'Our Partners', link: '#' },
    ]

    let ourFeatures = [
        { menu: 'My Health Portal', link: '#' },
        { menu: 'Smart Doctor', link: '#' },
        { menu: 'E-Prescription', link: '#' },
        { menu: 'E-Pharmacy', link: '#' },
    ]

    let forPatients = [
        { menu: 'My Health Portal', link: '#' },
        { menu: 'Medicine Delivary', link: '#' },
        { menu: 'Nursing Service', link: '#' },
        { menu: 'Find Doctors', link: '#' },
    ]

    let forDoctors = [
        { menu: 'Smart Doctor', link: '#' },
        { menu: 'E-Prescription', link: '#' },
        { menu: 'Patients Records', link: '#' },
        { menu: 'Data Analytics', link: '#' },
    ]

    let forPharmacies = [
        { menu: 'Dashboard', link: '#' },
        { menu: 'Stock Management', link: '#' },
        { menu: 'Easily customizable', link: '#' },
        { menu: 'Buying and Selling reports', link: '#' },
    ]

    return (
        <div>
            <footer className={classes.Footer}>
                <div className={classes.footerWrapper}>
                    <div className={classes.footerContact}>
                        <div className={classes.Phone}>
                            <>
                                <p>Give us A call</p>
                                <div className={classes.Shadow}>
                                    <p className={classes.Info}>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span>+88 01322658481</span>
                                    </p>
                                </div>
                            </>
                        </div>
                        <div className={classes.Email}>
                            <p>Email Us</p>
                            <div className={classes.Shadow}>
                                <p className={classes.Info}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>contact@healthx.com.bd</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>Follow Us</p>
                            <div className={classes.Media}>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href="#" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.footerContent}>
                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>Healthx</div>
                            <div className={classes.Item}>
                                {hx.map((menu, index) => {
                                    return (
                                        <a href={menu.link} key={index}>
                                            &#10137; {menu.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>Our Service</div>
                            <div className={classes.Item}>
                                {ourFeatures.map((service, index) => {
                                    return (
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
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
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
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
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className={classes.footerColumn}>
                            <div className={classes.Heading}>For Pharmacies</div>
                            <div className={classes.Item}>
                                {forPharmacies.map((service, index) => {
                                    return (
                                        <a href={service.link} key={index}>
                                            &#10137; {service.menu}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerCopyright}>
                        <div className={classes.Logo}>
                            <Image src={logo} height="100px" width="180px" alt="logo" />
                        </div>
                        <span>Copyright &#169; 2022, Healthx. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer
