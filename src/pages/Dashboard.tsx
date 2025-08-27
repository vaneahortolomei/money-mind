import {CounterControls} from "../features/counter-controls.tsx";
import {Stack,  Title} from '@mantine/core';


export const Dashboard = () =>  {
    return (
        <Stack>
            <Title order={1}>Dashboard</Title>
            <CounterControls/>
        </Stack>
    );
}