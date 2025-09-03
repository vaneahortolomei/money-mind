import {Flex, Box, Text, Card, Grid} from '@mantine/core';
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
        icon: <IconCurrencyDollar size={22} color={'black'}/>,
        title: 'Total Balance',
        int: `$${8500}`,
        hint: ''

    },
    {
        icon: <IconArrowUpRight size={22} color={'#17a34a'}/>,
        title: 'Income This Month',
        int: `$${8500}`,
        hint: ''
    },
    {
        icon: <IconArrowDownRight size={22} color={'red'}/>,
        title: 'Expenses This Month',
        int: `$${8500}`,
        hint: ''
    },
    {
        icon: <IconPigMoney size={22} color={'purple'}/>,
        title: 'Savings',
        int: `${60}%`,
        hint: ''
    }
]

export const KpiCard = () => {
    return (
        <>
            {
                cardData.map((card) => (
                    <Grid.Col key={card.title} span={{base: 12, sm: 6, md: 3}}>
                        <Card shadow="sm" padding="lg" radius="md" bg={'#fff'}>
                            <Flex gap={10}>
                                <Box mt={2}>{card.icon}</Box>
                                <Box>
                                    <Text fz={16} >{card.title}</Text>
                                    <Text fw={600} c={'#17a34a'}>{card.int}</Text>
                                </Box>
                            </Flex>
                        </Card>
                    </Grid.Col>
                ))
            }
        </>
    )
}