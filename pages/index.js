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
                <meta name="google-site-verification" content="googleb19e7ad08cb1e49c.html" />
                <meta name="msvalidate.01" content="googleb19e7ad08cb1e49c.html" />
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
