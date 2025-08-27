import { Group, Title } from '@mantine/core';
import { Counter} from "../../shared/ui/counter.tsx";

export function Header() {

    return (
        <Group h="100%" w="100%" px="md" justify="space-between">
            <Title order={4}>MoneyMind</Title>
            <Counter/>
        </Group>
    );
}