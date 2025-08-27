import {Box} from '@mantine/core';
import {useSelector} from "react-redux";
import type {RootState} from '../../app/store.ts'

export const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <Box w={20} h={20} bg={'blue'} fw={'bold'} fz={12} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            borderRadius: '50%'
        }}>{count}</Box>
    )
}