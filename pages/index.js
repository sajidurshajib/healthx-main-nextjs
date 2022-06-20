import Head from 'next/head'
import Image from 'next/image'
import { Hero, ServiceBox, SliderPartner, UnderConstruction } from '../components'
import { MainNav } from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>HEALTHx</title>
            </Head>
            <MainNav />
            <Hero />
            {/* <UnderConstruction /> */}
            <UnderConstruction />
            {/* <Hero />
            <ServiceBox />
            <SliderPartner /> */}
        </div>
    )
}
