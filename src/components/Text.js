import React from 'react';
import { Text } from 'react-native';

export default function (props) {
	const weight = {
		black: 'SF_UI_Black',
		bold: 'SF_UI_Bold',
		heavy: 'SF_UI_Heavy',
		light: 'SF_UI_Light',
		medium: 'SF_UI_Medium',
		semibold: 'SF_UI_Semibold',
		thin: 'SF_UI_Thin',
		ultralight: 'SF_UI_UltraLight',
	};

	return (
		<Text
			{...props}
			style={[
				props.style,
				{
					fontFamily: weight[props.fontWeight ? props.fontWeight : 'medium'],
				},
			]}
		/>
	);
}
