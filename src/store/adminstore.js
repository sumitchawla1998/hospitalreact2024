import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useAdminStore = create(persist(
    immer((set) => ({
        admin: {},
        isadminloggedin: false,

        login: (patient) => set(
            (state) => {
                state.admin = patient
                state.isadminloggedin = true
              
            }
        ),

        logout : () => set(
            (state) => {
                state.admin = {}
                state.isadminloggedin = false
            
            }
        )

    }),
    ),
    {
        name: 'adminstore',
        getStorage: () => sessionStorage,
    })
)