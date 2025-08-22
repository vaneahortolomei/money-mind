import {useState} from "react";
import {Button, Flex, Box, Text} from '@mantine/core';

function App() {

    const [activeTab, setActiveTab] = useState(1);

    const controls = [
        {
            id: 1,
            name: 'Greetings',
            text: 'Hello'
        },
        {
            id: 2,
            name: 'Presentation',
            text: 'My name is'
        },
        {
            id: 3,
            name: 'Name',
            text: 'Alexandra'
        },
    ]

    const info = [
        {id: 1, text: 'Hello!'}, {id: 2, text: 'My name is'}, {id: 3, text: 'Alexandra'}
    ]

    return (
        <Flex gap={5} p={10}>
            <Box>
                {controls.map((item) => (
                    <Button onClick={() => setActiveTab(item.id)} key={item.id}>{item.name}</Button>
                ))}
                {info.map((item) => (
                    <Box key={item.id}>
                        {activeTab === item.id && <Text key={item.id}>{item.text}</Text>}
                    </Box>
                ))}
            </Box>
        </Flex>
    )
}

export default App
