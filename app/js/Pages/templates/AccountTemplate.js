import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions
} from 'react-native';

import Header from "../../Pages/components/Header";
import TextField from "../components/TextField.js";
import TiltButton from "../components/TiltButton.js";

import { colors, accountTemplateStyle } from "../styles";


export default class AccountTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		let height = Dimensions.get('window').height;

		return(
			<View style={[accountTemplateStyle.container,{minHeight: height}]}>

				<View style={accountTemplateStyle.header}>
					<Header 
						title={"ACCOUNT"}
						leftIcon={require('../../../assets/back.png')}
						onBack={()=>{}}
					/>
				</View>
				<TextField 
					title={"Name"}
					placeholder={"First Lastname"}
					type={"default"}
				/>
				<TextField 
					title={"Username"}
					placeholder={"Usernamegoeshere"}
					type={"default"}
				/>
				<TextField 
					title={"New Password"}
					type={"password"}
				/>
				<TextField 
					title={"New Password, again"}
					type={"password"}
				/>

				<View style={accountTemplateStyle.buttons}>
					<View style={{height: 44, width: 130, marginRight: 5}}>
						<TiltButton 
				            text={"LOGIN"}
				            borderColor={colors.neonBlue}
				            backgroundColor={colors.neonBlueBg}
				            onPress={this.props.onLogin}
				        />
				    </View>
			        <View style={{height: 44, width: 130,}}>
				        <TiltButton 
				            text={"SING UP"}
				            borderColor={colors.neonBlue}
				            backgroundColor={colors.neonBlueBg}
				            onPress={this.props.onSingup}
				        />
			        </View>
				</View>
				
			</View>
		)
	}
}