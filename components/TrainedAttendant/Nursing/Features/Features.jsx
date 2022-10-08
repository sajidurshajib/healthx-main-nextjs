import '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart, faHandHoldingMedical, faHandshake, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import P1 from '../../../../assets/medicine/v2.png'
import classes from './Features.module.css'

export default function Features() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}>TYPES OF ATTENDANT SERVICES</div>
            <div className={classes.grid}>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>24x7 Specialized Nursing Service </h2>
                        <span></span>
                        <ul>
                            <li>Wound care and Dressing</li>
                            <li>
                                Intravenous (IV) infusion therapy, intra Muscular (IM) and Sub Cutaneous (SC) injections
                            </li>
                            <li>Catheter (urinary) insertion and care</li>
                            <li>
                                Skilled nursing in Chronic Illnesses like - Diabetic Care, Nephro Care, Neuro Care,
                                Post-transplant Care, Parkinson's Disease, Mental Illnesses
                            </li>
                            <li>Post Discharge Care - Cancer Care, Geriatric Care, Pediatric Care, Maternity Care</li>
                            <li>Bathing, grooming and toiletry services </li>
                            <li>Mobilization and ambulation with walker and wheel chair</li>
                            <li>Nutrition assistance with eating</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>Rehabilitation Services</h2>
                        <span></span>
                        <ul>
                            <li>Physiotherapy (Occupational Therapy & Rehabilitation Center)</li>
                            <li>Nutritional assessment (with qualified Dietitian)</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>Post operative care</h2>
                        <span>
                            Post operative care needs to continue following doctors advice, once the patient is back
                            home. Depending upon the health condition, nurses and nursing attendants at home play a very
                            crucial role in the post operative recovery phase.
                        </span>
                        <ul>
                            <li>Prescribed medicines administration</li>
                            <li>Injectable medicines administration</li>
                            <li>Pain management & wound healing</li>
                            <li>Early recovery of the patient</li>
                            <li>
                                Special care for Hypertensive patient, Diabetic patient, Kidney disease or any chronic
                                disease patient
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>Elder Care</h2>
                        <span>
                            In home nursing care services, professionals can provide services elder people who is aging
                            and needs assistant to live independently, who is managing chronic health issues, who is
                            recovering from a medical setback or who has special needs or a disability.
                        </span>
                        <ul>
                            <li>Maintain prescribed diets</li>
                            <li>Dress and bath</li>
                            <li>Prescribed oral medications administration</li>
                            <li>Ambulatory patient service outside home, serving as guide, companion, and aide</li>
                            <li>Help patient to take hospital in an emergency situation</li>
                            <li>
                                Special care for Hypertensive patient, Diabetic patient, Kidney disease or any chronic
                                disease patient
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>Pregnancy Care</h2>
                        <span>
                            Sometimes expected mothers seek for extra medical care as well as domestic care during
                            pregnancy. A special kind of medical professional assists expectant mothers in maintaining
                            their health and that of their unborn children. The prenatal nurse monitors the health
                            status of the mother and foetus, provides emotional support, and teaches the pregnant woman
                            and her family about physiological and psychological changes during pregnancy, foetal
                            development, labour and childbirth, and care for the newborn.
                        </span>
                        <ul>
                            <li>Regular checkup & vital screening follow up (Temperature, blood pressure etc.)</li>
                            <li>Monitoring medication</li>
                            <li>Antenatal care & antenatal visit</li>
                            <li>Check foetal heart sound and heart rate by doppler machine</li>
                            <li>
                                Provide health chart including diet & medication chart in 1st, 2nd & 3rd trimester
                                respectively
                            </li>
                            <li>To consult about health condition with regular physician</li>
                            <li>Instant service in any emergency condition</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>New Mom care (Post Natal Care)</h2>
                        <span></span>
                        <ul>
                            <li>Regular follow up after delivery</li>
                            <li>Nursing care to new mom and baby</li>
                            <li>Help new mom to minimize household work</li>
                            <span>In case of cesarean patients,</span>
                            <li>Regular dressing of the operative area</li>
                            <li>Pain management & wound healing</li>
                            <li>Prescribed medication administration</li>
                            <li>Expert advice's and care, if any complication arises</li>
                            <li>Regular checkup</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>Baby Care</h2>
                        <span>
                            Home nursing care plays a vital role for babies who may have trouble at birth include those
                            born prematurely, those born with a difficult delivery, or those born with a birth defect.
                            Special care is available for these babies.
                        </span>
                        <ul>
                            <li>New born baby care</li>
                            <li>Bathing, feeding, sleeping schedule with love & care</li>
                            <li>Premature baby care</li>
                        </ul>
                    </div>
                </div>

                {/* <div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div>
                        <h2>Attendant care</h2>
                        <span>
                            In a fast moving world it becomes critical to manage time and understand the complexity of
                            seeing a Doctor and managing your loved ones when they are hospitalized. Our attendant
                            service will take care on behalf of you from making an appointment to Doctor, guide from
                            home to hospital, managing issues arising while seeing the Doctor and being hospitalized.
                            Our experience and empathetic attendant will take care all of that ensuring your peace of
                            mind.
                        </span>
                        <ul>
                            <li>Home Attendant</li>
                            <span>
                                Assist patients with activities such as bathing, grooming, dressing, and toileting. They
                                may help with feeding or exercise and in some settings help patients take their
                                medications
                            </span>
                            <li>Hospital Attendant</li>
                            <span>
                                Care is the basic and ancillary services that enable an individual need from home to
                                Hospital and Hospital to Home.
                            </span>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
