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
			<ScrollView style={{backgroundColor: 'rgba(6, 44, 75, 1)', minHeight: height}}>
				<View style={[styles.topPart,{justifyContent:'center', alignItems: 'center',marginTop: 100,marginBottom: 40,}]}>
					<View style={styles.titleValue}>
						<Text style={[styles.titleValueText, {color: colors.sunnyYellow} ]}>+9,000</Text>
					</View>
				</View>
				<View style={[styles.bottomPart,{flex: 2}]}>
					<View style={styles.bottomTextView}>
						<Text style={styles.bottomTitle}>{'You won! what should we call you?'.toUpperCase()}</Text>
						<View style={{backgroundColor: 'rgba(43,75,102,0.3)', height: 65, alignSelf: 'stretch',marginBottom:15, marginLeft: -40, marginRight: -40, paddingLeft: 40, paddingRight: 40, paddingTop: 10}}>
							<Text style={{fontSize: 12, color: 'rgba(97,97,97,1)', fontWeight: 'bold'}}>Username</Text>
							<TextInput
							    style={{flex: 1, fontSize: 14, fontWeight: 'bold', color: 'rgba(255,255,255,0.7)', marginLeft: -5,}}
						        onChangeText={(text) => this.setState({text})}
						        value={this.state.text}
						        placeholder={'Username goes here'}
						        placeholderTextColor={'rgba(255,255,255,0.7)'}
						     />
					     </View>
						<Text style={styles.bottomText}>{"sign up, claim your gold.".toUpperCase()}</Text>
						<Text style={styles.bottomText}>{"start winning with vfl !".toUpperCase()}</Text>
					</View>
					<View style={[{flex: 1, alignSelf: 'stretch', flexDirection: 'row', justifyContent:'center', alignItems: 'center', marginTop: 60, marginBottom: 100}]}>
						<View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent:'center', alignItems: 'center'}}>
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
					
			</ScrollView>
		)
	}
}
		
const styles = StyleSheet.create({
	topPart:{
		height: 100,
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
		paddingBottom: 40,
	},
	bottomTextView:{
		paddingLeft: 40,
		paddingRight: 40,
	}
})