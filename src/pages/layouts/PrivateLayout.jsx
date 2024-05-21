import React from 'react'
import Header from '../../components/Header'

import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import PatientSidebar from '../../components/PatientSidebar'
import AdminSidebar from '../../components/AdminSidebar'
import DoctorSidebar from '../../components/DoctorSidebar'
import { useAdminStore } from '../../store/adminstore'
import { useDoctorStore } from '../../store/doctorstore'
import { usePatientStore } from '../../store/patientstore'

function PrivateLayout() {
  let isadminloggedin = useAdminStore((state) => state.isadminloggedin)
  let ispatientloggedin = usePatientStore((state) => state.ispatientloggedin)
  let isdoctorloggedin = useDoctorStore((state) => state.isdoctorloggedin)
  return (
    <>
      <Header />
      {/* <Sidebar />  */}

      {ispatientloggedin && <PatientSidebar />}

      {isdoctorloggedin && <DoctorSidebar />}

      {isadminloggedin && <AdminSidebar />}

      <Outlet />
      <Footer />
    </>
  )
}

export default PrivateLayout