import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/api/apiSlice'
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
})
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']