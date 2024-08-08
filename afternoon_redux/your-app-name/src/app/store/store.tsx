'use client'
import { Store } from 'redux';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer';

const store: Store<StudentState, StudentAction> = configureStore({ reducer });

const StoreWrapper = ({ children }: React.PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>
}

export default StoreWrapper;