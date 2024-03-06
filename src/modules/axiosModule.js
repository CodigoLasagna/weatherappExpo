import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';
const API_KEY = '403493facebc426898532131242902';

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	params: { key: API_KEY }
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
