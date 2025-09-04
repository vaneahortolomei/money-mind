import {Group, Image, AppShell, Burger, Flex} from '@mantine/core';

import Logo from '../../assets/Logo.png';

type HeaderProps = {
    opened: boolean;
    toggle: () => void;
}

export function Header({opened, toggle}: HeaderProps) {

    return (
        <AppShell.Header>
            <Group h="100%" w="100%" p={'0 12px'} justify="space-between">
                <Image src={Logo} w="55px" ml={'-11px'}/>
                <Flex align={"center"} h={'100%'}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                </Flex>
            </Group>
        </AppShell.Header>
    );
}