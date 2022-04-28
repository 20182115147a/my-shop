import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    productCategory: 'hot'
}
const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers : {
        changeCategory(state,action) {
            state.productCategory = action.payload.productCategory
        }
    }
})


export const  {changeCategory} = categorySlice.actions 
export default categorySlice.reducer

