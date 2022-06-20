import Head from 'next/head'
import { MainNav, Blog, Footer, Hero, ServiceBox, SliderPartner, UnderConstruction } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>HEALTHx</title>
            </Head>

            <MainNav />
            <Hero />
            <ServiceBox />
            <Blog />
            <SliderPartner />
            <Footer />
        </div>
    )
}
