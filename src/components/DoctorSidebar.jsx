import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../firebaseconfig'
import { useDoctorStore } from '../store/doctorstore'


function DoctorSidebar() {
   

    let logout = useDoctorStore((state) => state.logout)
    return (
        <>
            <nav className="pc-sidebar">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <a href="index.html" className="b-brand">
                            <img src="berry/dist/assets/images/" width={180} />
                        </a>
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">

                            <li className="pc-item">
                                <NavLink to="/doctor/viewappointments" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    verified
                                </span></span><span className="pc-mtext">Appointment List</span></NavLink>

                            </li>

                            <li className="pc-item">
                                <NavLink to="/doctor/viewprescription" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    prescriptions
                                </span></span><span className="pc-mtext">Prescription List</span></NavLink>
                            </li>

                            <li className="pc-item">
                                <NavLink onClick={() => {
                                    logout()
                                }} to="/doctorlogin" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    logout
                                </span></span><span className="pc-mtext">Doctor Log Out</span></NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default DoctorSidebar