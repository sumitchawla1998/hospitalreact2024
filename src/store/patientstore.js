import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let usePatientStore = create(persist(
    immer((set) => ({
        patient: {},
        ispatientloggedin: false,

        login: (patient) => set(
            (state) => {
                state.patient= patient
                state.ispatientloggedin = true
              
            }
        ),

        logout : () => set(
            (state) => {
                state.patient = {}
                state.ispatientloggedin = false
            
            }
        )

    }),
    ),

    {
        name: 'patientstore',
        getStorage: () => sessionStorage,
    })
)