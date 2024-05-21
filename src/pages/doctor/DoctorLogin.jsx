import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../firebaseconfig'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/messages'
import { useDoctorStore } from '../../store/doctorstore'
import { logoutallusers } from '../../utils/logout'

function DoctorLogin() {

    let [unm, setUnm] = useState("")
    let [pwd, setPwd] = useState("")

    let login = useDoctorStore((state) => state.login)
    let navigate = useNavigate()

    async function signin(e) {
        e.preventDefault()

        let colref = collection(db, "doctors")
        let q = query(colref, where("unm", "==", unm), where("pwd", "==", pwd))

        let snapshot = await getDocs(q)

        if (snapshot.docs.length > 0) {
            login(snapshot.docs[0].data())
            navigate("/doctor/viewappointments",{replace:true})
            success("Doctor Login Successful")
        } else {
            error("Please Enter Valid Credentials")
        }
    }
    return (
        <>
            <div className="auth-main">
                <div className="auth-wrapper v3">
                    <div className="auth-form">
                        <form onSubmit={signin}>

                            <div className="card my-5 px-4 py-3">
                                <a href="#" className="d-flex justify-content-center mt-3">
                                    <img src="berry/dist/assets/images/hospitallogo.png" width={180} />
                                </a>
                                <div className="card-body mt-0 pt-0">
                                    <div className="row">
                                        <div className="d-flex justify-content-center">

                                            <div className="auth-header">
                                                <h2 className="text-secondary mt-3"><b>Hi Doctor, Welcome Back</b></h2>
                                                <p className="f-16 mt-2">Enter your credentials to continue</p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <h5 className="my-4 d-flex justify-content-center">Sign in with Email address</h5>
                                    <div className="form-floating mb-3">
                                        <input value={unm} onChange={(e) => setUnm(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Email address" />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => setPwd(e.target.value)} value={pwd} type="password" className="form-control" id="floatingInput" placeholder="Password" />
                                        <label htmlFor="floatingInput">Password</label>
                                    </div>
                                    <div className="d-flex mt-1 justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" />
                                            <label className="form-check-label text-muted" htmlFor="customCheckc1">Remember me</label>
                                        </div>
                                        <h5 className="text-secondary">Forgot Password?</h5>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button type="type" className="btn btn-secondary">Sign In</button>
                                    </div>
                                    <hr />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DoctorLogin