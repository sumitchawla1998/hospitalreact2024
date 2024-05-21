import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { at, uniq } from 'lodash'
import { toast } from 'react-toastify'
import { error, success } from '../../utils/messages'
import { usePatientStore } from '../../store/patientstore'


function PatientBookAppointment() {
    let patient = usePatientStore((state) => state.patient)

    let [doctors, setDoctors] = useState([])
    let [specialization, setSpecialization] = useState([])

    let [category, setCategory] = useState("")
    let [doctorunm, setDoctorUnm] = useState("")
    let [doctor, setDoctor] = useState("")
    let [fees, setFees] = useState(0)
    let [adate, setAdate] = useState("")
    let [atime, setAtime] = useState("")

    useEffect(() => {
        let colref = collection(db, "doctors")
        let unsub = onSnapshot(colref, function (snapShot) {
            let result = []
            snapShot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })
           

            setSpecialization(uniq(result.map(item => item.specialization)))
            setDoctors(result)
        })
        return () => unsub()
    }, [])
    async function bookappointment(e) {
        e.preventDefault()

        if(category == "" || doctor == "" || fees == 0 || adate == "" || atime == ""){
            error("All Fields Are Required")
            return
        }
        let colref = collection(db, "appointments")
        await addDoc(colref, {
            "name": patient.displayName,
            "email": patient.email,
            "uid": patient.uid,
            "specialization": category,
            "doctor": doctor,
            "doctorunm": doctorunm,
            "fees": fees,
            "adate": adate,
            "atime": atime,
            "status": "Active"
        })
        success("Appointment Booked")

        setSpecialization("")
        setDoctor("")
        setFees(0)
        setAdate("")
        setAtime("")
    }

    return (
        <>
            <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Book Appointment</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={bookappointment}>

                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Specialization:</label>
                                            <select value={category} onChange={(e) => setCategory(e.target.value)} class="form-select" aria-label="Default select example">
                                                <option>----Select Specilization----</option>
                                                {specialization && specialization.map((speciality) => <option value={speciality}>{speciality}</option>)}

                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Doctor:</label>
                                            <select value={doctor} class="form-select" onChange={(e) => {

                                                setDoctor(e.target.value)
                                                setDoctorUnm(doctors.find((doc) => doc.nm == e.target.value)?.unm)
                                                setFees(doctors.find((doc) => doc.nm == e.target.value)?.fees)
                                            }}>
                                                {/* <option selected>Mark</option> */}
                                                <option value="0">----Select Doctor----</option>
                                                {doctors.map((doctor) => {
                                                    if (doctor.specialization == category) {
                                                        // setFees(doctor.fees)
                                                        return <option value={doctor.nm}>{doctor.nm}</option>
                                                    }
                                                }
                                                )}


                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label value={fees} for="exampleFormControlInput1" class="form-label">Consultancy Fees:</label>
                                            <input readOnly type="text" onChange={(e) => setFees(e.target.value)} class="form-control" id="exampleFormControlInput1"
                                                // value={    doctors.find((doc) => doc.nm == doctor)?.fees
                                                // } 
                                                value={fees}
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Appointment Date:</label>
                                            <input value={adate} onChange={(e) => setAdate(e.target.value)} type="date" class="form-control" id="exampleFormControlInput1" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Appointment Time:</label>
                                            <select value={atime} onChange={(e) => setAtime(e.target.value)} class="form-select" aria-label="Default select example">
                                                <option value="0">---Select Time---</option>
                                                <option value="8:00 AM to 9:00 AM">8:00 AM to 9:00 AM</option>
                                                <option value="9:00 AM to 10:00 AM">9:00 AM to 10:00 AM</option>
                                                <option value="10:00 AM to 11:00 AM">10:00 AM to 11:00 AM</option>
                                                <option value="11:00 AM to 12:00 PM">11:00 AM to 12:00 PM</option>

                                            </select>
                                        </div>
                                        <button type='submit' className='btn btn-primary'>Make Appointment</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PatientBookAppointment