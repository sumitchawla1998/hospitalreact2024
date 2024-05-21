import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseconfig'
import { error, success } from '../../utils/messages'

function AdminViewDoctors() {
    let [doctors, setDoctors] = useState([])

    useEffect(() => {
        let colref = collection(db, "doctors")
        let unsub = onSnapshot(colref, function (snapShot) {
            let result = []
            snapShot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })
            setDoctors(result)
        })

        return () => unsub()

    }, [doctors])


    async function remove(id){
        let docref = doc(db,"doctors",id)
        await deleteDoc(docref)
        error("Doctor Deleted Successfully")
    }
    return (
        <>
            <div className="pc-container">
                <div className="pc-content">
             
                    <div className="row">
                     
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>View Doctors</h5>
                                </div>
                                <div className="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr className='font-bold'>
                                                <th scope="col">Sr No.</th>
                                                <th scope="col">Doctor Name</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Specialization</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Fees</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {doctors && doctors.map((doctor, index) => (
                                                <tr>
                                                    <th scope="row">{++index}</th>
                                                    <td>{doctor.nm}</td>
                                                    <td>{doctor.unm}</td>
                                                    <td>{doctor.specialization}</td>
                                                    <td>{doctor.email}</td>
                                                    <td>{doctor.fees}</td>
                                                    <td><button style={{background:'transparent',border:'none'}} onClick={()=>remove(doctor.id)}><span class="material-symbols-outlined">
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

export default AdminViewDoctors