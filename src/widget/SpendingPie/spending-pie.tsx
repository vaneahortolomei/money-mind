import {Title, Stack, List, Box, Text, Flex} from '@mantine/core';
import {PieChart} from '@mantine/charts';


interface ChartDataValues {
    name: string;
    value: number;
    color: string;
}

const chartData: ChartDataValues[] = [
    {
        name: 'Food',
        value: 35,
        color: 'yellow'
    },
    {
        name: 'Housing',
        value: 20,
        color: 'blue'
    },
    {
        name: 'Transporting',
        value: 40,
        color: 'gray'
    },
    {
        name: 'Entertainment',
        value: 100,
        color: 'orange'
    },
    {
        name: 'Market',
        value: 120,
        color: 'green'
    }
]


export const SpendingPie = () => {
    return (
        <Stack>
            <Title>Budgets</Title>
            <PieChart key={'1'} data={chartData} withTooltip tooltipDataSource="segment" mx="auto"/>
            <List>
                {chartData.map((item) => (
                    <List.Item key={item.name} icon={
                        <Box bg={item.color} w={20} h={20} style={{borderRadius: '50%'}}/>
                    }>
                        <Flex justify={'space-between'}>
                            <Text>{item.name}</Text>
                            <Text>{item.value}%</Text>
                        </Flex>
                    </List.Item>
                ))}
            </List>
        </Stack>
    )
}