import dynamic from 'next/dynamic'
import Head from 'next/head'
import {
    MainNav,
    Blog,
    Footer,
    Hero,
    ServiceBox,
    SliderPartner,
    UnderConstruction,
    Solution,
    Mission,
    Offer,
    TeleHealth,
} from '../components'
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
            <Offer />
            <TeleHealth />
            <ServiceBox />
            <Solution />
            {/* <Blog /> */}
            {/* <Mission /> */}
            <WhyUs />
            <SliderPartner />
            <Footer />
        </div>
    )
}
