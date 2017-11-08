import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import { colors } from "../styles";

export default class LineLoader extends React.Component{ 
	render(){
		return (
			<View style={styles.container}>
				<View style={[styles.line, this.props.active >= 1 ? {backgroundColor: colors.sunnyYellow} : '' ]}/>
				<View style={[styles.line, this.props.active >= 2 ? {backgroundColor: colors.sunnyYellow} : '' ]}/>
				<View style={[styles.line, this.props.active >= 3 ? {backgroundColor: colors.sunnyYellow} : '' ]}/>
				<View style={[styles.line, this.props.active >= 4 ? {backgroundColor: colors.sunnyYellow} : '' ]}/>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container:{
		flex: 1,
		flexDirection: 'row',
	},
	line:{
		flex: 1,
		height : 3,
		backgroundColor: colors.sunnyYellowBg,
		margin: 3,
	}
	
})
