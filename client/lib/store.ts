import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { layoutSlice } from './features/layout/layoutSlice'
import { userSlice } from './features/user/userSlice'

const rootReducer = combineSlices(layoutSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>