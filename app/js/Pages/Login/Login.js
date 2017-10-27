import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

export default class Login extends React.Component {

	componentDidMount() {
		console.log("Mounted here are dem props",this.props)
	}
	render(){
		return(
			<View style={styles.container}>
				<Text>Hi2</Text>
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
