// Import necessary functions and types from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape / type of the state
interface StepState {
  activeStep: string;       // Represents the currently active step in the form
  selectedOptions: string[]; // Represents the selected options in the form
}

// Define the initial state
const initialState: StepState = {
  activeStep: "formOne", // Set the default active step to "formOne"
  selectedOptions: [],   // Initialize the selected options array as empty
};

// Create a slice of state for managing form-related state
const formSlice = createSlice({
  name: "step", // Name of the slice /param
  initialState, // Initial state of the slice
  reducers: {
    // Action to set the active step
    setActiveStep(state, action: PayloadAction<string>) {
      state.activeStep = action.payload; // Update the active step with the payload value
    },
    // Action to set the selected options
    setSelectedOptions(state, action: PayloadAction<string[]>) {
      state.selectedOptions = action.payload; // Update the selected options with the payload value
    },
  },
});

// Export action creators and reducer from the slice
export const { setActiveStep, setSelectedOptions } = formSlice.actions;
export default formSlice.reducer;
