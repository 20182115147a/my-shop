import { configureStore } from '@reduxjs/toolkit'
import changeCollectionsReducer from './features/collections/changeCollectionsSlice'

export default configureStore({
    reducer: {
        changeCollections: changeCollectionsReducer
    }
})