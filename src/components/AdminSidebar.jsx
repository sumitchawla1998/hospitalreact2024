import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAdminStore } from '../store/adminstore'

function AdminSidebar() {

  let logout = useAdminStore((state) => state.logout)
  
  return (
    <>
      <nav className="pc-sidebar">
        <div className="navbar-wrapper">
          <div className="m-header">
            <a href="#" className="b-brand">
  
              <img src="berry/dist/assets/images/" width={180} />
            </a>
          </div>
          <div className="navbar-content">
            <ul className="pc-navbar">

              <li className="pc-item">
                <NavLink to="/admin/dashboard" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                  dashboard
                </span></span><span className="pc-mtext">Dashboard</span></NavLink>
              </li>

              <li className="pc-item">
                <NavLink to="/admin/adddoctor" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                  person_add
                </span></span><span className="pc-mtext">Add Doctor</span></NavLink>
              </li>


              <li className="pc-item">
                <NavLink to="/admin/viewdoctors" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                  stethoscope_check
                </span></span><span className="pc-mtext">View Doctors</span></NavLink>

              </li>

              <li className="pc-item">
                <NavLink to="/admin/viewpatients" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                  patient_list
                </span></span><span className="pc-mtext">View Patients</span></NavLink>

              </li>

              <li className="pc-item">
                <NavLink to="/admin/viewprescription" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                  prescriptions
                </span></span><span className="pc-mtext">Prescription List</span></NavLink>
              </li>

              <li className="pc-item">
                <NavLink onClick={() => {
                  logout()
                }} to="/adminlogin" className="pc-link"><span className="pc-micon"><span class="material-symbols-outlined">
                  logout
                </span></span><span className="pc-mtext">Log Out</span></NavLink>
              </li>








            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminSidebar