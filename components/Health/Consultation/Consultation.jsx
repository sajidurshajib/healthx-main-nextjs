import Image from 'next/image'
import React from 'react'
import Child from '../../../assets/health/child.png'
import Fever from '../../../assets/health/fever.png'
import Performance from '../../../assets/health/performance.png'
import Period from '../../../assets/health/period.png'
import classes from './Consultation.module.css'

export default function Consultation() {
    return (
        <div className={classes.consultation}>
            <p>
                Consult Best Doctors for <span>any health issues</span>
            </p>
            <div className={classes.grid}>
                <div>
                    <div>
                        <Image src={Period} width={64} height={64} alt="" />
                    </div>
                    <p>
                        Period or Pregnancy <br /> issue?
                    </p>
                    <span>Consult Now!</span>
                </div>
                <div>
                    <div>
                        <Image src={Performance} width={64} height={64} alt="" />
                    </div>
                    <p>Sexual problem or performance issue?</p>
                    <span>Consult Now!</span>
                </div>
                <div>
                    <div>
                        <Image src={Fever} width={60} height={60} alt="" />
                    </div>
                    <p>Seasonal fever, cold or cough problem?</p>
                    <span>Consult Now!</span>
                </div>
                <div>
                    <div>
                        <Image src={Child} width={64} height={64} alt="" />
                    </div>
                    <p>
                        Child health <br /> problem?
                    </p>
                    <span>Consult Now!</span>
                </div>
            </div>
        </div>
    )
}
