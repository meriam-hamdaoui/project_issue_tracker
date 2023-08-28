import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducers from "./reducers";

export const store = configureStore({ reducer: rootReducers });

/**
 * By using these types, you ensure that you're using the correct types when interacting with the Redux store in your application. It helps to catch type-related errors early and ensures type safety throughout your Redux code.
 */

export type RootState = ReturnType<typeof store.getState>;
/**
 * In Redux, the store holds the global state of your application. To get the type of the root state that the Redux store manages, you can use the ReturnType utility type along with the store.getState() function. Here's what each part does:

store.getState(): This function is provided by the Redux store and returns the current state of your application.

typeof store.getState(): The typeof operator is used to get the type of a value. In this case, it's getting the type of the value returned by store.getState(), which is your application's state.

ReturnType<typeof store.getState()>: The ReturnType utility type takes a function type and returns the type of its return value. So, ReturnType<typeof store.getState()> gives you the type of the state managed by your Redux store.
 */
export type AppDispatch = typeof store.dispatch;
/**
 * The Redux Toolkit provides the dispatch function to dispatch actions to the store. The AppDispatch type is typically used to define the type of the dispatch function that you will use in your components. Here's what's happening:

typeof store.dispatch: The typeof operator is used again to get the type of the dispatch function provided by the Redux store.

export type AppDispatch: This line exports the AppDispatch type, which you can use in your components when you want to dispatch actions to the Redux store.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
