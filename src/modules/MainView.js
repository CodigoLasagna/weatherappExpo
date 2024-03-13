import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './HomeView';
import TestView from './TestView';
import PokeView from './PokeView';

const Stack = createNativeStackNavigator();

function MainView() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeView} />
				<Stack.Screen name="Test" component={TestView} />
				<Stack.Screen name="Pokedex" component={PokeView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainView;
