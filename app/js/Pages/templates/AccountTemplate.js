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
import { Actions } from 'react-native-router-flux';
import Header from "../../Pages/components/Header";
import TextField from "../components/TextField.js";
import TiltButton from "../components/TiltButton.js";
import MenuComponent from "../components/MenuComponent.js";

import { colors, accountTemplateStyle } from "../styles";


export default class AccountTemplate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedPicture: null,
		}
	}

	render(){
		let height = Dimensions.get('window').height;

		return(
			<View style={[accountTemplateStyle.container,{minHeight: height}]}>

				<View style={accountTemplateStyle.header}>
					<Header 
						title={this.props.headerTitle}
						leftIcon={require('../../../assets/back.png')}
						onBack={()=>{Actions.pop()}}
					/>
				</View>

				{this.props.changePicture && <TouchableOpacity onPress={()=>{this.props.onChangePicture()}} style={accountTemplateStyle.changePicture}>
					{this.state.selectedPicture ? <Image style={accountTemplateStyle.picture} source={this.state.selectedPicture}/> : <View style={accountTemplateStyle.picturePlaceholder}/>}
					<Text style={accountTemplateStyle.changePictureText}>Change profile photo</Text>
				</TouchableOpacity>}

				{this.props.children.length >= 2 ? 
					this.props.children.map((input) =>{
						return input
					})
					:
					this.props.children
				}
				{this.props.settingsButtons && 
					<MenuComponent 
						title={'Account'}
					/>
				}


				<View style={accountTemplateStyle.buttons}>
					{this.props.login && <View style={{height: 44, width: 130, marginRight: 5}}>
						<TiltButton 
				            text={"LOGIN"}
				            borderColor={colors.neonBlue}
				            backgroundColor={colors.neonBlueBg}
				            onPress={this.props.onLogin}
				        />
				    </View>}
			        {this.props.singup && <View style={{height: 44, width: 130,}}>
				        <TiltButton 
				            text={"SING UP"}
				            borderColor={colors.neonBlue}
				            backgroundColor={colors.neonBlueBg}
				            onPress={this.props.onSingup}
				        />
			        </View>}
				</View>
				
			</View>
		)
	}
}