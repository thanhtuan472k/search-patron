import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    status: null
}


const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        increase(state) {
            state.count +=1

        },
        decrease(state) {
           state.count -=1
        },

    }
})

export const { increase, decrease } = todosSlice.actions

const todoRedux = todosSlice.reducer

export default todoRedux