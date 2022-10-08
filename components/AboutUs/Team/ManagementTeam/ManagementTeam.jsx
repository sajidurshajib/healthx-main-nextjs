import Image from 'next/image'
import React from 'react'
import Advisor1 from '../../../../assets/Team/advisor1.png'
import Advisor2 from '../../../../assets/Team/advisor2.jpeg'
import Facebook from '../../../../assets/Team/fb.png'
import Founder from '../../../../assets/Team/founder.jpeg'
import Instagram from '../../../../assets/Team/instagram.png'
import LinkDin from '../../../../assets/Team/linkdin.png'
import Man from '../../../../assets/Team/man.png'
import Advisor3 from '../../../../assets/Team/mukesh.jpeg'
import Twitter from '../../../../assets/Team/twitter.png'
import classes from './ManagementTeam.module.css'

export default function ManagementTeam() {
    return (
        <div className={classes.wrapper}>
            <h1>Our Team</h1>

            {/* For Founder  */}

            <div className={classes.founder}>
                <div>
                    <h3>Founder</h3>
                </div>
                <div>
                    <div>
                        <Image className={classes.img} src={Founder} alt="Picture" width={200} height={200} />
                    </div>
                    <div>
                        <p> Mustafa Mahbub Hasan </p>
                        <p> Founder and Managing Director, HEALTHx</p>
                        <p> Former Head of Health Enterprise,</p>
                        <p> BRAC Former Head of Business, Labaid Diagnostics</p>
                    </div>
                </div>
                <div>
                    <p>
                        Mustafa Mahbub Hasan, the founder of HEALTHX VENTURES LTD. is a seasoned professional possessing
                        a diverse portfolio in Healthcare, Agriculture and FMCG with over 15 years of experience. With
                        the vision to make primary healthcare accessible and affordable across the country, he has
                        started the journey with HEALTHx.
                    </p>
                </div>
            </div>

            <div className={classes.advisor}>
                <div>
                    <h3>ADVISORS</h3>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <p>Kaosar Afsana </p>
                                <p> Professor Emeritus, Global Health and Humanitarian Affairs </p>
                                <p>University of Manchester</p>
                            </div>
                        </div>

                        <div>
                            <Image className={classes.img} src={Advisor1} alt="Picture" width={200} height={200} />
                        </div>
                    </div>
                    <div>
                        <p>
                            Kaosar Afsana, PhD, is a public health professional spent nearly three decades in this
                            field. She is an MD with MPH from Harvard University, USA and PhD from Edith Cowan
                            University, Australia specializing in public health and social science. She is a Professor
                            at BRAC James P Grant School of Public Health, BRAC University.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <Image className={classes.img} src={Advisor2} alt="Picture" width={200} height={200} />
                        </div>
                        <div>
                            <div>
                                <p className={classes.intro}>Mushtaque Chowdhury</p>
                                <p>Former Managing Director, Rockefeller Foundation (Acting) </p>
                                <p> Former Vice Chairman, BRAC </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            For over four decades, Mushtaque Chowdhury has contributed enormously to global health
                            research, education, and practice. With an MSc and PhD from London University, he served
                            BRAC as its Vice Chair, Executive Director, and Research Director. Currently he holds a
                            professorial appointment at Columbia University’s Mailman School of Public
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <div>
                                <p className={classes.intro}>Mukesh Kapila</p>
                                <p>Professor Emeritus, Global Health and Humanitarian Affairs </p>
                                <p> University of Manchester</p>
                            </div>{' '}
                        </div>

                        <div>
                            <Image className={classes.img} src={Advisor3} alt="Picture" width={200} height={200} />
                        </div>
                    </div>
                    <div>
                        <p>
                            Mukesh Kapila is Professor Emeritus of Global Health and Humanitarian Affairs, University of
                            Manchester, UK. He is also Senior Adviser to the Parliamentary Assembly of the
                            Mediterranean. He has served in senior leadership functions at the UK Government Foreign,
                            Commonwealth and Development Office, United Nations, World Health Organization, and
                            International Federation of Red Cross and Red Crescent Societies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
