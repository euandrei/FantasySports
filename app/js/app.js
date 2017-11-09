import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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



// DEMO OF TEMPLATES
import ListItem from "./Pages/components/ListItem.js"
import NotificationListItem from "./Pages/components/NotificationListItem.js"
import DropdownComponent from "./Pages/components/DropdownComponent.js"
import Slider from "./Pages/components/Slider.js"

import ListTemplate from "./Pages/templates/ListTemplate.js"
import StoreTemplate from "./Pages/templates/StoreTemplate.js"
import ProfileTemplate from "./Pages/templates/ProfileTemplate.js"
import TeamTemplate from "./Pages/templates/TeamTemplate.js"
import MatchTemplate from "./Pages/templates/MatchTemplate"
import SelectionTemplate from "./Pages/templates/SelectionTemplate"
import GalleryTemplate from "./Pages/templates/GalleryTemplate"
import AccountTemplate from "./Pages/templates/AccountTemplate"

import { colors } from "./Pages/styles";


export default class App extends React.Component {
	
	render() {
		
		const scenes = Actions.create(
			<Scene key="root" 
				AppStore={AppStore} 
				hideNavBar={true}>
				

				<Scene key="test" component={Test}/>

				<Scene key="OnBoard1_1" 
				// initial
				component={OnBoard1_1}/>
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
				<Scene key="OnBoard2_4" component={OnBoard2_4}/>
				<Scene key="OnBoard3_2" component={OnBoard3_2}/>
				<Scene key="OnBoard3_4" component={OnBoard3_4}/>
				<Scene key="OnBoard4_2" component={OnBoard4_2}/>
				<Scene key="OnBoard4_4" component={OnBoard4_4}/>
				
				<Scene key="OnBoard3_3" component={OnBoard3_3}/>
				<Scene key="OnBoard4_3" component={OnBoard4_3}/>
				<Scene key="OnBoard2_3" component={OnBoard2_3}/>


				<Scene key="OnBoard4_7" component={OnBoard4_7}/>

				{/* DEMO OF TEMPLATES*/}

				<Scene key="template1"
					initial
				 component={Template1}/>
				<Scene key="template2" component={Template2}/>
				<Scene key="template3" component={Template3}/>
				<Scene key="template4" component={Template4}/>
				<Scene key="template5" component={Template5}/>
				<Scene key="template6" component={Template6}/>
				<Scene key="template7" component={Template7}/>
				<Scene key="template8" component={Template8}/>
				<Scene key="template9" component={Template9}/>
				<Scene key="template10" component={Template10}/>
				<Scene key="template11" component={Template11}/>

		    </Scene>
		);
		return(
			<Router scenes={scenes}/>

		)
	}
}

const styles = StyleSheet.create({
	buttonTransition: {
		position: 'absolute', top: 0, right: 0, width: 30, height: 10, backgroundColor: 'red', zIndex: 100
	}
	
});

class Template1 extends React.Component {
	render() {
		return (
			<View style={{marginLeft: -10, marginRight: -10}}>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template2()}}
				></TouchableOpacity>
				<ListTemplate 
					items={
						[
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'},
							{left: 'FREE PACK', right: '4h 38mins...'}
						]
					}
				/>
			</View>
		)
	}
}

class Template2 extends React.Component {
	render() {

		let height = Dimensions.get('window').height;

		return (
			<ScrollView style={{backgroundColor: colors.marine}}>

				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template3()}}
				></TouchableOpacity>
				<LinearGradient colors={[colors.marine, colors.blueyGreyBg]} style={{flex: 1, padding: 10, minHeight: height}}>
					<View style={{paddingLeft: 17, paddingRight: 17}}>
						<ListItem
							// listItemNumber={i + 1}

							// backgroundColor={'black'}
							// border={true}

							// disabled

							image={{uri: 'http://via.placeholder.com/30x30'}}

							leftText={"TEXT"}
							leftTextBright

							// rightText={item.right}
							rightSmallText={"SMALL"}
							// rightSmallText2={"SMALL2"}

							// gradient // used on non button like in match header

							onPress={()=>{}}
						/>

						<View style={{height: 10}}></View>

						<ListItem
							// listItemNumber={i + 1}

							// backgroundColor={'black'}
							// border={true}

							disabled

							image={{uri: 'http://via.placeholder.com/30x30'}}

							leftText={"TEXT"}
							leftTextBright

							// rightText={item.right}
							rightSmallText={"SMALL"}
							// rightSmallText2={"SMALL2"}

							// gradient // used on non button like in match header

							onPress={()=>{}}
						/>

						<View style={{height: 10}}></View>

						<ListItem
							// listItemNumber={i + 1}

							// backgroundColor={'black'}
							// border={true}

							// disabled

							image={{uri: 'http://via.placeholder.com/30x30'}}

							leftText={"TEXT"}
							// leftTextBright

							// rightText={item.right}
							rightSmallText={"SMALL"}
							// rightSmallText2={"SMALL2"}

							// gradient // used on non button like in match header

							onPress={()=>{}}
						/>

						<View style={{height: 10}}></View>

						<ListItem
							// listItemNumber={i + 1}

							// backgroundColor={'black'}
							// border={true}

							// disabled

							// image={{uri: 'http://via.placeholder.com/30x30'}}

							leftText={"TEXT"}
							// leftTextBright

							rightText={"TEXT"}
							// rightSmallText={"SMALL"}
							// rightSmallText2={"SMALL2"}

							// gradient // used on non button like in match header

							onPress={()=>{}}
						/>

						<View style={{height: 10}}></View>

						<ListItem
							// listItemNumber={i + 1}

							// backgroundColor={'black'}
							// border={true}

							// disabled

							// image={{uri: 'http://via.placeholder.com/30x30'}}

							leftText={"TEXT"}
							// leftTextBright

							// rightText={"TEXT"}
							rightSmallText={"SMALL"}
							rightSmallText2={"SMALL2"}

							// gradient // used on non button like in match header

							onPress={()=>{}}
						/>

						<View style={{height: 10}}></View>

						<ListItem
							// listItemNumber={i + 1}

							// backgroundColor={'black'}
							// border={true}

							// disabled

							image={{uri: 'http://via.placeholder.com/30x30'}}

							leftText={"TEXT"}
							// leftTextBright

							// rightText={"TEXT"}
							rightSmallText={"SMALL"}
							rightSmallText2={"SMALL2"}

							gradient // used on non button like in match header

							onPress={()=>{}}
						/>
					</View>
				</LinearGradient>
			</ScrollView>
		)
	}
}

class Template3 extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template4()}}
				></TouchableOpacity>
			<StoreTemplate />
			</View>
		)
	}
}

class Template4 extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template5()}}
				></TouchableOpacity>
			<ProfileTemplate />
			</View>
		)
	}
}

class Template5 extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template6()}}
				></TouchableOpacity>
			<TeamTemplate />
			</View>
		)
	}
}

class Template6 extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template7()}}
				></TouchableOpacity>
			<MatchTemplate />
			</View>
		)
	}
}

class Template7 extends React.Component {
	render() {
		let cards = [
			{
				name: "Main Player",
				image: '',
			},
			{
				name: "Player1",
				image: '',
				tutorial: "OnBoard2_4",
			},
			{
				name: "Player2",
				image: '',
			},
			{
				name: "Player3",
				image: '',
			},
			{
				name: "Player4",
				image: '',
			},
			{
				name: "Player5",
				image: '',
			},
			{
				name: "Player6",
				image: '',
			},
			{
				name: "Player7",
				image: '',
			},
			{
				name: "Player8",
				image: '',
			},
			{
				name: "Player9",
				image: '',
			},
			
		]

		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template8()}}
				></TouchableOpacity>
			<View style={{paddingLeft: 10, paddingRight: 10, backgroundColor: colors.marine}}>
				<SelectionTemplate 
					main
					title={"select nerfs"}
					// leftIcon={require('../../../../assets/back.png')}
					type={'player'}
					cards={cards}
				/>
			</View>
			</View>
		)
	}
}

class Template8 extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template9()}}
				></TouchableOpacity>
			<GalleryTemplate />
			</View>
		)
	}
}

class Template9 extends React.Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template10()}}
				></TouchableOpacity>
			<AccountTemplate />
			</View>
		)
	}
}

class Template10 extends React.Component {
	render() {
		return (
			<ScrollView style={{backgroundColor: colors.marine}}>
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					onPress={()=>{Actions.template11()}}
				></TouchableOpacity>

				<NotificationListItem 
					specialOffer
				/>

				<NotificationListItem 
					title1={'Text 1 start'}
					text1={'finishing ...'}
				/>

				<NotificationListItem 
					title1={'Text 1 start'}
					text1={'finishing ...'}

					title2={'Text 2 start'}
					text2={'finishing ...'}

					buttons
				/>

				<NotificationListItem 
					title1={'Text 1 start'}
					text1={'finishing ...'}

					title2={'Text 2 start'}
					text2={'finishing ...'}

					team 
				/>

				<NotificationListItem 
					title1={'Text 1 start'}
					text1={'finishing ...'}

					title2={'Text 2 start'}
					text2={'finishing ...'}

					arrowed
				/>
			</View>
			</ScrollView>
		)
	}
}

class Template11 extends React.Component {
	render() {
		return (
			<ScrollView style={{backgroundColor: colors.marine}}>
			<View>
				<TouchableOpacity
					style={styles.buttonTransition}
					// onPress={()=>{Actions.template10()}}
				></TouchableOpacity>

				<View style={{marginTop: 20, paddingRight: 15, paddingLeft: 15}}>
					<Slider 
						topTitle={"Top Title"}
						bottomTitle={"Bottom Title"}

						minLabel={"Something small"}
						maxLabel={"Big"}


						minimumValue={0}
						maximumValue={1}
						value={0.5}
					/>
				</View>
				
				<View style={{marginTop: 20, paddingRight: 15, paddingLeft: 15}}>
					<View style={{paddingLeft: 39, paddingRight: 39}}>
					
						<DropdownComponent
							data={[{
							      value: 'Banana',
							    }, {
							      value: 'Mango',
							    }, {
							      value: 'Pear',
							    }]}
							title={'TITLE'}
						 />
					 </View>
				 </View>
			</View>
			</ScrollView>
		)
	}
}


