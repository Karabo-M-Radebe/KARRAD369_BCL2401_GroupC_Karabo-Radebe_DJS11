import { create } from "zustand";

export const useStore = create((set) => {
    return {
       nightMode: 'night',
       toggleMode: () => set((state)=>({nightMode:  state.nightMode !== 'night' ?  'night':'day' })) 
    }
})