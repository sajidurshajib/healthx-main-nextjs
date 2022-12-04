import '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function MedicineLine({ med, medicineLines, setMedicineLines, index, removeItem }) {
    const btnIncrease = () => {
        setQty((prev) => prev + 1)
    }
    const btnDecrease = () => {
        if (qty > 1) setQty((prev) => prev - 1)
    }

    const handleQuantity = (value) => {
        let lines = medicineLines
        lines[index].quantity = value
        lines[index].unit_price_mrp = med.unit_price
        lines[index].unit_price_tp = 0
        lines[index].total_mrp = lines[index].quantity * med.unit_price
        lines[index].unit_discount_percent = 0
        lines[index].total = lines[index].quantity * med.unit_price
        setMedicineLines([...lines])
    }

    return (
        <>
            <span>{index + 1}</span>
            <span>{med.name}</span>
            <div>
                {/* <button onClick={() => btnDecrease()}>-</button> */}
                <input
                    type="number"
                    value={medicineLines[index].quantity}
                    onChange={(e) => {
                        handleQuantity(parseInt(e.target.value))
                    }}
                    required
                    min={1}
                />
                {/* <button onClick={() => btnIncrease()}>+</button> */}
            </div>
            <span>{med.pharmaceuticals}</span>
            <span>{med.strength}</span>
            <span>{med.form}</span>
            <span>৳{med.unit_price}</span>
            <span>
                ৳
                {isNaN(medicineLines[index].total + 0) !== true
                    ? medicineLines[index].total.toFixed(2)
                    : med.unit_price}
            </span>
            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeItem(index)} />
        </>
    )
}
