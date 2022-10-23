import Image from 'next/image'
import medicine from '../../../../assets/sliderImage/medicine-delivery.png'
import classes from './MedicineOrder.module.css'

const MedicineOrder = () => {
    return (
        <div className={`${classes.MedicineOrder} ${classes.container}`}>
            <div className={classes.Wrapper}>
                <h2>Medicine Order</h2>
                <p>Get Huge Savings on Medicines</p>
            </div>

            <div className={classes.imgWrapper}>
                <Image src={medicine} width={360} height={310} />
            </div>
        </div>
    )
}

export default MedicineOrder
