import { allProducts } from '@/constants/products'
import { createSlice } from '@reduxjs/toolkit'

const productsSliceState = {
  mockProducts: [...allProducts],
  selectedProduct: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsSliceState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action
      return {
        ...state,
        selectedProduct: [...state.selectedProduct, payload],
      }
    },
  },
})
