import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1B232B',
	},
	flatContainer: {
		backgroundColor: '#AE3838',
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
		backgroundColor: '#1E2935',
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	sprite: {
		width: 200,
		height: 200,
		backgroundColor: '#1E2935',
		borderRadius: 24,
	},
});
