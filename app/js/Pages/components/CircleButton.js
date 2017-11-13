import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { colors } from "../styles";
import LinearGradient from 'react-native-linear-gradient';

export default class CircleButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<LinearGradient style={{flex: 1, borderRadius: 28/2}} colors={[colors.transparent, colors.neonBlueBg]}>
					<View style={{
						height: 28,
						width: 28,
						borderRadius: 28/2,
						borderWidth: 2,
						borderColor: colors.neonBlue,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
						<Text style={{
							color: colors.white,
							fontSize: 21,
							lineHeight: 27,
							// fontWeight: 'bold',
							fontFamily: 'Arial'
						}}>
							{this.props.text}
						</Text>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}