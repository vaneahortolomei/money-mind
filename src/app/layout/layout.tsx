import {AppShell} from '@mantine/core';
import {Outlet} from 'react-router-dom';
import {Header} from './header.tsx';
import {Sidebar} from './sidebar.tsx';
import {useDisclosure} from "@mantine/hooks";


export default function Layout() {
    const [opened, {toggle}] = useDisclosure();

    return (
        <AppShell
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            footer={{height: 40}}
            padding="md"
        >
            <Header opened={opened} toggle={toggle}/>
            <Sidebar/>
            <AppShell.Main bg={'#a2b0c314'}>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    )
}


