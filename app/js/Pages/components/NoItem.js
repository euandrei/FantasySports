import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import TiltButton from "./TiltButton.js"
import { colors } from "../styles";

export default class NoItem extends React.Component{ 

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.contentWrapper}>
					<Text style={styles.text}>{this.props.message}</Text>
					<View style={{height: 50, flex: 1, alignSelf: 'stretch',}}>
						<TiltButton 
							text={this.props.buttonText}
							borderColor={colors.neonBlue}
							backgroundColor={colors.neonBlueBg}
							onPress={this.props.onPress}
						/>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.marineTwo,
		paddingTop: 30,
		paddingBottom: 30,
		borderRadius: 10
	},
	contentWrapper:{
		width: '40%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text:{
		color: colors.metallicBlue,
		fontSize: 14,
		marginBottom: 10,
	}

})