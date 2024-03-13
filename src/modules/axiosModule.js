import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
});

const ApiRequests = {
	getPokemonList: async () => {
		try {
			const response = await api.get('pokemon');
			return response.data.results;
		} catch (error) {
			console.error('Error fetching Pokémon list:', error);
			throw error;
		}
	},

	getPokemonData: async (id) => {
		try {
			const response = await api.get(`pokemon/${id}`);
			return response.data;
		} catch (error) {
			console.error(`Error fetching Pokémon data for ID ${id}:`, error);
			throw error;
		}
	},
};

export default ApiRequests;
