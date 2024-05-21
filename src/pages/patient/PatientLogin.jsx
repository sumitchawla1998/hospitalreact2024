import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseconfig'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/messages'
import { usePatientStore } from '../../store/patientstore'
import { logoutallusers } from '../../utils/logout'

function PatientLogin() {

    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")

    let navigate = useNavigate()

    
    let login = usePatientStore((state) => state.login)

    async function signin(e) {
        e.preventDefault()
        if(email == "" || pwd == ""){
            error("All Fields Are Required")
            return
        }

        let credentials = await signInWithEmailAndPassword(auth, email, pwd)

        if (credentials.user) {
            login(credentials.user)
            navigate("/patient/bookappointment",{replace:true})
            success("Patient Login Successful")
        }
        else{
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
                                <a href="#" className="d-flex justify-content-center my-3">
                                    <img src="berry/dist/assets/images/hospitallogo.png" width={180} />
                                </a>
                                <div className="card-body pt-0">
                                    <div className="row">
                                        <div className="d-flex justify-content-center">
                                            <div className="auth-header">
                                                <h2 className="text-secondary"><b>Hi Patient, Welcome Back</b></h2>
                                                <p className="f-16 mt-2">Enter your credentials to continue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted">
                                            <img src="berry/dist/assets/images/authentication/google-icon.svg" />Sign In With Google
                                        </button>
                                    </div>
                                    <div className="saprator mt-3">
                                        <span>or</span>
                                    </div>
                                    <h5 className="my-4 d-flex justify-content-center">Sign in with Email address</h5>
                                    <div className="form-floating mb-3">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email address / Username" />
                                        <label htmlFor="floatingInput">Email address</label>
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
                                    <Link to="/patientregister"><h5 className="d-flex justify-content-center text-secondary">Don't have an account? Register</h5></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PatientLogin