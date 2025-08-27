declare module 'redux-persist/integration/react' {
    import { Persistor } from 'redux-persist';
    import * as React from 'react';

    interface PersistGateProps {
        persistor: Persistor;
        loading?: React.ReactNode;
        children?: React.ReactNode;
    }

    export class PersistGate extends React.Component<PersistGateProps> {}
}
