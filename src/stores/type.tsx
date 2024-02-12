// Define the type for the root state of your Redux store
export type RootState = {
    // Define the state slice managed by `mySlice`
    show: boolean;
    // Add other state slices as needed
  };
  
  // Define the type for the action payloads
 export  type PayloadType = {
    // Define the payload type for the `isOpen` action
    // You can add more payload types for other actions if needed
  };
  
  export type MySliceAction = {
    type: string; // Action type string
    payload?: PayloadType; // Optional payload
  };
  

  