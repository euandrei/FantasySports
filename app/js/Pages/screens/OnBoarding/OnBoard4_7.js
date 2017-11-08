import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import OnBoardMessage from "../../templates/OnBoardMessage"
import TextField from "../../components/TextField"
import {colors} from "../../styles/colors"

export default class OnBoard4_7 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		let height = Dimensions.get('window').height;
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', minHeight: height}}>
				<View style={[styles.topPart,{justifyContent:'flex-end', alignItems: 'center',marginBottom: 15}]}>
					<View style={styles.titleValue}>
						<Text style={[styles.titleValueText, {color: colors.sunnyYellow} ]}>+9,000</Text>
					</View>
				</View>
				<View style={[styles.bottomPart,{flex: 3}]}>
					<View style={styles.bottomTextView}>
						<Text style={styles.bottomTitle}>{'You won! what should we call you?'.toUpperCase()}</Text>
					</View>
					<View style={{marginTop: 5, marginBottom: 45}}>
						<TextField 
							title={"Name"}
							placeholder={"Your name"}
							type={"default"} // may be account or password or default
						/>
					</View>
					<View style={styles.bottomTextView}>
						<Text style={styles.bottomText}>{"sign up, claim your gold.".toUpperCase()}</Text>
						<Text style={styles.bottomText}>{"start winning with vfl !".toUpperCase()}</Text>
					</View>

					<View style={[{flex: 1, alignSelf: 'stretch'}]}>
						<View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent:'center', alignItems: 'flex-start', paddingTop: 70,}}>
							<TouchableOpacity onPress={()=>{}} style={{marginRight: 8}}>
								<Image source={require('../../../../assets/facebook-button.png')} />
							</TouchableOpacity>
							<TouchableOpacity onPress={()=>{}} style={{marginLeft: 8}}>
								<Image source={require('../../../../assets/google-button.png')} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				
				<View style={styles.skip}>
					<TouchableOpacity onPress={()=>{Actions.OnBoard1_1()}}>
						<Text style={styles.skipText}>PLAY TUTORIAL</Text>
					</TouchableOpacity>
				</View>
					
			</View>
		)
	}
}
		
const styles = StyleSheet.create({
	topPart:{
		flex: 1,
	},
	titleValueText:{
		fontSize: 72,
		fontWeight: 'bold',
	},
	bottomText:{
		color: colors.white,
		fontSize: 36,
		fontWeight: 'bold',
	},
	bottomTitle:{
		color: colors.sunnyYellow,
		fontWeight: "bold",
		fontSize: 17,
		marginBottom: 15,
	},
	skipText:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 14,
	},
	skip:{
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		paddingBottom: 40,
	},
	bottomTextView:{
		paddingLeft: 40,
		paddingRight: 40,
	}
})