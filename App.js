import React from 'react';
import useCachedResource from './src/hooks/useCachedResources';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
	const isLoadingComplete = useCachedResource();

	if (!isLoadingComplete) {
		return null;
	} else {
		return <HomeScreen />;
	}
}
