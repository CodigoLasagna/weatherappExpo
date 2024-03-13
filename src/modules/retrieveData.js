import { useState, useEffect } from 'react';
import ApiRequests from './axiosModule';

export const useRetrieveData = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	useEffect(() => {
		const fetchPokemonListAndData = async () => {
			if (!isDataLoaded) {
				try {
					const pokemonData = await ApiRequests.getPokemonList();
					const promises = pokemonData.map(async (pokemon) => {
						const id = pokemon.url.split('/').filter(Boolean).pop();
						return ApiRequests.getPokemonData(id).then(pokeData => ({
							...pokemon,
							spriteUrl: pokeData.sprites.front_shiny ?? null,
						}));
					});

					Promise.all(promises).then((pokemonWithSprites) => {
						setPokemonList(pokemonWithSprites);
						setIsDataLoaded(true);
					}).catch((error) => {
						console.log("Error fetching Pokémon sprites:", error);
					});
				} catch (error) {
					console.log("Error fetching Pokémon data:", error);
				}
			}
		};

		fetchPokemonListAndData();
	}, [isDataLoaded]);

	return { pokemonList };
};
