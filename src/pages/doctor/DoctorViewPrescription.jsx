import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../firebaseconfig'
// import { useDoctorStore } from '../store/doctorstore'
import { useNavigate } from 'react-router-dom'
import { useDoctorStore } from '../../store/doctorstore'

function DoctorViewPrescription() {
    let navigate =  useNavigate()

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
  return (
    <>
          <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>View Prescription</h5>
                                </div>
                                <div className="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr className='font-bold'>
                                                <th scope="col">Sr No.</th>
                                                <th scope="col">Patient</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Diseases</th>
                                                <th scope="col">Allergies</th>
                                                <th scope="col">Prescription</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                appointments && appointments.map((appointment, index) => (
                                                    <tr>
                                                        <th scope="row">{++index}</th>
                                                        <td>{appointment.name.split(" ")[0]}</td>
                                                        <td>{appointment.adate}</td>
                                                        <td>{appointment.atime}</td>
                                                        <td>{appointment.diseases}</td>
                                                        <td>{appointment.allergies}</td>
                                                        <td>{appointment.prescription}</td>

                                                        <td><button style={{background:'transparent',border:'none'}} onClick={()=>remove(appointment.id)}><span class="material-symbols-outlined">
                                                        delete_forever
                                                    </span></button></td>
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

export default DoctorViewPrescription