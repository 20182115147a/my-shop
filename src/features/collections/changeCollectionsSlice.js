import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    typeCollection : 'cafe',
    pantsCollection : 'cafe'
}
const changeCollectionSlice = createSlice({
    name : 'changeCollection',
    initialState,
    reducers : {
        collectionChange(state,action) {
           if (action.payload.typeCollection) {
            return  state = {
                ...state,
                typeCollection : action.payload.typeCollection
            }
           }
           else {
            return  state = {
                ...state,
                pantsCollection : action.payload.pantsCollection
            }
           }
        }
    } 

})
export const {collectionChange} = changeCollectionSlice.actions
export default changeCollectionSlice.reducer