import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { error } from '../../utils/messages'
import { deleteUser } from 'firebase/auth'


function AdminViewPatients() {
    let [patients, setPatients] = useState([])

    useEffect(() => {
        let colref = collection(db, "patients")
        let unsub = onSnapshot(colref, function (snapShot) {
            let result = []
            snapShot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })
            setPatients(result)
        })

        return () => unsub()

    }, [patients])

    

    async function remove(id){
        let docref = doc(db,"patients",id)
        await deleteDoc(docref)
        error("Patient Deleted Successfully")
    }
    return (
        <>
            <div className="pc-container">
                <div className="pc-content">

                    <div className="row">

                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>View Patients</h5>
                                </div>
                                <div className="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr className='font-bold'>
                                                <th scope="col">Sr No.</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {patients && patients.map((patient, index) => (
                                                <tr>
                                                    <th scope="row">{++index}</th>
                                                    <td>{patient.fnm}</td>
                                                    <td>{patient.lnm}</td>
                                                    <td>{patient.email}</td>
                                                    <td>{patient.gender}</td>
                                                    <td><button style={{background:'transparent',border:'none'}} onClick={()=>remove(patient.id)}><span class="material-symbols-outlined">
                                                        delete_forever
                                                    </span></button></td>
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

export default AdminViewPatients