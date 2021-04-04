import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export default function useCachedResource() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	React.useEffect(() => {
		async function loadData() {
			try {
				await Promise.all([
					Asset.loadAsync([require('../../assets/images/instagramlogo.png')]),
					Font.loadAsync({
						...Feather.font,
						SF_UI_Black: require('../../assets/fonts/sf-ui-black.otf'),
						SF_UI_Bold: require('../../assets/fonts/sf-ui-bold.otf'),
						SF_UI_Heavy: require('../../assets/fonts/sf-ui-heavy.otf'),
						SF_UI_Light: require('../../assets/fonts/sf-ui-light.otf'),
						SF_UI_Medium: require('../../assets/fonts/sf-ui-medium.otf'),
						SF_UI_Semibold: require('../../assets/fonts/sf-ui-semibold.otf'),
						SF_UI_Thin: require('../../assets/fonts/sf-ui-thin.otf'),
						SF_UI_UltraLight: require('../../assets/fonts/sf-ui-ultralight.otf'),
					}),
				]);
			} catch (error) {
				console.warn(error);
			} finally {
				setLoadingComplete(true);
			}
		}
		loadData();
	}, []);
	return isLoadingComplete;
}
