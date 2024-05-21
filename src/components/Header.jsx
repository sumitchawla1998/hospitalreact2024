import React from 'react'
import { useAdminStore } from '../store/adminstore'
import { useDoctorStore } from '../store/doctorstore'
import { usePatientStore } from '../store/patientstore'

function Header() {
  let admin = useAdminStore((state) => state.admin)
  let isadminloggedin = useAdminStore((state) => state.isadminloggedin)

  let doctor = useDoctorStore((state) => state.doctor)
  let isdoctorloggedin = useDoctorStore((state) => state.isdoctorloggedin)

  let patient = usePatientStore((state) => state.patient)
  let ispatientloggedin = usePatientStore((state) => state.ispatientloggedin)
  return (
    <>
      <header className="pc-header">
        <div className="m-header">
          <a href="#" className="b-brand">
            <img src="/berry/dist/assets/images/hospitallogo.png" alt className="logo logo-lg mt-2" width={160} />
          </a>

          <div className="pc-h-item">
            <a href="#" className="pc-head-link head-link-secondary m-0" id="sidebar-hide" style={{ background: '#f2f2f2' }}>
              <i className="ti ti-menu-2" style={{ color: '#3dbdec' }} />
            </a>
          </div>
        </div>
        <div className="header-wrapper"> 
          <div className="me-auto pc-mob-drp">
            <ul className="list-unstyled">
              <li className="pc-h-item header-mobile-collapse">
                <a href="#" className="pc-head-link head-link-secondary ms-0" id="mobile-collapse">
                  <i className="ti ti-menu-2" />
                </a>
              </li>

            </ul>
          </div>

          <div className="ms-auto">
            <ul className="list-unstyled">

              <li className="dropdown pc-h-item header-user-profile">
                <a className="pc-head-link head-link-primary dropdown-toggle arrow-none me-0 px-3" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" style={{ width: 'auto', background: '#f2f2f2' }}>

                  <span class="material-symbols-outlined" style={{ color: '#3DBDEC', fontSize: '30px' }}>
                    account_circle
                  </span>


                  <span className='mt-3 ms-1'>
                    {isadminloggedin && <p style={{color:'#3DBDEC'}}>Admin</p>}
                    {isdoctorloggedin && <p style={{color:'#3DBDEC'}}>{doctor.nm}</p>}
                    {ispatientloggedin && <p style={{color:'#3DBDEC'}}>{patient.displayName}</p>}
                  </span>
                </a>

              </li>
            </ul>
          </div> </div>
      </header>
    </>
  )
}

export default Header