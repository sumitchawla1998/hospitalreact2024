import Login from '../pages/patient/PatientLogin'
import Dashboard from '../pages/admin/AdminDashboard'
import { Routes, Route, Navigate } from 'react-router-dom'
// import AddTreatment from './../pages/AddTreatment'
import Register from '../pages/patient/PatientRegister'
import PageNotFound from '../pages/PageNotFound'
import AdminLogin from '../pages/admin/AdminLogin'
import PatientRegister from '../pages/patient/PatientRegister'
import PatientLogin from '../pages/patient/PatientLogin'
import PatientBookAppointment from '../pages/patient/PatientBookAppointment'
import AdminAddDoctor from '../pages/admin/AdminAddDoctor'
import PatientAppointmentHistory from '../pages/patient/PatientAppointmentHistory'
import DoctorLogin from '../pages/doctor/DoctorLogin'
import DoctorViewAppointments from '../pages/doctor/DoctorViewAppointments'
import DoctorAddPrescription from '../pages/doctor/DoctorAddPrescription'
import DoctorViewPrescription from '../pages/doctor/DoctorViewPrescription'
import MainHome from '../pages/MainHome'
import AdminDashboard from '../pages/admin/AdminDashboard'
import PrivateLayout from '../pages/layouts/PrivateLayout'
import PatientViewPrescription from '../pages/patient/PatientViewPrescription'
import AdminViewDoctors from '../pages/admin/AdminViewDoctors'
import AdminViewPatients from '../pages/admin/AdminViewPatients'
import AdminViewPrescription from '../pages/admin/AdminViewPrescription'
import { useAdminStore } from '../store/adminstore'
import { useDoctorStore } from '../store/doctorstore'
import { usePatientStore } from '../store/patientstore'

export function AllRoutes() {

    let isadminloggedin = useAdminStore((state) => state.isadminloggedin)

    let isdoctorloggedin = useDoctorStore((state) => state.isdoctorloggedin)

    let ispatientloggedin = usePatientStore((state) => state.ispatientloggedin)

    return (
        <>
            <Routes>
                <Route path='/' element={<MainHome />} />
                <Route path='/patientregister' element={<PatientRegister />} />
                <Route path='/patientlogin' element={<PatientLogin />} />
                <Route path='/doctorlogin' element={<DoctorLogin />} />
                <Route path='/adminlogin' element={<AdminLogin />} />


                <Route path='/admin' element={ isadminloggedin ? <PrivateLayout /> : <Navigate to="/" />}>
                    <Route index path='dashboard' element={  <AdminDashboard />} />
                    <Route path='adddoctor' element={<AdminAddDoctor />} />
                    <Route path='viewdoctors' element={<AdminViewDoctors />} />
                    <Route path='viewpatients' element={<AdminViewPatients />} />
                    <Route path='viewprescription' element={<AdminViewPrescription />} />
                </Route>




                <Route path='/patient' element={ ispatientloggedin ? <PrivateLayout /> : <Navigate to="/" /> }>
                    <Route index path='bookappointment' element={<PatientBookAppointment />} />
                    <Route path='appointmenthistory' element={<PatientAppointmentHistory />} />
                    <Route path='viewprescription' element={<PatientViewPrescription />} />
                </Route>

                <Route path='/doctor' element={isdoctorloggedin ? <PrivateLayout /> : <Navigate to="/" />}>
                    <Route index path='viewappointments' element={<DoctorViewAppointments />} />
                    <Route path='addprescription/:id' element={<DoctorAddPrescription />} />
                    <Route path='viewprescription' element={<DoctorViewPrescription />} />
                </Route>




                {/* <Route path='/doctorviewappointments' element = {<DoctorViewAppointments />} />
                <Route path='/doctoraddprescription/:id' element = {<DoctorAddPrescription />} />
                <Route path='/doctorviewprescription/' element = {<DoctorViewPrescription />} />
               
                
                <Route path='/patientbookappointment' element = {<PatientBookAppointment />} />
                <Route path='/patientappointmenthistory' element = {<PatientAppointmentHistory />} /> */}

                {/* <Route path='/addtreatment' element = {<AddTreatment />} />
                <Route path='/viewpatient' element = {<ViewPatients />} />
                <Route path='/viewdoctor' element = {<ViewDoctors />} />
                <Route path='/*' element = {<PageNotFound />} /> */}
            </Routes>
        </>
    )
}