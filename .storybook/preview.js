import { Box, CSSReset, theme, ThemeProvider } from '@chakra-ui/react';
// import { addDecorator } from '@storybook/react';
import React from 'react';

// This is version 5

// addDecorator((story) => (
// 	<ThemeProvider theme={theme}>
// 		<CSSReset />
// 		<Box m='4'>{story()}</Box>
// 	</ThemeProvider>
// ));

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// Theming in version 6
export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<Box m='4'>
				<Story />
			</Box>
		</ThemeProvider>
	),
];
