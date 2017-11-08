import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import LineLoader from "./LineLoader.js"
import { colors } from "../styles";

export default class ProgressLoader extends React.Component{ 

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.textRow}>
					<View style={styles.yellowCircle}>
						<Text style={styles.circleText}>{this.props.step}</Text>
					</View>
					<Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
				</View>
				<View>
					<LineLoader active={this.props.step}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container:{
		flex: 1,
		backgroundColor: 'rgba(6, 44, 75, 0.9)',
		padding: 25,
		paddingTop: 10,
		paddingBottom: 15,
	},
	textRow:{
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	yellowCircle:{
		height: 40,
		width: 40,
		backgroundColor: colors.sunnyYellow,
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 15,
	},
	circleText:{
		fontSize: 22,
		color: colors.marine,
		fontWeight: 'bold',
		marginLeft: -2,

	},
	text:{
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.white,

	}
})
