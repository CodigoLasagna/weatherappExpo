import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function TestView() {
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Ver home"
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
}

export default TestView;
