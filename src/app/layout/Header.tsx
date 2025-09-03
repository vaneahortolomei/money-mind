import { Group, Image } from '@mantine/core';
import Logo from '../../assets/Logo.svg';

export function Header() {

    return (
        <Group h="100%" w="100%" p={'0 12px'} justify="space-between">
            <Image src={Logo} w="120px"/>
        </Group>
    );
}