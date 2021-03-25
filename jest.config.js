module.exports = {
	preset: 'react-native',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: {
				jsx: 'react',
			}
		},
	},
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
	collectCoverageFrom: [
		'**/*.{ts,tsx}',
		'!**/coverage/**',
		'!**/node_modules/**',
		'!**/babel.config.js',
		'!**/jest.setup.js',
	],
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|redux-persist|redux-persist/.*|react-native-screens|react-native-screens/.*|@react-native-async-storage/async-storage)',
	],
	coverageReporters: ['json-summary', 'text', 'lcov'],
}