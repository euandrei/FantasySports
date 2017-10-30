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

// ONBOARDING
// import Onboarding from "./Pages/Onboarding/index"
// LEADERS
// import Leaders from "./Pages/Leaders/index"

// USER SETTINGS / LOGIN COMPONENTS
// import Login from "./Pages/Login/Login";

import Test from "./Pages/screens/testFile";

export default class App extends React.Component {
	
	render() {
		const scenes = Actions.create(
			<Scene key="root" 
				AppStore={AppStore} 
				hideNavBar={true}>
				
				<Scene key="test" initial component={Test}/>


		    </Scene>
		);
		return(
			<Router scenes={scenes}/>

		)
	}
}

const styles = StyleSheet.create({
	
	
});
