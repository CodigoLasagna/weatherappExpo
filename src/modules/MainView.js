import React from 'react';
import { View } from 'react-native';
import { MutableText, MutableImage, MutableFlatList } from './mutableComps';
import { globalStyles } from '../styles/global';
import { useRetrieveData } from './retrieveData';

const MainView = () => {
	const { pokemonList } = useRetrieveData();

	const renderPokemon = ({ item }) => {
		return (
			<View style={globalStyles.pokemonContainer}>
				<MutableText fontSize={30} color={'#fff'} borderRadius={16} padding={10}>{item.name}</MutableText>
				<MutableImage
					style={globalStyles.sprite}
					source={{ uri: item.spriteUrl }}
				/>
			</View>
		);
	};

	return (
		<View style={globalStyles.container}>
			<MutableFlatList
				style={globalStyles.flatContainer}
				data={pokemonList}
				renderItem={renderPokemon}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default MainView;
