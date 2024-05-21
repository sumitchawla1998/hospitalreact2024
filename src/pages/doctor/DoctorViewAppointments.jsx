import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../firebaseconfig'

import { useNavigate } from 'react-router-dom'
import { success } from '../../utils/messages'
import { useDoctorStore } from '../../store/doctorstore'


function DoctorViewAppointments() {
    let navigate = useNavigate()

    let [appointments, setAppointments] = useState([])

    let doctor = useDoctorStore((state) => state.doctor)

    useEffect(() => {
        let colref = collection(db, "appointments")
 

        let q = query(colref, where("doctorunm", "==", doctor.unm))
        onSnapshot(q, function (snapShot) {
            let result = []
            snapShot.docs.forEach((doc) => {
                result.push({ id: doc.id, ...doc.data() })
            })

            setAppointments(result)
        })
    }, [])

    async function cancelledappointment(id) {
        let docref = doc(db, "appointments", id)
        await updateDoc(docref, {
            "status": "Cancelled"
        })

        success("Appointment Cancelled")
    }
    return (
        <>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>View Appointments</h5>
                                </div>
                                <div className="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr className='font-bold'>
                                                <th scope="col">Sr No.</th>
                                                <th scope="col">Patient</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                                <th scope="col">Prescription</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                appointments && appointments.map((appointment, index) => (
                                                    <tr>
                                                        <th scope="row">{++index}</th>
                                                        <td>{appointment.name.split(" ")[0]}</td>
                                                        <td>{appointment.email}</td>
                                                        <td>{appointment.adate}</td>
                                                        <td>{appointment.atime}</td>
                                                        <td>{appointment.status}</td>
                                                        <td><button className='btn btn-danger' onClick={() => cancelledappointment(appointment.id)}>Cancel</button></td>
                                                        <td><button className='btn btn-success' onClick={() => {
                                                            navigate("/doctor/addprescription/" + appointment.id)
                                                        }}>Prescribe</button></td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default DoctorViewAppointments