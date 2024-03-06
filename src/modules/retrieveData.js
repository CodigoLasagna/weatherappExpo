import { useState, useEffect } from 'react';
import ApiRequests from './axiosModule';

export const useRetrieveData = () => {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const pokemonData = await ApiRequests.getPokemonList();
				setPokemonList(pokemonData);
			} catch (error) {
				console.log("Error fetching Pokémon data:", error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchPokemonData = async () => {
			const promises = pokemonList.map(async (pokemon) => {
				const id = pokemon.url.split('/').filter(Boolean).pop();
				const pokeData = await ApiRequests.getPokemonData(id);
				const spriteUrl = pokeData.sprites.front_shiny ?? null;
				return { ...pokemon, spriteUrl };
			});

			Promise.all(promises).then((pokemonWithSprites) => {
				setPokemonList(pokemonWithSprites);
			}).catch((error) => {
				console.log("Error fetching Pokémon sprites:", error);
			});
		};

		fetchPokemonData();
	}, [pokemonList]);

	return { pokemonList };
};
