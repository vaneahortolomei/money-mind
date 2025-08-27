import { NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Sidebar() {
    return (
        <ul>
            <NavLink label="Dashboard" component={Link} to="/" />
            <NavLink label="Transactions" component={Link} to="/transactions" />
            <NavLink label="Budgets" component={Link} to="/budgets" />
            <NavLink label="Analytics" component={Link} to="/analytics" />
            <NavLink label="Settings" component={Link} to="/settings" />
        </ul>
    );
}