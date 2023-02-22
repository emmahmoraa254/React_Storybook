import { Button } from '@chakra-ui/react';
import React from 'react';

export default {
	title: 'Chakra/Button',
	component: Button,
};

// export const Success = () => <Button colorScheme='green'>Success</Button>;
// export const Danger = () => <Button colorScheme='red'>Danger</Button>;

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
	colorScheme: 'green',
	children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
	colorScheme: 'red',
	children: 'Danger',
};
