import { create } from "zustand";

const useSimpleFilterState = create((set) => ({
  dates: [],
  destination: null,
  numberOfPersons: null,
  property: null,
  setDates: (dates) => set({ dates }),
  setDestination: (destination) => set({ destination }),
  setNumberOfPersons: (numberOfPersons) => set({ numberOfPersons }),
  setProperty: (property) => set({ property }),
  resetState: () => set({ selectedCity: null, selectedPropertyType: null, numberOfPersons: 1, selectedDates: null }),
}));
export default useSimpleFilterState;
