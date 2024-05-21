import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'


import { AllRoutes } from './routes/AllRoutes'
import BookAppointment from './pages/patient/PatientBookAppointment'
import ViewAppointments from './pages/doctor/DoctorViewAppointments'
import AddPrescription from './pages/doctor/DoctorAddPrescription'
import ViewPrescription from './pages/patient/PatientViewPrescription'
import AdminAddDoctor from './pages/admin/AdminAddDoctor'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminViewDoctors from './pages/admin/AdminViewDoctors'
import PatientRegister from './pages/patient/PatientRegister'
import PatientLogin from './pages/patient/PatientLogin'
import DoctorLogin from './pages/doctor/DoctorLogin'
import AdminLogin from './pages/admin/AdminLogin'
import AdminViewPatients from './pages/admin/AdminViewPatients'
import PatientBookAppointment from './pages/patient/PatientBookAppointment'
import PatientAppointmentHistory from './pages/patient/PatientAppointmentHistory'
import DoctorViewAppointments from './pages/doctor/DoctorViewAppointments'
import MainHome from './pages/MainHome'



function App() {


  
  return (
    <>
       <ToastContainer />

     
        {/* <Header /> */}
        {/* <Sidebar /> */}


        <AllRoutes />

        {/* <BookAppointment /> */}
        {/* <ViewAppointments /> */}
        {/* <ViewAppointments /> */}
        {/* <AddPrescription /> */}

        {/* <ViewPrescription /> */}

        {/* <AdminAddDoctor /> */}

        {/* <ViewDoctors /> */}

        {/* <AdminViewDoctors /> */}

        {/* <PatientRegister /> */}

        {/* <PatientLogin /> */}

        {/* <DoctorLogin /> */}

        {/* <AdminLogin /> */}

        {/* <AdminViewPatients /> */}

        
        {/* <PatientBookAppointment /> */}

        {/* <PatientAppointmentHistory /> */}

        {/* <PatientLogin /> */}


        {/* <DoctorViewAppointments /> */}
        {/* <Footer />  */}

        {/* <MainHome /> */}

    </>
  )
}

export default App
