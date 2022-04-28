import { configureStore } from '@reduxjs/toolkit'
import changeCollectionsReducer from './features/collections/changeCollectionsSlice'
import categoryReducer from './features/collections/categorySlice'
export default configureStore({
    reducer: {
        changeCollections: changeCollectionsReducer,
        category: categoryReducer
    }
})