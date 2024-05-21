import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebaseconfig';
import { toast } from 'react-toastify';
import { error, success } from '../../utils/messages';

function DoctorAddPrescription() {
    let [diseases,setDiseases] = useState("")
    let [allergies,setAllergies] = useState("")
    let [prescription,setPrescription] = useState("")

    let {id} = useParams()
    async function addprescription(e){
        e.preventDefault()
        
        if(diseases == "" || allergies == "" || prescription == ""){
            error("All Fields Are Required")
            return
        }

        let docref = doc(db,"appointments",id)
        await updateDoc(docref,{
            "diseases":diseases,
            "allergies":allergies,
            "prescription":prescription
        })

        success("Prescription Added")
    }
  return (
    <>
         <div className="pc-container">
                <div className="pc-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Add Prescription</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={addprescription}>
                                        
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Diseases:</label>
                                            <textarea value={diseases} onChange={e=>setDiseases(e.target.value)} className='form-control' name="" id="" cols="30" rows="4"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Allergies:</label>
                                            <textarea value={allergies} onChange={e=>setAllergies(e.target.value)} className='form-control' name="" id="" cols="30" rows="4"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Prescription:</label>
                                            <textarea value={prescription} onChange={e=>setPrescription(e.target.value)} className='form-control' name="" id="" cols="30" rows="4"></textarea>
                                        </div>
                                        <button className='btn btn-primary'type='submit'>Add Prescription</button>
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

export default DoctorAddPrescription