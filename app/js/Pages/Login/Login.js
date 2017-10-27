import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Login extends React.Component {

	componentDidMount() {
		console.log("Mounted here are dem props",this.props)
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableHighlight onPress={()=>{Actions.leaders()}}>
					<Text>Hi</Text>
				</TouchableHighlight>
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
