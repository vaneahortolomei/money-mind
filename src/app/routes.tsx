import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Dashboard } from '../pages/Dashboard.tsx';
import { Transactions } from '../pages/Transactions.tsx';
import { Analytics } from '../pages/Analytics.tsx';
import { Budgets } from '../pages/Budgets.tsx';
import { Settings } from '../pages/Settings.tsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'transactions', element: <Transactions /> },
            { path: 'budgets', element: <Budgets /> },
            { path: 'analytics', element: <Analytics /> },
            { path: 'settings', element: <Settings /> },
        ],
    },
]);