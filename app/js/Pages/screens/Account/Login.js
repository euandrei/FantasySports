import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AccountTemplate from "../../templates/AccountTemplate"

import TextField from "../../components/TextField";

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return(
			<View style={{backgroundColor: 'rgba(6, 44, 75, 1)', flex: 1,}}>
				<AccountTemplate
					login
					onLogin={()=>{}}
					singup
					onSingup={()=>{}}
					headerTitle={"ACCOUNT"}
				>
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
				</AccountTemplate>
			</View>
		)
	}
}
		