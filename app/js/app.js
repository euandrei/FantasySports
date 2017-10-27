import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

import AppStore from './Store/AppStore.js';



import {
	Scene,
	Router,
	Actions,
} from 'react-native-router-flux';

// LEADERS
import Leaders from "./Pages/Leaders/index"

// USER SETTINGS / LOGIN COMPONENTS
import Login from "./Pages/Login/Login";


export default class App extends React.Component {
	
	render() {
		const scenes = Actions.create(
			<Scene key="root" 
				AppStore={AppStore} 
				hideNavBar={true}
				
			>
		      	<Scene key="login" 
					component={Login}
					title={"login"}
				/>

				<Scene key="leaders" 
					initial
					component={Leaders}
				/>


		    </Scene>
			);
		return(
			<Router scenes={scenes}/>

		)
	}
}

const styles = StyleSheet.create({
	
	
});
