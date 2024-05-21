import { useAdminStore } from '../store/adminstore'
import { useDoctorStore } from '../store/doctorstore'
import { usePatientStore } from '../store/patientstore'

export function logoutallusers(){
    sessionStorage.clear()

    let adminlogout = useAdminStore((state) => state.logout)
    let doctorlogout = useDoctorStore((state) => state.logout)
    let patientlogout = usePatientStore((state) => state.logout)

    adminlogout()
    doctorlogout()
    patientlogout()
}