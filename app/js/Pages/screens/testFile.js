import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

import * as Styles from "../styles";

export default class Test extends React.Component {

	render(){
		return(
			<View style={styles.container}>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
