import { Progress, Title, Stack, Text, Flex } from '@mantine/core';

export const Goals = () => {
    return (
        <Stack>
            <Title>Goals</Title>
            <Flex direction={"column"} gap={10}>
                <Text>Save 1000$ by December</Text>
                <Progress size="sm" value={33}/>
            </Flex>
        </Stack>
    )
}