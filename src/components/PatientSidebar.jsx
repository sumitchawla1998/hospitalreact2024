import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../firebaseconfig'
import { usePatientStore } from '../store/patientstore'

function PatientSidebar() {
    let logout = usePatientStore((state) => state.logout)

    return (
        <>
            <nav className="pc-sidebar">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <a href="index.html" className="b-brand">
                            {/* ========   Change your logo from here   ============ */}
                            <img src="berry/dist/assets/images/" width={180} />
                        </a>
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                         
                            <li className="pc-item">
                                <NavLink to="/patient/bookappointment" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    library_add
                                </span></span><span className="pc-mtext">Book Appointment</span></NavLink>

                            </li>

                            <li className="pc-item">
                                <NavLink to="/patient/appointmenthistory" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    history
                                </span></span><span className="pc-mtext">Appointment History</span></NavLink>
                            </li>

                            <li className="pc-item">
                                <NavLink to="/patient/viewprescription" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    pill
                                </span></span><span className="pc-mtext">Prescription List</span></NavLink>
                            </li>

                            <li className="pc-item">
                                <NavLink onClick={() => {
                                    logout()
                                    auth.signOut()
                                    
                                }} to="/patientlogin" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                                    logout
                                </span></span><span className="pc-mtext">Patient Log Out</span></NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default PatientSidebar