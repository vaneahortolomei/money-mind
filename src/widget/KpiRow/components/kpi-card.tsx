import {Flex, Box, Text, Card, Grid, useMantineTheme} from '@mantine/core';
import {IconArrowDownRight, IconArrowUpRight, IconCurrencyDollar, IconPigMoney} from "@tabler/icons-react";
import type {ReactElement} from "react";

interface CardData  {
    icon: ReactElement;
    title: string;
    int: string;
    hint?: string;
}

const cardData:  CardData[] = [
    {
        icon: <IconCurrencyDollar size={22} color={'#424950'}/>,
        title: 'Total Balance',
        int: `$${8500}`,
        hint: ''

    },
    {
        icon: <IconArrowUpRight size={22} color={'#34d399'}/>,
        title: 'Income This Month',
        int: `$${8500}`,
        hint: ''
    },
    {
        icon: <IconArrowDownRight size={22} color={'#dc2626'}/>,
        title: 'Expenses This Month',
        int: `$${8500}`,
        hint: ''
    },
    {
        icon: <IconPigMoney size={22} color={'#60a5fa'}/>,
        title: 'Savings',
        int: `${60}%`,
        hint: ''
    }
]

export const KpiCard = () => {
    const theme = useMantineTheme();
    // const green400 = theme.colors.brandGreen[4];
    const gray700 = theme.colors.brandGray[7];

    return (
        <>
            {
                cardData.map((card) => (
                    <Grid.Col key={card.title} span={{base: 12, sm: 6, md: 3}}>
                        <Card shadow="sm" padding="lg" radius="md" bg={'#fff'}>
                            <Flex gap={10}>
                                <Box mt={2}>{card.icon}</Box>
                                <Box>
                                    <Text fz={16} c={gray700}>{card.title}</Text>
                                    <Text fw={600} c={gray700}>{card.int}</Text>
                                </Box>
                            </Flex>
                        </Card>
                    </Grid.Col>
                ))
            }
        </>
    )
}