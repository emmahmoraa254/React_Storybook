import React from 'react';
// import Center from '../Center/Center';
import Button from './Button';

export default {
	title: 'Form/Button',
	component: Button,
	// decorators: [(story) => <Center>{story()}</Center>],
	args: {
		// args at the component level. Will be overridden by args from the story level.
		children: 'Button',
	},
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

// renaming stories
Primary.storyName = 'New Primary';

const Template = (args) => <Button {...args} />;

export const SecondaryA = Template.bind({});
SecondaryA.args = {
	variant: 'secondary',
	children: 'Secondary Args',
};

export const LongSecondaryA = Template.bind({});
LongSecondaryA.args = {
	...SecondaryA.args,
	children: 'Long Secondary Args',
};

export const SuccessA = Template.bind({});
SuccessA.args = {
	variant: 'success',
	children: 'Success Args',
};
