import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useRetrieveData } from './retrieveData';

const MainView = () => {
	const { pokemonList } = useRetrieveData();

	const renderPokemon = ({ item }) => {
		return (
			<View style={styles.pokemonContainer}>
				<Text style={styles.condition}>{item.name}</Text>
				<Image
					style={styles.sprite}
					source={{ uri: item.spriteUrl }}
				/>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				style={styles.flatContainer}
				data={pokemonList}
				renderItem={renderPokemon}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default MainView;
