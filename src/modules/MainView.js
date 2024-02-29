import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ApiRequests from '../modules/axiosModule';

const MainView = () => {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await ApiRequests.get('/current.json?q=148.231.193.210&lang=es');
				setWeatherData(data);
			} catch (error) {
				console.log("Error:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<View style={styles.container}>
			{weatherData ? (
				<View>
					<Text>Temperatura: {weatherData.current.temp_c}°C</Text>
					<Text>Condición: {weatherData.current.condition.text}</Text>
				</View>
			) : (
				<Text>Cargando...</Text>
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
		color: '#00d16c'
	},
});

export default MainView;
