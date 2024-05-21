import React, { useState } from 'react'
import DashboardCard from '../../components/DashboardCard'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseconfig'

function AdminDashboard() {
    let [tdoctors, setTdocors] = useState(0)
    let [tpatients, setTpatients] = useState(0)
    let [tappointments, setTappointments] = useState(0)

    useEffect(() => {
        getCount("doctors", setTdocors)
        getCount("patients", setTpatients)
        getCount("appointments", setTappointments)
    }, [])

    async function getCount(collectionname, setFunc) {
        let colref = collection(db, collectionname)
        let snapshot = await getDocs(colref)
        setFunc(snapshot.docs.length)
    }
    return (
        <>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">

                        <DashboardCard icon={<span class="material-symbols-outlined">
                            person_add
                        </span>} title="Total Doctors" color="#3dbdec" count={tdoctors} />

                        <DashboardCard icon={<span class="material-symbols-outlined">
                            patient_list
                        </span>} title="Total Patients" color="#1f2b5b" count={tpatients} />

                        <DashboardCard icon={<span class="material-symbols-outlined">
                            verified
                        </span>} title="Total Appointments" color="teal" count={tappointments} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard