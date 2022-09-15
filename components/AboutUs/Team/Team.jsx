import React from 'react'
import AdvisoryPanel from './AdvisoryPanel/AdvisoryPanel'
import ManagementTeam from './ManagementTeam/ManagementTeam'
import MedicalTeam from './Medical Team/MedicalTeam'
import TechTeam from './TechTeam/TechTeam'

export default function Team() {
    return (
        <div>
            <ManagementTeam />
            <AdvisoryPanel />
            <MedicalTeam />
            <TechTeam />
        </div>
    )
}
