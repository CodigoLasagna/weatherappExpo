import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeView() {
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Ver Pokedex"
				onPress={() => navigation.navigate('Pokedex')}
			/>
		</View>
	);
}

export default HomeView;
