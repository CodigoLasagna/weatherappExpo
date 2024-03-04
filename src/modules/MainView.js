import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ApiRequests from '../modules/axiosModule';

const MainView = () => {
	const [pokemonInitialData, setPokemonInitialData] = useState(null);
	const [pokemonIndividualData, setPokemonIndividualData] = useState({});
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await ApiRequests.get('pokemon');
				setPokemonInitialData(response.results);
				console.log(response.results);

				response.results.forEach(async (pokemon) => {
					const id = pokemon.url.split('/').filter(Boolean).pop();
					const pokeData = await fetchIndividualPokemonData(id);
					setPokemonIndividualData(prevState => ({
						...prevState,
						[id]: pokeData
					}));
				});
			} catch (error) {
				console.log("Error al obtener los datos:", error);
			}
		};
		fetchData();
	}, []);

	const fetchIndividualPokemonData = async (id) => {
		try {
			const response = await ApiRequests.get(`pokemon/${id}`);
			return response;
		} catch (error) {
			console.log("Error al obtener los sprites del Pokémon:", error);
			return null;
		}
	};

	const renderPokemon = ({ item }) => {
		const id = item.url.split('/').filter(Boolean).pop();
		const pokeData = pokemonIndividualData[id];
		const spriteUrl = pokeData?.sprites?.front_shiny ?? null;
		return (
			<View style={styles.pokemonContainer}>
				<Text style={styles.condition}>{item.name}</Text>
				<Image
					style={styles.sprite}
					source={{ uri: spriteUrl }}
				/>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{pokemonInitialData && (
				<FlatList
					style={styles.flatContainer}
					data={pokemonInitialData}
					renderItem={renderPokemon}
					keyExtractor={(item) => item.name}
				/>
			)}
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
