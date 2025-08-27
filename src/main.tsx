import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/app/store.ts';
import App from './App.tsx'
import '@mantine/core/styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MantineProvider>
                    <App />
                </MantineProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
