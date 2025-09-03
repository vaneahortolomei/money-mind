import {NavLink, Box} from '@mantine/core';
import {Link} from 'react-router-dom';
import {
    IconLayoutDashboard,
    IconArrowsLeftRight,
    IconWallet,
    IconChartPie,
    IconSettings,
} from '@tabler/icons-react';

export function Sidebar() {

    const data = [
        {icon: IconLayoutDashboard, label: 'Dashboard', link: '/'},
        {icon: IconArrowsLeftRight, label: 'Transactions', link: '/transactions'},
        {icon: IconWallet, label: 'Budgets', link: '/budgets'},
        {icon: IconChartPie, label: 'Analytics', link: '/analytics'},
        {icon: IconSettings, label: 'Settings', link: '/settings'},
    ];

    const items = data.map((item) => (
        <NavLink key={item.label} leftSection={<item.icon size={16} stroke={1.5} color={'#17a34a'}/>} label={item.label}
                 component={Link} to={item.link}/>
    ));


    return (
        <Box>
            {items}
        </Box>
    );
}