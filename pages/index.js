import Head from 'next/head'
import Image from 'next/image'
import { Footer, Hero, ServiceBox, SliderPartner, UnderConstruction } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>HEALTHx</title>
            </Head>
            {/* <UnderConstruction /> */}
            <Hero />
            <ServiceBox />
            <SliderPartner />
            <Footer />
        </div>
    )
}
