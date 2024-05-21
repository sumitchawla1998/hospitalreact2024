import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useDoctorStore = create(persist(
    immer((set) => ({
        doctor: {},
        isdoctorloggedin: false,

        login: (doctor) => set(
            (state) => {
                state.doctor = doctor
                state.isdoctorloggedin = true
              
            }
        ),

        logout : () => set(
            (state) => {
                state.doctor = {}
                state.isdoctorloggedin = false
            
            }
        )
    }),
    ),

    {
        name: 'doctorstore',
        getStorage: () => sessionStorage,
    })
)