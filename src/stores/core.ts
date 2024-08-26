// import { Dispatch, createStore } from 'redux'
// import { userApi } from '../apis/mock'
// import { User } from '../types/user'
// import { GetState } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'

// /**
//  * This is a reducer - a function that takes a current state value and an
//  * action object describing "what happened", and returns a new state value.
//  * A reducer's function signature is: (state, action) => newState
//  *
//  * The Redux state should contain only plain JS objects, arrays, and primitives.
//  * The root state value is usually an object. It's important that you should
//  * not mutate the state object, but return a new object if the state changes.
//  *
//  * You can use any conditional logic you want in a reducer. In this example,
//  * we use a switch statement, but it's not required.
//  */
// function counterReducer(state = { value: 0 }, action: { type: string, payload: any }) {
//     switch (action.type) {
//         case 'counter/incremented':
//             return { value: state.value + 1 }
//         case 'counter/decremented':
//             return { value: state.value - 1 }
//         default:
//             return state
//     }
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// let store = createStore(counterReducer)

// // You can use subscribe() to update the UI in response to state changes.
// // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// // There may be additional use cases where it's helpful to subscribe as well.

// store.subscribe(() => console.log(store.getState()))

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })

// const initialState: {user: User | null, loading: boolean} = {
// user: null,
// loading: false
// }


// // Use the initialState as a default value
// export default function appReducer(state = initialState, action: {type: string ,payload: any}) {
//     // The reducer normally looks at the action type field to decide what happens
//     switch (action.type) {
//         case 'login/loading':
//             state.loading = action.payload
//         // Do something here based on the different types of actions
//             break
//         case 'login/success':
//             state.user = action.payload
//             break
//         case 'login/error':
//             state.user = null
//             break
//         default:
//             // If this reducer doesn't recognize the action type, or doesn't
//             // care about this specific action, return the existing state unchanged
//             return state
//     }
// }

// // action constanst
// export const AUTH_ACTIONS = {
//     loginStart: 'loginStart',
//     loginEnd: 'loginEnd',
// }


// const login = async() => {
//     store.dispatch({ type: AUTH_ACTIONS.loginStart, payload: true })

//   try {
//       const user = await userApi.login()

//       store.dispatch({ type: 'login/success', payload: user })
//       store.dispatch({ type: 'login/loading', payload: false })
//   } catch (error:any) {
//     store.dispatch({ type: 'login/error', payload: error.message })
//     store.dispatch({ type: 'login/loading', payload: false })
    
//   }

// }

// // button onclick login()


// // thunk middleware
// function loginThunk(username: string, password: string) {
//     return async (dispatch:Dispatch, getState: any) => {

//         dispatch({ type: 'loginStart', payload: true })

//         try {
//             const user = await userApi.login()

//             dispatch({ type: 'loginSuccess', payload: user })
//         } catch (error: any) {
//             dispatch({ type: 'loginError', payload: error.message })

//         }
//     }
// }


// // button onclick dispatch(loginThunk())


// const dispatch = useDispatch()

// const dispatch1 =store.dispatch