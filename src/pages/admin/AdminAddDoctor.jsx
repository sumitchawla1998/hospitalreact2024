import { addDoc, collection } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { db } from '../../firebaseconfig'
import { toast } from 'react-toastify'
import { error, success } from '../../utils/messages'


function AdminAddDoctor() {
    let [nm, setNm] = useState("")
    let [unm, setUnm] = useState("")
    let [specialization, setSpecialization] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [fees, setFees] = useState("")


    async function addDoctor(e) {
        e.preventDefault()

        if(nm == "" || unm == "" || specialization == "" || email == "" || pwd == "" || fees == ""){
            error("All Fields Are Required")
            return
        }
        let colref = collection(db, "doctors")

        await addDoc(colref, {
            "nm": nm,
            "unm": unm,
            "specialization": specialization,
            "email": email,
            "pwd": pwd,
            "fees": fees,
        })

        success("Doctor Saved")

        setNm("")
        setUnm("")
        setSpecialization("")
        setEmail("")
        setPwd("")
        setFees("")
    }
    return (
        <>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Add Doctor</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={addDoctor} >

                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Doctor Name:</label>
                                            <input value={nm} type="text" onChange={(e) => setNm(e.target.value)} className='form-control' />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">User Name:</label>
                                            <input value={unm} type="text" onChange={(e) => setUnm(e.target.value)} className='form-control' />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Specialization:</label>
                                            <select value={specialization} className='form-control' onChange={(e) => setSpecialization(e.target.value)}>
                                                <option value="">-----Select Specialization-----</option>
                                                <option value="Dentist">Dentist</option>
                                                <option value="Physician" >Physician</option>
                                                <option value="Neurologist">Neurologist</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email:</label>
                                            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Password:</label>
                                            <input value={pwd} type="password" onChange={(e) => setPwd(e.target.value)} className='form-control' />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Consultancy Fees:</label>
                                            <input value={fees} type="text" onChange={(e) => setFees(e.target.value)} className='form-control' />
                                        </div>
                                        <button className='btn btn-primary'>Add Doctor</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminAddDoctor