import {LineChart} from '@mantine/charts';

export const FlowChart = () => {
    return (
        <LineChart
            h={300}
            data={[
                {date: '2025-01-01', income: 1200, expense: 800},
                {date: '2025-01-02', income: 900, expense: 1100},
                {date: '2025-01-03', income: 1500, expense: 700},
                {date: '2025-01-04', income: 800, expense: 1200},
            ]}
            dataKey="date"
            tooltipAnimationDuration={200}
            series={[
                {name: 'income', color: 'teal.6'},
                {name: 'expense', color: 'red.6'},
            ]}
            curveType="linear"
        />
    )
}