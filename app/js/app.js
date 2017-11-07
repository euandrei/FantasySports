import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
} from 'react-native';

import AppStore from './Store/AppStore.js';
import {setCustomText,setCustomTextInput} from 'react-native-global-props';
const customTextProps = {
  style: {
    fontFamily: 'UniformItalicXcon',
  }
};
const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)'
}
setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);

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
import MatchTemplate from "./Pages/templates/MatchTemplate";
import TeamTemplate from "./Pages/templates/TeamTemplate";

// Opponent versus message screens
import OnBoard1_1 from "./Pages/screens/OnBoarding/OnBoard1_1";
import OnBoard2_1 from "./Pages/screens/OnBoarding/OnBoard2_1";
import OnBoard3_1 from "./Pages/screens/OnBoarding/OnBoard3_1";
import OnBoard4_1 from "./Pages/screens/OnBoarding/OnBoard4_1";

// Reward message screens
import OnBoard1_4 from "./Pages/screens/OnBoarding/OnBoard1_4";
import OnBoard1_5 from "./Pages/screens/OnBoarding/OnBoard1_5";
import OnBoard2_6 from "./Pages/screens/OnBoarding/OnBoard2_6";
import OnBoard2_7 from "./Pages/screens/OnBoarding/OnBoard2_7";
import OnBoard3_6 from "./Pages/screens/OnBoarding/OnBoard3_6";
import OnBoard3_7 from "./Pages/screens/OnBoarding/OnBoard3_7";
import OnBoard4_6 from "./Pages/screens/OnBoarding/OnBoard4_6";

// Match screens
import OnBoard1_3 from "./Pages/screens/OnBoarding/OnBoard1_3";
import OnBoard2_5 from "./Pages/screens/OnBoarding/OnBoard2_5";
import OnBoard3_5 from "./Pages/screens/OnBoarding/OnBoard3_5";
import OnBoard4_5 from "./Pages/screens/OnBoarding/OnBoard4_5";

// Team 
import OnBoard1_2 from "./Pages/screens/OnBoarding/OnBoard1_2";
import OnBoard2_2 from "./Pages/screens/OnBoarding/OnBoard2_2";
import OnBoard2_4 from "./Pages/screens/OnBoarding/OnBoard2_4";
import OnBoard3_2 from "./Pages/screens/OnBoarding/OnBoard3_2";
import OnBoard3_4 from "./Pages/screens/OnBoarding/OnBoard3_4";
import OnBoard4_2 from "./Pages/screens/OnBoarding/OnBoard4_2";
import OnBoard4_4 from "./Pages/screens/OnBoarding/OnBoard4_4";

// SELECT bufs/nerfs
import OnBoard3_3 from "./Pages/screens/OnBoarding/OnBoard3_3";
import OnBoard4_3 from "./Pages/screens/OnBoarding/OnBoard4_3";
import OnBoard2_3 from "./Pages/screens/OnBoarding/OnBoard2_3";

// FINAL
import OnBoard4_7 from "./Pages/screens/OnBoarding/OnBoard4_7";


export default class App extends React.Component {
	
	render() {
		
		const scenes = Actions.create(
			<Scene key="root" 
				AppStore={AppStore} 
				hideNavBar={true}>
				
				<Scene key="test"  component={Test}/>
				<Scene key="OnBoard1_1" component={OnBoard1_1}/>
				<Scene key="OnBoard2_1" component={OnBoard2_1}/>
				<Scene key="OnBoard3_1" component={OnBoard3_1}/>
				<Scene key="OnBoard4_1" component={OnBoard4_1}/>

				

				<Scene key="OnBoard1_4" component={OnBoard1_4}/>
				<Scene key="OnBoard1_5" component={OnBoard1_5}/>
				<Scene key="OnBoard2_6" component={OnBoard2_6}/>
				<Scene key="OnBoard2_7" component={OnBoard2_7}/>
				<Scene key="OnBoard3_6" component={OnBoard3_6}/>
				<Scene key="OnBoard3_7" component={OnBoard3_7}/>
				<Scene key="OnBoard4_6" component={OnBoard4_6}/>
				

				<Scene key="OnBoard1_3" component={OnBoard1_3}/>
				<Scene key="OnBoard2_5" component={OnBoard2_5}/>
				<Scene key="OnBoard3_5" component={OnBoard3_5}/>
				<Scene key="OnBoard4_5" component={OnBoard4_5}/>
				

				<Scene key="OnBoard1_2" component={OnBoard1_2}/>
				<Scene key="OnBoard2_2" component={OnBoard2_2}/>
				<Scene key="OnBoard2_4" initial component={OnBoard2_4}/>
				<Scene key="OnBoard3_2" component={OnBoard3_2}/>
				<Scene key="OnBoard3_4" component={OnBoard3_4}/>
				<Scene key="OnBoard4_2" component={OnBoard4_2}/>
				<Scene key="OnBoard4_4" component={OnBoard4_4}/>
				
				<Scene key="OnBoard3_3" component={OnBoard3_3}/>
				<Scene key="OnBoard4_3" component={OnBoard4_3}/>
				<Scene key="OnBoard2_3" component={OnBoard2_3}/>


				<Scene key="OnBoard4_7" component={OnBoard4_7}/>



		    </Scene>
		);
		return(
			<Router scenes={scenes}/>

		)
	}
}

const styles = StyleSheet.create({
	
	
});
