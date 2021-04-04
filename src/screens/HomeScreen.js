import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/Text';

export default function App() {
	return (
		<View style={styles.container}>
			<Text fontWeight="bold" style={{ fontSize: 40 }}>
				Instagram UI
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
