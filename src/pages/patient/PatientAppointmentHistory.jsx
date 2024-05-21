import { collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { error, success } from '../../utils/messages'

function PatientAppointmentHistory() {
  
    let [appointments, setAppointments] = useState([])

    useEffect(() => {
        let colref = collection(db, "appointments")
        let q = query(colref, where("uid", "==", auth.currentUser.uid))
        onSnapshot(q, function (snapShot) {
            let result = []
            snapShot.docs.forEach((doc) => {
                result.push({ id: doc.id, ...doc.data() })
            })

            setAppointments(result)
        })
    }, [])

    async function cancelledappointment(id){
        let docref = doc(db,"appointments",id)
        await deleteDoc(docref)
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
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
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
                                                    <td>{appointment.status}</td>
                                                    <td><button className='btn btn-danger' onClick={()=>cancelledappointment(appointment.id)}>Cancel</button></td>
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

export default PatientAppointmentHistory