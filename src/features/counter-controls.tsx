import {Group, Button} from '@mantine/core';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store.ts';
import { increment, decrement } from '../entities/counter-slice/slice.tsx';

export const CounterControls = () => {

    const dispatch = useDispatch<AppDispatch>();


    return (
        <Group gap={5}>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </Group>
    )
}