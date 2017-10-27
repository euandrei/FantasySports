import React from 'react';
import {
    StyleSheet
} from 'react-native';
import AppStore from './Store/AppStore.js';

import {
	Scene,
	Router,
	Actions,
	Reducer,
	ActionConst,
	Overlay,
	Tabs,
	Modal,
	Drawer,
	Stack,
	Lightbox,
	Provider,
} from 'react-native-router-flux';


// USER SETTINGS / LOGIN COMPONENTS
import Login from "./Pages/Login/Login";



export default class App extends React.Component {
	
	render() {
		// const Scenes = Actions.create(
		//   <Scene key='root'>
		//     <Scene key='lists' tabs={true} hideNavBar type=      {ActionConst.REPLACE}>
		//             <Scene key='tab1' title='Add' component={Lists} icon={TabIcon}></Scene>
		//             <Scene key='tab2' title='Grocery' component={GroceryList} icon={TabIcon}></Scene>
		//             <Scene key='tab3' title='To Do' component={TodoList} icon={TabIcon}></Scene>
		//         </Scene>
		//         <Scene
		//           key='everything' component={Everything} hideNavBar type={ActionConst.REPLACE}></Scene>
		//     </Scene>
		// );
		const scenes = Actions.create(
			<Scene key="root" AppStore={AppStore}>
		      <Scene key="login" 
				initial={true} 
				hideNavBar={true}
				
				component={Login}/>

		    </Scene>
			);
		return(
			<Router scenes={scenes}/>

		)
	}
}
const styles = StyleSheet.create({

	
});

