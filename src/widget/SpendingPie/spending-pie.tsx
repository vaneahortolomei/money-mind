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
        <PieChart key={'1'} data={chartData} withTooltip tooltipDataSource="segment" mx="auto"/>
    )
}