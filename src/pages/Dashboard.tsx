import {Stack, Grid, Box} from '@mantine/core';
import {KpiRow} from "../widget/KpiRow";
import {FlowChart} from "../widget/FlowChart";
import {RecentTransaction} from "../widget/RecentTransactions";
import {Goals} from "../widget/Goals";
import {SpendingPie} from "../widget/SpendingPie";

export const Dashboard = () => {
    return (
        <Stack>
            <Grid>
                <KpiRow/>
            </Grid>
            <Grid>
                <Grid.Col span={{base: 12, md: 6, lg: 9}}>
                    <Box p={'20px'} mb={20} style={{
                        background: '#fff',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                        borderRadius: '10px'
                    }}>
                        <FlowChart/>
                    </Box>
                    <Box p={'20px'} style={{
                        background: '#fff',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                        borderRadius: '10px'
                    }}>
                        <RecentTransaction/>
                    </Box>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6, lg: 3}}>
                    <Box p={'20px'} mb={20} style={{
                        background: '#fff',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                        borderRadius: '10px'
                    }}>
                        <SpendingPie/>
                    </Box>
                    <Box p={'20px'} style={{
                        background: '#fff',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                        borderRadius: '10px'
                    }}>
                        <Goals/>
                    </Box>
                </Grid.Col>
            </Grid>
        </Stack>
    );
}