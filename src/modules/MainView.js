import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { useRetrieveData } from './retrieveData';

const MainView = () => {
	const { pokemonList } = useRetrieveData();

	const renderPokemon = ({ item }) => {
		return (
			<View style={globalStyles.pokemonContainer}>
				<Text style={globalStyles.condition}>{item.name}</Text>
				<Image
					style={globalStyles.sprite}
					source={{ uri: item.spriteUrl }}
				/>
			</View>
		);
	};

	return (
		<View style={globalStyles.container}>
			<FlatList
				style={globalStyles.flatContainer}
				data={pokemonList}
				renderItem={renderPokemon}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default MainView;
