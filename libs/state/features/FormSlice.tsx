import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  activeStep: string; 
  selectedOptions: string[];  
}

const initialState: StepState = {
  activeStep: "formOne",  
  selectedOptions: [],    
};

const formSlice = createSlice({
  name: "step",  
  initialState, 
  reducers: {
    setActiveStep(state, action: PayloadAction<string>) {
      state.activeStep = action.payload; 
    },
    setSelectedOptions(state, action: PayloadAction<string[]>) {
      state.selectedOptions = action.payload; 
    },
  },
});

export const { setActiveStep, setSelectedOptions } = formSlice.actions;
export default formSlice.reducer;
