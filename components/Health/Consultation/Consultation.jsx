import Image from 'next/image'
import Link from 'next/link'
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
                    <Link href="/find-doctors">
                        <a>Consult Now!</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src={Performance} width={64} height={64} alt="" />
                    </div>
                    <p>
                        Sexual problem or performance <br /> issue?
                    </p>
                    <Link href="/find-doctors">
                        <a>Consult Now!</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src={Fever} width={60} height={60} alt="" />
                    </div>
                    <p>
                        Seasonal fever, cold or cough <br /> problem?
                    </p>
                    <Link href="/find-doctors">
                        <a>Consult Now!</a>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src={Child} width={64} height={64} alt="" />
                    </div>
                    <p>
                        Child health <br /> problem?
                    </p>
                    <Link href="/find-doctors">
                        <a>Consult Now!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
