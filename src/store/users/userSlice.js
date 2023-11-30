import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticate: false,
    user: null,
    error: null,
    products: []
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product)=>product.id === action.payload.id ? {
        ...action.payload
      }: product)
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(item => item.id == action.payload)
      console.log(index);
      if(index != -1){
        state.products = state.products.slice(index, 0);
      }
    }

  },
});

export const { setUser, setError, setIsAuthenticate, setProducts, addProduct, updateProduct, deleteProduct } = userSlice.actions;

export default userSlice.reducer;
