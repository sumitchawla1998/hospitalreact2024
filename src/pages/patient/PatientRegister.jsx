import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { auth, db } from '../../firebaseconfig'
import { Link, useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/messages'
import { logoutallusers } from '../../utils/logout'


function PatientRegister() {
    logoutallusers()
    
    let [fnm, setFnm] = useState("")
    let [lnm, setLnm] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [gender, setGender] = useState("Male")

    let navigate = useNavigate()

    async function signup(e){
        e.preventDefault()

        if(fnm == "" || lnm == "" || email == "" || pwd == "" || gender == ""){
            error("All Fields Are Required")
            return
        }

        let credentials = await createUserWithEmailAndPassword(auth,email,pwd)

        if(credentials.user){
            await updateProfile(credentials.user,{
                displayName : `${fnm} ${lnm}`
            })
    
            let colref = collection(db,"patients")
            await addDoc(colref,{
                "uid":credentials.user.uid,
                "fnm":fnm,
                "lnm":lnm,
                "email":email,
                "pwd":pwd,
                "gender":gender,
            })
            success("Patient Registration Successfull")
            navigate("/patientlogin")
        }
        else{
            error("Patient Registration Failed")
        }
        

        
    }
    return (
        <>
            <div className="auth-main">
                <div className="auth-wrapper v3">
                    <div className="auth-form">
                        <form onSubmit={signup}>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <a href="#" className="d-flex justify-content-center my-3">
                                        <img src="berry/dist/assets/images/hospitallogo.png" width={180} />
                                    </a>
                                    <div className="row">
                                        <div className="d-flex justify-content-center">
                                            <div className="auth-header">
                                                <h2 className="text-secondary mt-2"><b>Hii Patient, Sign up</b></h2>
                                                <p className="f-16 mt-2">Enter your credentials to continue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn mt-2 btn-light-primary bg-light text-muted" style={{ width: '100%' }}>
                                        <img src="berry/dist/assets/images/authentication/google-icon.svg" />Sign Up With Google
                                    </button>
                                    <div className="saprator mt-3">
                                        <span>or</span>
                                    </div>
                                    <h5 className="my-4 d-flex justify-content-center">Sign Up with Email address</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input value={fnm} onChange={(e)=>setFnm(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="First Name" />
                                                <label htmlFor="floatingInput">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input value={lnm}  onChange={(e)=>setLnm(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Last Name" />
                                                <label htmlFor="floatingInput">Last Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email Address / Username" />
                                        <label htmlFor="floatingInput">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input value={pwd}  onChange={(e)=>setPwd(e.target.value)} type="password" className="form-control" id="floatingInput" placeholder="Password" />
                                        <label htmlFor="floatingInput">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={(e)=>setGender("Male")} value={gender} name="g" type="radio" className="form-check-input" id="floatingInput"/>Male
                                        <input onChange={(e)=>setGender("Female")} value={gender} name="g" type="radio" className="form-check-input ms-3" id="floatingInput" />Female
                                    </div>


                                    <div className="d-grid mt-4">
                                        <button type="submit" className="btn btn-secondary p-2">Sign Up</button>
                                    </div>
                                    <hr />
                                
                                    <Link to="/patientlogin"><h5 className="d-flex justify-content-center text-secondary">Already Have An Account? Login</h5></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PatientRegister


