import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from '@mantine/core';
import {Global} from '@emotion/react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@/app/store.ts';
import App from './app';
import {theme} from './app/theme/themeConfig.tsx';
import '../src/index.css';
import '../src/shared/fonts/fonts.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MantineProvider theme={theme} withGlobalClasses>
                    <Global
                        styles={{
                            body: { color: '#424950'},
                        }}
                    />
                    <App/>
                </MantineProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
