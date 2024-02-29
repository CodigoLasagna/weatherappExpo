import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './src/modules/MainView';

export default function App() {
  return (
    <View style={styles.container}>
	  <MainView/>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1B232B',
	},
});
