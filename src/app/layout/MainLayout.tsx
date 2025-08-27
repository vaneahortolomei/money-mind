import { AppShell, Burger, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useDisclosure } from '@mantine/hooks';


export default function MainLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            footer={{ height: 40 }}
            padding="md"
        >
            <AppShell.Header>
                <Flex align={"center"} h={'100%'} p={'0 10px'}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Header />
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar><Sidebar /></AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}


