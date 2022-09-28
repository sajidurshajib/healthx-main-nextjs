import { useState } from 'react'
import { Login } from '../../../components'
import FamilyPlanBangla from './FamilyPlanBangla/FamilyPlanBangla'
import FamilyPlan from './FamilyPlanEnglish/FamilyPlan'

export default function FamilyPlanMain() {
    const [popup, setPopup] = useState(false)

    return (
        <div>
            {/* <FamilyPlan /> */}
            <FamilyPlanBangla setPopup={setPopup} />
            {popup && <Login setPopup={setPopup} />}
        </div>
    )
}
