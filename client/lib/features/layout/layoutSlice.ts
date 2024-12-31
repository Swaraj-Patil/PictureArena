import { createAppSlice } from "@/lib/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

export interface LayoutSliceState {
    subscriptionType: 'Monthly' | 'Yearly'
}

const initialState: LayoutSliceState = {
    subscriptionType: 'Monthly'
}

export const layoutSlice = createAppSlice({
    name: 'layout',
    initialState,
    reducers: create => ({
        toggleSubscriptionType: create.reducer((state, action: PayloadAction<'Monthly' | 'Yearly'>) => {
            state.subscriptionType = action.payload
        }),
    }),
    selectors: {
        getSubscriptionType: layout => layout.subscriptionType,
    }
})

export const {
    toggleSubscriptionType,
} = layoutSlice.actions

export const { getSubscriptionType } = layoutSlice.selectors