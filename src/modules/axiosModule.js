import axios from 'axios';

const BASE_URL = 'https://api.weatherapi.com/v1/';
const API_KEY = '403493facebc426898532131242902';

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000, // Sin la "s" extra
});

const ApiRequests = {
	get: async (endpoint, params = {}) => {
		try {
			// Agrega los parámetros de consulta aquí
			const response = await api.get(endpoint, { params: { ...params, key: API_KEY } });
			return response.data;
		} catch (error) {
			console.error('Error en la solicitud GET:', error);
			throw error;
		}
	},

	post: async (endpoint, data = {}) => {
		try {
			const response = await api.post(endpoint, data);
			return response.data;
		} catch (error) {
			console.error('Error en la solicitud POST:', error);
			throw error;
		}
	},
};

export default ApiRequests;
