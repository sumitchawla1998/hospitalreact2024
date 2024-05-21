import React from 'react'
import banner from './../assets/banner.webp'
import { Link } from 'react-router-dom'
import { useAdminStore } from '../store/adminstore'
import { useDoctorStore } from '../store/doctorstore'
import { usePatientStore } from '../store/patientstore'
import { logoutallusers } from '../utils/logout'

function MainHome() {
    logoutallusers()

    return (
        <section className='mainhome'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container mt-4">
                    <a className="navbar-brand" href="#">
                        <img width={200} src="/berry/dist/assets/images/hospital.png"  className="logo logo-lg" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex">
                            <Link to="/doctorlogin" style={{ color: 'white', borderColor: 'white' }} className="btn btn-outline-success me-3 btn-lg" type="submit">Doctor Login</Link>
                            <Link to="/adminlogin" style={{ backgroundColor: 'white', color: '#1f2b5b' }} className="btn btn-lg" type="submit">Admin Login</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className='row'>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h1 className='text-white' style={{ fontSize: 66 }}>We provide <span style={{ color: '#1f2b5b' }}>medical services</span> that you can <span style={{ color: '#1f2b5b' }}>trust!</span></h1>
                        <div className="d-flex mt-3" role="search">
                            <Link to="/patientregister" style={{ backgroundColor: 'white', color: '#1f2b5b' }} className="btn btn-lg me-4" type="submit">Patient Sign Up</Link>
                            <Link to="/patientlogin" style={{ color: 'white', borderColor: 'white' }} className="btn btn-outline-success me-3 btn-lg" >Patient Login</Link>
                        </div>
                    </div>

                    <div className='col-md-6 d-flex align-items-end'>
                        <img src={banner} width={750} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MainHome