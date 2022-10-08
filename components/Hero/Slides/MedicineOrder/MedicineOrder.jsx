import Image from 'next/image'
import Med from '../../../../assets/hero/med.png'
import classes from './MedicineOrder.module.css'

const MedicineOrder = () => {
    return (
        <div className={`${classes.MedicineOrder} ${classes.container}`}>
            <div className={classes.grid}>
                <div className={classes.Wrapper}>
                    <h2>Medicine Order</h2>
                    <p>Get Huge Savings on Medicines</p>
                    <div>
                        <Image src={Med} width={480} height={380} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicineOrder
