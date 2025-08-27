import { Counter} from "../shared/ui/counter.tsx";
import {Stack, Title} from '@mantine/core';

export const Transactions = () =>  {
    return (
        <Stack>
            <Title order={1}>Transactions</Title>
            <Counter/>
        </Stack>
    )
}