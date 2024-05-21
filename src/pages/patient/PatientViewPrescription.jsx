import React, { useEffect, useState } from 'react'
import { usePatientStore } from '../../store/patientstore'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebaseconfig'
import { useNavigate } from 'react-router-dom'


function PatientViewPrescription() {
    let navigate =  useNavigate()

    let [appointments, setAppointments] = useState([])

    let patient = usePatientStore((state) => state.patient)


    useEffect(() => {
        let colref = collection(db, "appointments")


        let q = query(colref, where("uid", "==", patient.uid))
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
                                    <h5>Appointments History</h5>
                                </div>
                                <div className="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr className='font-bold'>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Doctor</th>
                                                <th scope="col">Fees</th>
                                                <th scope="col">Specialization</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Diseases</th>
                                                <th scope="col">Allergies</th>
                                                <th scope="col">Prescription</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {appointments && appointments.map((appointment,index) => (
                                                <tr>
                                                    <th scope="row">{++index}</th>

                                                    <td>{appointment.doctor}</td>
                                                    <td>{appointment.fees}</td>
                                                    <td>{appointment.specialization}</td>
                                                    <td>{appointment.adate}</td>
                                                    <td>{appointment.atime}</td>
                                                    <td>{appointment.diseases}</td>
                                                        <td>{appointment.allergies}</td>
                                                        <td>{appointment.prescription}</td>
                                                </tr>
                                            ))}

                    
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

export default PatientViewPrescription