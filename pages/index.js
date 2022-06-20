import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { Hero, ServiceBox, SliderPartner, Footer, WhyUs } from '../components'
import { MainNav } from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
    const WhyUs = dynamic(
        () => {
            return import('../components/WhyUs/WhyUs')
        },
        { ssr: false }
    )

    return (
        <div>
            <Head>
                <title>HEALTHx</title>
            </Head>
            <MainNav />
            <Hero />
            <WhyUs />
            {/* <UnderConstruction /> */}
            {/* <Hero /> */}
            <ServiceBox />
            {/* <SliderPartner /> */}
            <Footer />
        </div>
    )
}
