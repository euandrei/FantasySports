import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

export default class Header extends React.Component {

	render(){
		return(
			<View style={styles.container}>
				<Text>Default</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
