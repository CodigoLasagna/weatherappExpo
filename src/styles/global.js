import { StyleSheet } from 'react-native';

export const colors = {
	primary: '#AE3838',
	secondary: '#2A5D90',
	tertiary: '#3fb76b',
	foreground: '#1B232B',
	background: '#1B232B',
	text: '#FFFFFF',
};

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
	},
	flatContainer: {
		backgroundColor: colors.primary,
		width: '90%',
		borderRadius: 16,
		marginTop: 20,
		padding: 20
	},
	pokemonContainer: {
		marginVertical: 10,
		alignItems: 'center',
	},
	condition: {
		fontSize: 24,
		color: '#2A5D90',
		backgroundColor: colors.background,
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	sprite: {
		width: 200,
		height: 200,
		backgroundColor: colors.background,
		borderRadius: 24,
	},
});
