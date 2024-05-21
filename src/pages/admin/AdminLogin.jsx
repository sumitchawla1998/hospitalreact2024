import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { db } from '../../firebaseconfig'
import { useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/messages'
import { useAdminStore } from '../../store/adminstore'
import { logoutallusers } from '../../utils/logout'

function AdminLogin() {
   

    let [unm, setUnm] = useState("")
    let [pwd, setPwd] = useState("")
    let login = useAdminStore((state) => state.login)

    let navigate = useNavigate()

  
    async function signin(e) {
        e.preventDefault()
        
        if(unm == "" || pwd == ""){
            error("All Fields Are Required")
            return
        }
        

        let colref = collection(db, "admins")
        let q = query(colref, where("unm", "==", unm), where("pwd", "==", pwd))

        let snapshot = await getDocs(q)

        if (snapshot.docs.length > 0) {
           login(snapshot.docs[0].data())
        
            navigate("/admin/dashboard",{replace:true})
            success("Admin Login Successful")
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
                                <div className="card-body">
                                    <a href="#" className="d-flex justify-content-center my-3">
                                        <img src="berry/dist/assets/images/hospitallogo.png" width={180} />
                                    </a>
                                    <div className="row">
                                        <div className="d-flex justify-content-center">
                                            <div className="auth-header">
                                                <h2 className="text-secondary"><b>Hi Admin, Welcome Back</b></h2>
                                                <p className="f-16 mt-2">Enter your credentials to continue</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input value={unm} onChange={(e) => setUnm(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Username" />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" className="form-control" id="floatingInput" placeholder="Password" />
                                        <label htmlFor="floatingInput">Password</label>
                                    </div>

                                    <div className="d-grid mt-4">
                                        <button type="submit" className="btn btn-secondary">Sign In</button>
                                    </div>
                                    <hr />
                                    {/* <h5 className="d-flex justify-content-center">Don't have an account?</h5> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLogin