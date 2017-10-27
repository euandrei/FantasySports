import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

export default class Leaders extends React.Component {

	render(){
		return(
			<View style={styles.container}>
				<Text>Leaders</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 12,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
