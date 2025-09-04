import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Roboto, sans-serif',
    colors: {
        brandGreen: [
            '#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7',
            '#34d399', '#10b981', '#059669', '#047857',
            '#065f46', '#064e3b',
        ],
        brandBlue: [
            '#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd',
            '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8',
            '#1e40af', '#1e3a8a',
        ],
        brandRed: [
            '#fef2f2', '#fee2e2', '#fecaca', '#fca5a5',
            '#f87171', '#ef4444', '#dc2626', '#b91c1c',
            '#991b1b', '#7f1d1d',
        ],
        brandGray: [
            '#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db',
            '#9ca3af', '#6b7280', '#4b5563', '#424950', '#374151',
            '#1f2937', '#111827',
        ],
    },
    primaryColor: 'brandGray',
    primaryShade: 7,
    fontSizes: { md: '14px' },
});

//#60a5fa blue
//#34d399 green
//#424950 gray
//#dc2626 red