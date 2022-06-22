import Image from 'next/image'
import strategy from '../../assets/img/str.png'
import discord from '../../assets/social/discord.png'
import facebook from '../../assets/social/facebook.png'
import fedex from '../../assets/social/fedex.png'
import google from '../../assets/social/google.png'
import hbo from '../../assets/social/hbo.png'
import imdb from '../../assets/social/imdb.png'
import classes from './StrategicPartner.module.css'

const StrategicPartner = () => {
    return (
        <div className={classes.strategicPartnershipBack}>
            <div className={classes.Right}>
                <Image src={strategy}></Image>
            </div>

            <div className={classes.Left}>
                <div className={classes.Title}>
                    <span className={classes.Span1}>Strategy</span> <span className={classes.Span2}>Partner</span>
                </div>
                <div className={classes.Content}>
                    <div className={classes.Row}>
                        <div>
                            <Image src={facebook} height={64} width={64} alt=""></Image>
                        </div>

                        <div>
                            <Image src={discord} height={64} width={64} alt=""></Image>
                        </div>

                        <div>
                            <Image src={google} height={64} width={64} alt=""></Image>
                        </div>
                    </div>
                    <div className={classes.Row}>
                        <div>
                            <Image src={fedex} height={64} width={64} alt=""></Image>
                        </div>

                        <div>
                            <Image src={hbo} height={64} width={64} alt=""></Image>
                        </div>

                        <div>
                            <Image src={imdb} height={64} width={64} alt=""></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StrategicPartner
