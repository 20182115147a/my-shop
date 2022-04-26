import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    typeCollection : 'cafe'
}
const changeCollectionSlice = createSlice({
    name : 'changeCollection',
    initialState,
    reducers : {
        collectionChange(state,action) {
            state.typeCollection = action.payload.typeCollection
        }
    } 

})
export const {collectionChange} = changeCollectionSlice.actions
export default changeCollectionSlice.reducer